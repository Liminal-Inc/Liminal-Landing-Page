import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private';

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_SERVICE_ROLE_KEY;

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

export async function GET({ url }) {
	try {
		const email = url.searchParams.get('email');

		if (!email) {
			return json({ error: 'Email parameter required' }, { status: 400 });
		}

		// Get ALL credits for this email (no status filter)
		const allCredits = await supabaseQuery(
			'referral_credits',
			`?referrer_customer_email=eq.${email}&select=*`
		);

		// Get earned credits specifically
		const earnedCredits = await supabaseQuery(
			'referral_credits',
			`?referrer_customer_email=eq.${email}&status=eq.earned&select=*`
		);

		// Get pending credits
		const pendingCredits = await supabaseQuery(
			'referral_credits',
			`?referrer_customer_email=eq.${email}&status=eq.pending&select=*`
		);

		// Get used credits
		const usedCredits = await supabaseQuery(
			'referral_credits',
			`?referrer_customer_email=eq.${email}&status=eq.used&select=*`
		);

		return json({
			success: true,
			email: email,
			summary: {
				total: allCredits.length,
				earned: earnedCredits.length,
				pending: pendingCredits.length,
				used: usedCredits.length
			},
			allCredits: allCredits,
			earnedCredits: earnedCredits,
			pendingCredits: pendingCredits,
			usedCredits: usedCredits
		});
	} catch (error) {
		console.error('Debug credits error:', error);
		return json({ error: error.message }, { status: 500 });
	}
}
