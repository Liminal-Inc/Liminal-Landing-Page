<script>
    import { Card } from 'flowbite-svelte';
    export let title = "";
    export let link = "";
    export let blurb = "";
  </script>
  
  <Card>
    <h5 class="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
    <a href="{link}" target="_blank" class="text-blue-500 hover:underline mt-2 block">
      Click here for link
    </a>
    <p class="mt-2 text-gray-700">{blurb}</p>
  </Card>
  