<script lang="ts">
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';

	onMount(() => {
		track('Pricing Page Viewed');
	});

	function handleGetStarted() {
		track('Pricing - Get Started Clicked');
		window.location.href = '/signup';
	}
</script>

<svelte:head>
	<title>Pricing - Liminal Bioinformatics</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
			<p class="text-xl text-gray-600 mb-2">$20 per user per month</p>
			<p class="text-lg text-gray-500">Save big with longer commitments and referrals!</p>
		</div>

		<!-- Pricing Tiers -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
			<!-- Monthly Plan -->
			<div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
				<div class="text-center">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">Monthly</h3>
					<div class="mb-4">
						<span class="text-3xl font-bold text-gray-900">$20</span>
						<span class="text-gray-500">/user/month</span>
					</div>
					<p class="text-sm text-gray-500 mb-6">Pay as you go</p>
					<button
						on:click={handleGetStarted}
						class="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
					>
						Get Started
					</button>
				</div>
			</div>

			<!-- 3-Month Plan -->
			<div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
				<div class="text-center">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">3-Month Plan</h3>
					<div class="mb-2">
						<span class="text-sm text-gray-500 line-through">$60</span>
						<span class="text-green-600 font-semibold ml-2">10% Off</span>
					</div>
					<div class="mb-4">
						<span class="text-3xl font-bold text-gray-900">$54</span>
						<span class="text-gray-500">/user</span>
					</div>
					<p class="text-sm text-gray-500 mb-6">$18/month per user</p>
					<button
						on:click={handleGetStarted}
						class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
					>
						Get Started
					</button>
				</div>
			</div>

			<!-- 6-Month Plan -->
			<div class="bg-white rounded-lg shadow-lg border border-green-300 p-6 relative">
				<div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
					<span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">POPULAR</span>
				</div>
				<div class="text-center">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">6-Month Plan</h3>
					<div class="mb-2">
						<span class="text-sm text-gray-500 line-through">$120</span>
						<span class="text-green-600 font-semibold ml-2">15% Off</span>
					</div>
					<div class="mb-4">
						<span class="text-3xl font-bold text-gray-900">$102</span>
						<span class="text-gray-500">/user</span>
					</div>
					<p class="text-sm text-gray-500 mb-6">$17/month per user</p>
					<button
						on:click={handleGetStarted}
						class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
					>
						Get Started
					</button>
				</div>
			</div>

			<!-- 12-Month Plan -->
			<div class="bg-white rounded-lg shadow-lg border border-purple-300 p-6 relative">
				<div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
					<span class="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">BEST VALUE</span>
				</div>
				<div class="text-center">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">12-Month Plan</h3>
					<div class="mb-2">
						<span class="text-sm text-gray-500 line-through">$240</span>
						<span class="text-purple-600 font-semibold ml-2">20% Off</span>
					</div>
					<div class="mb-4">
						<span class="text-3xl font-bold text-gray-900">$192</span>
						<span class="text-gray-500">/user</span>
					</div>
					<p class="text-sm text-gray-500 mb-6">$16/month per user</p>
					<button
						on:click={handleGetStarted}
						class="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
					>
						Get Started
					</button>
				</div>
			</div>
		</div>

		<!-- Referral Program Section -->
		<div class="bg-gradient-to-r from-purple-600 to-green-600 rounded-xl shadow-2xl p-8 mb-12 text-white">
			<div class="text-center mb-8">
				<h2 class="text-3xl font-bold mb-4">🎉 Refer Friends & Get FREE Months!</h2>
				<p class="text-xl opacity-90">Turn your network into savings</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<!-- Left Side - Math -->
				<div class="text-center lg:text-left">
					<div class="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
						<h3 class="text-2xl font-bold mb-4">💰 The Math is Simple:</h3>
						<div class="space-y-3 text-lg">
							<div class="flex items-center justify-between">
								<span>1 Referral Purchase</span>
								<span class="font-bold">= $5 Credit</span>
							</div>
							<div class="flex items-center justify-between">
								<span>4 Referral Purchases</span>
								<span class="font-bold text-yellow-300">= FREE MONTH! 🎊</span>
							</div>
							<div class="flex items-center justify-between">
								<span>12 Referral Purchases</span>
								<span class="font-bold text-yellow-300">= 3 FREE MONTHS! 🚀</span>
							</div>
						</div>
					</div>
					
					<div class="text-center">
						<p class="text-lg font-semibold mb-2">Share your love for Liminal</p>
						<p class="opacity-90">Every colleague who purchases = money in your pocket!</p>
					</div>
				</div>

				<!-- Right Side - How It Works -->
				<div class="bg-white bg-opacity-10 rounded-lg p-6">
					<h3 class="text-xl font-bold mb-4 text-center">How It Works:</h3>
					<div class="space-y-4">
						<div class="flex items-start">
							<div class="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
								<span class="font-bold text-sm">1</span>
							</div>
							<div>
								<p class="font-semibold">Sign up for Liminal</p>
								<p class="text-sm opacity-80">Get your unique referral code</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
								<span class="font-bold text-sm">2</span>
							</div>
							<div>
								<p class="font-semibold">Share with colleagues</p>
								<p class="text-sm opacity-80">They sign up using your code</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
								<span class="font-bold text-sm">3</span>
							</div>
							<div>
								<p class="font-semibold">They purchase any plan</p>
								<p class="text-sm opacity-80">You get $5 credit instantly!</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
								<span class="font-bold text-sm text-gray-900">4</span>
							</div>
							<div>
								<p class="font-semibold text-yellow-300">Credits auto-apply to your bill</p>
								<p class="text-sm opacity-80">Watch your costs disappear!</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action -->
			<div class="text-center mt-8">
				<button
					on:click={handleGetStarted}
					class="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
				>
					Start Referring Today - Get Your Code!
				</button>
			</div>
		</div>

		<!-- Group Pricing -->
		<div class="bg-white rounded-lg shadow-lg p-8 text-center">
			<h3 class="text-2xl font-bold text-gray-900 mb-4">Enterprise & Group Pricing</h3>
			<p class="text-gray-600 mb-6">
				Need Liminal for 20+ users? We offer custom pricing and enterprise features.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="mailto:support@liminalbios.com?subject=Enterprise Pricing Inquiry"
					class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
					on:click={() => track('Enterprise Contact Clicked')}
				>
					Contact for Enterprise Pricing
				</a>
				<a
					href="mailto:support@liminalbios.com?subject=Group Pricing Quote Request"
					class="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
					on:click={() => track('Group Pricing Email Clicked')}
				>
					Request Group Quote
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* Add any custom styles here */
</style>