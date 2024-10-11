<script>
    import CompanyInfo from "./CompanyInfo.svelte";
    import ExtendedTeam from "./ExtendedTeam.svelte";
    import FounderGrid from "./FounderGrid.svelte";
    import WantToJoin from "./WantToJoin.svelte";
    
</script>
<svelte:head>
	<title>Team</title>
	<meta name="description" content="Team information of Liminal Inc, who created the Data Network application" />
</svelte:head>


<div class="grid grid-cols-1 w-full sm:grid-cols-1 gap-2 justify-evenly text-black text-lg">
    <CompanyInfo />
    <div class="pixel-divider col-span-4 my-10"></div>
    <!-- <div class="col-span-2 bg-slate-300 rounded-t-lg gap-0">
        <p class="text-3xl font-bold py-4 px-4 text-black">
            <center>
                Our Founders
            </center>
        </p>
    </div>
    <div class="col-span-2">

    </div> -->
    <FounderGrid/>
    <div class="pixel-divider col-span-4 my-10"></div>
    <ExtendedTeam/>
    <!-- <div class="pixel-divider col-span-2"></div> -->
    <div class="pixel-divider col-span-4 my-10"></div>
    <WantToJoin/>
    <div class="pixel-divider col-span-4 my-10"></div>
</div>
