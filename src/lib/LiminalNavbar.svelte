<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	// import logoURL from '$lib/images/simple-logo.png';
  import logoURL from '$lib/images/Logo-24Jul2024.png'
  // import cyberPanda from '$lib/images/CyberPanda.jpeg'

	import { goto } from '$app/navigation';

  let activeClass = 'text-white bg-white md:bg-transparent md:text-white md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
  let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
    let isOpen = false;
    function toggleDropdown() {
        isOpen = !isOpen;
    }
    $: activeUrl = $page.url.pathname;
    $: console.log(activeUrl)
</script>


  <Navbar let:NavContainer class="bg-purple-300 px-4 py-2.5 retro-font">
    <NavContainer class="px-5 py-2 rounded-lg dark:bg-gray-600">
      <NavBrand href="/">
        <img src={logoURL} class="me-3 h-12 sm:h-20" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold">Liminal Inc</span>
      </NavBrand>
      <NavHamburger />
      <NavUl {activeUrl} {activeClass} {nonActiveClass}>
        <NavLi class="text-lg" href="/team">Team</NavLi>
        <NavLi class="text-lg" href="/news">News</NavLi>
        <NavLi class="text-lg" href="/research">Research</NavLi>
        <NavLi class="text-lg" href="/details">Details</NavLi>
      </NavUl>
    </NavContainer>
  </Navbar>
