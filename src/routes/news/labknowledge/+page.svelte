<!-- src/BlogPost.svelte -->
<script>
    // You can add any JavaScript or Svelte-specific logic here.
    // For example, to handle the thumbs up/down voting:
    let thumbsUp = 0;
    let thumbsDown = 0;

    function handleThumbsUp() {
        thumbsUp += 1;
    }

    function handleThumbsDown() {
        thumbsDown += 1;
    }
</script>

<div class="blog-post">
    <h1 class="text-purple-600 mb-4 text-4xl">Lab Knowledge Generation</h1>
    <div class="keywords">
        <span>data</span>, <span>information</span>, <span>knowledge</span>
    </div>
    <h2 class="text-green-600 font-extrabold mt-4 text-center text-xl">TL/DR</h2>
    <p class="tldr-summary">
        Academic labs can be good at knowledge generation, but we need to raise the bar with knowledge retention and dissemination.
    </p>
    <h2 class="text-red-500 text-center text-xl font-extrabold">Full Content</h2>
    <div class="content">
        I was reading <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6435353/">this paper</a> and it got me thinking, how is the academic process doing in regards to efficient knowledge generation? Briefly, the paper challenges an old hierarchy of knowledge generation and proposes a new one, starting with data and leading to knowledge at the apex. They argue data turns into information when context is added, information turns to evidence when there’s comparisons of information, and eventually evidence turns into knowledge when there’s a consensus. I argue this hierarchy is multidirectional, meaning higher levels can revert to lower ones (for example, information back to data).
    </div>
    <div class="content">
        A lab may accumulate a bunch of data, contextualize and compare it, finding a consensus and thus generating knowledge that is shared across the lab and (hopefully) to other people. The main point here is that there’s a process to this knowledge generation that needs to be documented and tested, otherwise it’s not actually knowledge. My lab may have done vigorous research and found that ‘all beetles are colorblind’, but if I state that on social media with no evidence, I’m stripping the knowledge of its’ critical parts and reverting it below data, down to a meaningless statement. This is not to say we should not acknowledge peoples’ reputations and trust when they make statements, but a key scientific principle is to record our observations and the whole process of knowledge generation. This is why we have peer-reviewed journals, to challenge the new knowledge we propose to contribute to. Side thought - is this still an efficient way to disseminate knowledge? It’s a long, laborious process; the laborious process doesn’t bother me as much as the long cycle-times and periods in which labs are sitting on information unknown to the rest of the world. More details in another post.
    </div>
    <div class="content">
        This brings me to many database and pooled data initiatives, where large sums of people contribute their science to one centralized location and the expectation is everyone will benefit from ‘pooled knowledge’. My lab might have done sequencing on some number of samples and I throw my sequence files into this database, annotating the data with the metadata I feel is relevant. But the thing with many of these initiatives is we’re taking knowledge from all these labs, stripping it of proper context and diluting it down to data, and then expecting to go through the data, information, evidence, and knowledge process to create something new.
    </div>
    <div class="content">
        You may have read my post on metadata not being good enough, and I think most of us can agree with that (how often do we pool data and wish we had more metadata, or different metadata, or remove data from a meta-analysis due to not conforming…). We should be able to work with chunks of knowledge and combine them without first reverting them back to data, or at least I like to think so. Of course, there is a recontextualization when you compare a single analysis vs a combined analysis, but the underlying data and truth does not change in either of the single analyses after they are merged. This is a redundancy problem, where we’re constantly reverting and stripping valuable scientific information from our work when we communicate. Think about some information (contextualized data) you shared with another lab; when it goes to your collaborator, there’s most likely a large amount of immediate information loss due to incomplete communication and documentation.
    </div>
    <div class="content">
        So how does the current academic lab turn data into knowledge? I argue that it’s through a very long and leaky pipeline that starts with people in the lab and ends when that knowledge is no longer available and/or accessible. When notebooks are thrown out, we’re destroying years of data, information, evidence, and knowledge. This is also true when members leave the lab, as a large sum of their value and contribution to the lab lives ephemerally in their head. The real shame in this is not necessarily the specific science that is lost in the notebook (or person) itself, but of the potential to combine it with other work to build new chunks of knowledge. These chunks of knowledge are the building blocks of our current state of science, and we’re constantly destroying and recreating them. Granted, this pattern of generating and destroying knowledge is also a cornerstone of our scientific enterprise, but I believe we’re abusing the amount of knowledge destruction.
    </div>
    <div class="content">
        The scientist is the source of this knowledge generation, and specifically in academia, we’re failing to maintain new knowledge due to lack of documentation and extraneous pressures. Labs are more complex than ever and we’re expecting scientists to deal with a lot more stuff. This comes at the expense of documentation standards and knowledge retention. The lab is the sum of all the past knowledge, current knowledge, and future potential. The potential is limited by access to that past and current knowledge.
    </div>
    <div class="content">
        To conclude, do I think labs are good at generating knowledge? Kind of, yeah. But the issue I see is the retention and building of knowledge, especially regarding staff turnover and collaboration. We need to document better, especially regarding information we do not necessarily think is relevant to other people, because oftentimes we’re sitting on a lot of hidden context with our datasets. In the future, we have to be better. 
    </div>
    <div class="text-purple-600 italic">-Dane</div>
    <div class="feedback">
        Email me at dane@liminalbios.com if you have any thoughts on this post.
        <!-- <button class="thumbs-up" on:click={handleThumbsUp}>👍 {thumbsUp}</button>
        <button class="thumbs-down" on:click={handleThumbsDown}>👎 {thumbsDown}</button> -->
    </div>
</div>

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
