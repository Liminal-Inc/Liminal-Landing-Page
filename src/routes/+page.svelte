<script lang="ts">
	import { Button, Table } from 'flowbite-svelte';
	import { track } from '@vercel/analytics';
	// Comment
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Liminal automatically turns shell history into structured lab notebook entries. Install in under 5 minutes. No training, affordable, FAIR-compliant."
	/>
	<meta property="og:title" content="Liminal - Turn Shell History into Scientific Insight" />
	<meta
		property="og:description"
		content="Save hours documenting bioinformatics work. Liminal converts command-line activity into searchable, FAIR-compliant notebook entries. For labs of all sizes."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liminalbios.com/" />
</svelte:head>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

<section id="headline">
	<div class="grid grid-cols-5 gap-1 justify-evenly">
		<div
			class="col-span-5 flex flex-col md:flex-row justify-start items-center mt-4 text-center text-white p-4 sm:p-2"
		>
			<!-- Left column for the larger text -->
			<div class="md:w-1/2 text-left md:text-right md:pr-4">
				<h2
					class="text-purple-300 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold text-center"
				>
					<!-- ⚡️Tap into⚡️ Supercharged Bioinformatics -->
					 Automated Bioinformatics Notebooks<br>
					<!-- Activate ⚡️ Supercharged Bioinformatics -->
				</h2>
				<br>
				<h3 class="text-purple-300 text-lg sm:text-lg md:text-2xl lg:text-4xl font-extrabold text-center">0-Effort. 100% Recall.</h3>
			</div>
			<!-- Right column for the other paragraphs -->
			<div class="md:w-1/2 flex flex-col justify-start items-start text-left md:text-left md:pl-4">
				<h1 class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-left">
					Turn Your Command Line into a Scientific Notebook in Seconds
				</h1>
				<h2 class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
					Install and use in &lt; 5 minutes
				</h2>
				<Button
					href="/signup"
					size="lg"
					pill
					class="bg-green-400 hover:bg-green-500 text-white w-full mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-col items-center leading-tight"
					on:click={() => track('Homepage CTA Click')}
				>
					<div class="text-center">
						Get Access
						<div class="text-sm md:text-base text-white/80">No meeting required!</div>
					</div>
				</Button>
			</div>
		</div>
		<div class="mt-2 col-span-5">
			<div class="pixel-divider my-16" />
			<h2 class=" text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
				Academic pricing, plain and simple: <span class="text-green-400">$20/month</span>
			</h2>
		</div>
	</div>
</section>

<div class="pixel-divider my-16" />
<section id="media-section">
	<div class="mt-2 col-span-5">
		<h2 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-2">
			Full Walkthrough
		</h2>
	</div>
	<div class="w-full aspect-video">
		<iframe
			title="Liminal full walkthrough - Convert command-line history to research notebook"
			src="https://drive.google.com/file/d/1C6j0xmrjyPpGvQT76KgmYL3v66Up9Lg_/preview"
			frameborder="0"
			allowfullscreen
			class="w-full h-full"
		/>
	</div>

	<div class="mt-2 col-span-5 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
		<h2 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-2">
			30 second installation
		</h2>
	</div>

	<div class="w-full aspect-video">
		<iframe
			title="Liminal installation takes less than 30 seconds and requires no training"
			src="https://drive.google.com/file/d/1xBFsZwu_LeFLp0VT8nsZYzw2owYMsGkA/preview"
			frameborder="0"
			allowfullscreen
			class="w-full h-full"
		/>
	</div>
</section>

<div class="pixel-divider my-16" />
<section id="principles-and-values">
	<div class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
		<div>
			<h2
				class="font-extrabold text-purple-300 text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-center mb-4"
			>
				Perfect record keeping.
			</h2>
			<h2
				class="font-extrabold text-purple-300 text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-center mb-4"
			>
				0 Training. 100% recall.
			</h2>
		</div>
	</div>
	<div class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
		<h2
			class="mb-2 text-green-400 font-extrabold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl"
		>
			Designed specifically for the needs of academic scientists
		</h2>
		<ul class="font-normal">
			<li>- Start using within 5 minutes</li>
			<li>- Integrates with your existing workflow</li>
			<li>- Affordably priced for scientists of all stages</li>
			<li>- Lab-grade software: rigorous reproducibility and scientific vigor</li>
		</ul>
	</div>
</section>

<div class="pixel-divider my-16" />
<section id="media-problems-section">
	<div class="mt-2 col-span-5 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
		<h2 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-2">
			For the PIs...
		</h2>
	</div>

	<div class="w-full aspect-video">
		<iframe
			title="What is Liminal"
			src="https://drive.google.com/file/d/18mWLF0lu1NrwJzEI6Vi1ZqGTVXd_ikvJ/preview"
			frameborder="0"
			allowfullscreen
			class="w-full h-full"
		/>
	</div>

	<div class="mt-2 col-span-5 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
		<h2 class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-2">
			For the boots-on-ground scientists...
		</h2>
	</div>
	<div class="w-full aspect-video">
		<iframe
			title="What is Liminal"
			src="https://drive.google.com/file/d/1oAZXhYbS3wO9Sf9mxEr1Ca_HI91A8Q6T/preview"
			frameborder="0"
			allowfullscreen
			class="w-full h-full"
		/>
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
										Click the <a href="/signup" class="text-green-400" on:click={() => track('FAQ Signup Link Click')}
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
									</li>
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
	<p class="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
		Meet with a founder:
		<a
			target="_blank"
			class="text-blue transition-all duration-100 transform hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:bg-purple-300 hover:underline text-purple-300 hover:text-white rounded p-2"
			href="https://calendar.app.google/fAwGmDCeccJbcwKQ7"
			on:click={() => track('Footer Calendar Link Click')}>GoogleMeet</a
		>
	</p>
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
