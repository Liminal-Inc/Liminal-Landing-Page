<script lang="ts">
	import { Button, Table } from 'flowbite-svelte';
	import { track } from '@vercel/analytics';
	// Comment
</script>

<svelte:head>
	<title>Liminal - Automated Bioinformatics Notebooks | Turn Command Line into Scientific Documentation</title>
	<meta
		name="description"
		content="Liminal automatically converts command-line history into structured lab notebook entries. Install in under 5 minutes. Academic pricing at $20/month. Zero training required, 100% recall."
	/>
	<meta name="keywords" content="bioinformatics, lab notebook, command line, scientific documentation, FAIR data, academic software, research tools, shell history, automated documentation" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/" />
	<meta property="og:title" content="Liminal - Turn Command Line into Scientific Notebook in Seconds" />
	<meta
		property="og:description"
		content="Save hours documenting bioinformatics work. Liminal converts command-line activity into searchable, FAIR-compliant notebook entries. Perfect for academic labs of all sizes."
	/>
	<meta property="og:image" content="https://liminalbios.com/og-image.png" />
	<meta property="og:site_name" content="Liminal Bioinformatics" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://liminalbios.com/" />
	<meta name="twitter:title" content="Liminal - Automated Bioinformatics Notebooks" />
	<meta name="twitter:description" content="Turn your command line into a scientific notebook in seconds. Zero training, 100% recall. Academic pricing starting at $20/month." />
	<meta name="twitter:image" content="https://liminalbios.com/og-image.png" />

	<!-- Additional SEO -->
	<link rel="canonical" href="https://liminalbios.com/" />
	<meta name="robots" content="index, follow, max-image-preview:large" />

	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": "Liminal",
		"description": "Automated bioinformatics notebook software that converts command-line history into structured lab notebook entries",
		"url": "https://liminalbios.com",
		"applicationCategory": "Scientific Software",
		"operatingSystem": "Linux, macOS",
		"offers": {
			"@type": "Offer",
			"price": "20",
			"priceCurrency": "USD",
			"priceSpecification": {
				"@type": "UnitPriceSpecification",
				"price": "20",
				"priceCurrency": "USD",
				"billingDuration": "P1M"
			}
		},
		"publisher": {
			"@type": "Organization",
			"name": "Liminal Bioinformatics",
			"url": "https://liminalbios.com"
		},
		"audience": {
			"@type": "Audience",
			"audienceType": "Academic Researchers, Bioinformaticians, Scientists"
		}
	}
	</script>
</svelte:head>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<div class="w-full bg-amber-500 text-black text-center py-3 px-4 font-semibold text-sm md:text-base">
	Not currently accepting new users at this time. We are planning new ways to add value to our bioinformatics and compute community. Stay tuned.
</div>

<section id="hero" class="min-h-screen flex items-center justify-center py-16 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<!-- Header content -->
		<h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-purple-300 mb-6 leading-tight">
			Automated Bioinformatics Notebooks
		</h1>
		<p class="text-xl md:text-2xl lg:text-3xl text-green-400 font-bold mb-6">
			0-Effort. 100% Recall.
		</p>
		<p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
			Turn your command line into a scientific notebook in seconds.
		</p>
		<p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
			Install and use in under 5 minutes. No training required.
		</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
			<Button
				size="lg"
				disabled
				class="bg-gray-600 text-gray-400 text-lg font-bold py-4 px-8 cursor-not-allowed line-through opacity-60"
			>
				Get Access Now
			</Button>
			<Button
				href="/features"
				size="lg"
				color="alternative"
				class="text-lg py-4 px-8"
				on:click={() => track('Homepage Features Click')}
			>
				See Features
			</Button>
		</div>

		<div class="text-sm text-gray-400 mb-12">
			✓ 5-minute setup &nbsp;&nbsp; ✓ Zero training &nbsp;&nbsp; ✓ Academic pricing
		</div>

		<!-- Demo GIF - Centered and larger -->
		<div class="relative max-w-4xl mx-auto items-center justify-center">
			<div class="bg-gray-900/50 rounded-xl p-2 border border-purple-500/30 w-3/4 mx-auto">
				<img
					src="/videos/realtime-shellsync.gif"
					alt="Liminal real-time shell sync demonstration"
					class="w-full rounded-lg shadow-2xl"
				/>
			</div>
		</div>
	</div>
