<script>
	import CompanyInfo from './CompanyInfo.svelte';
	import ExtendedTeam from './ExtendedTeam.svelte';
	import FounderGrid from './FounderGrid.svelte';
	import WantToJoin from './WantToJoin.svelte';
</script>

<svelte:head>
	<title>Team</title>
	<meta
		name="description"
		content="Team information of Liminal Inc, who created the Data Network application"
	/>
</svelte:head>

<div class="grid grid-cols-1 w-full sm:grid-cols-1 gap-2 justify-evenly text-black text-lg">
	<CompanyInfo />
	<div class="pixel-divider col-span-4 my-10" />
	<FounderGrid />
	<div class="pixel-divider col-span-4 my-10" />
	<ExtendedTeam />
	<!-- <div class="pixel-divider col-span-2"></div> -->
	<div class="pixel-divider col-span-4 my-10" />
	<WantToJoin />
	<div class="pixel-divider col-span-4 my-10" />
</div>
