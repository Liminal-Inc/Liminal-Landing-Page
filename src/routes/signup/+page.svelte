<script>
	import { onMount } from 'svelte';
	import { track } from '@vercel/analytics';

	onMount(() => {
		track('Signup Page Viewed');
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/embed/48817868.js';
		script.defer = true;
		document.body.appendChild(script);
	});
</script>

<svelte:head>
	<title>Sign Up for Liminal - Automated Bioinformatics Notebooks</title>
	<meta name="description" content="Get early access to Liminal - turn your command line into a scientific notebook in seconds. Perfect for academic labs and bioinformatics researchers." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/signup/" />
	<meta property="og:title" content="Sign Up for Liminal - Automated Bioinformatics Notebooks" />
	<meta property="og:description" content="Get early access to Liminal - turn your command line into a scientific notebook in seconds. Perfect for academic labs and bioinformatics researchers." />
	<meta property="og:image" content="https://liminalbios.com/signup-preview.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://liminalbios.com/signup/" />
	<meta property="twitter:title" content="Sign Up for Liminal - Automated Bioinformatics Notebooks" />
	<meta property="twitter:description" content="Get early access to Liminal - turn your command line into a scientific notebook in seconds. Perfect for academic labs and bioinformatics researchers." />
	<meta property="twitter:image" content="https://liminalbios.com/signup-preview.png" />

	<!-- LinkedIn specific -->
	<meta property="article:author" content="Liminal" />
</svelte:head>

<section class="min-h-screen bg-white px-4 py-12">
	<div class="max-w-2xl mx-auto">
		<!-- <h1 class="text-2xl font-bold mb-6">Sign up for Liminal</h1> -->
		<h2 class="text-2xl text-center text-green-500 italics">Current promotion for 30 days of <span class="underline">unlimited free</span> use of Liminal!</h2>

		<!-- HubSpot Form Container -->
		<div
			class="hs-form-frame"
			data-region="na1"
			data-form-id="63448cbc-8fe5-456a-8486-af673b0deab0"
			data-portal-id="48817868"
		/>
	</div>
</section>
