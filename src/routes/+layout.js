import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_FyDjEI9Bp8bMiqSUuu8Gq3FkjX53kituR55BSrktz8d', {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'identified_only',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};
