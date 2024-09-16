<script lang="ts">
	import logoURL from '$lib/images/Logo-24Jul2024.png'
	import NewsFeed from './NewsFeed.svelte';
	import InTheBox from './InTheBox.svelte';
	import { Modal } from 'flowbite-svelte';
	import { 
		BookOpenSolid, CirclePlusSolid, ClipboardCheckSolid, DatabaseSolid,
		FaceGrinSolid, FileCirclePlusSolid, FolderArrowRightOutline, NewspapperSolid,
		PenSolid, UserSolid
	} from 'flowbite-svelte-icons';

	let whatIsLiminal = false;
	let whatDoesLiminal = false;
	let whatIsDifferent = false;
	let canITry = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Liminalbios Data Network application for academic life science research" />
</svelte:head>

<section>
	
	<div class="grid grid-cols-5 gap-1 justify-evenly">
		<!-- <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="liminalbios" data-description="Support me on Buy me a coffee!" data-message="" data-color="#BD5FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script> -->
		<!-- Left Logo -->
		<div class="bg-slate-300 col-span-2">
			<img src={logoURL} class="w-42 h-42" alt="Liminal Logo">
		</div>
		<div class="col-span-3 flex flex-col justify-center items-center mt-4 text-center">
			<p class="text-6xl text-white font-extrabold">Liminal</p>
			<p class="mt-2 text-2xl text-white">The Comprehensive Digital Lab Companion for Academics</p>
			<p class="text-white text-2xl mt-8">
				Like What We're Doing?
			</p>
			<p class="text-purple-300 text-2xl hover:underline">
				<a
					target="_blank"
					href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">
					Join Our Community
				</a>
			</p>
		</div>
	</div>
	<!-- Major divider -->
	<div class="pixel-divider my-8"></div>

	<div class="flex bg-slate-300 rounded-lg w-full m-2 p-2">
		<div class="grid grid-cols-2 gap-2 w-full justify-evenly">
			<button on:click={() => (whatIsLiminal = true)} class="col-span-1 rounded-lg outline-dashed hover:bg-purple-300">
				<p class="text-2xl text-center text-black cursor-pointer">What is Liminal?</p>
			</button>
			<button on:click={() => (whatDoesLiminal = true)} class="col-span-1 rounded-lg outline-dashed hover:bg-purple-300">
				<p class="text-2xl text-center text-black cursor-pointer">What does Liminal do for me?</p>
			</button>
			<button on:click={() => (whatIsDifferent = true)} class="col-span-1 rounded-lg outline-dashed hover:bg-purple-300">
				<p class="text-2xl text-center text-black cursor-pointer">How is Liminal different?</p>
			</button>
			<button on:click={() => (canITry = true)} class="col-span-1 rounded-lg outline-dashed hover:bg-purple-300">
				<p class="text-2xl text-center text-black cursor-pointer">How can I try Liminal?</p>
			</button>
		</div>
	</div>
	<!-- Some sort of break here -->
	<div class="pixel-divider my-8"></div>

	<div class="grid grid-cols-5 gap-2 w-full">
		<div class="mt-4 bg-black rounded-lg col-span-1">
			<div class="text-white text-2xl">
				News
			</div>
			<div class="m-2">
				<NewsFeed/>
			</div>
		</div>
		<!-- Right side -->
		<div class="justify-between mt-4 bg-black col-span-4 w-full">
			<div>
				<InTheBox/>
				<div class="pixel-divider my-8"></div>
					<div class="text-white text-2xl mt-8 text-center">
						<p>Interested in supporting us?</p>
						<a class="text-purple-300" target="_blank" href="https://buymeacoffee.com/liminalbios">Buy our developers a cup of coffee</a>
				
					</div>
					<div class="mb-4 mt-4">
						<p>
							<center class="font-extrabold text-2xl liminal-purple">Releasing 2025</center>
						</p>
					</div>
					<div class="mb-4 mt-4">
						<p>
							<center class="mt-2 text-white text-2xl">Email 
								<a href="mailto:support@liminalbios.com" class="text-purple-300">support@liminalbios.com</a>
								for inquiries</center>
						</p>
					</div>
			</div>
		</div>
		
	</div>
	
<Modal bind:open={whatIsLiminal} autoclose outsideclose>
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">
		  What is Liminal?
		</h3>
	  </div>
	  <div class="text-xl">
			<ul class="list-disc list-inside">
				<li>A one-stop shop for working on and consuming science</li>
				<li>A complete digital lab companion for your research needs</li>
				<li>A place to record the science and activity required for a lab to function.</li>
				<li>A place to communicate the science and activity to the whole lab.</li>
				<li>A software application made specifically for academic scientists, by academic scientists</li>
			</ul>
	  </div>
	  <div slot="footer">
		<button on:click={() => (whatIsLiminal = !whatIsLiminal)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
		  Close
		</button>
	  </div>
</Modal>

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

<Modal bind:open={whatIsDifferent} autoclose outsideclose>
	<div slot="header">
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
		  How is Liminal different?
		</h3>
	  </div>
	  <div class="text-xl">
			<ul class="list-disc list-inside">
				<li>We are solely committed to the needs of academic scientists.</li>
				<li>
					Liminal is not just a vessel to hold research data. We account for all the
					major aspects of the lab to provide <span class="font-bold">lab state</span>
					associated with any data or activity at a specific timepoint.
					We are the most comprehensive platform on the market.
				</li>
				<li>Your Liminal app will be able to communicate with every other lab on Liminal.</li>
				<li>
					Our price will be a flat, accessible subscription fee that gives you access
					to everything.
				</li>
				<li>
					We are committed to being transparent to our community, providing anyone access
					to the full details of Liminal.
				</li>
			</ul>
	  </div>
	  <div slot="footer">
		<button on:click={() => (whatIsDifferent = !whatIsDifferent)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
		  Close
		</button>
	  </div>
</Modal>

<Modal bind:open={canITry} autoclose outsideclose>
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">
		  How can I try Liminal?
		</h3>
	  </div>
	  <div class="text-xl">
			<ul class="list-disc list-inside">
				<li>Fill out this <a class="text-blue-500 underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd2gtATL3ifoL3cg_IBaxFpP96MhLZY2uy9zVTxOUwRiPcXwQ/viewform?usp=sf_link">Google Form</a> if you are interested in joining out waitlist</li>
				<li>Email support@liminalbios.com</li>
			</ul>
	  </div>
	  <div slot="footer">
		<button on:click={() => (canITry = !canITry)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
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

	.image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }


	/* ul {
		color: white;
	}
	li {
		color: black;
		font-weight: bold;
	} */

  .spinner {
    width: 400px; /* or the size you want */
    height: 400px; /* or the size you want */
    animation: spin 10s infinite linear; /* Adjust the duration as needed */
	background-color: white;
  }

  /* .aqua-dog {
      font-weight: bold;
      color: aqua;
    } */

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .pixel-hr {
    border: none;
    height: 10px; /* Adjust the height to control the thickness */
    background: linear-gradient(90deg, white 10%, transparent 10%, transparent 90%, white 90%);
    background-size: 20px 10px; /* Adjust the size of the 'pixels' */
    background-repeat: repeat;
  }
</style>
