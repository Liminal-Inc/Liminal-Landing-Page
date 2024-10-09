<script lang="ts">
	import { onMount } from 'svelte';
  
	let videoElement: HTMLVideoElement;
  
	onMount(() => {
	  if (videoElement) {
		videoElement.play();
	  }
	});
  </script>
  
  <svelte:head>
	<title>Liminal - Empowering Academic Research</title>
  </svelte:head>
  

  
  
  <section class="bg-gradient-to-br from-primary to-secondary text-white py-20 relative overflow-hidden">
	<!-- Add animated shapes in the background -->
	<div class="absolute inset-0 overflow-hidden">
	  <div class="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl animate-blob"></div>
	  <div class="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
	</div>
	
	<div class="container mx-auto text-center relative z-10">
	  <h1 class="text-6xl font-heading font-bold mb-6 tracking-tight">
		A digital science workshop for academics
	  </h1>
	  <p class="text-xl mb-8 max-w-2xl mx-auto">
		Better lab recording and insights with less work for students and PIs.
		Enabling labs and individual scientists across the world to work together. We <span class="text-accent">connect</span> each note, piece of equipment, conclusion, activity, and user into an explorable network
	  </p>
  
	  <div class="flex justify-center gap-4">
		<a href="/features" class="btn text-lg">Explore Features</a>
		<a href="/demo" class="btn-secondary text-lg">Join the Waitlist</a>
	  </div>
	</div>
  </section>
  
  <section class="py-16">
	<div class="container mx-auto">
	  <div class="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
		<video bind:this={videoElement} controls poster="/video-poster.jpg" class="w-full">
		  <source src="/demo-video.mp4" type="video/mp4">
		  Your browser does not support the video tag.
		</video>
	  </div>
	</div>
  </section>
  
  
  <section class="bg-gradient-to-br from-primary to-secondary py-16">
	<div class="container mx-auto">
	  <p class="text-xl mb-8 max-w-2xl mx-auto">Calling early adopters</p>
	  We are looking for early adopters 
	  <a href="/demo" class="btn-secondary text-lg">Join the waitlist</a>
	  <p>we would love to talk with people who desparlety need help maintaining their lab and research. send us an email with your problems</p>
	</div>
  </section>
  
  
  <section class="bg-surface py-16">
	<div class="container mx-auto">
	  <h2 class="text-3xl font-heading font-bold text-center mb-12">Features Overview</h2>
	  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		<div class="bg-white p-6 rounded-lg shadow-md">
		  <h3 class="text-xl font-bold mb-4 text-primary">Smart and Connected Lab Components</h3>
		  <p>Notebooks, Inventory, Papers, Data Analysis, Tasks</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow-md">
		  <h3 class="text-xl font-bold mb-4 text-primary">Recording and tracking</h3>
		  <p>Keeps research and activity from past scientists at your fingertips, with fully explorable context/connections</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow-md">
		  <h3 class="text-xl font-bold mb-4 text-primary">Career Oriented</h3>
		  <p>Maintain connections to your research as you changes roles and labs</p>
		</div>
	  </div>
	  <div class="text-center mt-12">
		<a href="/features" class="btn text-lg">Explore Detailed Features</a>
	  </div>
	</div>
  </section>
  
  
  <section class="py-16 bg-white">
	<div class="container mx-auto">
	  <h2 class="text-3xl font-heading font-bold text-center mb-12">Our Goal</h2>
	  <p>We intend for Liminal to be the digital place you go to daily to consume and work on science
		. We think our app is extermely useful for labs that can't afford a lab manager, and for making labs more accessible for students.
		For more background, read our manifesto and our manifestation plans</p>
	</div>
  </section>
  
  
  
  <section class="py-16 bg-white">
	<div class="container mx-auto">
	  <h2 class="text-3xl font-heading font-bold text-center mb-12">FAQ</h2>
	  what is liminal
	  we haven't seen anything that currently exists that is comparable to our vision for liminal. but to combine a few products and services you may be familiar with:     LinkedIn + LIMS + zotero + microsoft office / google workspace + github + wikipedia
	  if you know of something, <a class="text-secondary">let us know</a>
  
	  A software application made specifically for academic scientists, by academic scientists:
	  A one-stop shop for working on and consuming science
  A complete digital lab companion for your research needs
  A place to record the science and activity required for a lab to function.
  A place to communicate the science and activity to the whole lab.
  
  
  
	  how is liminnal different 
	  Liminal is not just a vessel to hold research data. We account for all the major aspects of the lab to provide lab state associated with any data or activity at a specific timepoint. We are the most comprehensive platform on the market.
  Your Liminal app will be able to communicate with every other lab on Liminal.
  
	  we also encapsulate the life cycle of research. we arent just your wet-lab and dry-lab experimentation, but the research you consume and the knowledge you produce.
	</div>
  </section>
  