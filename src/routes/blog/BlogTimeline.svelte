<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline, CalendarMonthOutline } from 'flowbite-svelte-icons';
	import { track } from '@vercel/analytics';

	const blogPosts = [
		{
			title: "Why Data Scientists Must Own Complete Copies of Their Work Data",
			excerpt: "Building a foundation for future insights, AI integration, and scientific advancement through comprehensive data retention and intelligent querying.",
			date: "Dec 20, 2024",
			category: "Data Management",
			url: "https://open.substack.com/pub/liminalbios/p/why-data-scientists-must-own-complete",
			featured: true,
			isNew: true
		},
		{
			title: "Scientists need to take back their own data",
			excerpt: "Exploring how academic researchers can regain control over their scientific data and research outputs in an increasingly complex digital landscape.",
			date: "Aug 3, 2025",
			category: "Data Ownership",
			url: "https://liminalbios.substack.com/p/its-about-time-us-scientists-collect?r=52hd9m",
			featured: true
		},
		{
			title: "From Data to Knowledge",
			excerpt: "Understanding the critical transformation process from raw scientific data to actionable knowledge in modern research workflows.",
			date: "Feb 10, 2025",
			category: "Research Workflow",
			url: "https://liminalbios.substack.com/p/from-data-knowledge"
		},
		{
			title: "Data Recording in the Laboratory",
			excerpt: "Best practices and modern approaches to capturing, organizing, and preserving laboratory data for reproducible research.",
			date: "Jan 27, 2025",
			category: "Lab Management",
			url: "https://liminalbios.substack.com/p/data-recording-in-the-laboratory"
		},
		{
			title: "Leveraging LLMs in Liminal",
			excerpt: "How Large Language Models are revolutionizing scientific documentation and enhancing bioinformatics workflows.",
			date: "Jan 25, 2025",
			category: "Product Feature",
			url: "https://liminalbios.substack.com/p/feature-leveraging-llms-in-liminal",
			isFeature: true
		},
		{
			title: "Incentives in the Academic Science Ecosystem",
			excerpt: "Examining the motivational structures that drive scientific research and how they impact data management practices.",
			date: "Jan 20, 2025",
			category: "Academic Culture",
			url: "https://liminalbios.substack.com/p/incentives-in-the-academic-science"
		},
		{
			title: "Why Lab Notebooks Are Failing",
			excerpt: "A critical analysis of traditional laboratory documentation methods and why they're inadequate for modern scientific research.",
			date: "June 23, 2024",
			category: "Documentation",
			url: "https://liminalbios.substack.com/p/why-the-lab-notebook-is-failing-scientists?r=52hd9m"
		},
		{
			title: "Are Labs Good at Generating Knowledge?",
			excerpt: "Investigating the efficiency of academic laboratories in converting research efforts into meaningful scientific knowledge.",
			date: "June 10, 2024",
			category: "Research Efficiency",
			url: "https://open.substack.com/pub/liminalbios/p/are-academic-labs-good-at-generating?r=52hd9m&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
		},
		{
			title: "General Life Science Software Toolset",
			excerpt: "A comprehensive overview of essential software tools for life science researchers and bioinformaticians.",
			date: "May 15, 2024",
			category: "Tools & Software",
			url: "https://open.substack.com/pub/liminalbios/p/general-life-science-software-tools?r=52hd9m&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
		},
		{
			title: "Lab State vs. Metadata",
			excerpt: "Understanding the crucial distinction between laboratory state information and metadata in scientific data management.",
			date: "April 22, 2024",
			category: "Data Science",
			url: "https://liminalbios.substack.com/p/lab-state-vs-metadata?r=52hd9m"
		}
	];

	function handlePostClick(title) {
		track('Blog Post Clicked', { post_title: title });
	}
</script>

<div class="grid gap-8 md:gap-12">
	{#each blogPosts as post, index}
		<article class="bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
			<div class="flex flex-col lg:flex-row lg:items-start gap-6">
				<!-- Content -->
				<div class="flex-1">
					<div class="flex flex-wrap items-center gap-3 mb-4">
						<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
							{post.isFeature ? '🚀 Feature' : '📝 Blog'}
						</span>
						<span class="text-green-400 font-medium text-sm">
							{post.category}
						</span>
						{#if post.featured}
							<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">
								FEATURED
							</span>
						{/if}
						{#if post.isNew}
							<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
								NEW
							</span>
						{/if}
					</div>

					<h2 class="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-purple-300 transition-colors">
						{post.title}
					</h2>

					<p class="text-gray-300 text-lg leading-relaxed mb-6">
						{post.excerpt}
					</p>

					<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div class="flex items-center gap-2 text-gray-400">
							<CalendarMonthOutline class="w-4 h-4" />
							<time class="text-sm">{post.date}</time>
						</div>

						<Button
							href={post.url}
							target="_blank"
							class="bg-green-500 hover:bg-green-600 text-white"
							on:click={() => handlePostClick(post.title)}
						>
							Read Full Post
							<ArrowRightOutline class="ms-2 w-4 h-4" />
						</Button>
					</div>
				</div>
			</div>
		</article>
	{/each}
</div>
