<script>
    import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
	const items = Array(3);

    const open_all = () => items.forEach((_, i) => (items[i] = true));
    const close_all = () => items.forEach((_, i) => (items[i] = false));


</script>

<div class="col-span-4">
    <div class="grid grid-cols-4">
        <div class="col-span-2"></div>
        <div class="col-span-2 rounded-t-lg bg-purple-300">
            <p class="text-3xl font-bold py-4 px-4 text-black text-center">
                Want to join Liminal?
            </p>
            <p class="text-3xl font-bold mb-2 text-black text-center">
                <a class="text-blue-500 underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc1MCwMkBH8VnWTX3xvfYJ95HQQ5VsGdn2C7zAL0Z9huxLF8Q/viewform?usp=sf_link">Apply Here</a>
            </p>
        </div>
        <div class="col-span-4 bg-slate-300 p-2">
            <p class="text-m mb-2">We are always open to creative, motivated individuals who want to join our team. If you don't see a position that fits you, please apply anyway!</p>
        </div>
        <div class="col-span-4 p-2 bg-slate-300">
            <Accordion multiple>
                <AccordionItem bind:open={items[0]}>
                    <span slot="header" class="text-lg font-bold text-black">Open Positions</span>
                    <ul class="list-disc list-inside">
                        <li>Full Stack Software Developer (Senior/Equity)</li>
                        <li>Full Stack Software Developer (Intermediate)</li>
                        <li>Software Development Intern (Junior/Temp)</li>
                        <li>Bioinformatics Intern (Junior/Temp)</li>
                    </ul>
                </AccordionItem>
                <AccordionItem bind:open={items[1]}>
                    <span slot="header" class="text-lg font-bold text-black">Other Opportunities</span>
                    <p>We are always looking for interesting, creative people to work with. If any of the below bullets interest you, reach out to <span class="font-bold underline">opportunities@liminalbios.com</span> or book a <a target="_blank" class="dane-link" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0_o20_-XqP1nMC79Ty7AJh-0E5eq0pD02fBHI6bJXG261sSsb_xRRR_QXenb3LWwp1adU_Qk6P">meeting with our CEO</a> <span class="italic">Note: meeting subject to cancellation depending on unforeseen conflicts</span></p>
                    <ul class="list-disc list-inside">
                        <li>Contributing to open-source parts of Liminal</li>
                        <li>Business-to-business Collaboration</li>
                        <li>Discussing challenges and the future of academic research</li>
                        <li>Wanting to contribute to our public-facing content. We want to be as transparent to the public as we can, but unfortunately we only have so much bandwidth right now.</li>
                        <li>Donation and investments</li>
                        <li>State of the laboratory information management system (LIMS) market</li>
                        <li>OR, you just think we could have an interesting conversation</li>
                    </ul>
                </AccordionItem>
                <AccordionItem bind:open={items[2]}>
                    <span slot="header" class="text-lg font-bold text-black">Our Hiring Process</span>
                    <p class="font-bold underline text-black">Main steps involved<sup>i</sup></p>
                    <ol class="list-decimal list-inside text-black">
                        <li>15-20 minute screen call. This is not a technical call.</li>
                        <li>60 minute technical interview. We do not ask what people would consider <span class="italic">hard</span> questions. Rather, we are more interested in learning how our applicants think about problems and go about solving challenges presented to them.</li>
                        <li>(Dependent) Non-Liminal at-home project for applicant to work on. This will be something open-source and helpful to both the applicant and the open source community.</li>
                        <li>90-120 minute working session with the Liminal technical team centered around real development of the Liminal app. This gives the applicant a real view of how our team works together and let's us mutually decide if the position is a fit.</li>
                    </ol>
                    <p>
                        i) Note that each applicant is different, so the above steps may not apply for everyone.
                    </p>
                    <p class="text-black mt-2">
                        <span class="font-bold underline">What do we think makes a strong candidate?</span> The candidate shows a history of projects they've contributed to and/or created.
                        We are also looking for movitated individuals who are willing to learn and grow with us, not needing a ton of guidance to get started.
                        Technical skills must be at a minimum, but the ability to problem solve and work with a team is a must.
                    </p>
            
                </AccordionItem>
                <!-- <AccordionItem bind:open={items[2]}>
                    <span slot="header" class="text-lg font-bold text-black">Open Positions</span>
                    <p>Something more</p>
                </AccordionItem> -->
            </Accordion>
            <Button on:click={open_all}>Open all</Button>
            <Button on:click={close_all}>Close all</Button>
        </div>
    </div>
</div>