</section>

<div class="pixel-divider my-8" />

<!-- Problem/Solution Section -->
<section class="py-16 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			No More App Switching. No More Manual Notebook Writing.
		</h2>
		<p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
			Stop losing track of your bioinformatics work. Liminal automatically captures every command, every analysis, every insight.
		</p>

		<!-- Side-by-side GIFs -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
			<div class="bg-gray-900/30 rounded-xl p-3 border border-gray-700">
				<h3 class="text-xl font-bold text-green-400 mb-6 text-center">Real-time Command Capture</h3>
				<img
					src="/videos/realtime-shellsync.gif"
					alt="Real-time shell sync demonstration"
					class="w-full rounded-lg shadow-lg"
					style="height: 300px; object-fit: fill;"
				/>
			</div>
			<div class="bg-gray-900/30 rounded-xl p-3 border border-gray-700">
				<h3 class="text-xl font-bold text-green-400 mb-6 text-center">Instant Notebook Generation</h3>
				<img
					src="/videos/realtime-notebook.gif"
					alt="Real-time notebook generation"
					class="w-full rounded-lg shadow-lg"
					style="height: 300px; object-fit: fill; animation-duration: 10s; animation-iteration-count: infinite;"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Sabbatical: pricing section hidden until accepting new users
<div class="pixel-divider my-8" />

<section class="py-16 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Simple Academic Pricing
		</h2>
		<div class="bg-gray-900/50 rounded-xl p-8 border border-purple-500/30 mb-8">
			<div class="text-5xl font-bold text-green-400 mb-4">$20<span class="text-2xl text-gray-400">/month</span></div>
			<p class="text-xl text-gray-300 mb-6">Unlimited users • Unlimited data • Full features</p>

			<div class="grid md:grid-cols-2 gap-6 text-left mb-8">
				<div>
					<h4 class="text-lg font-bold text-green-400 mb-2">💰 Referral Rewards</h4>
					<p class="text-gray-300">Get $5 credit per referral + 1 FREE month for every 4 people you refer</p>
				</div>
				<div>
					<h4 class="text-lg font-bold text-green-400 mb-2">📅 Annual Savings</h4>
					<p class="text-gray-300">Save 20% on annual subscriptions</p>
				</div>
			</div>

			<Button
				href="/signup"
				size="lg"
				class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 text-lg"
				on:click={() => track('Homepage Pricing CTA Click')}
			>
				Start Your Free Trial
			</Button>
		</div>
	</div>
</section>

<div class="pixel-divider my-8" />
-->

<!-- Video Demonstrations -->
<section class="py-16">
	<div class="text-center mb-12 px-4">
		<h2 class="text-3xl md:text-4xl font-bold text-white">
			See Liminal in Action
		</h2>
	</div>

	<div class="space-y-20 px-4 w-3/4">
		<!-- Full Walkthrough -->
		<div class="text-center">
			<div class="bg-gray-900/30 rounded-xl p-3 border border-gray-700">
			<h3 class="text-2xl md:text-3xl font-bold text-green-400 mb-8">Complete Product Walkthrough</h3>
			<div class="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
				<iframe
					title="Liminal full walkthrough - Convert command-line history to research notebook"
					src="https://drive.google.com/file/d/1C6j0xmrjyPpGvQT76KgmYL3v66Up9Lg_/preview"
					frameborder="0"
					allowfullscreen
					class="w-full h-full"
				/>
			</div>
			</div>
		</div>

		<!-- Installation Demo -->
		<div class="text-center">
			<div class="bg-gray-900/30 rounded-xl p-3 border border-gray-700">
			<h3 class="text-2xl md:text-3xl font-bold text-green-400 mb-8">30-Second Installation</h3>
			<div class="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
				<iframe
					title="Liminal installation takes less than 30 seconds and requires no training"
					src="https://drive.google.com/file/d/1xBFsZwu_LeFLp0VT8nsZYzw2owYMsGkA/preview"
					frameborder="0"
					allowfullscreen
					class="w-full h-full"
				/>
			</div>
			</div>
		</div>
	</div>
