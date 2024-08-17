<script lang="ts">
	import DaneLink from './DaneLink.svelte';
	// import type { DaneLinkProps } from '$lib/types';

	// const daneLinks: DaneLinkProps[] = [
	const daneLinks = [
		{
			title: 'Article: The difference between math and science',
			link: "https://undsci.berkeley.edu/the-science-checklist-applied-mathematics/#:~:text=Math%20doesn't%20rely%20on,different%20observations%20supporting%20the%20idea.",
			blurb: 'How due math and science philosophically differ'
		},
		{
			title: 'Paper: Data, Information, Evidence, Knowledge',
			link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6435353/',
			blurb: 'How do scientists create knowledge?'
		},
		{
			title: 'Policy: NIH Data Management and Sharing Policy',
			link: 'https://sharing.nih.gov/data-management-and-sharing-policy',
			blurb:
				'These are standards in which academic scientists must uphold. These are becoming commonplace at all major funding agencies.'
		},
		{
			title: 'Policy: NSF Data Management and Sharing Policy',
			link: 'https://new.nsf.gov/funding/data-management-plan',
			blurb: 'Standards in data integrity and provenance outlined by the NSF.'
		},
		{
			title: 'Information: Purdue Research Integrity Office',
			link: 'https://www.purdue.edu/provost/researchIntegrity/ethics.html',
			blurb:
				'Purdue research integrity main page. Resources for University policy on standards of research and reviewing allegations of data malfeasance.'
		}
	];
</script>

<div class="col-span-5">
	<div class="grid grid-cols-6 gap-2">
		<div class="text-white text-3xl col-span-3 font-bold mb-4">Relevant Links & Content</div>
		<div class="col-span-2" />

		<!-- Each of the DNLinks -->
		{#each daneLinks as daneLink}
			<div class="col-span-2 flex">
				<DaneLink title={daneLink.title} link={daneLink.link} blurb={daneLink.blurb} />
			</div>
		{/each}
	</div>
</div>
