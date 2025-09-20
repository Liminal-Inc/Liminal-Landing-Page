<script>
	import { onMount } from 'svelte';
	import { track } from '@vercel/analytics';
	import { page } from '$app/stores';

	let formData = {
		firstName: '',
		lastName: '',
		email: '',
		institution: '',
		role: '',
		teamEmails: '',
		teamSize: 1,
		accountType: 'trial',
		heardAbout: '',
		referralCode: '',
		utmSource: '',
		utmMedium: '',
		utmCampaign: ''
	};

	let isSubmitting = false;
	let submitMessage = '';

	onMount(() => {
		track('Signup Page Viewed');

		// Capture URL parameters for referral tracking
		const urlParams = new URLSearchParams(window.location.search);
		formData.referralCode = urlParams.get('ref') || '';
		formData.utmSource = urlParams.get('utm_source') || '';
		formData.utmMedium = urlParams.get('utm_medium') || '';
		formData.utmCampaign = urlParams.get('utm_campaign') || '';

		// Keep HubSpot form as backup
		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/embed/48817868.js';
		script.defer = true;
		document.body.appendChild(script);
	});

	async function handleSubmit() {
		isSubmitting = true;
		submitMessage = '';

		try {
			track('Signup Form Submitted', {
				referral_code: formData.referralCode,
				utm_source: formData.utmSource
			});

			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (response.ok) {
				track('Signup Form Success');

				// Always redirect to success page (no more advance payment from signup)
				track('Redirecting to Success Page');
				const customerName = encodeURIComponent(`${formData.firstName} ${formData.lastName}`);
				const successUrl = `/signup/success?email=${encodeURIComponent(formData.email)}&code=${
					result.customerReferralCode
				}&name=${customerName}`;
				window.location.href = successUrl;
			} else {
				track('Signup Form Error', { 
					error: result.error, 
					errorType: result.errorType || 'unknown' 
				});
				
				// Provide specific messaging for duplicate emails
				if (result.errorType === 'duplicate_email') {
					submitMessage = `${result.error} You can also try signing in to access your existing account or contact support@liminalbios.com for assistance.`;
				} else {
					submitMessage = `Error: ${result.error}`;
				}
			}
		} catch (error) {
			track('Signup Form Error', { error: error.message });
			submitMessage = 'Error submitting form. Please try again or contact support if the problem persists.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Sign Up for Liminal - Automated Bioinformatics Notebooks</title>
	<meta
		name="description"
		content="Get early access to Liminal - turn your command line into a scientific notebook in seconds. Perfect for academic labs and bioinformatics researchers."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/signup/" />
	<meta property="og:title" content="Sign Up for Liminal - Automated Bioinformatics Notebooks" />
	<meta
		property="og:description"
		content="Get early access to Liminal - turn your command line into a scientific notebook in seconds. Perfect for academic labs and bioinformatics researchers."
	/>
	<meta property="og:image" content="https://liminalbios.com/signup-preview.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://liminalbios.com/signup/" />
	<meta
		property="twitter:title"
		content="Sign Up for Liminal - Automated Bioinformatics Notebooks"
	/>
	<meta
		property="twitter:description"
		content="Get early access to Liminal - turn your command line into a scientific notebook in seconds. Perfect for academic labs and bioinformatics researchers."
	/>
	<meta property="twitter:image" content="https://liminalbios.com/signup-preview.png" />

	<!-- LinkedIn specific -->
	<meta property="article:author" content="Liminal" />
</svelte:head>

<section class="min-h-screen bg-white px-4 py-12" id="signup-page">
	<div class="max-w-2xl mx-auto">
		<!-- <h1 class="text-2xl font-bold mb-6">Sign up for Liminal</h1> -->
		<h2 class="text-2xl text-center text-green-500 italics">
			Current promotion for 30 days of <span class="underline">unlimited free</span> use of Liminal!
		</h2>

		<!-- Signup Form -->
		<form on:submit|preventDefault={handleSubmit} class="bg-white p-8 rounded-lg shadow-lg mt-8">
			<!-- Basic Information -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div>
					<label for="firstName" class="block text-sm font-medium text-gray-700 mb-2"
						>First Name *</label
					>
					<input
						type="text"
						id="firstName"
						bind:value={formData.firstName}
						required
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
				<div>
					<label for="lastName" class="block text-sm font-medium text-gray-700 mb-2"
						>Last Name *</label
					>
					<input
						type="text"
						id="lastName"
						bind:value={formData.lastName}
						required
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
			</div>

			<div class="mb-6">
				<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div>
					<label for="institution" class="block text-sm font-medium text-gray-700 mb-2"
						>Institution/Company</label
					>
					<input
						type="text"
						id="institution"
						bind:value={formData.institution}
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
				<div>
					<label for="role" class="block text-sm font-medium text-gray-700 mb-2">Role</label>
					<select
						id="role"
						bind:value={formData.role}
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					>
						<option value="">Select Role</option>
						<option value="undergraduate">Undergraduate Student</option>
						<option value="graduate">Graduate Student</option>
						<option value="postdoc">Postdoc</option>
						<option value="staff">Staff/Manager</option>
						<option value="pi">Principal Investigator</option>
						<option value="industry">Industry Professional</option>
						<option value="other">Other</option>
					</select>
				</div>
			</div>

			<!-- Team Information -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div>
					<label for="teamSize" class="block text-sm font-medium text-gray-700 mb-2"
						>Team Size</label
					>
					<select
						id="teamSize"
						bind:value={formData.teamSize}
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					>
						<option value="1">Just me (1)</option>
						<option value="2">2-5 users</option>
						<option value="6">6-10 users</option>
						<option value="11">11-20 users</option>
						<option value="21">21+ users</option>
					</select>
				</div>
				<div>
					<label for="heardAbout" class="block text-sm font-medium text-gray-700 mb-2"
						>How did you hear about us?</label
					>
					<select
						id="heardAbout"
						bind:value={formData.heardAbout}
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					>
						<option value="">Select source</option>
						<option value="tommy">Tommy's recommendation</option>
						<option value="linkedin">LinkedIn</option>
						<option value="twitter">Twitter/X</option>
						<option value="conference">Academic conference</option>
						<option value="colleague">Colleague referral</option>
						<option value="google">Google search</option>
						<option value="other">Other</option>
					</select>
				</div>
			</div>

			<div class="mb-6">
				<label for="teamEmails" class="block text-sm font-medium text-gray-700 mb-2"
					>Additional Team Member Emails (optional)</label
				>
				<textarea
					id="teamEmails"
					bind:value={formData.teamEmails}
					placeholder="Enter emails separated by commas"
					rows="3"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>
			</div>

			<!-- Referral Code Section -->
			<div class="mb-6">
				<label for="referralCode" class="block text-sm font-medium text-gray-700 mb-2">
					Referral Code (optional)
				</label>
				<input
					type="text"
					id="referralCode"
					bind:value={formData.referralCode}
					placeholder="Enter referral code if you have one"
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>
				<p class="text-sm text-gray-500 mt-1">
					Have a referral code? Enter it here to give your referrer credit!
				</p>
			</div>

			<!-- Hidden fields for tracking -->
			{#if formData.referralCode}
				<div class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
					<p class="text-sm text-green-800">
						🎉 You were referred by: <strong>{formData.referralCode}</strong>
					</p>
				</div>
			{/if}

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isSubmitting}
				class="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
			>
				{#if isSubmitting}
					Submitting...
				{:else}
					Sign Up for Liminal
				{/if}
			</button>

			{#if submitMessage}
				<div
					class="mt-4 p-3 rounded-lg {submitMessage.includes('Success')
						? 'bg-green-50 text-green-800 border border-green-200'
						: 'bg-red-50 text-red-800 border border-red-200'}"
				>
					{submitMessage}
				</div>
			{/if}
		</form>

		<!-- Fallback to HubSpot form -->
		<!-- <div class="mt-8">
			<h3 class="text-lg font-medium text-gray-900 mb-4">Alternative: HubSpot Form</h3>
			<div
				class="hs-form-frame"
				data-region="na1"
				data-form-id="63448cbc-8fe5-456a-8486-af673b0deab0"
				data-portal-id="48817868"
			/>
		</div> -->

		<!-- Pass -->
	</div>
</section>
