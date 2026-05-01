<script lang="ts">
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';
	import { Button } from 'flowbite-svelte';
	import ShellSync from '../ShellSync.svelte';

	let collabSection;
	let researchSection;

	onMount(() => {
		track('Features Page Viewed');
		setTimeout(() => {
			if (window.location.hash === '#collabSection') {
				collabSection?.scrollIntoView({ behavior: 'smooth' });
			} else if (window.location.hash === '#researchSection') {
				researchSection?.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	});

	const features = [
		{
			title: "Automated Capture",
			description: "Every command, every file, every analysis automatically documented without changing your workflow.",
			icon: "🤖",
			benefits: ["Zero manual documentation", "100% command capture", "No workflow disruption"]
		},
		{
			title: "Shell Support",
			description: "Full support for BASH and ZSH shells with plans to expand based on user demand.",
			icon: "🖥️",
			benefits: ["BASH compatibility", "ZSH support", "More shells on roadmap"]
		},
		{
			title: "AI-Powered Insights",
			description: "Latest OpenAI models with RAG technology provide context-aware responses about your work.",
			icon: "🧠",
			benefits: ["Lab-specific AI responses", "Always up-to-date information", "Local LLM options coming"]
		},
		{
			title: "Secure Data Storage",
			description: "Your data stored securely in the cloud with future options for your own storage providers.",
			icon: "🔒",
			benefits: ["Secure cloud storage", "University-compatible", "Custom storage options planned"]
		},
		{
			title: "Passwordless Authentication",
			description: "Simple, secure login using magic links sent to your email - no passwords to remember.",
			icon: "🔑",
			benefits: ["No password storage", "Email-based login", "One-time secure links"]
		},
		{
			title: "Academic Privacy Standards",
			description: "Built by scientists for scientists with university-grade data ownership and privacy.",
			icon: "🎓",
			benefits: ["Complete data ownership", "University partnerships", "Academic-first design"]
		}
	];
</script>

<svelte:head>
	<title>Features - Liminal Bioinformatics | Automated Lab Notebook Capabilities</title>
	<meta
		name="description"
		content="Explore Liminal's powerful features: automated command capture, AI-powered insights, secure data storage, and passwordless authentication for scientific research workflows."
	/>
	<meta name="keywords" content="liminal features, automated lab notebook, command capture, bioinformatics tools, research documentation, AI lab assistant, scientific workflow automation" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/features/" />
	<meta property="og:title" content="Liminal Features - Automated Scientific Documentation Tools" />
	<meta property="og:description" content="Discover automated command capture, AI insights, and secure data management features designed specifically for scientific research workflows." />
	<meta property="og:image" content="https://liminalbios.com/features-preview.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Liminal Features - Scientific Workflow Automation" />
	<meta name="twitter:description" content="Automated lab notebook features: command capture, AI insights, and secure academic data management." />

	<link rel="canonical" href="https://liminalbios.com/features/" />
</svelte:head>

<div class="min-h-screen bg-black text-white">
	<!-- Hero Section -->
	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl font-bold text-purple-300 mb-6">
				Powerful Features
			</h1>
			<p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
				Everything you need to automatically capture, organize, and leverage your scientific computing work. Built specifically for bioinformatics researchers and academic labs.
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
					View Pricing
				</Button>
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Core Demo Section -->
	<section class="py-16 px-4" bind:this={researchSection}>
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">See Liminal in Action</h2>
			<ShellSync showMore={true} />
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Features Grid -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">Complete Feature Set</h2>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each features as feature}
					<div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
						<div class="text-4xl mb-4">{feature.icon}</div>

						<h3 class="text-xl font-bold text-white mb-4">
							{feature.title}
						</h3>

						<p class="text-gray-300 mb-6 leading-relaxed">
							{feature.description}
						</p>

						<ul class="space-y-2">
							{#each feature.benefits as benefit}
								<li class="flex items-center text-sm text-green-400">
									<span class="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
									{benefit}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- Technical Details -->
	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-white mb-12 text-center">Technical Specifications</h2>

			<div class="space-y-8">
				<div class="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
					<h3 class="text-xl font-semibold text-green-400 mb-4">🔬 Built for Scientists, By Scientists</h3>
					<p class="text-gray-300 leading-relaxed">
						Our team consists of bioinformatics researchers who understand the daily challenges of scientific computing.
						We've built Liminal to solve our own documentation problems, ensuring it meets the real-world needs of academic researchers.
					</p>
				</div>

				<div class="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
					<h3 class="text-xl font-semibold text-green-400 mb-4">⚡ Zero Training Required</h3>
					<p class="text-gray-300 leading-relaxed">
						Install Liminal in under 5 minutes and continue working exactly as you always have.
						No new tools to learn, no workflow changes required - just automatic documentation of everything you do.
					</p>
				</div>

				<div class="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
					<h3 class="text-xl font-semibold text-green-400 mb-4">🎯 Academic-First Design</h3>
					<p class="text-gray-300 leading-relaxed">
						Designed specifically for academic labs with university partnerships, FAIR data compliance,
						and pricing that works for students, staff, and faculty at every career stage.
					</p>
				</div>
			</div>
		</div>
	</section>

	<div class="pixel-divider my-8" />

	<!-- CTA Section -->
	<section class="py-16 px-4 text-center">
		<div class="max-w-2xl mx-auto">
			<h3 class="text-2xl md:text-3xl font-bold text-green-400 mb-4">
				Ready to Transform Your Research Documentation?
			</h3>
			<p class="text-gray-300 mb-6">
				Join researchers already using Liminal to automatically capture 100% of their scientific computing work.
			</p>
			<Button
				size="lg"
				disabled
				class="bg-gray-600 text-gray-400 cursor-not-allowed line-through opacity-60"
			>
				Get Access
			</Button>
		</div>
	</section>
</div>
