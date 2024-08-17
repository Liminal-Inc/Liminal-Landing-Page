<script>
    import { Button } from "flowbite-svelte";
    import NewsFeed from "../NewsFeed.svelte";
</script>
<svelte:head>
	<title>News</title>
	<meta name="description" content="News for the Data Network application created by Liminal Inc" />
</svelte:head>
<body>
    <div class="text-white text-2xl">
        <h1 class="text-white p-4">News Feed</h1>
        <NewsFeed view="normal"/>
        
    <hr>
        <h1 class="text-white text-lg mt-2">Blogs Only</h1>
        <p class="mt-2 mb-2">June 2024:
            <Button color="primary" size="sm" outline href="labnotebooks"><span class="text-green-600">Lab Notebooks</span></Button>
        </p>
        <p class="mt-2 mb-2">June 2024:
            <Button color="primary" size="sm" outline href="labknowledge"><span class="text-green-600">Lab Knowledge</span></Button>
        </p>
        <p class="mt-2 mb-2">May 2024:
            <Button color="primary" size="sm" outline href="generaltools"><span class="text-green-600">General Tools</span></Button>
        </p>
        <p class="mt-2 mb-2">April 2024:
            <Button color="primary" size="sm" outline href="labstate"><span class="text-green-600">Lab State vs. Metadata</span></Button>
        </p>
        <p>Next Up: <span class="text-orange-500">Pending</span></p>
    </div>
</body>