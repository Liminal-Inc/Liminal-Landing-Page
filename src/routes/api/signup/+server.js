import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_SERVICE_ROLE_KEY;

// Direct HTTP function for self-hosted Supabase
async function supabaseInsert(table, data) {
	try {
		const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				apikey: supabaseKey,
				Authorization: `Bearer ${supabaseKey}`,
				Prefer: 'return=representation'
			},
			body: JSON.stringify(data)
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('Supabase HTTP error:', response.status, errorText);
			throw new Error(`HTTP ${response.status}: ${errorText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Supabase insert error:', error);
		throw error;
	}
}

export async function POST({ request }) {
	try {
		const formData = await request.json();
		console.log('Form data received:', formData);
		console.log('Supabase URL:', supabaseUrl);
		console.log('Supabase key exists:', !!supabaseKey);

		// Generate referral code for new customer if they don't have one
		let customerReferralCode = null;
		if (formData.email) {
			const emailPrefix = formData.email.split('@')[0].toLowerCase();
			const randomNum = Math.floor(Math.random() * 1000);
			customerReferralCode = `${emailPrefix}${randomNum}`;
		}

		// Prepare signup data
		const signupData = {
			first_name: formData.firstName,
			last_name: formData.lastName,
			email: formData.email,
			institution: formData.institution,
			role: formData.role,
			team_emails: formData.teamEmails ? formData.teamEmails.split(',').map((e) => e.trim()) : [],
			team_size: parseInt(formData.teamSize) || 1,
			account_type: 'trial',
			referral_code: formData.referralCode, // Who referred them
			utm_source: formData.utmSource,
			utm_medium: formData.utmMedium,
			utm_campaign: formData.utmCampaign,
			heard_about_source: formData.heardAbout,
			user_status: 'trial'
		};

		// Insert into web_signups table using direct HTTP
		console.log('Attempting to insert signup data:', signupData);

		try {
			const signupResult = await supabaseInsert('web_signups', signupData);
			console.log('Signup result:', signupResult);

			// signupResult should be an array, get the first item
			const signupRecord = Array.isArray(signupResult) ? signupResult[0] : signupResult;

			if (!signupRecord) {
				throw new Error('No data returned from insert');
			}

			// Create referral code for this new customer
			if (customerReferralCode && signupRecord) {
				try {
					await supabaseInsert('customer_referral_codes', {
						customer_email: formData.email,
						referral_code: customerReferralCode
					});
				} catch (referralCodeError) {
					console.error('Referral code creation error:', referralCodeError);
					// Don't fail the signup for this
				}
			}

			// If they were referred, create referral credit record
			if (formData.referralCode) {
				try {
					// Look up who referred them using HTTP
					const referrerResponse = await fetch(
						`${supabaseUrl}/rest/v1/customer_referral_codes?referral_code=eq.${formData.referralCode}&select=customer_email`,
						{
							headers: {
								apikey: supabaseKey,
								Authorization: `Bearer ${supabaseKey}`
							}
						}
					);

					if (referrerResponse.ok) {
						const referrers = await referrerResponse.json();
						if (referrers.length > 0) {
							await supabaseInsert('referral_credits', {
								referrer_customer_email: referrers[0].customer_email,
								referral_code: formData.referralCode,
								referred_signup_id: signupRecord.id,
								credit_amount: 5.0,
								status: 'pending'
							});
						}
					}
				} catch (creditError) {
					console.error('Referral credit error:', creditError);
					// Don't fail the signup for this
				}
			}

			return json({
				success: true,
				data: signupRecord,
				customerReferralCode: customerReferralCode
			});
		} catch (insertError) {
			console.error('Database insert error:', insertError);
			
			// Handle duplicate email error specifically
			if (insertError.message.includes('23505') && insertError.message.includes('web_signups_email_key')) {
				return json({ 
					error: 'An account with this email already exists. Please use a different email or contact support if you need help accessing your existing account.',
					errorType: 'duplicate_email'
				}, { status: 409 });
			}
			
			// Handle other constraint violations
			if (insertError.message.includes('23505')) {
				return json({ 
					error: 'This information is already registered in our system. Please check your details or contact support.',
					errorType: 'duplicate_data'
				}, { status: 409 });
			}
			
			// Handle validation errors
			if (insertError.message.includes('HTTP 400')) {
				return json({ 
					error: 'Invalid information provided. Please check your details and try again.',
					errorType: 'validation_error'
				}, { status: 400 });
			}
			
			// Generic database error
			return json({ 
				error: 'Unable to create account. Please try again or contact support if the problem persists.',
				errorType: 'database_error'
			}, { status: 400 });
		}
	} catch (error) {
		console.error('Server error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}
