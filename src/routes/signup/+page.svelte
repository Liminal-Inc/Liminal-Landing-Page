<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (window.hbspt) {
			window.hbspt.forms.create({
				region: "na1",
				portalId: "48817868",
				formId: "0e6b6238-d9b8-49c4-85a4-30b500c43cac",
				target: "#hubspot-form"
			});
		} else {
			const script = document.createElement('script');
			script.src = 'https://js.hsforms.net/forms/v2.js';
			script.onload = () => {
				window.hbspt.forms.create({
					region: "na1",
					portalId: "48817868",
					formId: "0e6b6238-d9b8-49c4-85a4-30b500c43cac",
					target: "#hubspot-form"
				});
			};
			document.body.appendChild(script);
		}
	});
</script>

<section class="min-h-screen bg-black text-white px-4 py-12">
	<div class="max-w-3xl mx-auto bg-white text-black p-8">
		<h1 class="text-3xl font-bold mb-6">Join Liminal</h1>
		<div id="hubspot-form" class="w-full"></div>
	</div>
</section>
