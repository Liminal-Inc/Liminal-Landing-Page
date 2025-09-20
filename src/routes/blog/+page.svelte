<script>
	import { Button } from 'flowbite-svelte';
	import BlogTimeline from './BlogTimeline.svelte';
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';

	onMount(() => {
		track('Blog Page Viewed');
	});
</script>

<svelte:head>
	<title>Blog - Liminal Bioinformatics | Scientific Research & Lab Documentation Insights</title>
	<meta name="description" content="Explore insights on bioinformatics, lab documentation, scientific research workflows, and the future of academic data management from the Liminal team." />
	<meta name="keywords" content="bioinformatics blog, scientific research, lab documentation, academic research, FAIR data, research workflows" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/blog/" />
	<meta property="og:title" content="Liminal Blog - Scientific Research & Bioinformatics Insights" />
	<meta property="og:description" content="Expert insights on lab documentation, bioinformatics workflows, and the future of scientific research data management." />
	<meta property="og:image" content="https://liminalbios.com/blog-preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Liminal Blog - Scientific Research Insights" />
	<meta name="twitter:description" content="Expert insights on bioinformatics, lab documentation, and scientific research workflows." />

	<link rel="canonical" href="https://liminalbios.com/blog/" />
</svelte:head>

<div class="min-h-screen bg-black text-white">
	<!-- Header Section -->
	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-purple-300 mb-6">
				The Liminal Blog
			</h1>
			<p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Insights on bioinformatics, lab documentation, scientific research workflows, and the future of academic data management.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button
					href="/signup"
					size="lg"
					class="bg-green-500 hover:bg-green-600 text-white"
					on:click={() => track('Blog Header CTA Click')}
				>
					Start Your Free Trial
				</Button>
				<Button
					href="https://liminalbios.substack.com"
					target="_blank"
					size="lg"
					color="alternative"
					on:click={() => track('Blog Subscribe Click')}
				>
					Subscribe to Newsletter
				</Button>
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Blog Posts Section -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">Latest Posts</h2>
			<BlogTimeline view="normal" />
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Newsletter CTA Section -->
	<section class="py-16 px-4 text-center">
		<div class="max-w-2xl mx-auto">
			<h3 class="text-2xl md:text-3xl font-bold text-green-400 mb-4">
				Stay Updated
			</h3>
			<p class="text-gray-300 mb-6">
				Get the latest insights on scientific research workflows and bioinformatics directly in your inbox.
			</p>
			<Button
				href="https://liminalbios.substack.com"
				target="_blank"
				size="lg"
				class="bg-purple-500 hover:bg-purple-600 text-white"
				on:click={() => track('Blog Footer Newsletter Click')}
			>
				Subscribe to Our Newsletter
			</Button>
		</div>
	</section>
</div>
