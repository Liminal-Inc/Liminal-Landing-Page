import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function POST({ request }) {
	const { email } = await request.json();

	if (!email) {
		return json({ error: 'Email is required' }, { status: 400 });
	}

	const { data, error } = await supabase.from('subscribers').insert([{ email }]);

	if (error) {
		return json({ error: error.message }, { status: 500 });
	}

	return json({ message: 'Subscription successful', data }, { status: 201 });
}
