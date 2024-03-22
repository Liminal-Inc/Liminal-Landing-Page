<script>
	import Counter from './Counter.svelte';
	import liminalLogo from '$lib/images/liminal_logo.jpeg'
	import datanetworkLogo from '$lib/images/simple-logo.png'
	import notebookLogo from '$lib/images/notebook.jpeg'
	import inventoryLogo from '$lib/images/inventory.jpeg'
	import protocolLogo from '$lib/images/protocols.jpeg'
	import dataLogo from '$lib/images/data.jpeg'
	import missionLogo from '$lib/images/missions.jpeg'
	import knowledgeLogo from '$lib/images/knowledge.jpeg'
	import socialLogo from '$lib/images/social.jpeg'
	import bookLogo from '$lib/images/books.jpeg'
	import selfLogo from '$lib/images/selfexpression.jpeg'
	import happyLogo from '$lib/images/happyLogo.jpeg'
	import { LinkedinSolid } from 'flowbite-svelte-icons';
	import SpecialAlert from '$lib/specialAlert.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex justify-between items-center">
		<div class="image-wrapper">
		  <img src={liminalLogo} class="w-64 h-64" alt="">
		  <div class="gradient-overlay"></div>
		</div>
		<!-- Top div with flexbox -->
	</div>
	<div class="flex justify-between items-center">
		<p class="text-lg text-black">
			<center>Presents</center>
		</p>
		<!-- Top div with flexbox --> 
	</div>
	<div class="flex justify-between items-center">
		<p class="text-4xl text-teal-500 font-extrabold">
			<center>The Data Network</center>
		</p>
		<!-- Top div with flexbox -->
	</div>
	<div class="flex justify-between items-center mt-4 bg-gray-500">
		<p class="text-lg text-black ">
			<center class="mb-2">
				The DAta NEtwork is an application providing a connected data and knowledge ecosystem 
				for academic life science laboratories. Our fundamental goal aims to help labs exceed recording 
				guidelines and standards by comprehensively addressing major aspects of the lab.
				we want it to be fun.
			</center>
			<br>
			<center class="font-extrabold underline text-4xl text-blue-400">Releasing Fall 2024</center>
			<br>
			<center class="mb-2">More information coming soon</center>
		</p>
		
		<!-- Top div with flexbox -->
	</div>
	<div>
		<img src={datanetworkLogo} class="spinner" alt="Spinning Data Network Logo">
		<div class="gradient-overlay"></div>
	</div>
	<div class="mt-2">
		Email support@liminalbios.com for inquiries
	</div>
	  
	<!-- <div class="mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> -->
	<!-- Middle div with 2 columns -->
		<!-- <div class="grid grid-cols-2 gap-4">
			<div class="bg-black p-4 text-white">
				Philosophy
				<ul>
					<li>A comprehensive lab solution is necessary</li>
					<li>A</li>
				</ul>
			</div>
			<div class="bg-black p-4 text-white">Goals</div>
		</div> -->
	
	<!-- Bottom div with 3 columns -->
		<!-- <div class="grid grid-cols-3 gap-4 mt-8 gradient-div">
			<div class="col-span-3">
				<p class="text-lg py-4 px-4 text-white">
					<center>
						The DAta NEtwork is broken up into 3 major nodes, which are subdivided into a couple
						modules.
					</center>
				</p>
			</div>
			<div class="bg-black text-center gradient-div">
				<p class="p-4 text-purple-500 font-bold">Data Management</p>
				<hr class="white-line">
				<div class="mt-2 mb-2 text-purple-400">
					Lab Data
						<img src={dataLogo} class="w-full" alt="">
				</div>
				<div class="mt-2 mb-2 text-purple-400">
					eNotebook
						<img src={notebookLogo} class="w-full" alt="">
				</div>
				<div class="mt-2 mb-2 text-purple-400">
					Inventory
						<img src={inventoryLogo} class="w-full" alt="">
				</div>
			</div>
			<div class="bg-black text-center gradient-div">
				<p class="p-4 text-green-600 font-bold">Knowledge Management</p>
				<hr class="white-line">
				<div class="mt-2 mb-2 text-green-400">
					Vignettes
						<img src={knowledgeLogo} class="w-full" alt="">
				</div>
				<div class="mt-2 mb-2 text-green-400">
					Tomes
						<img src={bookLogo} class="w-full" alt="">
				</div>
				<div class="mt-2 mb-2 text-green-400">
					Protocols
						<img src={protocolLogo} class="w-full" alt="">
				</div>
			</div>
			<div class="bg-black text-center gradient-div">
				<p class="p-4 text-yellow-500 font-bold">Social Management</p>
				<hr class="white-line">
				<div class="mt-2 mb-2 text-yellow-400">
					User Expression
						<img src={selfLogo} class="w-full" alt="">
				</div>
				<div class="mt-2 mb-2 text-yellow-400">
					Social Connection
						<img src={socialLogo} class="w-full" alt="">
				</div>
			</div>
		</div>
	</div> -->
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 0%, transparent 25%, rgba(152, 50, 98, 1) 100%);
    pointer-events: none; /* Make sure the overlay doesn't intercept clicks */
  }

  .gradient-div {
    /* Set initial background color */
    background-color: rgba(0, 0, 0, 1);

    /* Create linear gradient */
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(152, 50, 98, 1));

    /* Ensure the gradient fills the entire element */
    background-size: cover;

    /* Specify transition properties */
    transition: background-color 0.5s linear;
}
	ul {
		color: white;
	}
	li {
		color: white;
	}
	.white-line {
    border: none;
    height: 1px;
    background-color: white; /* Change to whatever color you prefer */
    margin: 20px 0; /* Adjust margin as needed */
  }

  .spinner {
    width: 400px; /* or the size you want */
    height: 400px; /* or the size you want */
    animation: spin 10s infinite linear; /* Adjust the duration as needed */
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
