<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import notebookscreenshot from '$lib/images/NotebookScreenshot.png';
	import findingscreenshot from '$lib/images/FindingsScreenshot.png';
	import inventoryscreenshot from '$lib/images/InventoryScreenShot.png';
	import missionscreenshot from '$lib/images/MissionScreenshot.png';
	import papersscreenshot from '$lib/images/Papersscreenshot.png';
	import { ArrowUpSolid, ArrowDownToBracketSolid } from 'flowbite-svelte-icons';

	let notebook = false;
	let findings = false;
	let samples = false;
	let inventory = false;
	let tasks = false;
	let papers = false;
	let knowledge = false;
	let social = false;
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<div class="text-white rounded-lg">
	<div>
		<div class="mb-4">
			<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
				Does any of this resonate with you?
			</p>
		</div>
		<div class="p-4 text-lg sm:text-md md:text-lg lg:text-lg">
			<div class="grid grid-cols-1 gap-4 p-4 mb-2 mt-2 text-center">
				<div
					class="border-y-2 bg-black p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
				>
					<p>
						I'm not even sure where all the data from my lab is. The students probably have it
						somewhere
					</p>
				</div>
				<div
					class="border-y-2 bg-black p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
				>
					<p>I can't implement any lab-wide systems because everyone does things their own way</p>
				</div>
				<div
					class="border-y-2 bg-black p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
				>
					<p>There's not enough time in the day to get everything done</p>
				</div>
				<div
					class="border-y-2 bg-black p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl"
				>
					<p class="mt-2 mb-2">
						Professors get evaluated based on many things - but actually,
						<span class="text-green-500">$ and papers</span>
					</p>
				</div>
				<div class="border-y-2 bg-black p-4 flex flex-col items-center justify-center shadow-lg">
					<p class="mt-2 mb-2">
						If my lab got audited, <span class="text-red-500">it would be a mess.</span>
						But it's a chance I'm willing to take
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
