<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import logoURL from '$lib/images/Logo-24Jul2024.png';
	import { track } from '@vercel/analytics';

	let activeClass = 'text-white sm:text-sm md:text-md lg:text-lg';
	let nonActiveClass = 'text-black sm:text-sm md:text-md lg:text-lg';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar let:NavContainer class="bg-purple-300">
	<NavContainer class="px-5 py-2 dark:bg-gray-600">
		<NavBrand href="/" on:click={() => track('Logo Click')}>
			<img src={logoURL} class="me-3 h-12 sm:h-6 md:h-10 lg:h-12" alt="logo" />
			<span class="self-center whitespace-nowrap text-2xl font-semibold">Liminal</span>
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl} {activeClass} {nonActiveClass}>
			<NavLi class={activeUrl === '/features/' ? activeClass : nonActiveClass} href="/features" on:click={() => track('Nav Features Click')}
				>Features</NavLi
			>
			<NavLi class={activeUrl === '/roadmap/' ? activeClass : nonActiveClass} href="/roadmap" on:click={() => track('Nav Roadmap Click')}
				>Roadmap</NavLi
			>
			<NavLi class={activeUrl === '/blog/' ? activeClass : nonActiveClass} href="/blog" on:click={() => track('Nav Blog Click')}>Blog</NavLi>
			<NavLi class={activeUrl === '/pricing/' ? activeClass : nonActiveClass} href="/pricing" on:click={() => track('Nav Pricing Click')}
				>Pricing</NavLi
			>
			<NavLi class={activeUrl === '/about/' ? activeClass : nonActiveClass} href="/about" on:click={() => track('Nav About Click')}
				>About</NavLi
			>
		</NavUl>
	</NavContainer>
</Navbar>
