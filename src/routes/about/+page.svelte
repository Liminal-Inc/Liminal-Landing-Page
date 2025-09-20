<script>
	import CompanyInfo from './CompanyInfo.svelte';
	import ExtendedTeam from './ExtendedTeam.svelte';
	import FounderGrid from './FounderGrid.svelte';
	import WantToJoin from './WantToJoin.svelte';
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { Button } from 'flowbite-svelte';

	onMount(() => {
		track('About Page Viewed');
	});
</script>

<svelte:head>
	<title>About Liminal - Meet the Team Behind Automated Bioinformatics Notebooks</title>
	<meta
		name="description"
		content="Meet the team behind Liminal - bioinformatics researchers and software engineers building the future of scientific documentation and lab notebook automation."
	/>
	<meta name="keywords" content="liminal team, bioinformatics founders, scientific software team, lab notebook creators, research automation team" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/about/" />
	<meta property="og:title" content="About Liminal - The Team Building the Future of Scientific Documentation" />
	<meta property="og:description" content="Meet the researchers and engineers creating automated bioinformatics notebook solutions for academic labs worldwide." />
	<meta property="og:image" content="https://liminalbios.com/team-preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Liminal Team - Scientific Software Innovators" />
	<meta name="twitter:description" content="The researchers and engineers building automated lab notebook solutions for bioinformatics." />

	<link rel="canonical" href="https://liminalbios.com/about/" />
</svelte:head>

<div class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-purple-300 mb-6">
				About Liminal
			</h1>
			<p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
				We're bioinformatics researchers and software engineers who got tired of losing track of our own work. So we built a solution that automatically captures every aspect of scientific computing.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button
					href="/signup"
					size="lg"
					class="bg-green-500 hover:bg-green-600 text-white"
					on:click={() => track('About Header CTA Click')}
				>
					Try Liminal Today
				</Button>
				<Button
					href="mailto:support@liminalbios.com"
					size="lg"
					color="alternative"
					on:click={() => track('About Contact Click')}
				>
					Get In Touch
				</Button>
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Team Section -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
			<FounderGrid />
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Extended Team -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">Extended Team & Advisors</h2>
			<ExtendedTeam />
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Company Info -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<CompanyInfo />
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Join Us -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<WantToJoin />
		</div>
	</section>
</div>
