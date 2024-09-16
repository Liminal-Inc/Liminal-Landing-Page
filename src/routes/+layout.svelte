<script>
	import '../app.postcss';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import LiminalNavbar from '$lib/LiminalNavbar.svelte';
	import { webVitals } from '$lib/vitals';
	import Footer from './Footer.svelte';
	import './styles.css';
	import '../global.css'

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
	<!-- <Header /> -->
	<LiminalNavbar/>

	<main>
		<slot />
	</main>
	<Footer />
	<!-- <footer>
		<p class="text-xl font-extrabold">Liminal Inc. 2024</p>
	</footer> -->
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
