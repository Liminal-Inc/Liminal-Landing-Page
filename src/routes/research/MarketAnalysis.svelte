<script>
    import {Accordion, AccordionItem, Button} from "flowbite-svelte";
    const items = Array(3);

    const open_all = () => items.forEach((_, i) => (items[i] = true));
    const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>


<div class="col-span-5">
    <div class="grid grid-cols-5 bg-black">
        <div class="col-span-2">
            <p class="dane-floating-header">
                Market Analysis
            </p>
        </div>
        <div class="bg-slate-300 p-4 text-xl rounded-t-lg col-span-3">
            <Accordion multiple>
            <AccordionItem bind:open={items[0]}>
                <span slot="header" class="text-lg font-bold text-black">Academic research requires a lot of money</span>
                <p style="text-indent: 2rem; text-black">
                    Academic institutions in the United States have historically been responsible for about half of all basic U.S. research and 10-15% of total research and development (R&D)<sup>2</sup> The total research and development spending expenditure for academic laboratories is reaching upwards of $100 billion per year, with roughly 66% of all academic research dollars going directly towards basic research. Half of this funding comes from the federal government, with 6 departments/agencies accounting for more than 90% of these funds in 2019. Salaries, wages, and fringe benefits account for the largest portion of the research expenditure, with software making up a menial portion. Software purchases account for ~0.2% of all R&D expenditure, or $180 million annually. Biological and biomedical sciences and engineering have been the primary fields driving the increase in research expenditure dollars in the United States, accounting for 60% of the total research space growth from 2007-2019.
                </p>
            </AccordionItem>
            <AccordionItem bind:open={items[1]}>
                <span slot="header" class="text-lg font-bold text-black">There are a ton of labs</span>
                <p style="text-inded: 2rem; text-black">
                    There are currently over 7,100 academic institutions receiving federal funding in the United States<sup>4</sup>. 147 of these institutions are classified as R1<sup>4</sup>, meaning they confer at least 20 doctoral degrees and have research expenditures exceeding $5 million per year. Doctoral universities, which encompass every R1 university, perform three-quarters of all R&D research in the academic sector. Purdue University (holding our IP) is a R1 University and has over 4,000 separate laboratories, 400+ within the field of life science (>10%). Expanding beyond R1 laboratories, there's over 51,900 academic life science laboratories in the United States alone.
                </p>
            </AccordionItem>
            <AccordionItem bind:open={items[2]}>
                <span slot="header" class="text-lg font-bold text-black">Funders are requiring change</span>
                <p style="text-inded: 2rem; text-black">
                    R1 research institutions account for ~75% of all academic R&D funding at about $75 billion per year<sup>4</sup>. Of the 6 federal institutions that compose most of the federal research funding, all of them now require data management plans as part of the grant proposal process.  Agencies are demanding stricter data regulation practices and encourage software and hardware for data management as part of the proposal process. This is in direct response to the reproducibility crisis and overall lower public confidence in academic research. A Nature survey in 2016 from an article titled “1,500 Scientists Lift the Lid on Reproducibility (Baker, 2016)” reported that a large percentage of researchers believe that replicability is a problem. A report from the National Academies of Science states, “Lack of reproducibility, or lack of the ability to confirm scientific results, is often seen as a problem, but to others it is a natural part of the scientific process that can lead to new discoveries”.
                </p>
            </AccordionItem>
            <AccordionItem bind:open={items[3]}>
                <span slot="header" class="text-lg font-bold text-black">Scientists are being punished for not changing quick enough</span>
                <p style="text-inded: 2rem; text-black">
                    The major issue the funders and contributors of academic research agree with is not necessarily unreproducible experiments but experimentation with insufficient documentation to know if it can be reproduced and replicated. Journal article retractions in biomedicine increased from 50-60 per year in the mid-2000s, to 600-700 per year by the mid-2010s<sup>3</sup>. The review process vets scientific rigor, or the strict application of the scientific method to ensure robust and unbiased experimental design. While dealing with increasingly complex lab systems, our market is expected to come up with individualized plans to combat the reproducibility crisis with insufficient tools and training. Our product is being developed within the guidelines of federal agencies to serve all the data management and distribution needs of principal investigators, meaning the purchasing of our subscription can be baked into research proposals.
                </p>
            </AccordionItem>
            </Accordion>
            <Button on:click={open_all}>Open all</Button>
            <Button on:click={close_all}>Close all</Button>
        </div>
        <div class="bg-slate-300 p-4 text-sm rounded-b-lg col-span-5">
            <Accordion>
            <AccordionItem bind:open={items[0]}>
            <span slot="header" class="text-lg font-bold text-black">Citations</span>
            <ol class="list-decimal list-inside text-black">
                <li>
                    Baker M. 1,500 Scientists Lift the Lid on Reproducibility. Nature News. 2016;533(7604):452–454. 10.1038/533452
                </li>
                <li>Heney, P. (2020, April 1). Academic R&D continues slow rise. Research & Development World. <a class="dane-link" target="_blank" href="https://www.rdworldonline.com/academic-rd-continues-slow-rise/">Available here</a>
                </li>
                <li>
                    National Academies of Sciences, Engineering, and Medicine; Policy and Global Affairs; Committee on Science, Engineering, Medicine, and Public Policy; Board on Research Data and Information; Division on Engineering and Physical Sciences; Committee on Applied and Theoretical Statistics; Board on Mathematical Sciences and Analytics; Division on Earth and Life Studies; Nuclear and Radiation Studies Board; Division of Behavioral and Social Sciences and Education; Committee on National Statistics; Board on Behavioral, Cognitive, and Sensory Sciences; Committee on Reproducibility and Replicability in Science. Reproducibility and Replicability in Science. Washington (DC): National Academies Press (US); 2019 May 7. 5, Replicability. <a class="dane-link" target="_blank" href="https://www.ncbi.nlm.nih.gov/books/NBK547524/#">Available here</a>
                </li>
                <li>National Science Board, National Science Foundation. 2021. Science and Engineering Indicators 2022. Academic Research and Development. NSB-2021-3. Alexandria, VA. <a class="dane-link" target="_blank" href="https://ncses.nsf.gov/pubs/nsb20213/">Available here</a></li>
            </ol>
        </AccordionItem>
            </Accordion>
        </div>
    </div>
</div>
