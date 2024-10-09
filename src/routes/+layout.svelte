<script>
	import '../app.css';
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
</script>

<div class="min-h-screen flex flex-col">
	<header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
		<nav class="container mx-auto px-4 py-4">
		  <div class="flex justify-between items-center">
			<a href="/" class="text-2xl font-heading font-bold text-primary flex items-center">
			  <img src="/logo.svg" alt="Liminal Logo" class="h-8 mr-2">
			  Liminal
			</a>
			<ul class="flex space-x-8">
			  <li><a href="/" class="text-text hover:text-primary transition-colors duration-300">Home</a></li>
			  <li><a href="/features" class="text-text hover:text-primary transition-colors duration-300">Features</a></li>
			  <li><a href="/about" class="text-text hover:text-primary transition-colors duration-300">About</a></li>
			  <li><a href="/blog" class="text-text hover:text-primary transition-colors duration-300">Blog</a></li>
			  <li><a href="/contact" class="btn">Join the Waitlist</a></li>
			</ul>
		  </div>
		</nav>
	  </header>

	<main class="flex-grow">
		<slot />
	</main>
	<footer class="bg-surface mt-12">
		<div class="container mx-auto px-4 py-8">
		  <p class="text-center text-sm text-gray-500">&copy; 2024 Liminal. All rights reserved.</p>
		</div>
	  </footer>
</div>

