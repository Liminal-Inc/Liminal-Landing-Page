import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_ANON_KEY } from '$env/static/private';

export async function GET() {
	try {
		console.log('Testing Supabase connection...');
		console.log('URL:', SUPABASE_URL);
		console.log('Service key length:', SUPABASE_SERVICE_ROLE_KEY?.length);
		console.log('Anon key length:', SUPABASE_ANON_KEY?.length);

		// Try with anon key first
		const supabaseAnon = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

		console.log('Testing with anon key...');

		// Test if we can access the web_signups table directly
		const signupTableTest = await fetch(`${SUPABASE_URL}/rest/v1/web_signups?select=id&limit=1`, {
			headers: {
				apikey: SUPABASE_ANON_KEY,
				Authorization: `Bearer ${SUPABASE_ANON_KEY}`
			}
		});

		console.log('Signup table test status:', signupTableTest.status);

		if (signupTableTest.status === 200) {
			console.log('web_signups table exists and is accessible!');
			return json({
				success: true,
				message: 'web_signups table accessible with anon key',
				keyType: 'anon'
			});
		}

		console.log('Anon key failed, trying service key...');

		// Try with service key
		const serviceTableTest = await fetch(`${SUPABASE_URL}/rest/v1/web_signups?select=id&limit=1`, {
			headers: {
				apikey: SUPABASE_SERVICE_ROLE_KEY,
				Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
			}
		});

		console.log('Service key test status:', serviceTableTest.status);

		if (serviceTableTest.status === 200) {
			console.log('web_signups table exists and is accessible with service key!');
			return json({
				success: true,
				message: 'web_signups table accessible with service key',
				keyType: 'service'
			});
		}

		// Both failed
		const anonResult = await signupTableTest.text();
		const serviceResult = await serviceTableTest.text();

		console.log('Anon result:', anonResult);
		console.log('Service result:', serviceResult);

		return json({
			success: false,
			error: 'Some error occurred',
			anonStatus: signupTableTest.status,
			serviceStatus: serviceTableTest.status,
			anonError: anonResult,
			serviceError: serviceResult
		});
	} catch (error) {
		console.error('Connection test failed:', error);
		return json({
			success: false,
			error: error.message
		});
	}
}
