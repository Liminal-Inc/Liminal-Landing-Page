<script lang="ts">
	import feedimg from '$lib/images/activity_feed.png';
	import shell1 from '$lib/images/shell_nb1.png';
	import shell2 from '$lib/images/shell_nb2.png';
	import shell3 from '$lib/images/shell_nb3.png';
	import searchimg from '$lib/images/search_bar.png';
	import aiimg from '$lib/images/ai_img.png';

	import { Modal } from 'flowbite-svelte';
	import {
		DatabaseSolid,
		LightbulbSolid,
		MessageCaptionSolid,
		NewspapperSolid,
		SearchSolid
	} from 'flowbite-svelte-icons';

	export let showMore = true;

	let notebook = false;
	let activityfeed = false;
	let searchbar = false;
	let ai_assistant = false;
	let data_export = false;
</script>

<section id="data-capture-features">
	<div class="text-white rounded-lg">
		<div>
			<div class="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
				{#if showMore}
					<p class="text-center text-purple-300">Features</p>
				{:else}
					<!-- <p class="text-purple-300">Liminal Research</p> -->
				{/if}
			</div>
			<div class="">
				<div class="grid grid-cols-1 gap-4 p-4 text-white text-lg sm:text-md md:text-lg lg:text-lg">
					<button
						on:click={() => (notebook = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<NewspapperSolid size="xl" />
						<div class="mt-2 mb-2">Shell Notebook</div>
					</button>
					<button
						on:click={() => (activityfeed = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<MessageCaptionSolid size="xl" />
						<div class="mt-2 mb-2">Activity Feed</div>
					</button>
					<button
						on:click={() => (searchbar = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<SearchSolid size="xl" />
						<div class="mt-2 mb-2">Search Bar</div>
					</button>
					<button
						on:click={() => (ai_assistant = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<LightbulbSolid size="xl" />
						<div class="mt-2 mb-2">AI</div>
					</button>
					<button
						on:click={() => (data_export = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<DatabaseSolid size="xl" />
						<div class="mt-2 mb-2">Data Export</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<Modal bind:open={notebook} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">Shell Notebook</h3>
	</div>
	<div class="text-2xl">100% automated notebook from your shell activity</div>
	<div>
		<img src={shell1} class="w-42 h-42" alt="Shell SC1" />
	</div>
	<div class="text-lg">
		<li>
			Leverages the latest AI/LLM to transform your commands into easily readable notebook entries
			without any change to your work.
		</li>
		<li>
			Default formats your notebook into 6 simple notebook sections while also providing a summary
			and your full command history
		</li>
		<li>Customize how you want your notebook entry to look</li>
	</div>
	<div>
		<img src={shell2} class="w-42 h-42" alt="Shell SC2" />
	</div>
	<div>
		<img src={shell3} class="w-42 h-42" alt="Shell SC3" />
	</div>
	<div slot="footer">
		<button
			on:click={() => (notebook = !notebook)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={activityfeed} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">Activity Feed</h3>
	</div>
	<div class="text-2xl">
		You and your teams whole shell history and notebooks accessible in 1 spot!
	</div>
	<div>
		<img src={feedimg} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>Share your shell history with a click of a button</li>
		<li>Sync as many shells as you'd like to one activity feed</li>
		<li>Learn from and understand what work your collaborators are doing</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (activityfeed = !activityfeed)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={searchbar} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">Fuzzy Searching</h3>
	</div>
	<div class="text-2xl">Search for any past command using fuzzy searching.</div>
	<div>
		<img src={searchimg} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>Save hours writing methods by immediately finding the exact commands you ran</li>
		<li>Collaborate seamlessly by searching what your team has done</li>
		<li>Search without worrying about exactly remembering the commands you did</li>
		<li>Search through the full history of what you or your teammates have done</li>
	</div>
	<!-- TODO Add Image -->
	<div slot="footer">
		<button
			on:click={() => (searchbar = !searchbar)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={ai_assistant} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">Coming Soon: AI Assistant</h3>
	</div>
	<div class="text-2xl">
		Chat with your own AI assistant that remembers every command you've ever done
	</div>
	<div>
		<img src={aiimg} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>
			Every command you do further contextualizes your own personal AI assistant so it knows exactly
			how you work
		</li>
		<li>
			Group-level AI assistants can learn from multiple users and make onboarding and retaining
			knowledge much easier
		</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (ai_assistant = !ai_assistant)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={data_export} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Data Export</h3>
	</div>
	<div class="text-xl">
		Export markdown notebooks to print or integrate into your current electronic notebook system
	</div>
	<div class="text-lg">
		<li>Download your notebook to view via markdown/html</li>
		<li>
			Export your notebook to save to your current file storage location, such as BOX, OneDrive,
			etc.
		</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (data_export = !data_export)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>
