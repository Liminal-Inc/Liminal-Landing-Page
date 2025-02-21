<script lang="ts">
    import { Modal } from 'flowbite-svelte';
    import notebookscreenshot from '$lib/images/NotebookScreenshot.png'
    import findingscreenshot from '$lib/images/FindingsScreenshot.png'
    import knowledgescreenshot from '$lib/images/KnowledgeScreenshot.png'
    import inventoryscreenshot from '$lib/images/InventoryScreenShot.png'
    import missionscreenshot from '$lib/images/MissionScreenshot.png'
    import papersscreenshot from '$lib/images/Papersscreenshot.png'
    import socialsscreenshot from '$lib/images/SocialsScreenshot.png'
	import { 
		BookOpenSolid, CirclePlusSolid, ClipboardCheckSolid, DatabaseSolid,
		FaceGrinSolid, FileCirclePlusSolid, FolderArrowRightOutline, NewspapperSolid,
		PenSolid, UserSolid
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
</script>

<div class="text-white rounded-lg">
    <div>
        <div class="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {#if showMore}
                <p class="text-center text-purple-300">				
                    Liminal Research Core Features
                </p>
            {:else}
                <p class="ml-8 text-purple-300">
                    Liminal Research
                </p>
            {/if}
        </div>
        <div class="p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 text-white text-lg sm:text-md md:text-lg lg:text-lg">
                <button on:click={() => (notebook = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <NewspapperSolid size="xl"/>
                    <div class="mt-2 mb-2">Lab Notebook</div>
                </button>
                <button on:click={() => (inventory = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <FolderArrowRightOutline size="xl"/>
                    <div class="mt-2 mb-2">Inventory</div>
                </button>
                <button on:click={() => (samples = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <CirclePlusSolid size="xl"/>
                    <div class="mt-2 mb-2">Sample Management</div>
                </button>
                <button on:click={() => (findings = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <DatabaseSolid size="xl"/>
                    <div class="mt-2 mb-2">Experimental Results</div>
                </button>
                <button on:click={() => (tasks = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <ClipboardCheckSolid/>
                    <div class="mt-2 mb-2">Task Manager</div>
                </button>
                <button on:click={() => (papers = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <PenSolid size="xl"/>
                    <div class="mt-2 mb-2">Paper and Reviews</div>
                </button>
                <button on:click={() => (knowledge = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <BookOpenSolid size="xl"/>
                    <div class="mt-2 mb-2">Institutional Knowledge</div>
                </button>
                <button on:click={() => (social = true)} class="outline outline-white rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    <UserSolid size="xl"/>
                    <div class="mt-2 mb-2">Social Hub</div>
                </button>
            </div>
        </div>
        {#if showMore}
            <div class="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold text-center">
                <p>Plus! Activity Feed, Badges, Levels, Streaks, Custom Toolkits, Reports & Summaries</p>
                <p class="text-blue-600 mt-2">
                <a href="/roadmap">
                    <i class="fas fa-star text-yellow-400"></i>
                    View our roadmap
                    <i class="fas fa-star text-yellow-400"></i>
                </a>
                </p>
            </div>
        {/if}
    </div>
</div>



<Modal bind:open={notebook} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">
		  Liminal Notebook
		</h3>
    </div>
    <div class="text-2xl">
        Focus on discovery, not organization. Liminal intelligently structures your notes, ensuring your insights are always captured, connected, and ready to build upon.
    </div>
    <div>
        <img src={notebookscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        <li>Every notebook entry you write is analyzed by AI using retrieval-augmented generation (RAG) to contextualize your work with lab data—helping you and future scientists build on it.</li>
        <li>AI-powered suggestions: Get relevant insights and recommendations for your notebook entry, based on intelligent parsing of lab papers.</li>
        <li>Reference anything in the lab, from users, equipment, data, or anything else! Customize your notes to your needs.</li>
        <li>Activity graph that shows you everything you reference in your notebook and what it's related to</li>
        <li>Activity log that grows as you add references, providing you the full context of your notebook</li>
        <li>Conclusion section to organize your notebook statuses</li>
    </div>
    <div slot="footer">
        <button on:click={() => (notebook = !notebook)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
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
        Organize and compare your experimental data effortlessly with Liminal's Findings. Automatically processed through custom processors, enabling seamless meta-analysis and collaboration across your lab.
    </div>
    <div>
        <img src={findingscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        <li>Effortlessly drag and drop files for automatic parsing into organized tables</li>
        <li>Build custom parsers to extract and compute data tailored to your needs</li>
        <li>Search with precision, filtering by any attribute—whether by user, parameter, or more</li>
    </div>
    <div slot="footer">
        <button on:click={() => (findings = !findings)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>

<Modal bind:open={samples} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">
		  Samples
		</h3>
    </div>
    <div class="text-2xl">
        The objects you are doing the experimentation and observations on. Currently, Liminal does not have an intricate sample management system, but it is in the works!
    </div>
    <!-- TODO Add Image -->
    <div slot="footer">
        <button on:click={() => (samples = !samples)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>

<Modal bind:open={inventory} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">
		  Inventory
		</h3>
    </div>
    <div class="text-2xl">
        Materials, equipment, you name it. Organize the stuff in your lab and determine physical location, history, and current status of everything.
    </div>
    <div>
        <img src={inventoryscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        <li>Neatly organize all your reagents, equipment, locations, containers, or other types of consumables</li>
        <li>Each item has a confidence score, based on how long it's been since someone has interacted with it</li>
    </div>
    <div slot="footer">
        <button on:click={() => (inventory = !inventory)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>

<Modal bind:open={tasks} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">
		  Lab Missions (Tasks)
		</h3>
    </div>
    <div class="text-xl">
        Track and manage routine lab activities, ensuring every action is documented and accessible to maintain an up-to-date record of lab operations. Missions capture non-experimental tasks, like chores and maintenance, that shape the lab’s status, offering a comprehensive view of lab activity over time.
    </div>
    <div>
        <img src={missionscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        <li>Stay organized by tracking all your lab tasks in one place</li>
        <li>Receive notifications for overdue tasks, ensuring nothing slips through the cracks</li>
        <li>Earn rewards and recognition with points for completing tasks</li>
    </div>
    <div slot="footer">
        <button on:click={() => (tasks = !tasks)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>

<Modal bind:open={papers} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">
		  Papers and Reviews
		</h3>
    </div>
    <div class="text-xl">
        Align your lab's collective knowledge. Liminal curates and connects external research, ensuring every member builds on a shared foundation of expertise.
    </div>
    <div>
        <img src={papersscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        <li>Every journal article and external document becomes part of an evolving repository, creating a common ground that strengthens collaboration and accelerates discovery.</li>
        <li>Discover the lab's most influential papers - See which research is shaping your team's work.</li>
        <li>Review and share insights on key papers to deepen collective understanding.</li>
    </div>
    <div slot="footer">
        <button on:click={() => (papers = !papers)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>

<Modal bind:open={knowledge} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">
		  Institutional Knowledge
		</h3>
    </div>
    <div class="text-xl">
        Easily capture quick insights and tips, like virtual sticky notes, to feed into the AI and enrich your lab's collective knowledge. Share bite-sized, informal knowledge—such as equipment tips or helpful reminders—directly with the AI and lab mates, enhancing its understanding and improving lab operations.
    </div>
    <div>
        <img src={knowledgescreenshot} class="w-42 h-42" alt="knowledgescreenshot">
    </div>
    <div class="text-lg">
        <li>Add a note to anything.</li>
        <li>Make your person AI smarter with extra knowledge.</li>
    </div>
    <div slot="footer">
        <button on:click={() => (knowledge = !knowledge)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>

<Modal bind:open={social} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-xl font-semibold text-black dark:text-white">
		  Social Hub
		</h3>
    </div>
    <div class="text-xl">
        Track and visualize the activity of your lab members, enabling easy communication and collaboration across your research team. Aggregate and summarize each user’s contributions to provide insights into team dynamics and streamline communication for more effective research collaboration.
    </div>
    <div>
        <img src={socialsscreenshot} class="w-42 h-42" alt="socialsscreenshot">
    </div>
    <div class="text-lg">
        <li>Help your lab mates out.</li>
        <li>Check in on each other to make sure everyone is succeeding.</li>
    </div>
    <div slot="footer">
        <button on:click={() => (social = !social)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>
