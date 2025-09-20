<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { track } from '@vercel/analytics';
	import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from '$env/static/public';

	let stripe = null;
	let elements = null;
	let paymentElement = null;
	let loading = true;
	let processing = false;
	let error = '';
	let paymentSucceeded = false;

	let clientSecret = '';
	let amount = 0;
	let plan = '';
	let email = '';

	onMount(async () => {
		// Get URL parameters
		clientSecret = $page.url.searchParams.get('client_secret');
		amount = parseFloat($page.url.searchParams.get('amount')) || 0;
		plan = $page.url.searchParams.get('plan') || '';
		email = $page.url.searchParams.get('email') || '';

		if (!clientSecret) {
			error = 'Invalid payment session. Please try again.';
			loading = false;
			return;
		}

		track('Payment Checkout Page Viewed', { plan, amount });

		console.log('Stripe publishable key:', PUBLIC_STRIPE_PUBLISHABLE_KEY);

		try {
			// Load Stripe
			console.log('Loading Stripe module...');
			const stripeModule = await import('@stripe/stripe-js');
			console.log('Stripe module loaded, initializing...');
			stripe = await stripeModule.loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);

			if (!stripe) {
				throw new Error('Failed to load Stripe');
			}
			console.log('Stripe loaded successfully');

			// Create elements
			console.log('Creating Stripe elements...');
			elements = stripe.elements({
				clientSecret: clientSecret,
				appearance: {
					theme: 'stripe',
					variables: {
						colorPrimary: '#16a34a' // Green color to match your brand
					}
				}
			});
			console.log('Stripe elements created');

			// Create payment element
			console.log('Creating payment element...');
			paymentElement = elements.create('payment');
			console.log('Payment element created');
			
			// Wait for DOM to be ready before mounting
			console.log('Waiting for DOM...');
			loading = false; // Set loading to false first to render the DOM
			await new Promise(resolve => setTimeout(resolve, 100));
			
			console.log('Attempting to mount payment element...');
			const paymentElementDiv = document.getElementById('payment-element');
			console.log('Payment element div found:', !!paymentElementDiv);
			
			if (paymentElementDiv) {
				paymentElement.mount('#payment-element');
				console.log('Payment element mounted successfully');
			} else {
				throw new Error('Payment element div not found');
			}
		} catch (err) {
			console.error('Stripe initialization error:', err);
			error = 'Payment system initialization failed. Please try again.';
			loading = false;
		}
	});

	async function handleSubmit(event) {
		event.preventDefault();

		if (!stripe || !elements) {
			error = 'Payment system not ready. Please try again.';
			return;
		}

		processing = true;
		error = '';

		track('Payment Submit Clicked', { plan, amount });

		try {
			const { error: submitError } = await stripe.confirmPayment({
				elements,
				confirmParams: {
					return_url: `${window.location.origin}/payment/success?plan=${plan}&amount=${amount}`
				}
			});

			if (submitError) {
				if (submitError.type === 'card_error' || submitError.type === 'validation_error') {
					error = submitError.message;
				} else {
					error = 'An unexpected error occurred.';
				}

				track('Payment Error', {
					plan,
					amount,
					error: submitError.type,
					message: submitError.message
				});
			}
		} catch (err) {
			console.error('Payment confirmation error:', err);
			error = 'Payment processing failed. Please try again.';

			track('Payment Processing Error', { plan, amount });
		} finally {
			processing = false;
		}
	}

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
	<title>Complete Payment - Liminal</title>
	<script src="https://js.stripe.com/v3/"></script>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Back Button -->
		<div class="mb-6">
			<a
				href={email ? `/payment?email=${encodeURIComponent(email)}` : '/payment'}
				class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
			>
				<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Back to Plan Selection
			</a>
		</div>

		<!-- Header -->
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold text-gray-900">Complete Your Payment</h1>
			<p class="mt-2 text-gray-600">Secure payment powered by Stripe</p>
		</div>

		{#if loading}
			<!-- Loading State -->
			<div class="bg-white rounded-lg shadow p-8 text-center">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4" />
				<p class="text-gray-600">Setting up secure payment...</p>
			</div>
		{:else if error}
			<!-- Error State -->
			<div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
				<h2 class="text-xl font-semibold text-red-800 mb-2">Payment Error</h2>
				<p class="text-red-600 mb-4">{error}</p>
				<a
					href={email ? `/payment?email=${encodeURIComponent(email)}` : '/payment'}
					class="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
				>
					Back to Payment Options
				</a>
			</div>
		{:else}
			<!-- Payment Form -->
			<div class="bg-white rounded-lg shadow p-8">
				<!-- Order Summary -->
				<div class="mb-6 p-4 bg-gray-50 rounded-lg">
					<h3 class="font-semibold text-lg mb-2">Order Summary</h3>
					<div class="flex justify-between items-center">
						<span>{getPlanDisplayName(plan)} - Liminal Bioinformatics</span>
						<span class="font-semibold text-lg">{formatCurrency(amount)}</span>
					</div>
				</div>

				<!-- Payment Form -->
				<form on:submit={handleSubmit}>
					<div id="payment-element" class="mb-6">
						<!-- Stripe Elements will create form elements here -->
					</div>

					{#if error}
						<div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
							<p class="text-red-800 text-sm">{error}</p>
						</div>
					{/if}

					<button
						type="submit"
						disabled={processing}
						class="w-full bg-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						{processing ? 'Processing...' : `Pay ${formatCurrency(amount)}`}
					</button>
				</form>

				<!-- Security Notice -->
				<div class="mt-6 text-center text-sm text-gray-500">
					<p>🔒 Your payment information is encrypted and secure</p>
					<p>Powered by Stripe • No card details stored on our servers</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Stripe Elements styles */
	#payment-element {
		min-height: 40px;
	}
</style>
