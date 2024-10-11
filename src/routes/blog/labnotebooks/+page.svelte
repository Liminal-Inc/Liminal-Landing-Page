<!-- src/BlogPost.svelte -->
<script>
    import { Button } from "flowbite-svelte";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";
    // You can add any JavaScript or Svelte-specific logic here.
    // For example, to handle the thumbs up/down voting:
    let thumbsUp = 81;
    let thumbsDown = 9;

    function handleThumbsUp() {
        thumbsUp += 1;
    }

    function handleThumbsDown() {
        thumbsDown += 1;
    }
</script>

<svelte:head>
	<title>Notebooks</title>
	<meta name="description" content="Lab notebooks are failing us" />
</svelte:head>

<body>
    <div class="blog-post">
        <Button class="text-black font-bold bg-purple-300 hover:bg-gray-700" href="/"><ArrowLeftOutline/>Home</Button>
        <h1 class="text-purple-600 mb-4 text-4xl">Why the lab notebook is failing scientists in the 21st century</h1>
        <div class="keywords">
            <span>communication</span>, <span>notebook</span>, <span>science</span>
        </div>
        <h2 class="text-green-600 font-extrabold mt-4 text-center text-xl">TL/DR</h2>
        <p class="tldr-summary">
            The current system is perpetuating terrible notebook practices, and the incentives in place to change this aren’t showing any promise. If the academic research system really wants to change this culture of poor note taking and high priority on cherry picking "good" data, something major will need to happen. 
        </p>
        <h2 class="text-red-500 text-center text-xl font-extrabold">Full Content</h2>
        <div class="content">
            For centuries, the paper and pencil lab notebook has been the cornerstone of scientific discovery. It has documented breakthroughs, chronicled experimental journeys, and served as a trusted repository for raw data and observations. However, as we forge ahead into the 21st century, the traditional lab notebook, while still valuable as a historical and scientific resource, is increasingly falling short as an effective tool for modern scientific practice.
        </div>
        <div class="content">
            The traditional lab notebook, despite its legacy, faces several critical limitations that hinder its effectiveness in contemporary research environments:
                <ol>
                    <br>
                    <li class="bg-slate-200">
                        <span class='font-bold'>Data Management:</span> Modern experiments often generate vast amounts of data, far exceeding the capacity of paper notebooks to store and organize efficiently. Paper notebooks are not searchable, making it difficult to retrieve specific information quickly.
                    </li>
                    <br>
                    <li class="bg-slate-200">
                        <span class='font-bold'>The system doesn't perpetuate good notebooks:</span> The academic system has no regulations or incentives for researchers to provide meaningful notebook entries. Data management plans fall short of enforcing actionable data integrity. Record keeping is extremely low on the priority list in academic institutions, with bureaucratic and results-driven expectations driving stress and workload. 
                    </li>
                    <br>
                    <li class="bg-slate-200">
                        <span class='font-bold'>Provenance and Reproducibility:</span> The integrity and reproducibility of scientific research hinge on meticulous record-keeping. Paper notebooks can suffer from illegible handwriting, incomplete entries, and the loss or degradation of physical pages, all of which can compromise data provenance. Most importantly, <span class="underline">scientists often can't prioritize data entry</span> and practice retroactive note taking, counter to scientific principles we’re taught.
                    </li>
                    <br>
                    <li class="bg-slate-200">
                        <span class='font-bold'>Collaboration:</span> Science today is highly collaborative, often involving multiple researchers across various locations. Paper notebooks cannot easily be shared or accessed by remote collaborators, slowing down the pace of collaborative research.
                    </li>
                    <br>
                    <li class="bg-slate-200">
                        <span class='font-bold'>Integration with Digital Tools:</span> Modern laboratories utilize an array of digital tools and instruments that produce electronic data. Integrating these outputs into a paper notebook is cumbersome and inefficient.
                    </li>
                </ol>
            </div>
        <hr class="h-2 bg-black">
        <div class="content">
            To address these limitations, it is imperative to transition to a hybrid approach of paper plus digital lab notebooks (DLNs) that can harness the power of software to enhance scientific record-keeping. Here's why software solutions are essential for guiding new scientists towards high-provenance notebook entries:
            <ol>
                <br>
                <li class="bg-slate-200">
                    <span class="font-bold">Searchability and Organization:</span> Digital lab notebooks allow for easy searching and organization of data. Researchers can tag entries, link related experiments, and quickly locate specific information, thereby enhancing efficiency and accuracy.
                </li>
                <br>
                <li class="bg-slate-200">
                    <span class="font-bold">Ensuring Data Integrity:</span> Software-based notebooks can enforce standardized data entry protocols, ensuring that all necessary information is captured consistently. On the contrary, it’s impossible to pre-determine what all fields should be required when creating a particular notebook entry. Features like timestamping and version control provide a robust audit trail, crucial for data provenance. But there also needs to be flexibility in the way notebooks are filled out, relying on many types of data to create a notebook entry (text, photos, videos, etc.).
                </li>
                <br>
                <li class="bg-slate-200">
                    <span class="font-bold">Facilitating Collaboration:</span> DLNs enable real-time collaboration, allowing multiple researchers to access, edit, and comment on entries simultaneously. This fosters a more dynamic and responsive research environment, breaking down the barriers imposed by physical notebooks.
                </li>
                <br>
                <li class="bg-slate-200">
                    <span class="font-bold">Integration with Modern Tools:</span> Digital notebooks can seamlessly integrate with laboratory instruments, databases, and other software tools. This integration facilitates automatic data entry, reducing human error and ensuring that all experimental data is accurately captured.
                </li>
            </ol>
        </div>
        <hr class="h-2 bg-black">
        <div class="content">
            Interestingly, <span class="underline">many scientists are already taking steps towards digital documentation,</span> albeit in fragmented ways. They may use spreadsheets, word processors, or other digital tools to complement their paper notebooks. The challenge is to consolidate these efforts into a cohesive, user-friendly digital + analog lab notebook system. Further, the solution cannot be an isolated lab notebook, but must be a comprehensive platform that represents all the major aspects of lab work. The notebook must be able to meaningfully reference and connect to other events in the lab, such as equipment, data storage, chores, other labs, among others.
        </div>
        <div class="content">
            The classic paper and pencil lab notebook is still an important part of science and will continue to be so. What we must do is <span class="font-bold underline text-xl">remove the unrealistic expectations</span> of this as the de-facto vessel for scientific provenance and distribution, and instead think of these as <span class="font-bold underline text-xl">highly credible scratch pads.</span> Remove the pressure of filling out the perfect lab notebook entry by hand, and instead use these vessels to reference the thoughts we have in real-time during experimentation. Software can help us with this in many ways, such as by photographing our notes and translating the handwritten notes and storing them in a shared location accessible to all scientists in the group. We can use software to help provoke higher data standards while removing the pressure from scientists to worry about pedantic formatting and field-filling during experimentation. 
        </div>
        <div class="content">
            <span class="bg-yellow-400">The current system is perpetuating terrible notebook practices, and the incentives in place to change this aren't showing any promise. If the academic research system really wants to change this culture of poor note taking and high priority on cherry picking "good" data, something major will need to happen.</span> The negative (stressors) and positive (rewards) pressures placed on scientists is the reason we’re consistently failing our own standards. We must leverage the changes in the workplace, i.e. complexity and collaboration of the modern lab, along with technical advances to rewrite the rules for a science-focused system, not a ‘good data’-focused system. 
        </div>
        <div class="content">
            While the paper and pencil lab notebook will always hold a place of respect in the annals of science, it is clear that it is no longer sufficient as a primary tool for modern scientific research. By embracing digital lab notebooks and leveraging the capabilities of software, we can ensure that our scientific records are more accurate, accessible, and collaborative than ever before. This transition is not just about adopting new technology; it's about guiding the next generation of scientists towards practices that uphold the highest standards of data provenance and integrity.
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
