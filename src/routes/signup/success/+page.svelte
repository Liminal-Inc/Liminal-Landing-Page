<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { track } from '@vercel/analytics';

	let customerData = null;
	let loading = true;
	let error = '';

	onMount(async () => {
		track('Signup Success Page Viewed');

		// Get customer data from URL params
		const email = $page.url.searchParams.get('email');
		const referralCode = $page.url.searchParams.get('code');
		const customerName = $page.url.searchParams.get('name');

		if (email && referralCode && customerName) {
			customerData = {
				email,
				name: decodeURIComponent(customerName),
				referralCode,
				referralLink: `${window.location.origin}/signup?ref=${referralCode}`
			};
			loading = false;
		} else {
			error = 'Missing signup information. Please contact support.';
			loading = false;
		}
	});

	function copyReferralLink() {
		if (customerData?.referralLink) {
			navigator.clipboard.writeText(customerData.referralLink);
			track('Referral Link Copied');

			// Show a brief success message
			const button = document.getElementById('copy-button');
			const originalText = button.textContent;
			button.textContent = 'Copied!';
			button.classList.add('bg-green-600');

			setTimeout(() => {
				button.textContent = originalText;
				button.classList.remove('bg-green-600');
			}, 2000);
		}
	}

	function goToPayment() {
		track('Proceed to Payment Clicked', { source: 'signup_success' });
		window.location.href = `/payment?email=${encodeURIComponent(customerData.email)}`;
	}

	function shareOnTwitter() {
		const text = encodeURIComponent(
			`Just signed up for @LiminalBios - an amazing tool that turns command-line history into structured lab notebooks! Check it out:`
		);
		const url = encodeURIComponent(customerData.referralLink);
		const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

		track('Social Share Clicked', { platform: 'twitter' });
		window.open(twitterUrl, '_blank');
	}

	function shareOnLinkedIn() {
		const url = encodeURIComponent(customerData.referralLink);
		const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

		track('Social Share Clicked', { platform: 'linkedin' });
		window.open(linkedinUrl, '_blank');
	}

	let copyMessage = '';
	let copyTimeout = null;

	function copyReferralCode() {
		if (navigator.clipboard && window.isSecureContext) {
			navigator.clipboard.writeText(customerData.referralCode).then(() => {
				showCopyMessage('Referral code copied!');
				track('Referral Code Copied', { code: customerData.referralCode });
			}).catch(() => {
				fallbackCopy(customerData.referralCode);
			});
		} else {
			fallbackCopy(customerData.referralCode);
		}
	}

	function fallbackCopy(text) {
		const textArea = document.createElement('textarea');
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try {
			document.execCommand('copy');
			showCopyMessage('Referral code copied!');
			track('Referral Code Copied', { code: customerData.referralCode });
		} catch (err) {
			showCopyMessage('Failed to copy - please select and copy manually');
		}
		document.body.removeChild(textArea);
	}

	function showCopyMessage(message) {
		copyMessage = message;
		if (copyTimeout) clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => {
			copyMessage = '';
		}, 2000);
	}
</script>

