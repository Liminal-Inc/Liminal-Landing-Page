<script>
	import '../app.postcss';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import LiminalNavbar from '$lib/Navbar.svelte';
	import { webVitals } from '$lib/vitals';
	import Footer from '$lib/Footer.svelte';
	import './styles.css';
	import '../global.css';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}
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
