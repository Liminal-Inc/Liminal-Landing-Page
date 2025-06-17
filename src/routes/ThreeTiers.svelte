<script lang="ts">
	import { goto } from '$app/navigation';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="text-white rounded-lg">
	<!-- <div class="mb-4 text-center"> -->
		<!-- <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">2 Separate Software Platforms</p> -->
	<!-- </div> -->
	<div
		class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 p-4 text-white text-lg sm:text-md md:text-lg lg:text-lg"
	>
		<!-- <div
			class="outline outline-green-300 rounded-lg bg-black hover:bg-green-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
		>
			<button on:click={() => goto('/features#collabSection')}>
				<div class="mt-2 mb-2 text-2xl text-green-300">Liminal Collab</div>
				<div class="mb-2">
					<p>
						Social platform exclusively for researchers who are actively looking for collaborators.
					</p>
				</div>
				<hr />
			</button>

			<a
				class="mt-2 block underline hover:bg-green-600 rounded-lg px-4 py-3"
				target="_blank"
				href="https://forms.gle/tdXLDyxwhAkGd2yR9"
			>
				🚀 Sign up now for free! 🐼
			</a>
		</div> -->
		<div
			class=" col-span-2 outline outline-purple-300 rounded-lg bg-black hover:bg-purple-300 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
		>
			<button on:click={() => goto('/features#researchSection')}>
				<div class="mt-2 mb-2 text-2xl text-purple-300">Liminal Research</div>
				<!-- <div class="mb-2">
					Disseminate 50% more research with <span class="underline"
						>no extra money or experiments</span
					> by training your custom AI assistant to capture, structure, and share your lab work.
				</div> -->
				<div>
					Research platform that records and learns from all the research and activity in your lab.
				</div>
				<hr />
			</button>
			<a class="mt-2 block underline hover:bg-purple-600 rounded-lg px-4 py-3" href="/signup">
				👽 Sign up now!
			</a>
		</div>
		<!-- <div class="outline outline-blue-400 rounded-lg bg-black hover:bg-blue-400 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            <button on:click={() => goto("/features#grantSection")} >
                <div class="mt-2 mb-2 text-2xl text-blue-400">Grant Helper</div>
                <div class="mb-2">
                    Spend 8-40 hours less per grant application by leveraging AI to streamline the proposal process.
                </div>
                <hr>
                <div class="mt-2">(Coming Soon)</div>
            </button>
        </div> -->
	</div>
</div>
