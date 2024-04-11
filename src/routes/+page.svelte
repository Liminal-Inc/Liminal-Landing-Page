<script>
	import Counter from './Counter.svelte';
	import liminalLogo from '$lib/images/liminal_logo.jpeg'
	import datanetworkLogo from '$lib/images/simple-logo.png'
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
		  <!-- <div class="gradient-overlay"></div> -->
		</div>
		<!-- Top div with flexbox -->
	</div>
	<div class="flex justify-between items-center">
		<p class="text-lg text-purple-500">
			<center>Presents</center>
		</p>
		<!-- Top div with flexbox --> 
	</div>
	<div class="flex justify-between items-center">
		<p class="text-6xl text-white font-extrabold">
			<center>The Data Network</center>
		</p>
		<!-- Top div with flexbox -->
	</div>
	<div class="flex justify-between items-center mt-4 bg-purple-300 rounded-lg">
		<p class="text-lg text-black ">
			<center class="mb-2 mt-2">
				The DAta NEtwork is an application providing a connected data and knowledge ecosystem 
				for academic life science laboratories. Our fundamental goal aims to help labs exceed recording 
				guidelines and standards by comprehensively addressing major aspects of the lab.
			</center>
			
		</p>
		
		<!-- Top div with flexbox -->
	</div>
	<div class="flex justify-between items-center">
		<p>
			<!-- <center class="mb-2 text-white">More information coming soon</center> -->
		</p>
	<!-- Top div with flexbox -->
	</div>
	<div class="flex justify-between items-center mb-4 mt-4">
			<p>
				<center class="font-extrabold underline text-4xl text-blue-400">Releasing Fall 2024</center>
			</p>
		<!-- Top div with flexbox -->
	</div>
	<div class="rounded-lg">
		<img src={datanetworkLogo} class="spinner rounded-full" alt="Spinning Data Network Logo">
		<!-- <div class="gradient-overlay"></div> -->
	</div>
	<div class="mt-2">
		Email support@liminalbios.com for inquiries
	</div>



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
	background-color: white;
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
