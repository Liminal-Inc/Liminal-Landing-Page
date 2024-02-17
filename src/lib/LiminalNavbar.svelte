<script>
	import '../app.postcss';
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		Avatar,
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
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import logoURL from '$lib/images/simple-logo.png';
    import cyberPanda from '$lib/images/CyberPanda.jpeg'

	import { goto } from '$app/navigation';

    let activeClass = 'text-purple-600 underline font-extrabold'
    $: activeUrl = $page.url.pathname;
    $: console.log(activeUrl)
</script>


<div>
    <Navbar color="pink" let:hidden let:toggle>
        <NavBrand href="/">
            <img src={logoURL} class="mr-3 h-6 sm:h-12" alt="DAtaNEtwork Logo" />
            <span class="text-purple-600 self-center whitespace-nowrap text-xl font-semibold dark:text-white">LiMINal</span>
        </NavBrand>
        <div class="flex items-center md:order-2">
            <Avatar size="lg" id="avatar-menu" src={cyberPanda} />
            <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
        </div>
        <!-- <Dropdown placement="bottom" triggeredBy="#avatar-menu">
            <DropdownHeader>
                <span class="block text-sm">Liminal LLC 2024</span>
            </DropdownHeader>
            <DropdownItem href="/about">About</DropdownItem>
            <DropdownItem href="/team">Team</DropdownItem>
            <DropdownDivider />
        </Dropdown> -->
        <NavUl {hidden} {activeClass} activeUrl={activeUrl}>
            <NavLi class="text-lg" href="/">Hub</NavLi>
            <NavLi class="text-lg" href="/team/">The Team</NavLi>
            <!-- <NavLi class="text-lg" href="/research">Research</NavLi> -->
            <!-- <NavLi class="text-lg" href="/blog">CyberChronicles</NavLi> -->
            <!-- <NavLi id="nav-dm-menu1" class="cursor-pointer">
            Data
            <ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" /> -->
        <!-- </NavLi> -->
        <!-- <Dropdown triggeredBy="#nav-dm-menu1" class="w-44 z-20">
            <DropdownItem>Amplicon</DropdownItem>
            <DropdownItem>Chromatography</DropdownItem>
            <DropdownItem>Gas</DropdownItem>
            <DropdownItem>Gel</DropdownItem>
            <DropdownDivider />
            <DropdownItem>View</DropdownItem>
        </Dropdown> -->
        </NavUl>
        <!-- <DarkMode /> -->
    </Navbar>
</div>
