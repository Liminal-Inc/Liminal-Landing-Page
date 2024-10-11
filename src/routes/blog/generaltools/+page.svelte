<!-- src/BlogPost.svelte -->
<script>
    import { Button } from "flowbite-svelte";
    import { ArrowLeftOutline } from 'flowbite-svelte-icons';
    // You can add any JavaScript or Svelte-specific logic here.
    // For example, to handle the thumbs up/down voting:
    let thumbsUp = 44;
    let thumbsDown = 1;

    function handleThumbsUp() {
        thumbsUp += 1;
    }

    function handleThumbsDown() {
        thumbsDown += 1;
    }
</script>

<svelte:head>
	<title>GeneralTools</title>
	<meta name="description" content="General toolset for academic life science laboratories" />
</svelte:head>
<body>
<div class="blog-post">
    <Button class="text-black font-bold bg-purple-300 hover:bg-gray-700" href="/"><ArrowLeftOutline/>Home</Button>
    <h1 class="text-purple-600 mb-4 text-4xl">General Life Science Toolset</h1>
    <div class="keywords">
        <span>software</span>, <span>tools</span>, <span>open-source</span>
    </div>
    <h2 class="text-green-600 font-extrabold mt-4 text-center text-xl">TL/DR</h2>
    <p class="tldr-summary">
        Academic life-science needs a generalizable software toolkit that can be used across all labs. This toolkit
        should be open-source and allow for easy integration for users to customize for their own lab needs.
    </p>
    <h2 class="text-red-500 text-center text-xl font-extrabold">Full Content</h2>
    <div class="content">
        When you find yourself performing redundant and/or recurrent work, often you can implement some sort of programmatic technique to make your life easier. As a computational biologist, I personally run into repetitive tasks all throughout my workday. Some tasks that aren't necessarily redundant are – upon further inspection – simply composed of a series of smaller redundant and non-redundant tasks. The struggle lies in where to draw the line of automating a solution versus taking the time to dissect the task and make an informed decision with your eyes on the problem.
    </div>
    <div class="content">
        When understanding how to automate tasks in your workflow, I find it a meaningful exercise to differentiate between which tasks I uniquely do, versus which tasks I believe other scientists are also dealing with. For example, many people deal with fasta files in the genomics world (outer layer of the onion). Within the context of a fasta file, there are many different worlds in which you're inspecting said file. For example, the file could represent an isolate, a metagenome composed of contigs, many genomes smashed into a single file, or perhaps the sequences are some genes of interest (an inner layer of the onion). At the core (of the onion…), I might be working with some rare organism in a novel context to make knowledge out of this mess of data, which I believe is a task unique to myself.
    </div>
    <div class="content">
        We can validate any fasta file independently of the meaning of the fasta file (whether it's a metagenome or a gene, some wild context, it doesn't matter). But given some extra information, we can then validate at higher resolution. For example, if we know we have a fasta file that represents a metagenome, we can think hierarchically that we could first validate that it is indeed a fasta file, then move on and determine if it has the properties of a metagenome. Pushing this example to yet a higher resolution of validation, if we knew the organism the metagenome was representing, it is possible to determine another level of validation. Imagine knowing the organisms GC content and validating that the metagenome is within 5% on either bound, maybe we know the size of the organisms genome and we validate we have at least X percent to be a valid representation, or perhaps yet we run some tetranucleotide analysis; the list goes on.
    </div>
    <div class="content">
        Relating to my previous rant on base vs. extended metadata, lower levels of the validation hierarchy are like base metadata; more generalizable and broader boundaries to make more people happy. But as you increase the resolution of the validation, you're requiring more external information about the said object to provide meaningful validation. One more example to drive this home: it might be easier to describe 'a human' versus 'an American' to someone who is completely ignorant of the concept of a human. Describing a single individual at a particular time that this alien could differentiate from any other object is about as fine a resolution as we could imagine getting.
    </div>
    <div class="content">
        Through my work I'm constantly dealing with various files in various formats. Some I like to finagle myself, some I know are standardized and I don't dare mess with their structure, and some in between. With these files, often there are a lot of 'sanity checks' I want to perform. For example, are they valid? How many entries are there? Can I get a clue inside this extremely large zip file as to determine what the contents might mean? The list goes on. When working with standardized file formats, I think I can speak for most people and say that if a file is large, we usually assume the file is in the correct format and only find out it's not when we shove it into some other program that has an issue with it. I often trust that the program I'm shoving the file in has a perfect validator, or at least good enough so it won't mess with my results. But what I'm increasingly finding is if you look hard enough, there's ways for not-so-squeaky-clean files to go through many open-source bioinformatics programs undetected.
    </div>
    <div class="content">
        This is okay though. And I believe we should have a way to validate files hierarchically without relying on downstream programs. Think about how much redundant code there is out there verifying a fasta file is valid before running computations. If we had a way to provide a certificate of validation alongside a file, all programs could assume the file is perfect and pump the juice right into the juicer. Maybe this certificate is immutable at the time of validation and contains a checksum and a True/False (validation) flag, and instead of validating the fasta file you could check if the checksum matches the certificate checksum and return the validation flag. Perhaps there could be a remote repository of read-only certificates, and this is how you could check the validity from anywhere, or perhaps this will take longer than validating the file; I digress.
    </div>
    <div class="content">
        Once you validate what a file is, this is where a lot of fun and magic can happen. You now have full control over what you validated because you know what you have. The field of bioinformatics (and others) should have a centralized repository that provides file validation for the common file types in our field, while allowing users to extend the validation to fit their custom needs. There are times where I want to verify a GFF file is indeed a GFF file, but I also want to know the largest gene, or the shortest gene, or where a particular locus is. It is insane to repeat this functionality so many times throughout so many programs. Jumping into some programming speak, we must have a shared library that other programs can import, use, and extend for variable levels of customization. There's no reason we as a field can't have 1 good way to grab all sequences from a paired end fastq file and interleave them, or get all headers using some regex, or determine the mean seq length, the list goes on.
    </div>
    <div class="content">
        Now I don't live under a rock and know tools for this sort of stuff do indeed exist. But many focus on a subset of the tasks I would like to do and are not easily extendible. BBMAP has great tools, but it's not being updated quickly and there are 10 total contributors in 8 years. Samtools has about 5-10 contributors per year since 2016, bowtie keeps under 20, spades is getting less but for the last 10 years has had around 10-50, and FastQC has a couple. All these are great programs with lots of functionality in their respective niche. I will take this time to say anvi'o is an outlier and really pushing the open-source initiative, so kudos that way. But by and large, we are primarily utilizing open source to shove data into free programs instead of contributing and collaborating with one another.
    </div>
    <div class="content">
        There's nowhere to go for me to validate a fasta file (to keep the same lame example going) and extend that validation definition to what a metagenome means to my lab. I also can't easily contribute to another repo and add some cool tricks and permutations I want to do with my fasta file (I find myself doing $ grep '^>' example.fasta | wc -l repeatedly). Beyond the fasta, there really is no reason why this library couldn't go beyond this and allow myself and other scientists to define not-so-common files, such as the file that spits out of our gas chromatography machine (built in 1989).
    </div>
    <div class="content">
        So, we're building a python package that anyone is welcome to collaborate, extend, challenge, or whatever on that provides file validation and functionality. The functionality is limited to any permutation, calculation, statistic, or anything you can do with that file without the help of an external file or database. You could turn a fasta file into a csv with headers and seqs, get the gc content of each sequence, write a file with N's randomly changed to A/T/G/C, etc. Maybe I have a customize file-format my lab uses, and I want to validate that and perform some tricks with; perfect, that'll work. Beyond the validation, we're baking in configuration settings that allow users to tell the file what to do more easily and quicker the more they use said commands. The customizable configuration settings will allow redundant parameterization via command line arguments to be removed while keeping a history of what parameters were used. Further, each command returns a valid status code and report of the results given to the user in a variety of customizable formats.
    </div>
    <div class="content">
        It's important to mention that performing 'command-line magic' on its own should not be up to our standards (as a field). With any computation we should expect sufficient logging because, as we claim, we are scientists performing replicable work, not possums eating trash. And sometimes this logging goes beyond what we see in our ~/.bash_history (or wherever it goes on Windows). Once we post on this aspect of configuration and logging, we will link it to this document. But overall, I think we can do better with the state of open-source software in life sciences. That being said, there are a lot of amazing software solutions out there being built by extremely hard workers and we just hope to make something that lands in the good bucket.
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
