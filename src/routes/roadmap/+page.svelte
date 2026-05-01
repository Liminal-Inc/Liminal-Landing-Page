<script lang="ts">
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { Button } from 'flowbite-svelte';

	onMount(() => {
		track('Roadmap Page Viewed');
	});

	const roadmapItems = [
		{
			title: "R Studio Integration",
			description: "Load in a library (e.g., library(liminal)) and have all your work automatically turn into notebook entries synced to your activity feed.",
			priority: "Major",
			status: "planned",
			timeline: "2026"
		},
		{
			title: "IDE/Code Editor Integration",
			description: "Piggy-backing off Git functionality, turn your coding history into daily notebook entries that sync to your activity feeds.",
			priority: "Major",
			status: "planned",
			timeline: "2026"
		},
		{
			title: "Jupyter Notebook Integration",
			description: "Similar to RStudio functionality, but for iPython/Jupyter notebooks with seamless workflow integration.",
			priority: "Major",
			status: "planned",
			timeline: "2026"
		},
		{
			title: "Universal Activity Feed",
			description: "Integrate all sources of work into one global activity feed - search any work you've done from terminal, RStudio, or anywhere else.",
			priority: "Major",
			status: "in-development",
			timeline: "Q4 2025"
		},
		{
			title: "AI Assistant with Command History",
			description: "Personalized AI assistant that knows all your command history and can suggest optimizations and solutions.",
			priority: "Minor",
			status: "planned",
			timeline: "2026"
		},
		{
			title: "Historical Data Recovery",
			description: "Scan your past shell history from previous years to retroactively create notebook entries for lost work.",
			priority: "Minor",
			status: "planned",
			timeline: "2026"
		}
	];
</script>

<svelte:head>
	<title>Roadmap - Liminal Bioinformatics | Future Features & Development Timeline</title>
	<meta
		name="description"
		content="Explore Liminal's product roadmap including R Studio integration, Jupyter notebooks, AI assistants, and universal activity feeds for scientific research workflows."
	/>
	<meta name="keywords" content="liminal roadmap, bioinformatics features, R studio integration, jupyter notebooks, scientific software development, research tools" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/roadmap/" />
	<meta property="og:title" content="Liminal Product Roadmap - Future of Scientific Documentation" />
	<meta property="og:description" content="See what's coming next for Liminal: R Studio integration, AI assistants, and universal research activity feeds." />
	<meta property="og:image" content="https://liminalbios.com/roadmap-preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Liminal Roadmap - Future Scientific Tools" />
	<meta name="twitter:description" content="Upcoming features: R Studio integration, AI assistants, and universal research documentation." />

	<link rel="canonical" href="https://liminalbios.com/roadmap/" />
</svelte:head>

<div class="w-full bg-amber-500 text-black text-center py-3 px-4 font-semibold text-sm md:text-base">
	We're exploring new ways to bring value to bioinformatics and high-performance computing. Stay tuned.
</div>

<div class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-purple-300 mb-6">
				Product Roadmap
			</h1>
			<p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Building the future of scientific documentation. See what's coming next for Liminal and how we're expanding automated research capture across all your tools.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button
					size="lg"
					disabled
					class="bg-gray-600 text-gray-400 cursor-not-allowed line-through opacity-60"
				>
					Get Access
				</Button>
				<Button
					size="lg"
					disabled
					color="alternative"
					class="cursor-not-allowed line-through opacity-60"
				>
					Share Feedback
				</Button>
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Roadmap Notice -->
	<section class="py-8 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<div class="bg-purple-900/30 border border-purple-500/50 rounded-lg p-6">
				<p class="text-gray-300">
					<strong class="text-purple-300">Note:</strong> Features will not necessarily be implemented in this exact order.
					Development priorities are based on user feedback and demand. Timeline estimates are subject to change.
				</p>
			</div>
		</div>
	</section>

	<!-- Roadmap Items -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">Upcoming Features</h2>

			<div class="grid gap-8">
				{#each roadmapItems as item}
					<div class="bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
						<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
							<div class="flex-1">
								<div class="flex flex-wrap items-center gap-3 mb-4">
									<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
										{item.priority === 'Major' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}">
										{item.priority} Feature
									</span>
									<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
										{item.status === 'in-development' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'}">
										{item.status === 'in-development' ? '🚧 In Development' : '📋 Planned'}
									</span>
									<span class="text-gray-400 text-sm">
										Target: {item.timeline}
									</span>
								</div>

								<h3 class="text-2xl font-bold text-white mb-4 hover:text-purple-300 transition-colors">
									{item.title}
								</h3>

								<p class="text-gray-300 text-lg leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Feedback CTA -->
	<section class="py-16 px-4 text-center">
		<div class="max-w-2xl mx-auto">
			<h3 class="text-2xl md:text-3xl font-bold text-green-400 mb-4">
				Shape Our Development
			</h3>
			<p class="text-gray-300 mb-6">
				Your feedback directly influences our roadmap priorities. Let us know which features matter most to your research workflow.
			</p>
			<Button
				href="mailto:support@liminalbios.com?subject=Roadmap Feedback"
				size="lg"
				class="bg-purple-500 hover:bg-purple-600 text-white"
				on:click={() => track('Roadmap Footer Feedback Click')}
			>
				Send Us Your Ideas
			</Button>
		</div>
	</section>
</div>
