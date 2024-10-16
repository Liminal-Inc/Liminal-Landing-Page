<script>
	import '../app.postcss';
	import './styles.css';
	import '../global.css';

	import posthog from 'posthog-js'
	import Footer from '$lib/Footer.svelte';
	import LiminalNavbar from '$lib/Navbar.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}

	export const load = async () => {

	if (browser) {
	posthog.init(
		'phc_FyDjEI9Bp8bMiqSUuu8Gq3FkjX53kituR55BSrktz8d',
		{ 
		api_host: 'https://us.i.posthog.com',
		person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
		}
		)
	}
	return
	};
</script>

<div class="app">
	<LiminalNavbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
