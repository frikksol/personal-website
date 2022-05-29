<script lang='ts'>
    import { goto } from '$app/navigation';

    let showMenu = false

    function onClickNavigate(path: string): void {
        showMenu = false
        goto(path)
    }
</script>

{#if showMenu}
<nav class="bg-green-300 flex flex-col h-full">
    <button class="mx-12 mt-12 w-16
            border-4 border-black drop-shadow-block
            hover:bg-green-500 bg-yellow-300 "
            on:click={() => showMenu = !showMenu}>
        <img class="p-3" src="menu.png" alt="hamburger" />
    </button>

    <button class="mr-96 ml-12 mt-12 w-full
                text-black hover:underline text-left text-5xl font-bold font-sans" 
                on:click={() => onClickNavigate('/')}>
        <h1>Home</h1> 
    </button>

    <button class="mr-12 ml-12 mt-12 w-full content-start
                text-black hover:underline text-left text-5xl font-bold font-sans" 
                on:click={() => onClickNavigate('/about-me')}>
        <h1 class="content-start">
            About me
        </h1> 
    </button>

    <button class="mr-96 ml-12 mt-12 w-full
                text-black hover:underline text-left text-5xl font-bold font-sans" 
                on:click={() => onClickNavigate('/projects')}>
        <h1 class="align-middle center">
            Projects
        </h1> 
    </button>
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
