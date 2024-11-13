<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import notebookscreenshot from '$lib/images/NotebookScreenshot.png';
	import findingscreenshot from '$lib/images/FindingsScreenshot.png';
	import inventoryscreenshot from '$lib/images/InventoryScreenShot.png';
	import missionscreenshot from '$lib/images/MissionScreenshot.png';
	import papersscreenshot from '$lib/images/Papersscreenshot.png';
	import InTheBox from '../InTheBox.svelte';
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

<h1 class="text-white mt-16 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Pillars of Liminal</h1>
<InTheBox showMore={false}/>

<div class="text-white">
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Data Storage</p>
		<div class="text-lg">
			<p class="mb-2">
				Right now, all Liminal data is stored on secure cloud storage. We are working on allowing you to choose your
				own storage provider. Users will be able to "plug in" their own storage provider, such as the cloud storage providers your
				University already supports or a University compute cluster.
			</p>
			<p>
				For example, at Purdue University, where the first labs are using Liminal, we are working to plug in to the Purdue Research Computing
				storage system. This will allow researchers to use their existing storage and not have to worry about moving data around.
				This makes Liminal cheaper and simpler for customers, as you don't need to worry about data costs.
			</p>
		</div>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Compute Power</p>
		<p class="text-lg">
			Right now, all Liminal computing is done on a cloud server. This is going to change soon, as we are working on allowing
			our users to "plug in" the compute source (much like the data storage source). This will allow users to use their existing compute
			resources, such as a University compute cluster or cloud computing resources.
		</p>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Login and Authentication</p>
		<p class="text-lg">
			We are working on allowing users to use their existing University login credentials to access Liminal. This will make it easier
			for users to get started with Liminal, as they won't have to remember another password. This will also make it easier for
			University IT departments to manage Liminal access. Alternatively, users can login with another authorization method, such as
			a Google account or even a separate Liminal account.
		</p>
	</div>
	<div class="pixel-divider my-8" />
	<div class="p-2">
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Data Provenance & Reproducibility</p>
		<div class="text-lg">
			<p class="mb-2">
				Liminal is made up of various "entities" or "objects", each representing a different part of your lab. Liminal
				is all about connecting these entities together, so you can see how everything in your lab is connected. The notebook
				is the hub for making these connections via references all relevant objects related to your work.
			</p>
			<!-- <p class="mb-2">
				For example, a notebook that references a separate User automatically connects the experiment to both users. The notebook
				may also mention a Protocol, piece of Equipment, and some Samples. If another user calibrated the Equipment, that calibration
				event is connected to your notebook entry, which is connected to everything else you reference. Heck, someone may mop the floor
				and track the tasks, and that can be connected to your notebook entry since it happened in the same lab space at a similar time.
			</p>
			<p>
				These connections allow the scientist to see the exact context of the lab during any of their experiments or tasks. This creates
				a source of "lab state" that replaces superficial metadata associated with an experiment. A user connecting data to their notebook
				entry can see the exact state of the lab at that time, including the state of the equipment, the samples, the users, and the tasks.
			</p> -->
		</div>
	</div>
	<div class="pixel-divider my-8" />
</div>

