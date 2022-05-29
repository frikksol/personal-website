<script lang='ts'>
    let showMenu = false
</script>

{#if showMenu}
<nav class="bg-green-300 flex flex-col justify-items-end h-full">
    <button class="mx-10 mt-10 w-16
            border-4 border-black drop-shadow-block
            bg-green-500 hover:bg-yellow-300 "
            on:click={() => showMenu = !showMenu}>
        <img class="p-3" src="menu.png" alt="hamburger" />
    </button>

    <a class="mr-56 ml-10 mt-10
        align-middle center text-black hover:text-neopurple text-2xl font-bold font-sans mr-" 
        href="/"
    >
        Home
    </a>

    <a class="mr-56 ml-10 mt-10
        align-middle center text-black hover:text-neopurple text-2xl font-bold font-sans mr-" 
        href="/about-me"
    >
        About me
    </a>

    <a class="mr-56 ml-10 mt-10
        align-middle center text-black hover:text-neopurple text-2xl font-bold font-sans mr-" 
        href="/projects"
    >
        Projects
    </a>
</nav>
{:else}
<nav class="bg-neopurple flex flex-col justify-items-end h-full">
    <button class="m-10 w-16
            border-4 border-black drop-shadow-block
            bg-green-500 hover:bg-yellow-300 "
            on:click={() => showMenu = !showMenu}>
        <img class="p-3" src="menu.png" alt="hamburger" />
    </button>
</nav>
{/if}
