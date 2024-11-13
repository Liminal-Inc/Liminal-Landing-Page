<script lang="ts">
    import { Modal } from 'flowbite-svelte';
    import notebookscreenshot from '$lib/images/NotebookScreenshot.png'
    import findingscreenshot from '$lib/images/FindingsScreenshot.png'
    import inventoryscreenshot from '$lib/images/InventoryScreenShot.png'
    import missionscreenshot from '$lib/images/MissionScreenshot.png'
    import papersscreenshot from '$lib/images/Papersscreenshot.png'
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
        <center>
            <!-- <div class="mb-2">
                <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">				
                    What's in the box?
                </p>
            </div> -->
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
                <div class="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold">
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
        </center>

    </div>
</div>



<Modal bind:open={notebook} autoclose outsideclose class="text-black bg-slate-300">
	<div slot="header">
		<h3 class="text-2xl font-semibold text-black dark:text-white">
		  Liminal Notebook
		</h3>
    </div>
    <div class="text-2xl">
        Somewhere to link all the moving parts of the research process in one location. Not to duplicate or summarize the canonical physical notebook, but a centralized place to connect all the moving parts.
    </div>
    <div>
        <img src={notebookscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        Main features:
        <li>Free note section where you can reference anything in the lab, from Users, Equipment, Data, Missions, or anything else! Customize your notes to your personal needs</li>
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
        The experimental data that the user creates and/or scavenges to be put into the app in secure storage. We call these <span class="font-bold">Findings</span> to not overload the term data or results. Provides a way to compare data across the lab and perform meta-analyses. Findings are consumed via processors that recognize specific file types and organize and summarize the data automatically. Processors can be infinitely extended to account for any file type.
    </div>
    <div>
        <img src={findingscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        Main features:
        <li>Drag and drop files to be automatically parsed into a neat table</li>
        <li>Customizable file parsers, which extract and calculate information from files</li>
        <li>Search based on any attribute, such as per user or specific parameter</li>
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
        The objects you are doing the experimentation and observations on.
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
        Houses all materials, equipment, and storage vessels used in the lab. Organizes the stuff in your lab and allows you to reference and explore each item throughout its lifespan in the lab. Determine physical location, history, and current status of each thing.
    </div>
    <div>
        <img src={inventoryscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        Main features:
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
        A place to record the non-experimental actions in the lab, usually chores and maintenance performed on a regular basis. These missions contribute to the lab state, which can be summarized at any point to determine all of the activity that has happened in a certain time frame.
    </div>
    <div>
        <img src={missionscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        Main features:
        <li>Keep track of all your lab tasks</li>
        <li>Get alerts when tasks are overdue</li>
        <li>Get points for completing missions</li>
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
        A repository of external documents, usually journal articles, that represents the knowledge of the lab members through research and not experimentation. These are reviewable documents that connect and align the knowledge of each scientist to create higher common ground in background and expertise.
    </div>
    <div>
        <img src={papersscreenshot} class="w-42 h-42" alt="Liminal Logo">
    </div>
    <div class="text-lg">
        Main features:
        <li>See the most read papers in the lab</li>
        <li>Review papers and share with lab mates</li>
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
		  Knowledge Management
		</h3>
    </div>
    <div class="text-xl">
        Small pieces of knowledge learned through experience and/or communication that are useful in any aspect of the lab operations. Analogous to a mini notebook entry without needing to formalize methods, results, and discussion. This encompasses the extra bits of information needed to succeed in your lab, such as tips on using equipment, gotchas, ideas, among any number of information you want to share with your fellow labbies.
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
        The users that make up the lab and accumulate application activity that can be compared and summarized. Connects the app experience across scientists and provides a means of actionable communication before the research group.
    </div>
    <div slot="footer">
        <button on:click={() => (social = !social)} class="btn btn-primary bg-purple-300 rounded-lg py-2 px-4 outline">
            Close
        </button>
    </div>
</Modal>