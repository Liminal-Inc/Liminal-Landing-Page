<script lang="ts">
	import liminalLogo from '$lib/images/liminal_logo.jpeg'
	import datanetworkLogo from '$lib/images/simple-logo.png'
	import NewsFeed from './NewsFeed.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Liminalbios Data Network application for academic life science research" />
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
			<center class="text-white">The DAta NEtwork</center>
		</p>
		<!-- Top div with flexbox -->
	</div>
	<div class="grid grid-cols-5 gap-1">
		<div class="mt-4 bg-black rounded-lg col-span-1">
			<div class="m-2">
				<NewsFeed/>
			</div>
		</div>
		<!-- Right side -->
		<div class="flex justify-between mt-4 bg-black col-span-4">
			<div>
				<div class="mt-4 bg-purple-300 rounded-lg">
					<div>
						<center>
							<div class="m-4">
								<p class="text-lg text-black">				
									<!-- The DAta NEtwork is an application providing a connected data and knowledge ecosystem 
									for academic life science laboratories. Our fundamental goal aims to help labs exceed recording 
									guidelines and standards by comprehensively addressing major aspects of the lab. -->
									Everything your lab needs to manage a <span class="underline">career</span> of research and discovery.
								</p>
							</div>
							<!-- <p class="text-lg text-black">
			
								Use our platform to connect your data, knowledge, and resources to the world.
							</p> -->
							<div class="outline outline-black">
								<p class="font-extrabold underline">
									What's in the box:
								</p>
								<div class="grid grid-cols-2 grid-rows-3 gap-2 p-4 text-white ">
									<div class="bg-black rounded-lg hover:bg-gray-700"><div class="mt-2 mb-2">Electronic Notebook</div></div>
									<div class="bg-black rounded-lg hover:bg-gray-700"><div class="mt-2 mb-2">Inventory & Sample Management</div></div>
									<div class="bg-black rounded-lg hover:bg-gray-700"><div class="mt-2 mb-2">Data Inventory</div></div>
									<div class="bg-black rounded-lg hover:bg-gray-700"><div class="mt-2 mb-2">Task Manager</div></div>
									<div class="bg-black rounded-lg hover:bg-gray-700"><div class="mt-2 mb-2">Paper Database and Reviews</div></div>
									<div class="bg-black rounded-lg hover:bg-gray-700"><div class="mt-2 mb-2">Knowledge & Content Management</div></div>
								</div>
							</div>
							<p class="font-extrabold">
								Plus!
							</p>
							<ul>
								<li>Activity Feed</li>
								<li>Badges, Levels, Streaks</li>
								<li>Custom toolkits</li>
								<li>Reports & Summaries</li>
								<li>Social Interactions</li>
								<li>And more!</li>
						</center>
			
					</div>
				</div>
					<div class="mb-4 mt-4">
						<p>
							<center class="font-extrabold underline text-4xl aqua-dog">Releasing Fall 2024</center>
						</p>
					</div>
					<div class="rounded-lg">
						<center>
							<img src={datanetworkLogo} class="spinner rounded-full" alt="Spinning Data Network Logo">
							</center>
							<!-- <div class="gradient-overlay"></div> -->
							</div>
					<div class="mb-4 mt-4">
						<p>
							<center class="mt-2 text-white">Email support@liminalbios.com for inquiries</center>
						</p>
					</div>
			</div>
		</div>
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


	ul {
		color: white;
	}
	li {
		color: black;
		font-weight: bold;
	}

  .spinner {
    width: 400px; /* or the size you want */
    height: 400px; /* or the size you want */
    animation: spin 10s infinite linear; /* Adjust the duration as needed */
	background-color: white;
  }

  .aqua-dog {
      font-weight: bold;
      color: aqua;
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
