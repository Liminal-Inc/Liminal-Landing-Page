<script lang="ts">
	import logoURL from '$lib/images/Logo-24Jul2024.png'
	import NewsFeed from './NewsFeed.svelte';
	import InTheBox from './InTheBox.svelte';
	import TheProblem from './TheProblem.svelte';
	import { Modal, Video } from 'flowbite-svelte';
	import { BookOpenSolid } from 'flowbite-svelte-icons';

	let whatDoesLiminal = false;

	import videoUrl from '$lib/videos/demo_2.mp4'
	// let raw_url = "https://drive.google.com/file/d/152c9auQFIoIoQhENT_n3zl_gCtwsBIw9/view?usp=drive_link"
	// let link_url = "https://drive.google.com/uc?export=download&id=FILE_ID"

	import posterUrl from '$lib/images/demo-screenshot.jpg'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Liminalbios Data Network application for academic life science research" />
</svelte:head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<section>
	
<div class="grid grid-cols-5 gap-1 justify-evenly">
	<div class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2">
		<!-- <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Liminal</p> -->
		
		<p class="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			Organize all your research in one place
		</p>
		
		<p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
			Better lab records, deeper insights, less work for students and PIs
		</p>
	</div>
</div>
<!-- Major divider -->
<div class="pixel-divider my-16"></div>
<div class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2">
	<Video class="w-full h-auto" controls poster={posterUrl}>
		<source src={videoUrl} type="video/mp4" />
		Video not supported
	</Video>
	<p class="text-white mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		<i class="fas fa-star text-yellow-400"></i> We are looking for early adopters! <i class="fas fa-star text-yellow-400"></i>
	</p>
	<p class="w-full outline outline-white rounded-lg text-blue-600 hover:bg-purple-300 hover:underline p-4 transition-all duration-100 transform hover:-translate-y-1 cursor-pointer mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		<a
			class="block"
			target="_blank"
			href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">
			Get early access to Liminal
		</a>
	</p>
	<p class="w-full outline outline-white rounded-lg text-blue-600 hover:bg-purple-300 hover:underline p-4 transition-all duration-100 transform hover:-translate-y-1 cursor-pointer mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		<a
			class="block"
			target="_blank"
			href="https://discord.gg/NHYzApB3jj">
			Join our Discord community
		</a>
	</p>
</div>

<div class="pixel-divider my-16" id="liminal-features"></div>

<!-- <div class="grid grid-cols-5 gap-2 w-full">
	<div class="justify-between m-2 col-span-5 w-full">
		<TheProblem/>
	</div>
</div>
<div class="pixel-divider my-16"></div> -->


<div class="grid grid-cols-5 gap-2 w-full">
	<!-- Right side -->
	<div class="justify-between bg-black col-span-5 w-full">
		<div>
			<InTheBox/>
			<div class="pixel-divider my-16"></div>
			<TheProblem/>
			<div class="pixel-divider my-16"></div>
			<div class="flex rounded-lg w-full m-2 p-2 text-white">
				<div class="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full justify-evenly">
					<div class="text-white mb-12 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Frequently Asked Questions
					</div>
					<div class="outline outline-white hover:bg-gray-700 rounded-lg pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">What is Liminal?</p>
						<div class="text-lg">
							<p>
								Liminal is a software application designed to help <span class="font-bold">students</span> and <span class="font-bold">managers</span> organize their research and become more efficient
							</p>
								<ul class="list-disc list-inside">
									<li>Stop wasting time trying to organize your data; let us do that</li>
									<li>Easily combine data across multiple experiments for analysis</li>
									<li>Keep all relevant data in one spot for all your experiments</li>
									<li>Neatly keep track of all your lab activities</li>
								</ul>
							</div>
					</div>
					<!-- Who is liminal for -->
					<div class="outline outline-white hover:bg-gray-700 rounded-lg pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">Who is Liminal for?</p>
						<div class="text-lg">
							<p>
								Liminal is for <span class="font-bold">everyone</span> involved in conducting research in an academic lab
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
					<div class="outline outline-white hover:bg-gray-700 rounded-lg pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">What the Liminal Advantage?</p>
						<div class="text-lg">
							<p>
								Connecting and organizing all parts of the lab in one app leads to higher scientific output
							</p>
							<ul class="list-disc list-inside">
								<li>Accumulate your insights on Liminal and get more out of each experiment</li>
								<li>All your experimental data and lab activity is accessible at your fingertips</li>
								<li>Eliminate having to change software platforms and stick with Liminal from experimental design to manuscript writing</li>
								<li>Reduce time for lab recording and focus on building your knowledgebase</li>
							</ul>
						</div>
					</div>
					<!-- Try Liminal -->
					<div class="outline outline-white hover:bg-gray-700 rounded-lg pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">How can I try Liminal?</p>
						<div class="text-lg">
							<p>
								I want this product!
							</p>
							<ul class="list-disc list-inside">
								<li>Fill out this <a class="text-blue-600 hover:underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">Google Form</a> if you are interested in joining out waitlist</li>
								<li>Book a <a target="_blank" href="https://calendar.app.google/fAwGmDCeccJbcwKQ7" class="text-blue-600 hover:underline">short meeting</a> to personally chat with one of our founders</li>
							</ul>
						</div>
					</div>
				</div>
				</div>
			<div class="pixel-divider my-16"></div>
				<div class="text-white text-2xl mt-8 mb-16 text-center">
					<div class="mb-16">
						<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">Interested in supporting or chatting?</p>
					</div>
					<p class="outline outline-white rounded-lg text-blue-600 p-4 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
						<center class="text-white text-2xl">Email 
							<a 
							class="transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:underline text-blue-600 rounded p-2"
							href="mailto:support@liminalbios.com" >support@liminalbios.com</a>
					</p>
					<p class="text-center outline outline-white rounded-lg text-white p-4 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Book a meeting with a founder
							<a
							target="_blank"
							class="text-blue transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:underline text-blue-600 rounded p-2"
							href="https://calendar.app.google/fAwGmDCeccJbcwKQ7" >GoogleMeet</a>
					</p>
			
				</div>
		</div>
	</div>
</div>


<Modal bind:open={whatDoesLiminal} autoclose outsideclose>
	<div slot="header">
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
		  What does Liminal do for me?
		</h3>
	  </div>
	  <div class="text-xl">
			<ul class="list-disc list-inside">
				<li>Gives your lab a central knowledgebase that grows each day</li>
        <li>Makes your research more reproducible</li>
        <li>Makes your research more accessible</li>
        <li>Allows new scientists to contribute to your knowledgebase immediately</li>
        <li>Keeps research and activity from past scientists at your fingertips</li>
			</ul>
	  </div>
	  <div slot="footer">
		<button on:click={() => (whatDoesLiminal = !whatDoesLiminal)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
		  Close
		</button>
	  </div>
</Modal>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>