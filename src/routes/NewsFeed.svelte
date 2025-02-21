<script lang="ts">
  import { Button, Timeline, TimelineItem, ActivityItem, Group, GroupItem } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  export let view = "normal"
</script>


<Timeline class="text-white">
  <TimelineItem >
    <p class="text-2xl font-normal">From Data to Knowledge</p>
    <h3 class="text-purple-300 font-bold">[Blog]</h3>
    <h3 class="text-lg">Feb 10, 2025</h3>
    <Button href="https://liminalbios.substack.com/p/from-data-knowledge" target="_blank"  color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
  <TimelineItem >
    <p class="text-2xl font-normal">Data Recording in the Laboratory</p>
    <h3 class="text-purple-300 font-bold">[Blog]</h3>
    <h3 class="text-lg">Jan 27, 2025</h3>
    <Button href="https://liminalbios.substack.com/p/data-recording-in-the-laboratory" target="_blank" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
  <TimelineItem >
    <p class="text-2xl font-normal">Leveraging LLMs in Liminal</p>
    <h3 class="text-green-300 font-bold">[Feature]</h3>
    <h3 class="text-lg">Jan 25, 2025</h3>
    <Button href="https://liminalbios.substack.com/p/feature-leveraging-llms-in-liminal" target="_blank" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
  <TimelineItem >
    <p class="text-2xl font-normal">Incentives in the Academic Science Ecosystem</p>
    <h3 class="text-purple-300 font-bold">[Blog]</h3>
    <h3 class="text-lg">Jan 20, 2025</h3>
    <Button href="https://liminalbios.substack.com/p/incentives-in-the-academic-science" target="_blank" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
  <TimelineItem >
    <p class="text-2xl font-normal">Why Lab Notebooks Are Failing</p>
    <h3 class="text-purple-300 font-bold">[Blog]</h3>
    <h3 class="text-lg">June 23, 2024</h3>
    <Button href="/blog/labnotebooks" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
    <TimelineItem >
      <p class="text-2xl font-normal">Are Labs Good at Generating Knowledge?</p>
        <h3 class="text-purple-300 font-bold">[Blog]</h3>
        <h3 class="text-lg">June 10, 2024</h3>
        <Button href="/blog/labknowledge" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
    </TimelineItem>
    <TimelineItem >
      <p class="text-2xl font-normal">General Life Science Software Toolset</p>
      <h3 class="text-purple-300 font-bold">[Blog]</h3>
      <h3 class="text-lg">May 15, 2024</h3>
      <Button href="/blog/generaltools" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
    </TimelineItem>
    <TimelineItem >
      <p class="text-2xl font-normal">Lab State vs. Metadata</p>
      <h3 class="text-purple-300 font-bold">[Blog]</h3>
      <h3 class="text-lg">April 22, 2024</h3>
      <Button href="/blog/labstate" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
    </TimelineItem>
    {#if view === "comprehensive"}
      <TimelineItem >
        <h3 class="text-lg">January 22, 2024</h3>
        <h3 class="text-green-300 font-bold">[New Lab]</h3>
        <p class="text-sm font-normal text-lg-500">New lab with 20 users onboarded and using the app. First beta version of the app officially released.</p>
      </TimelineItem>
    {/if}
    {#if view === "comprehensive"}
      <TimelineItem >
        <h3 class="text-lg">January 03, 2024</h3>
        <h3 class="text-red-300 font-bold">[$$$]</h3>
        <p class="text-sm font-normal text-lg-500">Initial investment deposited into acccount.</p>
      </TimelineItem>
    {/if}
  </Timeline>
