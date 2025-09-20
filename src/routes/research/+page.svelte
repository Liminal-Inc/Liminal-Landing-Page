<script lang="ts">
	import MarketAnalysis from './MarketAnalysis.svelte';
	import Movement from './Movement.svelte';
	import SharedReads from './SharedReads.svelte';
</script>

<svelte:head>
	<title>Research</title>
	<meta name="description" content="Research and links created by Liminal Inc" />
</svelte:head>

<div class="grid grid-cols-4 gap-4 mt-8 gradient-div text-black w-full">
	<Movement />
	<div class="pixel-divider col-span-4 my-10" />
	<MarketAnalysis />
	<!-- <div class="col-span-2 bg-slate-300 rounded-t-lg gap-0">
        <p class="text-3xl font-bold py-4 px-4 text-black">
            <center>
                Our Founders
            </center>
        </p>
    </div>
    <div class="col-span-2">

    </div> -->
	<!-- <div class="pixel-divider col-span-2"></div> -->
	<div class="pixel-divider col-span-4 my-10" />
	<SharedReads />
	<div class="pixel-divider col-span-4 my-10" />
</div>
