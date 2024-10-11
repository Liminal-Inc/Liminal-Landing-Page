<!-- src/BlogPost.svelte -->
<script>
    import { Button } from "flowbite-svelte";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";
    // You can add any JavaScript or Svelte-specific logic here.
    // For example, to handle the thumbs up/down voting:
    let thumbsUp = 42;
    let thumbsDown = 3;

    function handleThumbsUp() {
        thumbsUp += 1;
    }

    function handleThumbsDown() {
        thumbsDown += 1;
    }
</script>

<svelte:head>
	<title>LabState</title>
	<meta name="description" content="Using lab state instead of metadata in academic life science laboratories" />
</svelte:head>

<body>
    <div class="blog-post">
        <Button class="text-black font-bold bg-purple-300 hover:bg-gray-700" href="/"><ArrowLeftOutline/>Home</Button>
        <h1 class="text-purple-600 mb-4 text-4xl">Lab State vs. Metadata</h1>
        <div class="keywords">
            <span>data models</span>, <span>metadata</span>, <span>state</span>
        </div>
        <h2 class="text-green-600 font-extrabold mt-4 text-center text-xl">TL/DR</h2>
        <p class="tldr-summary">
            Defining metadata is hard and often subjective. We need to leverage tools to help us define and manage metadata,
            thinking about it more as <span class="underline">lab state</span>.
        </p>
        <h2 class="text-red-500 text-center text-xl font-extrabold">Full Content</h2>
        <div class="content">
            Metadata is "data that describes other data", or "data that provides context to other data". 
            Often times, understanding and making decisions on which metadata attributes to keep track of during 
            a project or analysis can be a tedious job. One area where metadata requires relatively more lengthy 
            lists and descriptions is in bioinformatic projects, as the data may not at first seem physically tied 
            to the lab. Especially when stored in cloud storage, without metadata describing where the data came from,
            there is no way to tie that back to any wet-lab events.
        </div>
        <div class="content">
            Many entities and organizations have come up with specific metadata attributes that everyone must adhere to,
            while also allowing a flexible set of metadata attributes. These can be thought of as the "stringent"
            metadata vs. the 'extra' metadata. When I write code, I create what I call Base Models for data, and 
            then allow the user to extend those models with 1 or more Extended Models. For example, the Base Model 
            for a PCR experiment could include attributes such as primers, master mix, cycle conditions, cycle number, 
            and sample name. This model would look something like this:
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th>Primer |</th>
                        <th>Master Mix |</th>
                        <th>Cycle Conditions |</th>
                        <th>Cycle Number |</th>
                        <th>Sample Name |</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>V4+V5</td>
                        <td>KAPA</td>
                        <td>60/72/65</td>
                        <td>20</td>
                        <td>A</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div class="content">
            Above is a data model shown as 1 row of a table. When I talk about a “data model”, I"m talking about the 
            minimum set of attributes required to describe an object, which can be represented (in 1 form) as the 
            column names in a row. For example, a square requires at a minimum an attribute of “side length” to
            describe the said square. A rectangles' data model requires at least 2 attributes, the height, and the 
            width. As you increase the complexity of the object you're trying to describe, you can image the data 
            model needing to incorporate more attributes (imagine how many attributes you'd need to describe a 
            particular species of a bird).
        </div>
        <div class="content">
        We could go as far as saying that every conceivable PCR experiment requires these attributes at the minimum 
        to describe in a somewhat intelligible manner what occurred; I'm sure many people could create hours of 
        discussion on what this minimum set of criteria could be - this is beside the point. But this in no way 
        describes the sample or provides context. Thus, an Extended Model allows scientists to add more metadata 
        attributes on a per assay way. In other words, **the Extended Model of a PCR assay done last year might 
        differ from the Extended Model done today**, but both share the **Base Model**. This allows us the flexibility 
        of combining all our PCR data and doing permutations, analyses, and graphing based on shared PCR traits that 
        we know each assay contains.
        </div>
        The idea of Base and Extended models, or stringent and extra metadata, can become much more complicated as 
        time progresses. This is usually due to the scientists" inability to foresee what attributes may be important 
        or overlooking what seems like easily assumable data that is not important. And this is no knock on the 
        scientist; it's extremely hard, even with extensive planning and teams, to understand what data you will 
        need in the future.
        <div class="content">
        The fact is determining which metadata attributes to add to an experiment is a lot harder than it seems and 
        there almost never is a correct answer. The descriptors tied to the experiment are placed there because the 
        scientist think of them, and they are completely disconnected from any other lab activity. What I mean by this
        is if the scientist realizes that a particular metadata attribute was incorrect, there"s no way to dynamically update the metadata appended to an experiment without manually determining the error and changing that themself. In this sense, the scientist is a subjective vessel by which the metadata travels from what is determined to be the truth and attached to the experiment.
        </div>
        The base reality of any experiment is that it occurs during a very specific period within the labs overall
        lifespan. At the time of the completion of an experiment, there is a certain state that is obtained in the
        lab that theoretically could be attached to the experiment to allow perfect replicability. This of course
        is not possible and would require an unfathomable number of metadata to describe the said state: time of
            day, humidity, temperature, altitude, etc. None of which are used as metadata attributes in experiments 
            right now except in extreme cases.
        <div class="content">
            The idea of a lab state is currently science fiction but could be a reality sooner than we might expect. 
            The reason it seems so far away is because we use so many different tools to go from data collection to 
            data publication. There are various buckets in which we work, all of which are very disconnected and 
            require the scientist to act as the conduit, or glue, between all of them. Not only does this place an 
            immense pressure on the scientist, but it disconnects our work and allows new errors to seep into our 
            workplace (especially undetected errors). Lots of activity is going on in the lab throughout the day,
            whether it's experiments in progress, cleaning, stocking, new items being delivered, new samples being 
            created, or any other such tasks.
        </div>
        <div class="content">
            The scientist deals with many challenges and uses a series of many disconnected solutions to address 
            the challenges: Slack/Discord/Google Teams for communication, an excel sheet for a cleaning log, 
            whiteboard for notifications, sensors describing lab conditions, an online sheet for inventory, stickie 
            notes on a machine to indicate someone is using it, BOX/OneDrive/GoogleDrive for data storage, various 
            compute sources for analytics, or whatever may be the case for your lab. The amalgamation of these events
            defines the total state of the lab, which are essentially extended metadata attributes that could be 
            appended to each assay at the time of completion.
        </div>
        <div class="content">
            What the scientific community needs is a comprehensive ecosystem for which to work, one that is both 
            flexible in the tools that it supports and simple to integrate with existing solutions. This system 
            could not be niche in supporting just data storage, nor could it focus on the analytics and graphics.
            These aspects are the bread and butter of any scientific lab churning out papers and research, but it's 
            not sufficient metadata in our attempts at creating true scientific replicability. We need a system that 
            holds information about all the major components of a lab at various timepoints, or states, which can then
            be exported with experiments to create a deeper level of science. I don't know, food for thought.
        </div>
        <div class="text-purple-600 italic">-Dane</div>
        <div class="feedback">
            Email me at dane@liminalbios.com if you have any thoughts on this post.
        </div>
        <div class="feedback">
            <button class="thumbs-up" on:click={handleThumbsUp}>👍 {thumbsUp}</button>
            <button class="thumbs-down" on:click={handleThumbsDown}>👎 {thumbsDown}</button>
        </div>
    </div>
</body>

<style>
    .blog-post {
        background: white;
        width: 80%;
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: #333;
    }

    .title {
        font-size: 24px;
    }

    .keywords {
        margin-top: 10px;
        font-style: italic;
        color: #555;
    }

    .keywords span {
        background: #eef;
        padding: 3px 6px;
        border-radius: 5px;
        margin-right: 5px;
    }

    .tldr-summary {
        font-size: 24px;
        background: #ffffcc;
        padding: 10px;
        border-left: 5px solid #ffeb3b;
        margin: 20px 0;
    }

    .content {
        margin: 20px 0;
    }

    .feedback {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
    }

    .feedback button {
        border: none;
        background: #ddd;
        color: #333;
        font-size: 24px;
        padding: 10px 20px;
        cursor: pointer;
        transition: background 0.3s;
    }

    .feedback button:hover {
        background: #ccc;
    }

    .thumbs-up:focus, .thumbs-down:focus {
        outline: none;
        background: #bbb;
    }

    .thumbs-up:active, .thumbs-down:active {
        transform: scale(0.95);
    }
</style>
