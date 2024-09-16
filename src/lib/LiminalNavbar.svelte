<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
  import logoURL from '$lib/images/Logo-24Jul2024.png'


  let activeClass = 'text-white text-2xl';
  let nonActiveClass = 'text-black text-2xl';
    let isOpen = false;
    function toggleDropdown() {
        isOpen = !isOpen;
    }
    $: activeUrl = $page.url.pathname;
    $: console.log(activeUrl)
</script>


  <Navbar let:NavContainer class="bg-purple-300 px-4 py-2.5">
    <NavContainer class="px-5 py-2 rounded-lg dark:bg-gray-600">
      <NavBrand href="/">
        <img src={logoURL} class="me-3 h-12 sm:h-20" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-2xl font-semibold">Liminal Inc</span>
      </NavBrand>
      <NavHamburger />
      <NavUl {activeUrl} {activeClass} {nonActiveClass}>
        <NavLi class={activeUrl === '/team/' ? activeClass : nonActiveClass} href="/team">Team</NavLi>
        <NavLi class={activeUrl === '/news/' ? activeClass : nonActiveClass} href="/news">News</NavLi>
        <NavLi class={activeUrl === '/research/' ? activeClass : nonActiveClass} href="/research">Research</NavLi>
        <NavLi class={activeUrl === '/details/' ? activeClass : nonActiveClass} href="/details">Details</NavLi>
      </NavUl>
    </NavContainer>
  </Navbar>
