<script>
	import { track } from '@vercel/analytics';
</script>

<footer class="bg-purple-300 text-black p-4 text-lg">
	<div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
		<div>
			<p>Email : support@liminalbios.com</p>
			<div class="flex gap-4 mt-2">
				<a
					href="https://www.linkedin.com/company/liminaldatanetwork/"
					target="_blank"
					rel="noopener noreferrer"
					on:click={() => track('Footer LinkedIn Click')}
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
						alt="LinkedIn"
						class="h-8 w-8"
					/>
				</a>
				<a
					href="https://discord.gg/NHYzApB3jj"
					target="_blank"
					rel="noopener noreferrer"
					on:click={() => track('Footer Discord Click')}
				>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg"
						alt="Discord"
						class="h-8 w-8"
					/>
				</a>
			</div>
		</div>
		<div class="flex space-x-4 pr-12">
			<!-- <a href="https://github.com/ddeemerpurdue/" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:text-white">GitHub</a> -->
			<!-- <a
				href="https://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-700 hover:text-white">Twitter</a
			> -->
			<div class="flex flex-col space-y-2">
				<a
					href="/signup"
					class="text-blue-700 hover:text-white"
					on:click={() => track('Footer Signup Click')}>Sign up</a
				>
				<a
					href="/policies"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-700 hover:text-white"
					on:click={() => track('Footer Privacy Policy Click')}>Privacy Policy</a
				>
			</div>
			<a
				href="https://posthog.com?utm_source=badge"
				title="Built with PostHog analytics + more"
				target="_blank"
				><img
					alt="PostHog - Open Source Product Analytics"
					src="https://d1hovhsvet4m1p.cloudfront.net/badges/posthog-badge-transparent-bg-black-text.svg"
				/></a
			>
		</div>
	</div>
</footer>

<style>
	/* Additional styles if needed */
</style>
