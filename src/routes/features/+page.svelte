<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import notebookscreenshot from '$lib/images/NotebookScreenshot.png';
	import findingscreenshot from '$lib/images/FindingsScreenshot.png';
	import inventoryscreenshot from '$lib/images/InventoryScreenShot.png';
	import missionscreenshot from '$lib/images/MissionScreenshot.png';
	import papersscreenshot from '$lib/images/Papersscreenshot.png';
	import {
		BookOpenSolid,
		CirclePlusSolid,
		ClipboardCheckSolid,
		DatabaseSolid,
		FaceGrinSolid,
		FileCirclePlusSolid,
		FolderArrowRightOutline,
		NewspapperSolid,
		PenSolid,
		UserSolid
	} from 'flowbite-svelte-icons';

	let notebook = false;
	let findings = false;
	let samples = false;
	let inventory = false;
	let tasks = false;
	let papers = false;
	let knowledge = false;
	let social = false;

	let highlightedFeatures = {
		notebook: [
			{
				title: 'References',
				description:
					'Keep things connected for yourself and future scientists, by referencing entities in your lab, like inventory items. References also allow you two ',
				image: '/images/data-analysis-hero.jpg'
			},
			{
				title: 'Reviews',
				description: 'Your colleagues can look at your work and give you feedback',
				image: '/images/collaboration-hero.jpg'
			},
			{
				title: 'Activity',
				description:
					"See activity and connections relationships to your notebook while you're writing",
				image: '/images/collaboration-hero.jpg'
			}
		]
	};
</script>

<div class="text-white">
	<div>
		<p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4">Features</p>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Lab Notebook</p>
		<p class="text-lg">My text for the lab notebook</p>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Lab Notebook</p>
		<p class="text-lg">My text for the lab notebook</p>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Lab Notebook</p>
		<p class="text-lg">My text for the lab notebook</p>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Lab Notebook</p>
		<p class="text-lg">My text for the lab notebook</p>
	</div>
	<div class="pixel-divider my-8" />
</div>

<div class="text-white rounded-lg">
	<div>
		<center>
			<div class="m-2">
				<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">What's in the box?</p>
			</div>
			<div class="p-4">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 text-white">
					<button
						on:click={() => (notebook = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<NewspapperSolid size="xl" />
						<div class="mt-2 mb-2 text-xl">Lab Notebook</div>
					</button>
					<button
						on:click={() => (findings = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<DatabaseSolid size="xl" />
						<div class="mt-2 mb-2 text-lg">Experimental Results</div>
					</button>
					<button
						on:click={() => (samples = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<CirclePlusSolid size="xl" />
						<div class="mt-2 mb-2 text-lg">Sample Management</div>
					</button>
					<button
						on:click={() => (inventory = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<FolderArrowRightOutline size="xl" />
						<div class="mt-2 mb-2 text-lg">Inventory</div>
					</button>
					<button
						on:click={() => (tasks = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<ClipboardCheckSolid />
						<div class="mt-2 mb-2 text-lg">Task Manager</div>
					</button>
					<button
						on:click={() => (papers = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<PenSolid size="xl" />
						<div class="mt-2 mb-2 text-lg">Paper and Reviews</div>
					</button>
					<button
						on:click={() => (knowledge = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<BookOpenSolid size="xl" />
						<div class="mt-2 mb-2 text-lg">Knowledge</div>
					</button>
					<button
						on:click={() => (social = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<UserSolid size="xl" />
						<div class="mt-2 mb-2 text-lg">Social Hub</div>
					</button>
				</div>
			</div>

			<div class="text-2xl">
				<p class="font-extrabold">Plus!</p>
				<ul>
					<li>Activity Feed</li>
					<li>Badges, Levels, Streaks</li>
					<li>Custom toolkits</li>
					<li>Reports & Summaries</li>
					<li>And more!</li>
				</ul>
			</div>
		</center>
	</div>
</div>
