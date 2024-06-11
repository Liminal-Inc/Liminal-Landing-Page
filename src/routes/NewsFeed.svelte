<script lang="ts">
  import { Button, Timeline, TimelineItem, ActivityItem, Group, GroupItem } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  export let view = "normal"
</script>

<style>
    .timeline-header {
      font-weight: bold;
      color: aqua;
    }
  </style>

<Timeline>
    <TimelineItem >
        <h3 class="text-white">June 10, 2024</h3>
        <h3 class="text-purple-300 font-bold">[Blog Post]</h3>
        <p class="mb-4 text-base font-normal timeline-header text-gray-500 dark:text-gray-400">Are Labs Good at Generating Knowledge?</p>
        <Button href="news/labknowledge" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
    </TimelineItem>
    {#if view === "comprehensive"}
      <TimelineItem >
        <h3 class="text-white">June, 10 2024</h3>
        <h3 class="text-green-300 font-bold">[New Lab]</h3>
        <p class="mb-4 text-sm font-normal text-white-500 dark:text-gray-400">New lab with 5 users onboarded and using the app.</p>
      </TimelineItem>
      <!-- <TimelineItem >
          <h3 class="text-white">May 27, 2024</h3>
          <h3 class="text-yellow-300 font-bold">[Major Feature]</h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Paper database and reviews added</p>
          <Button href="news/generaltools" color="alternative">More information<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
        </TimelineItem> -->
    {/if}
    <TimelineItem >
        <h3 class="text-white">May 15, 2024</h3>
        <h3 class="text-purple-300 font-bold">[Blog Post]</h3>
        <p class="mb-4 text-base font-normal timeline-header text-gray-500 dark:text-gray-400">General Life Science Software Toolset</p>
        <Button href="news/generaltools" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
    </TimelineItem>
    <TimelineItem >
        <h3 class="text-white">April 22, 2024</h3>
        <h3 class="text-purple-300 font-bold">[Blog Post]</h3>
        <p class="mb-4 text-base font-normal timeline-header text-gray-500 dark:text-gray-400">Lab State vs. Metadata</p>
        <Button href="news/labstate" color="alternative">Full Post<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
    </TimelineItem>
    {#if view === "comprehensive"}
      <TimelineItem >
        <h3 class="text-white">January 22, 2024</h3>
        <h3 class="text-green-300 font-bold">[New Lab]</h3>
        <p class="mb-4 text-sm font-normal text-white-500 dark:text-gray-400">New lab with 20 users onboarded and using the app. First beta version of the app officially released.</p>
      </TimelineItem>
    {/if}
    {#if view === "comprehensive"}
      <TimelineItem >
        <h3 class="text-white">January 03, 2024</h3>
        <h3 class="text-red-300 font-bold">[$$$]</h3>
        <p class="mb-4 text-sm font-normal text-white-500 dark:text-gray-400">Initial investment deposited into acccount.</p>
      </TimelineItem>
    {/if}
  </Timeline>
