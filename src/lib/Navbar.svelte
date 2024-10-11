  <script>
    import '../app.postcss';
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
    import logoURL from '$lib/images/Logo-24Jul2024.png'


    let activeClass = 'text-white sm:text-sm md:text-md lg:text-lg';
    let nonActiveClass = 'text-black sm:text-sm md:text-md lg:text-lg';
    $: activeUrl = $page.url.pathname;
  </script>


    <Navbar let:NavContainer class="bg-purple-300">
      <NavContainer class="px-5 py-2 dark:bg-gray-600">
        <NavBrand href="/">
          <img src={logoURL} class="me-3 h-12 sm:h-6 md:h-10 lg:h-12" alt="logo" />
          <span class="self-center whitespace-nowrap text-2xl font-semibold">Liminal</span>
        </NavBrand>
        <NavHamburger />
        <NavUl {activeUrl} {activeClass} {nonActiveClass}>
          <NavLi class={activeUrl === '/features/' ? activeClass : nonActiveClass} href="/#liminal-features">Features</NavLi>
          <NavLi class={activeUrl === '/features/' ? activeClass : nonActiveClass} href="/pricing">Pricing</NavLi>
          <!-- <NavLi class={activeUrl === '/research/' ? activeClass : nonActiveClass} href="/research">Research</NavLi> -->
          <NavLi class={activeUrl === '/news/' ? activeClass : nonActiveClass} href="/roadmap">Roadmap</NavLi>
          <NavLi class={activeUrl === '/news/' ? activeClass : nonActiveClass} href="/blog">Blog</NavLi>
          <NavLi class={activeUrl === '/team/' ? activeClass : nonActiveClass} href="/team">About</NavLi>
          <!-- <NavLi class={activeUrl === '/details/' ? activeClass : nonActiveClass} href="/details">Details</NavLi> -->
        </NavUl>
      </NavContainer>
    </Navbar>
