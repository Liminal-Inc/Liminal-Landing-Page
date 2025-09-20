import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_SECRET_KEY);

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_SERVICE_ROLE_KEY;

// Direct HTTP function for self-hosted Supabase
async function supabaseQuery(table, params = '') {
	try {
		const response = await fetch(`${supabaseUrl}/rest/v1/${table}${params}`, {
			headers: {
				apikey: supabaseKey,
				Authorization: `Bearer ${supabaseKey}`
			}
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`HTTP ${response.status}: ${errorText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Supabase query error:', error);
		throw error;
	}
}

async function supabaseUpdate(table, id, data) {
	try {
		const response = await fetch(`${supabaseUrl}/rest/v1/${table}?id=eq.${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				apikey: supabaseKey,
				Authorization: `Bearer ${supabaseKey}`
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`HTTP ${response.status}: ${errorText}`);
		}

		// Handle empty response (which is normal for PATCH operations)
		const responseText = await response.text();
		if (responseText.trim() === '') {
			return { success: true };
		}

		return JSON.parse(responseText);
	} catch (error) {
		console.error('Supabase update error:', error);
		throw error;
	}
}

// POST /api/payment/collect - Create invoice with referral credits applied
export async function POST({ request }) {
	try {
		const { email, paymentPlan } = await request.json();

		console.log('Payment collection request:', { email, paymentPlan });

		// Get customer's available referral credits (both earned and pending for now)
		const availableCredits = await supabaseQuery(
			'referral_credits',
			`?referrer_customer_email=eq.${email}&status=in.(earned,pending)&select=*`
		);

		console.log('Available credits:', availableCredits);

		// Calculate total credit amount
		const totalCredits = availableCredits.reduce(
			(sum, credit) => sum + parseFloat(credit.credit_amount),
			0
		);

		// Get pricing for the payment plan
		const pricing = {
			monthly: { amount: 20, description: 'Monthly Subscription' },
			'3month': { amount: 54, description: '3-Month Plan (10% discount)', originalAmount: 60 },
			'6month': { amount: 102, description: '6-Month Plan (15% discount)', originalAmount: 120 },
			'12month': { amount: 192, description: '12-Month Plan (20% discount)', originalAmount: 240 }
		};

		const planDetails = pricing[paymentPlan];
		if (!planDetails) {
			return json({ error: 'Invalid payment plan' }, { status: 400 });
		}

		// Calculate final amount after credits
		let finalAmount = planDetails.amount;
		let creditsUsed = 0;

		if (totalCredits > 0) {
			creditsUsed = Math.min(totalCredits, finalAmount);
			finalAmount = Math.max(0, finalAmount - creditsUsed);
		}

		console.log('Payment calculation:', {
			originalAmount: planDetails.amount,
			totalCredits,
			creditsUsed,
			finalAmount
		});

		// Get customer information from web_signups
		const customers = await supabaseQuery('web_signups', `?email=eq.${email}&select=*`);

		if (customers.length === 0) {
			return json({ error: 'Customer not found' }, { status: 404 });
		}

		const customer = customers[0];

		// Create Stripe payment intent with referral credits applied
		console.log('Creating Stripe payment intent:', {
			originalAmount: planDetails.amount,
			creditsUsed,
			finalAmount,
			plan: paymentPlan,
			customer: customer.email
		});

		try {
			// Create or get Stripe customer
			let stripeCustomer;
			try {
				const existingCustomers = await stripe.customers.list({
					email: customer.email,
					limit: 1
				});

				if (existingCustomers.data.length > 0) {
					stripeCustomer = existingCustomers.data[0];
					console.log('Found existing Stripe customer:', stripeCustomer.id);
				} else {
					stripeCustomer = await stripe.customers.create({
						email: customer.email,
						name: `${customer.first_name} ${customer.last_name}`,
						metadata: {
							liminal_customer_id: customer.id,
							institution: customer.institution || '',
							role: customer.role || ''
						}
					});
					console.log('Created new Stripe customer:', stripeCustomer.id);
				}
			} catch (customerError) {
				console.error('Stripe customer error:', customerError);
				throw new Error('Failed to create customer account');
			}

			// Create payment intent
			const paymentIntent = await stripe.paymentIntents.create({
				amount: Math.round(finalAmount * 100), // Convert to cents
				currency: 'usd',
				customer: stripeCustomer.id,
				metadata: {
					liminal_customer_id: customer.id,
					plan: paymentPlan,
					original_amount: planDetails.amount,
					credits_used: creditsUsed,
					final_amount: finalAmount,
					email: customer.email
				},
				description: `${planDetails.description} - ${customer.email}`,
				automatic_payment_methods: {
					enabled: true
				}
			});

			console.log('Stripe payment intent created:', paymentIntent.id);

			// Mark used credits as 'used' (only if payment succeeds)
			if (creditsUsed > 0) {
				let remainingToMark = creditsUsed;

				for (const credit of availableCredits) {
					if (remainingToMark <= 0) break;

					const amountToUse = Math.min(remainingToMark, parseFloat(credit.credit_amount));

					await supabaseUpdate('referral_credits', credit.id, {
						status: 'used'
					});

					remainingToMark -= amountToUse;
				}
			}

			// Update customer record with payment attempt
			await supabaseUpdate('web_signups', customer.id, {
				stripe_customer_id: stripeCustomer.id,
				stripe_payment_intent_id: paymentIntent.id,
				stripe_payment_status: 'pending',
				user_status: 'payment_initiated'
			});

			return json({
				success: true,
				paymentIntent: {
					id: paymentIntent.id,
					clientSecret: paymentIntent.client_secret,
					amount: finalAmount,
					originalAmount: planDetails.amount,
					creditsUsed: creditsUsed,
					description: planDetails.description
				},
				customer: {
					email: customer.email,
					name: `${customer.first_name} ${customer.last_name}`,
					stripeCustomerId: stripeCustomer.id
				}
			});
		} catch (stripeError) {
			console.error('Stripe payment intent creation failed:', stripeError);
			return json(
				{
					error: `Payment setup failed: ${stripeError.message}`
				},
				{ status: 400 }
			);
		}
	} catch (error) {
		console.error('Payment collection error:', error);
		return json({ error: error.message }, { status: 500 });
	}
}

// GET /api/payment/collect?email=customer@email.com - Get customer credits and pricing
export async function GET({ url }) {
	try {
		const email = url.searchParams.get('email');

		if (!email) {
			return json({ error: 'Email parameter required' }, { status: 400 });
		}

		// Get customer's available referral credits (both earned and pending for now)
		const availableCredits = await supabaseQuery(
			'referral_credits',
			`?referrer_customer_email=eq.${email}&status=in.(earned,pending)&select=*`
		);

		// Calculate total credit amount
		const totalCredits = availableCredits.reduce(
			(sum, credit) => sum + parseFloat(credit.credit_amount),
			0
		);

		// Get customer info
		const customers = await supabaseQuery('web_signups', `?email=eq.${email}&select=*`);

		if (customers.length === 0) {
			return json({ error: 'Customer not found' }, { status: 404 });
		}

		const customer = customers[0];

		// Pricing options
		const pricing = {
			monthly: {
				amount: 20,
				description: 'Monthly Subscription',
				finalAmount: Math.max(0, 20 - totalCredits)
			},
			'3month': {
				amount: 54,
				description: '3-Month Plan (10% discount)',
				originalAmount: 60,
				finalAmount: Math.max(0, 54 - totalCredits)
			},
			'6month': {
				amount: 102,
				description: '6-Month Plan (15% discount)',
				originalAmount: 120,
				finalAmount: Math.max(0, 102 - totalCredits)
			},
			'12month': {
				amount: 192,
				description: '12-Month Plan (20% discount)',
				originalAmount: 240,
				finalAmount: Math.max(0, 192 - totalCredits)
			}
		};

		return json({
			success: true,
			customer: {
				email: customer.email,
				name: `${customer.first_name} ${customer.last_name}`,
				totalCredits: totalCredits,
				availableCredits: availableCredits.length
			},
			pricing: pricing
		});
	} catch (error) {
		console.error('Get payment info error:', error);
		return json({ error: error.message }, { status: 500 });
	}
}