</section>

<div class="pixel-divider my-8" />

<!-- Benefits Section -->
<section class="py-16 px-4">
	<div class="max-w-6xl mx-auto text-center">
		<h2 class="text-4xl md:text-5xl font-bold text-purple-300 mb-6">
			Perfect Record Keeping
		</h2>
		<p class="text-2xl md:text-3xl text-green-400 font-bold mb-12">
			0 Training. 100% Recall.
		</p>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
			<div class="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
				<div class="text-3xl mb-4">⚡</div>
				<h3 class="text-lg font-bold text-green-400 mb-2">5-Minute Setup</h3>
				<p class="text-gray-300">Start using within 5 minutes. No complex configuration required.</p>
			</div>
			<div class="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
				<div class="text-3xl mb-4">🔄</div>
				<h3 class="text-lg font-bold text-green-400 mb-2">Workflow Integration</h3>
				<p class="text-gray-300">Seamlessly integrates with your existing bioinformatics workflow.</p>
			</div>
			<div class="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
				<div class="text-3xl mb-4">💰</div>
				<h3 class="text-lg font-bold text-green-400 mb-2">Academic Pricing</h3>
				<p class="text-gray-300">Affordably priced for scientists at all career stages.</p>
			</div>
			<div class="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
				<div class="text-3xl mb-4">🔬</div>
				<h3 class="text-lg font-bold text-green-400 mb-2">Lab-Grade Software</h3>
				<p class="text-gray-300">Rigorous reproducibility and scientific rigor built-in.</p>
			</div>
		</div>

		<div class="text-center">
			<h3 class="text-2xl font-bold text-green-400 mb-6">
				Designed specifically for academic scientists
			</h3>
			<Button
				href="/about"
				size="lg"
				color="alternative"
				on:click={() => track('Homepage About Click')}
			>
				Meet Our Team
			</Button>
		</div>
	</div>
</section>

<!-- Target Audience Videos -->
<section class="py-16 px-4">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
			Built for Every Role in Academic Research
		</h2>

		<div class="grid lg:grid-cols-2 gap-12">
			<!-- For PIs -->
			<div class="text-center">
				<h3 class="text-2xl font-bold text-green-400 mb-6">For Principal Investigators</h3>
				<div class="bg-gray-900/30 rounded-xl p-4 border border-gray-700 mb-4">
					<div class="w-full aspect-video rounded-lg overflow-hidden">
						<iframe
							title="Liminal for Principal Investigators - Lab management and oversight"
							src="https://drive.google.com/file/d/18mWLF0lu1NrwJzEI6Vi1ZqGTVXd_ikvJ/preview"
							frameborder="0"
							allowfullscreen
							class="w-full h-full"
						/>
					</div>
				</div>
				<p class="text-gray-300">Track lab productivity, ensure reproducibility, and maintain oversight of all computational work in your lab.</p>
			</div>

			<!-- For Researchers -->
			<div class="text-center">
				<h3 class="text-2xl font-bold text-green-400 mb-6">For Researchers & Students</h3>
				<div class="bg-gray-900/30 rounded-xl p-4 border border-gray-700 mb-4">
					<div class="w-full aspect-video rounded-lg overflow-hidden">
						<iframe
							title="Liminal for researchers and students - Daily workflow automation"
							src="https://drive.google.com/file/d/1oAZXhYbS3wO9Sf9mxEr1Ca_HI91A8Q6T/preview"
							frameborder="0"
							allowfullscreen
							class="w-full h-full"
						/>
					</div>
				</div>
				<p class="text-gray-300">Focus on research, not documentation. Never lose track of your analysis steps or forget how you generated results.</p>
			</div>
		</div>
	</div>
