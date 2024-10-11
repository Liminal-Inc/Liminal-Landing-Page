<script lang="ts">
    import { Modal } from 'flowbite-svelte';
    import notebookscreenshot from '$lib/images/NotebookScreenshot.png'
    import findingscreenshot from '$lib/images/FindingsScreenshot.png'
    import inventoryscreenshot from '$lib/images/InventoryScreenShot.png'
    import missionscreenshot from '$lib/images/MissionScreenshot.png'
    import papersscreenshot from '$lib/images/Papersscreenshot.png'
	import { 
		ArrowUpSolid, ArrowDownToBracketSolid
	} from 'flowbite-svelte-icons';

    let notebook = false;
    let findings = false;
    let samples = false;
    let inventory = false;
    let tasks = false;
    let papers = false;
    let knowledge = false;
    let social = false;
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">


<div class="text-white rounded-lg">
    <div>
        <div class="mb-4">
            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">				
                Academic Science is Rough
            </p>
        </div>
        <div class="p-4 text-lg sm:text-md md:text-lg lg:text-lg">
            <div class="grid grid-cols-1 gap-4 p-4 mb-2 mt-2 text-center">
                <div class="outline outline-white rounded-lg bg-black hover:bg-gray-700 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl">
                    <p>We stress over <span class="text-blue-600">good</span> results and aren't rewarded for <span class="text-green-500">effort</span></p>
                </div>
                <div class="outline outline-white rounded-lg bg-black hover:bg-gray-700 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl">
                    <p>Thousands of disconnected files, notes, and things to remember. Staying on top of all your responsibilities is hard</p>
                </div>
                <div class="outline outline-white rounded-lg bg-black hover:bg-gray-700 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl">
                    <p>&lt; 1% of labs have a comprehensive system to keep track of essential lab activity</p>
                </div>
                <div class="outline outline-white rounded-lg bg-black hover:bg-gray-700 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl">
                    <p class="mt-2 mb-2">~$25-28 billion is wasted each year in research funds.</p>
                    <span class="flex items-center">
                        <i class="mr-2 fas fa-arrow-down text-red-500"></i> waste & 
                        <i class="mr-2 fas fa-arrow-up text-green-500 ml-2"></i> researcher salary
                      </span>
                </div>
                <div class="outline outline-white rounded-lg bg-black hover:bg-gray-700 p-4 flex flex-col items-center justify-center shadow-lg">
                    <p class="mt-2 mb-2">65-80% of research is not reproducible</p>
                </div>
            </div>
        </div>
    </div>
</div>