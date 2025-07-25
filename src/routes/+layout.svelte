<script>
	import '../app.postcss';
	import './styles.css';
	import '../global.css';

	import Footer from '$lib/Footer.svelte';
	import LiminalNavbar from '$lib/Navbar.svelte';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}

	function handleClick() {
		goto('/signup');
	}
</script>

<div class="app">
	<LiminalNavbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<button class="floating-button" on:click={handleClick}> Sign up </button>

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
	.floating-button {
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

	.floating-button:hover {
		background-color: #1dc411;
	}
</style>
