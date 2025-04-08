<script lang="ts">
	import InTheBox from '../InTheBox.svelte';
	import LiminalCollab from './LiminalCollab.svelte';
	import GrantHelper from './GrantHelper.svelte';

	import { onMount } from 'svelte';

	let collabSection;
	let researchSection;

	onMount(() => {
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
	class="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-300"
	bind:this={researchSection}
>
	Liminal Research
</div>

<section>
	<InTheBox showMore={false} />
</section>

<div class="text-white space-y-12 mt-8">
	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Data Storage
		</h2>
		<p class="text-lg leading-relaxed">
			Right now, all Liminal data is stored on secure cloud storage. We are working on allowing you
			to choose your own storage provider. Users will be able to "plug in" their own storage
			provider, such as the cloud storage providers your University already supports or a University
			compute cluster.
		</p>
		<p class="text-lg leading-relaxed mt-4">
			For example, at Purdue University, where the first labs are using Liminal, we are working to
			integrate with the Purdue Research Computing storage system. This will allow researchers to
			use their existing storage without worrying about moving data around—making Liminal more
			affordable and easier to use.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Compute Power
		</h2>
		<p class="text-lg leading-relaxed">
			Currently, all Liminal computing is handled on a cloud server. However, we are working on
			allowing users to "plug in" their own compute source, much like data storage. This will enable
			users to leverage their own compute resources, such as a University compute cluster or
			cloud-based compute options.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Login and Authentication
		</h2>
		<p class="text-lg leading-relaxed">
			We are working on allowing users to log in using their existing University credentials. This
			integration will simplify access, eliminating the need for additional passwords, and make it
			easier for University IT teams to manage permissions.
		</p>
		<p class="text-lg leading-relaxed mt-4">
			Alternatively, users can log in with a Google account or create a separate Liminal account for
			authentication.
		</p>
	</section>

	<section class="">
		<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 underline">
			Data Provenance & Reproducibility
		</h2>
		<p class="text-lg leading-relaxed">
			Liminal consists of various "entities" or "objects" representing different parts of your lab.
			The platform is designed to interconnect these entities, giving you a complete view of how
			everything in your lab is related.
		</p>
		<p class="text-lg leading-relaxed mt-4">
			The **notebook** serves as the hub for tracking and referencing relevant objects, ensuring
			data provenance and reproducibility in your research.
		</p>
	</section>
</div>

<div class="pixel-divider my-16" bind:this={collabSection} />

<LiminalCollab />
<br />

<!-- <div class="pixel-divider my-16"/> -->

<!-- <GrantHelper/> -->