<svelte:head>
	<title>Welcome to Liminal! - Next Steps</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if loading}
			<div class="text-center">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto" />
				<p class="mt-4 text-gray-600">Loading your account information...</p>
			</div>
		{:else if error}
			<div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
				<h1 class="text-2xl font-bold text-red-800 mb-2">Oops!</h1>
				<p class="text-red-600">{error}</p>
				<a
					href="/signup"
					class="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
				>
					Back to Signup
				</a>
			</div>
		{:else if customerData}
			<!-- Success Content -->
			<div class="text-center mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">30-Day Trial Account Created!</h2>
				<a 
					href="https://shellsync.liminalbios.com/" 
					target="_blank"
					class="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
					on:click={() => track('Trial Account - App Launch Clicked')}
				>
					<svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					Launch Liminal Sync
				</a>
			</div>

			<!-- Activate Full Account CTA -->
			<div
				class="bg-gradient-to-r from-purple-600 to-green-600 rounded-lg shadow-lg p-6 mb-6 text-center text-white"
			>
				<h1 class="text-2xl font-bold mb-2">🚀 Lock in 20% Savings - Upgrade to Annual Now!</h1>
				<!-- <p class="text-lg mb-4">Your 30-day trial is ready, but unlock everything immediately:</p> -->
				<button
					on:click={goToPayment}
					class="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
				>
					Choose Plan to Secure &rightarrow;
				</button>
				<p class="text-sm mt-2 opacity-90">
					Save big by paying in advance!
				</p>
			</div>

			<!-- Your Referral Code Section -->
			<div class="bg-white rounded-lg shadow-lg p-6 mb-6">
				<h2 class="text-2xl font-bold text-red-600 mb-4 text-center">
					🚨 IMPORTANT: Your Money-Making Referral Code 💰
				</h2>

				<div 
					class="bg-gray-50 rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-100 transition-colors border-2 border-dashed border-gray-300 hover:border-green-400 relative"
					on:click={copyReferralCode}
					on:keydown={(e) => e.key === 'Enter' && copyReferralCode()}
					tabindex="0"
					role="button"
					aria-label="Click to copy referral code"
				>
					<div class="text-center">
						<div class="flex items-center justify-center mb-2">
							<svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
							</svg>
							<p class="text-sm text-gray-600">Save this referral code</p>
						</div>
						<p class="text-2xl font-bold text-green-600 font-mono">{customerData.referralCode}</p>
						
						{#if copyMessage}
							<div class="absolute inset-0 flex items-center justify-center bg-green-100 bg-opacity-90 rounded-lg">
								<div class="flex items-center text-green-700 font-medium">
									<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									{copyMessage}
								</div>
							</div>
						{/if}
					</div>
				</div>

				<div class="bg-blue-50 rounded-lg p-4 mb-4">
					<p class="text-sm text-gray-600 mb-2">Your referral link:</p>
					<div class="flex items-center space-x-2">
						<input
							type="text"
							value={customerData.referralLink}
							readonly
							class="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-mono"
						/>
						<button
							id="copy-button"
							on:click={copyReferralLink}
							class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
						>
							Copy Link
						</button>
					</div>
				</div>

				<div class="text-center mb-4">
					<div class="bg-green-50 border border-green-200 rounded-lg p-4">
						<p class="text-lg font-bold text-green-800 mb-2">💰 Earn $5 for Every Purchase!</p>
						<p class="text-sm text-green-700 mb-1">
							<strong>Here's how it works:</strong>
						</p>
						<ul class="text-sm text-green-700 text-left max-w-md mx-auto space-y-1">
							<li>✅ Someone signs up using your referral code</li>
							<li>📋 They choose any plan and complete payment</li>
							<li>💰 You get $5 credit applied to your account!</li>
						</ul>
						<p class="text-xs text-green-600 mt-3">
							<em>Credits are awarded only when referred users purchase a plan</em>
						</p>
					</div>
				</div>

				<!-- Social Sharing -->
				<div class="flex justify-center space-x-4">
					<button
						on:click={shareOnTwitter}
						class="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition-colors"
					>
						<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
						Share on Twitter
					</button>

					<button
						on:click={shareOnLinkedIn}
						class="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
					>
						<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
						Share on LinkedIn
					</button>
				</div>
			</div>

			<!-- Trial Information -->
			<div class="bg-gray-50 rounded-lg p-6 text-center">
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Your Trial Details</h3>
				<p class="text-gray-600 mb-4">
					Your 30-day trial includes full access to Liminal. You can start using it immediately, but
					we recommend activating your full account to secure your data and get the best pricing.
				</p>

				<div class="text-sm text-gray-500">
					<p>
						Questions? Email us at <a
							href="mailto:support@liminalbios.com"
							class="text-green-600 hover:underline">support@liminalbios.com</a
						>
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Add any additional custom styles here */
</style>
