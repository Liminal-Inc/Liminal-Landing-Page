<script>
	import { Button } from 'flowbite-svelte';
	import BlogTimeline from './BlogTimeline.svelte';
	import { track } from '@vercel/analytics';
	import { onMount } from 'svelte';

	onMount(() => {
		track('Blog Page Viewed');
	});
</script>

<svelte:head>
	<title>News</title>
	<meta name="description" content="News for the Data Network application created by Liminal Inc" />
</svelte:head>
<body>
	<div class="text-white text-2xl">
		<h1 class="text-white p-4 mb-8">Our Content</h1>
		<BlogTimeline view="normal" />
	</div></body
>
