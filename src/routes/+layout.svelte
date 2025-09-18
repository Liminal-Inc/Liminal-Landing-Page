<script>
	import '../app.postcss';
	import './styles.css';
	import '../global.css';

	import Footer from '$lib/Footer.svelte';
	import LiminalNavbar from '$lib/Navbar.svelte';

	import posthog from 'posthog-js';

	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
	
	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}
	
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	
	function handleClick() {
		goto('/signup');
	}
	
	function goToApp() {
		goto('https://shellsync.liminalbios.com/');
	}
</script>

<div class="app">
	<LiminalNavbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<button class="floating-button-lower" on:click={handleClick}> Sign up </button>
<a class="floating-button-higher" target="_blank" href="https://shellsync.liminalbios.com/"
	>Liminal App</a
>

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
	.floating-button-lower {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		background-color: #4ade80;
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 9999px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		cursor: pointer;
		z-index: 1000;
		border: none;
		font-weight: bold;
		transition: background-color 0.2s;
	}

	.floating-button-higher {
		position: fixed;
		bottom: 5rem;
		right: 1.5rem;
		background-color: rgb(217, 181, 255);
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 9999px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		cursor: pointer;
		z-index: 1000;
		border: none;
		font-weight: bold;
		transition: background-color 0.2s;
	}

	.floating-button-higher:hover {
		background-color: #d70fcd;
	}
	.floating-button-lower:hover {
		background-color: #1dc411;
	}
</style>
