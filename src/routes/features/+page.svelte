<script lang="ts">
	import LiminalCollab from './LiminalCollab.svelte';
	import { track } from '@vercel/analytics';

	import { onMount } from 'svelte';
	import ShellSync from '../ShellSync.svelte';

	let collabSection;
	let researchSection;

	onMount(() => {
		track('Features Page Viewed');
		// Wait for Svelte to fully render before scrolling
		setTimeout(() => {
			if (window.location.hash === '#collabSection') {
				collabSection?.scrollIntoView({ behavior: 'smooth' });
			} else if (window.location.hash === '#researchSection') {
				researchSection?.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100); // Small delay to allow DOM rendering
	});
</script>

<div
	class="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-extrabold"
	bind:this={researchSection}
>
	Liminal Sync
</div>

<section>
	<ShellSync showMore={true} />
</section>

<hr class="my-8 outline-white" />

<div class="text-white space-y-12 mt-8">
	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Shell Support
		</h2>
		<p class="text-lg leading-relaxed">
			Currently we only support BASH and ZSH. If customer demand requires other shell support we
			will provide that as necessary.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">AI</h2>
		<p class="text-lg leading-relaxed">
			For now, we are using the latest LLM model from OpenAI. We use retrieval-augmented generation
			(RAG) and prompt engineering to ensure that the AI is always up to date with the latest
			information from your lab. This allows the AI to provide accurate and relevant responses based
			on the most recent data from your lab.
		</p>
		<p class="text-lg leading-relaxed mt-4">
			We are working on allowing local and on-premise LLMs for our users. This ensures no data
			leakage and the ultimate privacy.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Data Storage
		</h2>
		<p class="text-lg leading-relaxed">
			Right now, all Liminal data is stored on secure cloud storage. We are working on allowing you
			to choose your own storage provider. Users will be able to "plug in" their own storage
			provider, such as the cloud storage providers your University already supports or another
			location of your choice.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Login and Authentication
		</h2>
		<p class="text-lg leading-relaxed">
			We do not store or use passwords for login. Users login using their email of choice and
			receive a 1-time login link through their email.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Data Provenance & Privacy
		</h2>
		<p class="text-lg leading-relaxed">
			As a company that is made up of academic scientists, we understand how precious our research
			data is. We try to uphold the most favorable data provenance and privacy standards, ensuring
			you always have access and complete ownership of your data. We've been working with several
			Universities to ensure this is a product compatible for our fellow academic scientists.
		</p>
	</section>
</div>

<div class="pixel-divider my-16" bind:this={collabSection} />

<!-- <LiminalCollab />
<br /> -->
