<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/embed/48817868.js';
		script.defer = true;
		document.body.appendChild(script);
	});
</script>

<section class="min-h-screen bg-white px-4 py-12">
	<div class="max-w-2xl mx-auto">
		<h1 class="text-2xl font-bold mb-6">Sign up for Liminal</h1>

		<!-- HubSpot Form Container -->
		<div
			class="hs-form-frame"
			data-region="na1"
			data-form-id="63448cbc-8fe5-456a-8486-af673b0deab0"
			data-portal-id="48817868"
		/>
	</div>
</section>
