<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let email = '';
	let customerData = null;
	let loading = false;
	let error = '';
	let selectedPlan = '';
	let processingPayment = false;

	// Get email from URL params if available
	onMount(() => {
		const urlEmail = $page.url.searchParams.get('email');
		if (urlEmail) {
			email = urlEmail;
			loadCustomerData();
		}
	});

	async function loadCustomerData() {
		if (!email) return;

		loading = true;
		error = '';

		try {
			const response = await fetch(`/api/payment/collect?email=${encodeURIComponent(email)}`);
			const data = await response.json();

			if (data.success) {
				customerData = data;
			} else {
				error = data.error || 'Failed to load customer data';
			}
		} catch (err) {
			error = 'Network error loading customer data';
		} finally {
			loading = false;
		}
	}

	async function processPayment() {
		if (!selectedPlan || !email) return;

		processingPayment = true;
		error = '';

		try {
			const response = await fetch('/api/payment/collect', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email,
					paymentPlan: selectedPlan
				})
			});

			const data = await response.json();

			if (data.success) {
				// Redirect to Stripe payment page with client secret
				const paymentUrl = `/payment/checkout?client_secret=${data.paymentIntent.clientSecret}&amount=${data.paymentIntent.amount}&plan=${selectedPlan}&email=${encodeURIComponent(email)}`;
				window.location.href = paymentUrl;
			} else {
				error = data.error || 'Payment processing failed';
			}
		} catch (err) {
			error = 'Network error processing payment';
		} finally {
			processingPayment = false;
		}
	}

	function formatCurrency(amount) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(amount);
	}
</script>

<svelte:head>
	<title>Payment Portal - Liminal</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-8">
			<h1 class="text-3xl font-bold text-gray-900">Payment Portal</h1>
			<p class="mt-2 text-gray-600">Manage your Liminal subscription and referral credits</p>
		</div>

		{#if !customerData}
			<!-- Email Input -->
			<div class="bg-white rounded-lg shadow p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">Enter Your Email</h2>
				<div class="flex gap-4">
					<input
						type="email"
						bind:value={email}
						placeholder="your@email.com"
						class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
					/>
					<button
						on:click={loadCustomerData}
						disabled={loading || !email}
						class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
					>
						{loading ? 'Loading...' : 'View Account'}
					</button>
				</div>
			</div>
		{/if}

		{#if error}
			<div class="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
				<p class="text-red-800">{error}</p>
			</div>
		{/if}

		{#if customerData}
			<!-- Customer Info -->
			<div class="bg-white rounded-lg shadow p-6 mb-6">
				<h2 class="text-xl font-semibold mb-4">Account Information</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<p class="text-sm text-gray-600">Customer</p>
						<p class="font-medium">{customerData.customer.name}</p>
						<p class="text-sm text-gray-500">{customerData.customer.email}</p>
					</div>
					<div>
						<p class="text-sm text-gray-600">Available Credits</p>
						<p class="font-medium text-green-600">
							{formatCurrency(customerData.customer.totalCredits)}
						</p>
						<p class="text-sm text-gray-500">
							{customerData.customer.availableCredits} referral credits
						</p>
					</div>
				</div>
			</div>

			<!-- Pricing Options -->
			<div class="bg-white rounded-lg shadow p-6">
				<h2 class="text-xl font-semibold mb-4">Choose Your Plan</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{#each Object.entries(customerData.pricing) as [planKey, plan]}
						<div
							class="border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors"
							class:border-blue-500={selectedPlan === planKey}
							class:bg-blue-50={selectedPlan === planKey}
							on:click={() => (selectedPlan = planKey)}
						>
							<div class="text-center">
								<h3 class="font-semibold text-lg">{plan.description}</h3>

								{#if plan.originalAmount && plan.originalAmount !== plan.amount}
									<p class="text-sm text-gray-500 line-through">
										{formatCurrency(plan.originalAmount)}
									</p>
								{/if}

								<p class="text-2xl font-bold text-gray-900">{formatCurrency(plan.amount)}</p>

								{#if customerData.customer.totalCredits > 0}
									<div class="mt-2 pt-2 border-t">
										<p class="text-sm text-green-600">After credits:</p>
										<p class="text-xl font-bold text-green-600">
											{formatCurrency(plan.finalAmount)}
										</p>
										{#if plan.finalAmount === 0}
											<p class="text-xs text-green-600">FREE!</p>
										{/if}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>

				{#if selectedPlan}
					<div class="mt-6 p-4 bg-gray-50 rounded-lg">
						<h3 class="font-semibold mb-2">Payment Summary</h3>
						<div class="space-y-1 text-sm">
							<div class="flex justify-between">
								<span>Plan Amount:</span>
								<span>{formatCurrency(customerData.pricing[selectedPlan].amount)}</span>
							</div>
							{#if customerData.customer.totalCredits > 0}
								<div class="flex justify-between text-green-600">
									<span>Referral Credits:</span>
									<span
										>-{formatCurrency(
											Math.min(
												customerData.customer.totalCredits,
												customerData.pricing[selectedPlan].amount
											)
										)}</span
									>
								</div>
								<hr class="my-2" />
								<div class="flex justify-between font-semibold">
									<span>Total Due:</span>
									<span>{formatCurrency(customerData.pricing[selectedPlan].finalAmount)}</span>
								</div>
							{/if}
						</div>

						<button
							on:click={processPayment}
							disabled={processingPayment}
							class="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 font-semibold"
						>
							{processingPayment
								? 'Processing...'
								: customerData.pricing[selectedPlan].finalAmount === 0
								? 'Claim Free Subscription'
								: 'Proceed to Payment'}
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Add any custom styles here */
</style>
