<script>
	import '../app.postcss';
	import './styles.css';
	import '../global.css';

	import Footer from '$lib/Footer.svelte';
	import LiminalNavbar from '$lib/Navbar.svelte';

	import posthog from 'posthog-js'
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
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
