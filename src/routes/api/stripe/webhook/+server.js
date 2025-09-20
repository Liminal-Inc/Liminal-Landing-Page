import { json } from '@sveltejs/kit';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_SECRET_KEY);
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_SERVICE_ROLE_KEY;

// Supabase update helper
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

// POST /api/stripe/webhook - Handle Stripe payment events
export async function POST({ request }) {
	try {
		const body = await request.text();
		const signature = request.headers.get('stripe-signature');

		console.log('Stripe webhook received');

		// In production, you should verify the webhook signature
		// For now, we'll parse the event directly
		const event = JSON.parse(body);

		console.log('Processing Stripe event:', event.type);

		// Handle payment success
		if (event.type === 'payment_intent.succeeded') {
			await handlePaymentSuccess(event.data.object);
		}

		// Handle payment failure
		if (event.type === 'payment_intent.payment_failed') {
			await handlePaymentFailure(event.data.object);
		}

		return json({ received: true });
	} catch (error) {
		console.error('Stripe webhook error:', error);
		return json({ error: 'Webhook processing failed' }, { status: 500 });
	}
}

async function handlePaymentSuccess(paymentIntent) {
	try {
		console.log('Payment succeeded:', paymentIntent.id);

		const customerEmail = paymentIntent.metadata?.email;
		const liminalCustomerId = paymentIntent.metadata?.liminal_customer_id;
		const plan = paymentIntent.metadata?.plan;

		if (!liminalCustomerId) {
			console.error('No liminal customer ID in payment intent metadata');
			return;
		}

		// Update customer status to paid
		await supabaseUpdate('web_signups', liminalCustomerId, {
			user_status: 'paid',
			stripe_payment_status: 'succeeded',
			conversion_date: new Date().toISOString()
		});

		// Mark referral credits as earned (if this customer was referred by someone)
		if (liminalCustomerId) {
			// Find any pending referral credits where this customer was the referred person
			const response = await fetch(
				`${supabaseUrl}/rest/v1/referral_credits?referred_signup_id=eq.${liminalCustomerId}&status=eq.pending&select=*`,
				{
					headers: {
						apikey: supabaseKey,
						Authorization: `Bearer ${supabaseKey}`
					}
				}
			);

			if (response.ok) {
				const pendingCredits = await response.json();

				// Mark these credits as earned since the referred customer paid
				for (const credit of pendingCredits) {
					await supabaseUpdate('referral_credits', credit.id, {
						status: 'earned'
					});
				}

				console.log(
					`Marked ${pendingCredits.length} referral credits as earned (customer ${liminalCustomerId} completed payment)`
				);
			}
		}

		console.log(`Updated customer ${liminalCustomerId} status to paid`);

		// TODO: Send welcome email, create auth user, etc.
	} catch (error) {
		console.error('Error handling payment success:', error);
	}
}

async function handlePaymentFailure(paymentIntent) {
	try {
		console.log('Payment failed:', paymentIntent.id);

		const liminalCustomerId = paymentIntent.metadata?.liminal_customer_id;

		if (!liminalCustomerId) {
			console.error('No liminal customer ID in payment intent metadata');
			return;
		}

		// Update customer status to payment failed
		await supabaseUpdate('web_signups', liminalCustomerId, {
			user_status: 'payment_failed',
			stripe_payment_status: 'failed'
		});

		console.log(`Updated customer ${liminalCustomerId} status to payment failed`);
	} catch (error) {
		console.error('Error handling payment failure:', error);
	}
}
