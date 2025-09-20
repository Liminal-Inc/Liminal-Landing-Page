<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { track } from '@vercel/analytics';

	let plan = '';
	let amount = 0;
	let paymentIntent = '';
	let loading = true;

	onMount(() => {
		// Get URL parameters
		plan = $page.url.searchParams.get('plan') || '';
		amount = parseFloat($page.url.searchParams.get('amount')) || 0;
		paymentIntent = $page.url.searchParams.get('payment_intent') || '';
		const redirectStatus = $page.url.searchParams.get('redirect_status') || '';

		// Track successful payment
		if (redirectStatus === 'succeeded') {
			track('Payment Completed Successfully', { plan, amount, paymentIntent });
		}

		loading = false;
	});

	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}

	function getPlanDisplayName(plan) {
		const plans = {
			monthly: 'Monthly Plan',
			'3month': '3-Month Plan',
			'6month': '6-Month Plan',
			'12month': '12-Month Plan'
		};
		return plans[plan] || plan;
	}
</script>

<svelte:head>
	<title>Payment Successful - Liminal</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if loading}
			<div class="bg-white rounded-lg shadow p-8 text-center">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4" />
				<p class="text-gray-600">Processing payment confirmation...</p>
			</div>
		{:else}
			<!-- Success Message -->
			<div class="bg-white rounded-lg shadow p-8 text-center">
				<!-- Success Icon -->
				<div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
					<svg
						class="h-8 w-8 text-green-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>

				<h1 class="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
				<p class="text-lg text-gray-600 mb-8">
					Thank you for your purchase. Your Liminal subscription is now active.
				</p>

				<!-- Order Details -->
				<div class="bg-gray-50 rounded-lg p-6 mb-8">
					<h2 class="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
					<div class="space-y-2">
						<div class="flex justify-between">
							<span class="text-gray-600">Plan:</span>
							<span class="font-medium">{getPlanDisplayName(plan)}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-gray-600">Amount Paid:</span>
							<span class="font-medium">{formatCurrency(amount)}</span>
						</div>
						{#if paymentIntent}
							<div class="flex justify-between">
								<span class="text-gray-600">Payment ID:</span>
								<span class="font-mono text-sm text-gray-500">{paymentIntent}</span>
							</div>
						{/if}
					</div>
				</div>

				<!-- Next Steps -->
				<div class="text-left mb-8">
					<h3 class="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
					<ul class="space-y-2 text-gray-600">
						<li class="flex items-start">
							<svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							You'll receive a confirmation email shortly
						</li>
						<li class="flex items-start">
							<svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							Your account has been upgraded to full access
						</li>
						<li class="flex items-start">
							<svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
							</svg>
							Access the Liminal app with your registered email
						</li>
					</ul>
				</div>

				<!-- Action Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="https://shellsync.liminalbios.com/"
						target="_blank"
						class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
					>
						<svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
						Launch Liminal App
					</a>
					<a
						href="/"
						class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
					>
						Return to Homepage
					</a>
				</div>

				<!-- Support -->
				<div class="mt-8 pt-6 border-t border-gray-200">
					<p class="text-sm text-gray-500">
						Need help? Contact us at
						<a href="mailto:support@liminalbios.com" class="text-green-600 hover:text-green-700">
							support@liminalbios.com
						</a>
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Add any custom styles here */
</style>