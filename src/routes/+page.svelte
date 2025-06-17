<script lang="ts">
	import logoURL from '$lib/images/Logo-24Jul2024.png';
	import NewsFeed from './NewsFeed.svelte';
	import InTheBox from './InTheBox.svelte';
	import TheProblem from './TheProblem.svelte';
	import ThreeTiers from './ThreeTiers.svelte';
	import { Table, Video } from 'flowbite-svelte';
	import SubscribeButton from '$lib/subscribeButton.svelte';

	let whatDoesLiminal = false;

	import videoUrl from '$lib/videos/demo_2.mp4';
	import collabURL from '$lib/videos/Liminal-Collab-Minimal.mp4';
	import notebooksURL from '$lib/videos/auto-notebooks.mp4'
	import fileURL from '$lib/videos/file_processing_stacking.mp4'


	import posterUrl from '$lib/images/demo-screenshot.jpg';
	import collabPostUrl from '$lib/images/CollabScreenshot.png';
	import shellUrl from '$lib/images/Shell-Syncing.jpg'
	import fileposterURL from '$lib/images/FindingsScreenshot.jpg'
	import { goto } from '$app/navigation';

	let targetSection;
	let collabSection;

	function scrollToSection() {
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Liminalbios Data Network application for academic life science research"
	/>
</svelte:head>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<div class="grid grid-cols-5 gap-1 justify-evenly">
	<div
		class="col-span-5 flex flex-col md:flex-row justify-start items-center mt-4 text-center text-white p-4 sm:p-2"
	>
		<!-- Left column for the larger text -->
		<div class="md:w-1/2 text-left md:text-right md:pr-4">
			<p class="text-purple-300 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold">
				AI-Powered Research Platform for Academics
			</p>
		</div>
		<!-- Right column for the other paragraphs -->
		<div class="md:w-1/2 flex flex-col justify-start items-start text-left md:text-left md:pl-4">
			<p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
				Poor documentation and lab turnover are brutal for labs.
			</p>
			<p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
				Capture, Learn, and Leverage everything you do in the lab
			</p>
			<!-- <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">Spend less grant money</p> -->
			<!-- <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">Train new scientists faster</p> -->
			<p
				class="w-full outline outline-white rounded-lg text-purple-300 hover:cursor-pointer hover:bg-purple-300 hover:text-white
			  hover:underline p-4 transition-all duration-100 transform hover:-translate-y-1
			  mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
			>
				<a class="block" href="/signup"> I need Liminal today </a>
			</p>
		</div>
	</div>
	<div class="mt-2 col-span-5 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
		<p>
			For <span class="text-blue-400">wet</span>, <span class="text-green-400">dry</span>, or <span class="text-purple-300">hybrid</span> life science labs
		</p>
	</div>
</div>

<!-- I want something with Liminal: Capture all the research and management activity in your lab -->
<!-- Liminal: Effortlessly Research Capture -->
<!-- Liminal: Capture More With Less -->
<!-- Liminal: More Science. Less Overhead. -->
<!-- Liminal: Capture the full value of your lab. -->
<div class="pixel-divider my-16" />
<section>
	<div
		class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2"
	>
		<p class="mb-2 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
			1 Subscription to Liminal gets you <span class="text-purple-300">everything</span> for your whole lab:
		</p>
		<p class="text-purple-300 mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			Liminal: Bioinformatics
		</p>
		<Video class="w-full h-auto" controls poster={shellUrl}>
			<source src={notebooksURL} type="video/mp4" />
			Video not supported
		</Video>
	</div>
	<div
		class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2"
	>
		<p class="text-purple-300 mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			Liminal: Wet-Lab
		</p>
		<Video class="w-full h-auto" controls poster={posterUrl}>
			<source src={videoUrl} type="video/mp4" />
			Video not supported
		</Video>
	</div>
	<div
		class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2"
	>
		<p class="text-purple-300 mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			Liminal: Messy files to plot-ready data
		</p>
		<Video class="w-full h-auto" controls poster={fileposterURL}>
			<source src={fileURL} type="video/mp4" />
			Video not supported
		</Video>
	</div>
	<div
		class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2"
	>
		<p class="text-purple-300 mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			Liminal: AI
		</p>
		<p>Demos Coming Soon</p>
		<!-- <Video class="w-full h-auto" controls poster={posterUrl}>
			<source src={videoUrl} type="video/mp4" />
			Video not supported
		</Video> -->
	</div>
</section>


<div class="pixel-divider my-16" />
<section>
	<div class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
		<p class="mb-2">
			Designed specifically for the needs of PIs
		</p>
		<ul>
			<li>
				- Simple onboarding
			</li>
			<li>
				- Low complexity
			</li>
			<li>
				- Student/staff driven adoption
			</li>
			<li>
				- Low cost and no pay per seat
			</li>
		</ul>
	</div>
</section>
<div class="pixel-divider my-16" />

<section>
	<div class="col-span-5 mb-4 flex flex-col justify-center items-center text-centerp-4 sm:p-2">
		<p class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
			More Science. Less Overhead.
		</p>
	</div>
	<div class="text-white">
		<p class="mb-2 text-2xl sm:text-xl md:text-2xl lg:text-2xl">
			Liminal is a software app thats helps capture all the research and management activity in your
			lab
			<span class="italic">without</span> needing a lab manager.
		</p>
		<p class="text-purple-300 text-2xl sm:text-xl md:text-2xl lg:text-2xl">
			Designed for busy labs
			<span class="italic">without</span> extra hands or money.
		</p>

		<Table class="mt-2 text-white border border-white w-full text-lg sm:text-xl md:text-2xl">
			<tbody>
				<tr class="border-b border-white font-extrabold">
					<td class="px-4 py-2 border-r border-white">Concern</td>
					<td class="px-4 py-2 border-r">Applies to Liminal</td>
					<td class="px-4 py-2">What you should know</td>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">I need a lab manager to use it</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2"
						>Liminal is built for PI- or student-run labs with no admin overhead.</td
					>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">I don't have time for a new tool</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2"
						>Initial setup takes under 30 minutes and is primarily student-led.</td
					>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">It won't work with our past data.</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2"
						>We integrate papers, notes, shell history, and other existing data.</td
					>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">My lab isn't big enough.</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2">Liminal is designed for labs as small as 1 person.</td>
				</tr>
			</tbody>
		</Table>
	</div>
</section>

<section>
	<div class="pixel-divider my-16" />
	<div class="w-full">
		<ThreeTiers on:scrollToTarget={scrollToSection} />
	</div>
</section>

<section>
	<div
		class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2"
	>
		<div class="pixel-divider my-16" id="liminal-features" />
		<div class="mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			<p>
				Looking for collaborators? We also have a free social platform!
			</p>
		</div>
		<div
			class=" mb-8 outline outline-green-300 rounded-lg bg-black hover:bg-green-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
		>
			<button on:click={() => goto('/features#collabSection')}>
				<div class="mt-2 mb-2 text-2xl text-green-300">Liminal Collab</div>
				<div class="mb-2">
					<p>
						Social platform exclusively for researchers who are actively looking for collaborators.
					</p>
				</div>
				<hr />
			</button>

			<a
				class="mt-2 block underline hover:bg-green-600 rounded-lg px-4 py-3"
				target="_blank"
				href="https://forms.gle/tdXLDyxwhAkGd2yR9"
			>
				🚀 Sign up now for free! 🐼
			</a>
		</div>
		<Video class="w-full h-auto" controls poster={collabPostUrl}>
			<source src={collabURL} type="video/mp4" />
			Video not supported
		</Video>
		<div class="pixel-divider my-16" id="liminal-features" />
		<p class="text-white mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			<i class="fas fa-star text-yellow-400" /> Join Today
			<i class="fas fa-star text-yellow-400" />
		</p>
		<p
			class="w-full outline outline-white rounded-lg text-purple-300 hover:cursor-pointer hover:bg-purple-300 hover:text-white
			  hover:underline p-4 transition-all duration-100 transform hover:-translate-y-1
			  mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
		>
			<a class="block" href="/signup"> Join Liminal Research </a>
		</p>
		<p
			class="w-full outline outline-white rounded-lg text-purple-300 hover:bg-purple-300 hover:underline hover:text-white
	          p-4 transition-all duration-100 transform hover:-translate-y-1
			  mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
		>
			<a class="block" target="_blank" href="https://discord.gg/NHYzApB3jj">
				Join Discord Community
			</a>
		</p>
	</div>
</section>

<section class="w-full">
	<div class="pixel-divider my-16" />
	<p class="text-2xl text-white mb-4">
		Labs in academia are losing an enormous portion of their research each year due to:
	</p>
	<Table class="text-white border border-white w-full text-lg sm:text-xl md:text-2xl">
		<thead class="bg-transparent border-b border-white">
			<tr>
				<th class="px-4 py-2 border-r border-white">Event</th>
				<th class="px-4 py-2">Research Lost</th>
			</tr>
		</thead>
		<tbody>
			<tr class="border-b border-white">
				<td class="px-4 py-2 border-r border-white">Poor documentation</td>
				<td class="px-4 py-2">20-25%</td>
			</tr>
			<tr class="border-b border-white">
				<td class="px-4 py-2 border-r border-white">Student/Staff turnover</td>
				<td class="px-4 py-2">25-35%</td>
			</tr>
			<tr class="border-b border-white">
				<td class="px-4 py-2 border-r border-white">Poorly designed experiments</td>
				<td class="px-4 py-2">20-25%</td>
			</tr>
		</tbody>
	</Table>
	<p class="text-2xl text-white mt-4">
		Liminal is a data capture app designed for academic labs to retain and leverage 100% of all the
		research they do. Whether you are writing a notebook entry, updating the inventory, or adding a
		sticky note to that finnicky piece of equipment, Liminal captures it all.
	</p>
	<p class="text-2xl text-white mt-4">
		Liminal learns from everything you do, becoming your digital lab manager and expert in what you
		do. Liminal's AI features offer real-time troubleshooting, personalized learning, organization
		of all lab work, and smart parsing of old data to suggest new research dissemination options.
	</p>
</section>

<div class="pixel-divider my-16" />

<div class="grid grid-cols-5 gap-2 w-full">
	<!-- Right side -->
	<div class="justify-between bg-black col-span-5 w-full">
		<div>
			<!-- <InTheBox/>
			<div class="pixel-divider my-16"></div> -->
			<TheProblem />
			<div class="pixel-divider my-16" />
			<div class="flex rounded-lg w-full m-2 p-2 text-white">
				<div class="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full justify-evenly">
					<div class="text-white mb-12 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Frequently Asked Questions
					</div>
					<div class="border-y-2 pl-4 pr-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">What is Liminal?</p>
						<div class="text-lg">
							<p>
								Liminal is a software application designed to help <span class="text-purple-300"
									>academic scientists</span
								> get more out of their research by automatically contextualizing and connecting every
								experiment.
							</p>
							<ul class="list-disc list-inside">
								<li>Reduce research waste by storing lab activity in a context-based way</li>
								<li>Eliminate tedius and repetitive work by training your custom AI</li>
								<li>Easily combine data across multiple experiments for analysis</li>
								<li>Keep all relevant data in one spot for all your experiments</li>
								<li>Neatly keep track of all your lab activities</li>
							</ul>
						</div>
					</div>
					<!-- Security -->
					<div class="border-y-2 pl-4 pr-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">Is the data secure and who owns it?</p>
						<div class="text-lg">
							<p>
								You own your data and it is stored on secure cloud storage. We are moving towards
								allowing you to choose your own storage provider, as well as compute provider.
							</p>
							<ul class="list-disc list-inside">
								<li>Export 100% of your data at any time</li>
								<li>Connect to University-owned storage (pending)</li>
								<li>Connect to University-owned compute power (pending)</li>
								<li>Login/authenticate with University login (pending)</li>
							</ul>
						</div>
					</div>
					<!-- Who is liminal for -->
					<div class="border-y-2 pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">Who is Liminal for?</p>
						<div class="text-lg">
							<p>
								Liminal is for <span class="text-purple-300">everyone</span> involved in conducting research
								in an academic lab
							</p>
							<ul class="list-disc list-inside">
								<li>Undergraduate students</li>
								<li>Graduate students</li>
								<li>Postdocs</li>
								<li>Staff/Managers</li>
								<li>Principal investigators</li>
							</ul>
						</div>
					</div>
					<!-- The Liminal Advantage -->
					<div class="border-y-2 pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">What is the Liminal Advantage?</p>
						<div class="text-lg">
							<p>
								Double your research output without spending a single extra grant dollar or
								performing another experiment
							</p>
							<ul class="list-disc list-inside">
								<li>
									Store every aspect of your research with the full context (AKA metadata) of your
									lab attached automatically
								</li>
								<li>
									Go back to previous research and find the data you need to support your current
									work
								</li>
								<li>
									Your AI learns from everything, becoming your digital lab manager and expert in
									what you do!
								</li>
								<li>
									Onboard new scientists quicker and retain information from leaving scientists
								</li>
							</ul>
						</div>
					</div>
					<!-- Try Liminal -->
					<div class="border-y-2 pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">How can I try Liminal?</p>
						<div class="text-lg">
							<ul class="list-disc list-inside">
								<li>
									Fill out this <a
										class="text-purple-300 hover:underline"
										target="_blank"
										href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link"
										>Google Form</a
									> if you are interested in joining our waitlist
								</li>
								<li>
									Book a <a
										target="_blank"
										href="https://calendar.app.google/fAwGmDCeccJbcwKQ7"
										class="text-purple-300 hover:underline">short meeting</a
									> to personally chat with one of our founders
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="pixel-divider my-16" />
			<div class="text-white text-2xl mt-8 mb-16 text-center">
				<div class="">
					<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">Need Support or Have Questions?</p>
				</div>
				<p class=" text-white p-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
					Email:
					<a
						class="text-purple-300 transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:text-white hover:underline rounded p-2"
						href="mailto:support@liminalbios.com">support@liminalbios.com</a
					>
				</p>
				<p class="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
					Meet with a founder:
					<a
						target="_blank"
						class="text-blue transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:underline text-purple-300 hover:text-white rounded p-2"
						href="https://calendar.app.google/fAwGmDCeccJbcwKQ7">GoogleMeet</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
<div class="w-3/4 mt-2 mb-4">
	<SubscribeButton />
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
