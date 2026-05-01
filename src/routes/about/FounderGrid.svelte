<script>
	// Optional: import profile photos
	import daneImg from '$lib/images/dane_deemer_2.jpg';
	import mavImg from '$lib/images/mav.jpg';
	import steveImg from '$lib/images/steve_lindemann.jpg';

	const founderData = [
		{
			name: 'Dane Deemer',
			title: 'Chief Executive Officer',
			bio: 'Bioinformatician and full stack developer.',
			img: daneImg,
			links: [
				{ label: 'GitHub', url: 'https://github.com/ddeemerpurdue' },
				{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/dane-deemer-054350100/' }
			]
		},
		// {
		// 	name: 'Maverick Cook',
		// 	title: 'Chief Technology Officer',
		// 	bio: 'Senior Software Engineer and Full-Stack Developer.',
		// 	img: mavImg,
		// 	links: [
		// 		{ label: 'GitHub', url: 'https://github.com/mavcook' },
		// 		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/mavcook/' }
		// 	]
		// },
		{
			name: 'Dr. Stephen Lindemann',
			title: 'Chief Scientific Officer',
			bio: 'Professor in Food Science and Biology at Purdue University.',
			img: steveImg,
			links: [
				{ label: 'Lab', url: 'https://ag.purdue.edu/department/foodsci/lindemannlab/' },
				{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/steve-lindemann-64997320/' }
			]
		}
	];
</script>

<div class="text-2xl">
	<div class="outline outline-gray-600 rounded-lg">
		<p
			class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-4 px-4 text-black text-center bg-purple-300"
		>
			Our Founders
		</p>

		<!-- Founder block -->
		{#each founderData as person}
			<div
				class="flex flex-col md:flex-row items-center justify-center gap-6 py-6 px-4 border-t border-gray-700 first:border-t-0"
			>
				<!-- Left: Image + Title + Links -->
				<div class="flex flex-col items-center text-center w-full md:w-1/3">
					{#if person.img}
						<img
							src={person.img}
							alt={person.name}
							class="w-32 h-32 rounded-full object-cover mb-4"
						/>
					{/if}
					<p class="text-xl font-bold">{person.name}</p>
					<p class="text-md text-gray-300">{person.title}</p>
					<div class="mt-2 space-x-4">
						{#each person.links as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-500 hover:underline"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>

				<!-- Right: Bio -->
				<div class="text-left w-full md:w-2/3 text-lg text-white">
					{person.bio}
				</div>
			</div>
		{/each}
	</div>
</div>