</section>

<div class="pixel-divider my-16" />
<section id="win">
	<div class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
		<p class="mb-2 text-green-400 font-extrabold text-center">
			Level up your labs computational abilities today.
		</p>
		<ul class="font-normal">
			<li>- Search and learn from your own/teams bioinformatics work</li>
			<li>- Be a leader in bioinformatics with 100% FAIR data</li>
			<li>- Leverage AI through your custom notebook workflow</li>
			<li>
				- Write Liminal into your <span class="underline italic">Data Management Plan!</span>
			</li>
		</ul>
	</div>
</section>

<div class="pixel-divider my-16" />
<section>
	<div class="col-span-5 mb-4 flex flex-col justify-center items-center text-centerp-4 sm:p-2">
		<p class="text-green-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
			Don't let these concerns get in the way of perfect record keeping.
		</p>
	</div>
	<div class="text-white">
		<Table class="mt-2 text-white border border-white w-full text-lg sm:text-xl md:text-2xl">
			<tbody>
				<tr class="border-b border-white font-extrabold">
					<td class="px-4 py-2 border-r border-white">Concern</td>
					<td class="px-4 py-2 border-r">Applies to Liminal</td>
					<td class="px-4 py-2">What you should know</td>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">I need a lab manager to use it</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2"
						>Liminal is built for PI- or student-run labs with no admin overhead.</td
					>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">I don't have time for a new tool</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2">Initial setup takes under 5 minutes</td>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">It won't work with our past data.</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2"
						>We are working on retroactively creating notebooks from all your past shell history!</td
					>
				</tr>
				<tr class="border-b border-white">
					<td class="px-4 py-2 border-r border-white">My lab isn't big enough.</td>
					<td class="px-4 py-2 border-r text-center">❌</td>
					<td class="px-4 py-2">Liminal is designed for labs as small as 1 person.</td>
				</tr>
			</tbody>
		</Table>
	</div>
</section>

<section class="w-full">
	<div class="pixel-divider my-16" />
	<p class="text-purple-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4">
		Lost & undocumented research is a crisis in academia
	</p>
	<Table class="text-white border border-white w-full text-lg sm:text-xl md:text-2xl mt-2">
		<thead class="bg-transparent border-b border-white">
			<tr>
				<th class="px-4 py-2 border-r border-white">Event</th>
				<th class="px-4 py-2">Research Lost</th>
			</tr>
		</thead>
		<tbody>
			<tr class="border-b border-white">
				<td class="px-4 py-2 border-r border-white">Poor documentation</td>
				<td class="px-4 py-2">20-25%</td>
			</tr>
			<tr class="border-b border-white">
				<td class="px-4 py-2 border-r border-white">Student/Staff turnover</td>
				<td class="px-4 py-2">25-35%</td>
			</tr>
			<tr class="border-b border-white">
				<td class="px-4 py-2 border-r border-white">Poorly designed experiments</td>
				<td class="px-4 py-2">20-25%</td>
			</tr>
		</tbody>
	</Table>
	<p class="text-2xl text-white mt-4">
		Liminal is a data capture app designed for academic labs to retain and leverage 100% of all the
		research they do with rigorous standards. Don't lose any more work you do on the shell. Use
		every keystroke as a tool to teach new scientists and retain knowledge from everyone in your
		group.
	</p>
	<p class="text-2xl text-white mt-4">
		Liminal's vision is to capture all the work you do on your computer so you never need to worry
		about lab recording standards again.
	</p>
</section>

<div class="pixel-divider my-16" />

