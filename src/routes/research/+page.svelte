<script>
    import DaneLink from "./DaneLink.svelte";
</script>

<svelte:head>
	<title>Research</title>
	<meta name="description" content="Research and links created by Liminal Inc" />
</svelte:head>
<body>
    <div class="text-center text-white text-2xl">Relevant Links & Content</div>
    <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div class="bg-blue-200 p-4">
                <DaneLink
                    title="Article: The difference between math and science"
                    link="https://undsci.berkeley.edu/the-science-checklist-applied-mathematics/#:~:text=Math%20doesn't%20rely%20on,different%20observations%20supporting%20the%20idea."
                    blurb="How due math and science philosophically differ" />
            </div>
            </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-2">
        <div class="bg-blue-200 p-4">
            <DaneLink
                title="Paper: Data, Information, Evidence, Knowledge"
                link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6435353/"
                blurb="How do scientists create knowledge?" />
        </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div class="bg-blue-200 p-4">
                <DaneLink
                    title="Policy: NIH Data Management and Sharing Policy"
                    link="https://sharing.nih.gov/data-management-and-sharing-policy"
                    blurb="These are standards in which academic scientists must uphold. These are becoming commonplace at all major funding agencies." />
            </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div class="bg-blue-200 p-4">
                <DaneLink
                    title="Policy: NSF Data Management and Sharing Policy"
                    link="https://new.nsf.gov/funding/data-management-plan"
                    blurb="Standards in data integrity and provenance outlined by the NSF." />
            </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div class="bg-blue-200 p-4">
                <DaneLink
                    title="Information: Purdue Research Integrity Office"
                    link="https://www.purdue.edu/provost/researchIntegrity/ethics.html"
                    blurb="Purdue research integry main page. Resources for University policy on standards of research and reviewing allegations of data malfeasance." />
            </div>
        </div>
    </div>
</body>