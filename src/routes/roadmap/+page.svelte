<script lang="ts">
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';

	onMount(() => {
		track('Roadmap Page Viewed');
	});
</script>

<div class="text-white mt-16 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-center">
	Roadmap
</div>

<div class="grid grid-cols-1 gap-4 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
	<!-- Liminal Research Title -->
	<div class="col-span-1 flex flex-col text-purple-300">Liminal Bioinformatics</div>
	<p class="text-lg">
		Features will not necessarily be implemented in this particular order, nor will all features
		neccessarily be released. This is dependent on user feedback and is subject to change.
	</p>

	<!-- Future Features -->
	<section class="border border-gray-600 rounded-lg p-4 col-span-1 flex flex-col gap-2">
		<h2 class="text-lg font-semibold border-b border-white pb-2 text-green-400">Future Features</h2>
		<div class="text-lg">
			<p>
				This is our roadmap of features to release. This list is incomplete and features will be
				released based on customer demand.
			</p>
			<p class="text-large mt-4 font-extralight">&lt; Major &gt;</p>
			<ul class="list-disc pl-4 text-base sm:text-lg">
				<li class="mt-2">
					<span class="text-green-400 text-xl">Rstudio integration:</span> load in a library (e.g.,
					<code>library(liminal)</code>) and have all your work automatically turns into a notebook
					entry each day and synced to your personal and group activity feeds.
				</li>
				<li>
					<span class="text-green-400 text-xl">IDE/Code Editor integration:</span> piggy-backing off
					functionality controlled by Git, turn your coding history into daily notebook entries that
					sync to your personal and group activity feeds.
				</li>
				<li>
					<span class="text-green-400 text-xl">Jupyter notebook integration:</span> similar to the RStudio
					functionality, except for iPython/Jupyter notebooks.
				</li>
				<li>
					<span class="text-green-400 text-xl">Activity Feed:</span> as we integrate new automated sources
					of notebook entries, we will be further advancing how our activity feed looks. The goal is
					to integrate as many sources of work and sync them all to 1 global activity feed, that way
					you can search any work you've done in one location, whether that be from the terminal, RStudio,
					or anywhere else.
				</li>
			</ul>
			<p class="text-large mt-4">&lt; Minor &gt;</p>
			<ul class="list-disc pl-4 text-base sm:text-lg">
				<li>Personalized AI assistant that knows all your command history</li>
				<li>
					Retrieve lost work by creating notebook entries from the past. Scan your past shell
					history from past years to retroactively create notebook entries.
				</li>
			</ul>
		</div>
	</section>
</div>

<div class="pixel-divider my-16" />

<!-- 
<section class="border border-gray-600 rounded-lg p-4 col-span-1 flex flex-col gap-2">
		<h2 class="text-lg font-semibold text-purple-300 border-b border-white pb-2">
			Milestones in our Vision
		</h2>
		<div class="text-lg">
			<p>
				Our vision is to create a suite of tools that individuals and labs can choose from to
				enhance their research. For all of our tools, we follow 3 principles:
			</p>
			<ol class="list-decimal ml-6">
				<li>Install & configure in &lt; 5 minutes</li>
				<li>Affordably priced for students, staff, or faculty</li>
				<li>Seamless to adopt. Nothing about your workflow needs to change</li>
			</ol>
			<br />
			<p>All of our software is lab-grade, meaning it is verifiable and consistently supported.</p>
		</div>
	</section> -->

<style>
	li {
		margin-bottom: 1em; /* space below the list */
	}
</style>