<section id="faqs">
	<div class="grid grid-cols-5 gap-2 w-full">
		<!-- Right side -->
		<div class="justify-between bg-black col-span-5 w-full">
			<div>
				<div class="flex rounded-lg w-full m-2 p-2 text-white">
					<div class="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full justify-evenly">
						<div class="text-white mb-12 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
							Frequently Asked Questions
						</div>
						<div class="border-y-2 pl-4 pr-4 pb-2">
							<p class="text-2xl mt-4 font-extrabold">What is Liminal?</p>
							<div class="text-lg">
								<p>
									Liminal is a software application designed to help <span class="text-purple-300"
										>academic scientists</span
									> get more out of their research by automatically contextualizing and connecting every
									experiment.
								</p>
								<ul class="list-disc list-inside">
									<li>
										Reduce research waste by storing lab activity in a contextualized and searchable
										way
									</li>
									<li>Sync as many shell/terminal locations as you want to one spot</li>
									<li>Fuzzy-searching to find old work</li>
								</ul>
							</div>
						</div>
						<!-- Security -->
						<div class="border-y-2 pl-4 pr-4 pb-2">
							<p class="text-2xl mt-4 font-extrabold">Is the data secure and who owns it?</p>
							<div class="text-lg">
								<p>
									You own your data and it is stored on secure cloud storage. We are moving towards
									allowing you to choose your own storage provider, such as an on-premise storage
									solution.
								</p>
								<ul class="list-disc list-inside">
									<li>Export 100% of your data at any time</li>
									<li>Connect to University-owned storage (pending)</li>
									<li>Login/authenticate with University login</li>
								</ul>
							</div>
						</div>
						<!-- Who is liminal for -->
						<div class="border-y-2 pl-4 pb-2">
							<p class="text-2xl mt-4 font-extrabold">Who is Liminal for?</p>
							<div class="text-lg">
								<p>
									Liminal is for <span class="text-purple-300">everyone</span> involved in conducting
									research in an academic lab
								</p>
								<ul class="list-disc list-inside">
									<li>Undergraduate students</li>
									<li>Graduate students</li>
									<li>Postdocs</li>
									<li>Staff/Managers</li>
									<li>Principal investigators</li>
								</ul>
							</div>
						</div>
						<!-- Try Liminal -->
						<div class="border-y-2 pl-4 pb-2">
							<p class="text-2xl mt-4 font-extrabold">How can I try Liminal?</p>
							<div class="text-lg">
								<ul class="list-disc list-inside">
									<li>
										We currently aren't accepting any new users.
									</li>
									<!-- <li>
										Click the <a
											href="/signup"
											class="text-green-400"
											on:click={() => track('FAQ Signup Link Click')}
											>Click Here or the Green Signup Button</a
										> in the corner!
									</li>
									<li>
										Book a <a
											target="_blank"
											href="https://calendar.app.google/fAwGmDCeccJbcwKQ7"
											class="text-purple-300 hover:underline"
											on:click={() => track('FAQ Calendar Link Click')}>short meeting</a
										> to personally chat with one of our founders
									</li> -->
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="pixel-divider my-16" />
<div class="text-white text-2xl mt-8 mb-16 text-center">
	<div class="">
		<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">Need Support or Have Questions?</p>
	</div>
	<p class=" text-white p-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
		Email:
		<a
			class="text-purple-300 transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:text-white hover:underline rounded p-2"
			href="mailto:support@liminalbios.com"
			on:click={() => track('Support Email Click')}>support@liminalbios.com</a
		>
	</p>
	<!-- <p class="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
		Meet with a founder:
		<a
			target="_blank"
			class="text-blue transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:underline text-purple-300 hover:text-white rounded p-2"
			href="https://calendar.app.google/fAwGmDCeccJbcwKQ7"
			on:click={() => track('Footer Calendar Link Click')}>GoogleMeet</a
		>
	</p> -->
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
