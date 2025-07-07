<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import notebookscreenshot from '$lib/images/NotebookScreenshot.png';
	import findingscreenshot from '$lib/images/FindingsScreenshot.png';
	import knowledgescreenshot from '$lib/images/KnowledgeScreenshot.png';
	import inventoryscreenshot from '$lib/images/InventoryScreenShot.png';
	import missionscreenshot from '$lib/images/MissionScreenshot.png';
	import papersscreenshot from '$lib/images/Papersscreenshot.png';
	import socialsscreenshot from '$lib/images/SocialsScreenshot.png';
	import {
		DatabaseSolid,
		LightbulbSolid,
		MessageCaptionSolid,
		NewspapperSolid,
		SearchSolid
	} from 'flowbite-svelte-icons';

	export let showMore = true;

	let notebook = false;
	let findings = false;
	let samples = false;
	let inventory = false;
	let tasks = false;
	let papers = false;
	let knowledge = false;
	let social = false;
	let ai_assistant = false;
	let ai_notebook = false;
	let data_structuring = false;
	let research_suggestions = false;
	let data_plugins = false;
	let automatic_contextualization = false;
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
						<div class="mt-2 mb-2">Lab Notebook</div>
					</button>
					<button
						on:click={() => (inventory = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<MessageCaptionSolid size="xl" />
						<div class="mt-2 mb-2">Activity Feed</div>
					</button>
					<button
						on:click={() => (samples = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<SearchSolid size="xl" />
						<div class="mt-2 mb-2">Search Bar</div>
					</button>
					<button
						on:click={() => (findings = true)}
						class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
					>
						<LightbulbSolid size="xl" />
						<div class="mt-2 mb-2">AI</div>
					</button>
					<button
						on:click={() => (findings = true)}
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
		<h3 class="text-2xl font-semibold text-black dark:text-white">Liminal Notebook</h3>
	</div>
	<div class="text-2xl">
		Focus on discovery, not organization. Liminal intelligently structures your notes, ensuring your
		insights are always captured, connected, and ready to build upon.
	</div>
	<div>
		<img src={notebookscreenshot} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>
			Every notebook entry you write is analyzed by AI using retrieval-augmented generation (RAG) to
			contextualize your work with lab data—helping you and future scientists build on it.
		</li>
		<li>
			AI-powered suggestions: Get relevant insights and recommendations for your notebook entry,
			based on intelligent parsing of lab papers.
		</li>
		<li>
			Reference anything in the lab, from users, equipment, data, or anything else! Customize your
			notes to your needs.
		</li>
		<li>
			Activity graph that shows you everything you reference in your notebook and what it's related
			to
		</li>
		<li>
			Activity log that grows as you add references, providing you the full context of your notebook
		</li>
		<li>Conclusion section to organize your notebook statuses</li>
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

<Modal bind:open={findings} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">
			Findings (Experimental Results)
		</h3>
	</div>
	<div class="text-2xl">
		Organize and compare your experimental data effortlessly with Liminal's Findings. Automatically
		processed through custom processors, enabling seamless meta-analysis and collaboration across
		your lab.
	</div>
	<div>
		<img src={findingscreenshot} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>Effortlessly drag and drop files for automatic parsing into organized tables</li>
		<li>Build custom parsers to extract and compute data tailored to your needs</li>
		<li>Search with precision, filtering by any attribute—whether by user, parameter, or more</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (findings = !findings)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={samples} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">Samples</h3>
	</div>
	<div class="text-2xl">
		The objects you are doing the experimentation and observations on. Currently, Liminal does not
		have an intricate sample management system, but it is in the works!
	</div>
	<!-- TODO Add Image -->
	<div slot="footer">
		<button
			on:click={() => (samples = !samples)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={inventory} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">Inventory</h3>
	</div>
	<div class="text-2xl">
		Materials, equipment, you name it. Organize the stuff in your lab and determine physical
		location, history, and current status of everything.
	</div>
	<div>
		<img src={inventoryscreenshot} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>
			Neatly organize all your reagents, equipment, locations, containers, or other types of
			consumables
		</li>
		<li>
			Each item has a confidence score, based on how long it's been since someone has interacted
			with it
		</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (inventory = !inventory)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={tasks} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Lab Missions (Tasks)</h3>
	</div>
	<div class="text-xl">
		Track and manage routine lab activities, ensuring every action is documented and accessible to
		maintain an up-to-date record of lab operations. Missions capture non-experimental tasks, like
		chores and maintenance, that shape the lab’s status, offering a comprehensive view of lab
		activity over time.
	</div>
	<div>
		<img src={missionscreenshot} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>Stay organized by tracking all your lab tasks in one place</li>
		<li>Receive notifications for overdue tasks, ensuring nothing slips through the cracks</li>
		<li>Earn rewards and recognition with points for completing tasks</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (tasks = !tasks)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={papers} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Papers and Reviews</h3>
	</div>
	<div class="text-xl">
		Align your lab's collective knowledge. Liminal curates and connects external research, ensuring
		every member builds on a shared foundation of expertise.
	</div>
	<div>
		<img src={papersscreenshot} class="w-42 h-42" alt="Liminal Logo" />
	</div>
	<div class="text-lg">
		<li>
			Every journal article and external document becomes part of an evolving repository, creating a
			common ground that strengthens collaboration and accelerates discovery.
		</li>
		<li>
			Discover the lab's most influential papers - See which research is shaping your team's work.
		</li>
		<li>Review and share insights on key papers to deepen collective understanding.</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (papers = !papers)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={knowledge} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Institutional Knowledge</h3>
	</div>
	<div class="text-xl">
		Easily capture quick insights and tips, like virtual sticky notes, to feed into the AI and
		enrich your lab's collective knowledge. Share bite-sized, informal knowledge—such as equipment
		tips or helpful reminders—directly with the AI and lab mates, enhancing its understanding and
		improving lab operations.
	</div>
	<div>
		<img src={knowledgescreenshot} class="w-42 h-42" alt="knowledgescreenshot" />
	</div>
	<div class="text-lg">
		<li>Add a note to anything.</li>
		<li>Make your person AI smarter with extra knowledge.</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (knowledge = !knowledge)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={social} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Social Hub</h3>
	</div>
	<div class="text-xl">
		Track and visualize the activity of your lab members, enabling easy communication and
		collaboration across your research team. Aggregate and summarize each user’s contributions to
		provide insights into team dynamics and streamline communication for more effective research
		collaboration.
	</div>
	<div>
		<img src={socialsscreenshot} class="w-42 h-42" alt="socialsscreenshot" />
	</div>
	<div class="text-lg">
		<li>Help your lab mates out.</li>
		<li>Check in on each other to make sure everyone is succeeding.</li>
	</div>
	<div slot="footer">
		<button
			on:click={() => (social = !social)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<!-- Workflow -->
<Modal bind:open={ai_assistant} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">AI Assistant</h3>
	</div>
	<div class="text-xl">
		All activity in your lab is tracked and recorded. This includes all the data you add to Liminal,
		inventory items, papers you read, etc. All this activity is used to teach your AI assistant
		about you and your lab so it can be more helpful than a generic, online LLM.
	</div>
	<div class="text-xl">
		<!-- <img src={socialsscreenshot} class="w-42 h-42" alt="socialsscreenshot" /> -->
		We consider this 'Lab Culture AI', which is a custom AI that learns from your lab's unique knowledge
		and practices. It can help you with everything from troubleshooting experiments, training new scientists,
		to creating more publications and sharing more research.
	</div>
	<div class="text-lg">
		<li>Get lab-specific answers</li>
		<li>AI gets smarter as your lab progresses</li>
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

<Modal bind:open={ai_notebook} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Notebook Suggestions</h3>
	</div>
	<div class="text-xl">
		Write your notebook as normal, and then click to discover relevant information from your lab.
		Liminal will suggest relevant information from your lab, including papers, data, and other
		notebook entries.
	</div>
	<div class="text-xl">
		<!-- <img src={socialsscreenshot} class="w-42 h-42" alt="socialsscreenshot" /> -->
		This also allows you to see what other people are doing in the lab, and how it relates to your work.
		Or, the AI works like an online LLM, where you can ask it questions and it'll provide outside knowledge
		based on previous training.
	</div>
	<!-- <div class="text-lg">
		<li>Get lab-specific answers</li>
		<li>AI gets smarter as your lab progresses</li>
	</div> -->
	<div slot="footer">
		<button
			on:click={() => (ai_notebook = !ai_notebook)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={data_structuring} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Data Structuring</h3>
	</div>
	<div class="text-xl">
		Parse unstructured data, including previous research, and turn it into structured, referencable
		data. Structuring the data also connects it to other relevant work done in the lab, creating the
		ultimate metadata and data provenance attached to all work.
	</div>
	<div class="text-xl">
		<!-- <img src={socialsscreenshot} class="w-42 h-42" alt="socialsscreenshot" /> -->
		<!-- This also allows you to see what other people are doing in the lab, and how it relates to your work.
		Or, the AI works like an online LLM, where you can ask it questions and it'll provide outside knowledge
		based on previous training. -->
	</div>
	<!-- <div class="text-lg">
		<li>Get lab-specific answers</li>
		<li>AI gets smarter as your lab progresses</li>
	</div> -->
	<div slot="footer">
		<button
			on:click={() => (data_structuring = !data_structuring)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={research_suggestions} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Research Suggestions</h3>
	</div>
	<div class="text-xl">
		Liminal goes through old data and creates research suggestion based on the data you already
		have. This is essentially recycling through your old data to allow you to continuously publish
		and disseminate a steady flow of research, regardless of whether you have funding for new
		experiments.
	</div>
	<div class="text-xl">
		<!-- <img src={socialsscreenshot} class="w-42 h-42" alt="socialsscreenshot" /> -->
		<!-- This also allows you to see what other people are doing in the lab, and how it relates to your work.
		Or, the AI works like an online LLM, where you can ask it questions and it'll provide outside knowledge
		based on previous training. -->
	</div>
	<!-- <div class="text-lg">
		<li>Get lab-specific answers</li>
		<li>AI gets smarter as your lab progresses</li>
	</div> -->
	<div slot="footer">
		<button
			on:click={() => (research_suggestions = !research_suggestions)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal bind:open={data_plugins} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Analysis Plugins</h3>
	</div>
	<div class="text-xl">
		Connect your current streams of data, including lab equipment and databases, to Liminal. This
		allows Liminal to pull in data from your current systems and then parse it into structured data
		and reports. This also makes data more 'stackable', meaning you can easily combine data from
		various lab members and equipment to create new data sets.
	</div>
	<div slot="footer">
		<button
			on:click={() => (data_plugins = !data_plugins)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>

<Modal
	bind:open={automatic_contextualization}
	autoclose
	outsideclose
	class="text-black bg-slate-300"
>
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">Data Context</h3>
	</div>
	<div class="text-xl">
		All activity recorded in Liminal is automatically connected to everything in the app. This
		essentially means an endless stream of metadata, as you capture the lab state whenever new
		activity is recorded.
	</div>
	<div class="text-xl">
		For example, if Jane enters a notebook entry at 11:34am and John did the sweeping task at
		11:29am, Liminal will automatically connect the two events based on time. For troubleshooting
		purposes, the AI will know sweeping was done at the same time as PCR and be able to provide
		advice for next time.
	</div>
	<div slot="footer">
		<button
			on:click={() => (automatic_contextualization = !automatic_contextualization)}
			class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline"
		>
			Close
		</button>
	</div>
</Modal>
