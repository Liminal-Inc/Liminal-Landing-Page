<script lang="ts">
	import { Button, Timeline, TimelineItem } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Timeline class="text-white">
	<TimelineItem>
		<h1>Scientists need to take back their own data</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">Aug 3, 2025</h3>
		<Button
			href="https://liminalbios.substack.com/p/its-about-time-us-scientists-collect?r=52hd9m"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>From Data to Knowledge</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">Feb 10, 2025</h3>
		<Button
			href="https://liminalbios.substack.com/p/from-data-knowledge"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>Data Recording in the Laboratory</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">Jan 27, 2025</h3>
		<Button
			href="https://liminalbios.substack.com/p/data-recording-in-the-laboratory"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>Leveraging LLMs in Liminal</h1>
		<h3 class="text-green-300 font-bold">[Feature]</h3>
		<h3 class="text-lg">Jan 25, 2025</h3>
		<Button
			href="https://liminalbios.substack.com/p/feature-leveraging-llms-in-liminal"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>Incentives in the Academic Science Ecosystem</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">Jan 20, 2025</h3>
		<Button
			href="https://liminalbios.substack.com/p/incentives-in-the-academic-science"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>Why Lab Notebooks Are Failing</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">June 23, 2024</h3>
		<Button
			href="https://liminalbios.substack.com/p/why-the-lab-notebook-is-failing-scientists?r=52hd9m"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>Are Labs Good at Generating Knowledge?</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">June 10, 2024</h3>
		<Button
			href="https://open.substack.com/pub/liminalbios/p/are-academic-labs-good-at-generating?r=52hd9m&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>General Life Science Software Toolset</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">May 15, 2024</h3>
		<Button
			href="https://open.substack.com/pub/liminalbios/p/general-life-science-software-tools?r=52hd9m&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<TimelineItem>
		<h1>Lab State vs. Metadata</h1>
		<h3 class="text-purple-300 font-bold">[Blog]</h3>
		<h3 class="text-lg">April 22, 2024</h3>
		<Button
			href="https://liminalbios.substack.com/p/lab-state-vs-metadata?r=52hd9m"
			target="_blank"
			color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button
		>
	</TimelineItem>
	<!-- {#if view === 'comprehensive'}
		<TimelineItem>
			<h3 class="text-lg">January 03, 2024</h3>
			<h3 class="text-red-300 font-bold">[$$$]</h3>
			<h1 class="text-sm font-normal text-lg-500">Initial investment deposited into acccount.</h1>
		</TimelineItem>
	{/if} -->
</Timeline>

<style lang="postcss">
	h1 {
		@apply text-left text-2xl;
	}
</style>
