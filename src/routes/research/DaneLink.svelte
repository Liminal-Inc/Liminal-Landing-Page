<script>
    import { Button, Card } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";
    export let title = "";
    export let link = "";
    export let blurb = "";
  </script>
  

  <Card>
    <h5 class="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
    <p class="mt-2 text-gray-700 text-lg">{blurb}</p>
    <Button class="w-fit mt-2 hover:underline" color="blue" href={link}>Read more</Button>
  </Card>
