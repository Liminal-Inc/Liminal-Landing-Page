<script>
	import '../app.postcss';
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		Avatar,
        Button,
		DarkMode,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
	} from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
	import logoURL from '$lib/images/simple-logo.png';
    import cyberPanda from '$lib/images/CyberPanda.jpeg'

	import { goto } from '$app/navigation';

    let activeClass = 'text-purple-600 underline font-extrabold'
    let isOpen = false;
    function toggleDropdown() {
        isOpen = !isOpen;
    }
    $: activeUrl = $page.url.pathname;
    $: console.log(activeUrl)
</script>

<Navbar class="bg-purple-300 px-4 py-2.5 retro-font">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="flex">
        <a href="/" class="flex items-center">
          <img src={logoURL} class="mr-3 h-6 sm:h-9" alt="Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-black hover:text-purple">Liminal Inc</span>
        </a>
      </div>
      <div class="flex gap-3 justify-center">
        <a href="/team" class="text-black hover:text-gray-300 outline-dashed outline-offset-2 mr-1">Team</a>
        <a href="/news" class="text-black hover:text-gray-300 outline-dashed outline-offset-2 mr-1">News</a>
        <a href="/research" class="text-black hover:text-gray-300 outline-dashed outline-offset-2">Research</a>
        </div>
      <div class="flex">
        <a href="/details">
            <span class="text-black text-md md:text-base whitespace-nowrap font-bold">App Details</span>
        </a>
      </div>
    </div>
  </Navbar>
