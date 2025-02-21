<script lang="ts">
	import logoURL from '$lib/images/Logo-24Jul2024.png'
	import NewsFeed from './NewsFeed.svelte';
	import InTheBox from './InTheBox.svelte';
	import TheProblem from './TheProblem.svelte';
	import ThreeTiers from './ThreeTiers.svelte';
	import { Modal, Video } from 'flowbite-svelte';
	import { BookOpenSolid } from 'flowbite-svelte-icons';

	let whatDoesLiminal = false;

	import videoUrl from '$lib/videos/demo_2.mp4'
	import processorUrl from '$lib/videos/file_processing_stacking.mp4'
	// let raw_url = "https://drive.google.com/file/d/152c9auQFIoIoQhENT_n3zl_gCtwsBIw9/view?usp=drive_link"
	// let link_url = "https://drive.google.com/uc?export=download&id=FILE_ID"

	import posterUrl from '$lib/images/demo-screenshot.jpg'
	import processorPosterUrl from '$lib/images/processing-screenshot.png'

	let targetSection;
	let collabSection;
    
    function scrollToSection() {
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Liminalbios Data Network application for academic life science research" />
</svelte:head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<section>

<div class="grid grid-cols-5 gap-1 justify-evenly">
  <div class="col-span-5 flex flex-col md:flex-row justify-start items-center mt-4 text-center text-white p-4 sm:p-2">
    <!-- Left column for the larger text -->
    <div class="md:w-1/2 text-left md:text-right md:pr-4">
      <p class="text-purple-300 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold">
        AI-Powered Research Platform for Academics
      </p>
    </div>
    <!-- Right column for the other paragraphs -->
    <div class="md:w-1/2 flex flex-col justify-start items-start text-left md:text-left md:pl-4">
      <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        All your research in one place
      </p>
	  <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Ai-assistant learning from your work and helping generate insights
      </p>
	  <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Write your papers & grants faster
      </p>
	  <p class="w-full outline outline-white rounded-lg text-purple-300 hover:cursor-pointer hover:bg-purple-300 hover:text-white
			  hover:underline p-4 transition-all duration-100 transform hover:-translate-y-1
			  mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		<a
			class="block"
			target="_blank"
			href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">
			Request Access to Liminal
		</a>
	</p>
    </div>
  </div>
</div>

<section>
	<div class="pixel-divider my-16"></div>
	<div class="w-full">
		<ThreeTiers on:scrollToTarget={scrollToSection}/>
	</div>
</section>


<section class="w-full">
	<div class="pixel-divider my-16"></div>
	<p class="text-2xl text-white italic">
		As funding agency budgets tighten and institutional overheads are capped, academic researchers must embrace new strategies to 
		stay ahead, becoming more competitive than ever to secure the grants that drive their work forward.
	</p>
</section>

<section bind:this={targetSection} class="w-full">
	<div class="pixel-divider my-16"></div>
	<div class="justify-between bg-black col-span-5 w-full">
		<InTheBox showMore={true}/>
	</div>
</section>


<!-- Major divider -->
<div class="pixel-divider my-16"></div>
<div class="col-span-5 flex flex-col justify-center items-center mt-4 text-center text-white p-4 sm:p-2">
	<p class="text-white mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		Connect Everything
	</p>
	<Video class="w-full h-auto" controls poster={posterUrl}>
		<source src={videoUrl} type="video/mp4" />
		Video not supported
	</Video>
	<div class="pixel-divider my-16" id="liminal-features"></div>
	<p class="text-white mt-2 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		Automate tedius file manipulation and combination
	</p>
	<Video class="w-full h-auto" controls poster={processorPosterUrl}>
		<source src={processorUrl} type="video/mp4" />
		Video not supported
	</Video>
	<div class="pixel-divider my-16" id="liminal-features"></div>
	<p class="text-white mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		<i class="fas fa-star text-yellow-400"></i> We are looking for early adopters! <i class="fas fa-star text-yellow-400"></i>
	</p>
	<p class="w-full outline outline-white rounded-lg text-purple-300 hover:cursor-pointer hover:bg-purple-300 hover:text-white
			  hover:underline p-4 transition-all duration-100 transform hover:-translate-y-1
			  mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		<a
			class="block"
			target="_blank"
			href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">
			Get early access to Liminal
		</a>
	</p>
	<p class="w-full outline outline-white rounded-lg text-purple-300 hover:bg-purple-300 hover:underline hover:text-white
	          p-4 transition-all duration-100 transform hover:-translate-y-1
			  mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
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
			<!-- <InTheBox/>
			<div class="pixel-divider my-16"></div> -->
			<TheProblem/>
			<div class="pixel-divider my-16"></div>
			<div class="flex rounded-lg w-full m-2 p-2 text-white">
				<div class="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full justify-evenly">
					<div class="text-white mb-12 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Frequently Asked Questions
					</div>
					<div class="border-y-2 pl-4 pr-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">What is Liminal?</p>
						<div class="text-lg">
							<p>
								Liminal is a software application designed to help <span class="text-purple-300">academic scientists</span> organize and connect all parts of their research to become more efficient scientists
							</p>
								<ul class="list-disc list-inside">
									<li>Stop wasting time trying to organize your data; let us do that</li>
									<li>Eliminate tedius and repetitive work</li>
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
								You own your data and it is stored on secure cloud storage. We are moving towards allowing you to choose your own storage provider, as well as compute provider.
							</p>
								<ul class="list-disc list-inside">
									<li>Export 100% of your data at any time</li>
									<li>Connect to University-owned storage</li>
									<li>Connect to University-owned compute power</li>
									<li>Login/authenticate with University login</li>
								</ul>
							</div>
					</div>
					<!-- Who is liminal for -->
					<div class="border-y-2 pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">Who is Liminal for?</p>
						<div class="text-lg">
							<p>
								Liminal is for <span class="text-purple-300">everyone</span> involved in conducting research in an academic lab
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
					<div class="border-y-2 pl-4 pb-2">
						<p class="text-2xl mt-4 font-extrabold">How can I try Liminal?</p>
						<div class="text-lg">
							<ul class="list-disc list-inside">
								<li>Fill out this <a class="text-purple-300 hover:underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">Google Form</a> if you are interested in joining our waitlist</li>
								<li>Book a <a target="_blank" href="https://calendar.app.google/fAwGmDCeccJbcwKQ7" class="text-purple-300 hover:underline">short meeting</a> to personally chat with one of our founders</li>
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
					<p class="border-y-2 text-white p-4 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Email 
							<a 
							class="text-purple-300 transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:text-white hover:underline rounded p-2"
							href="mailto:support@liminalbios.com" >support@liminalbios.com</a>
					</p>
					<p class="text-center border-y-2 text-white p-4 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
						Book a meeting with a founder
							<a
							target="_blank"
							class="text-blue transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:underline text-purple-300 hover:text-white rounded p-2"
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
