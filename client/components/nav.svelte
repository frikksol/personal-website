<script lang='ts'>
    import { goto } from '$app/navigation';
    import IconButton from './buttons/iconButton.svelte';
    import TextButton from './textButton.svelte';

    let showMenu = false

    function onClickNavigate(path: string): void {
        showMenu = false
        goto(path)
    }
</script>

{#if showMenu}
<nav class="bg-green-300 flex flex-col h-screen md:w-[40vw] w-screen">
    <IconButton src="menu.png" alt="hamburger" color="bg-yellow-300" hoverColor="bg-green-500" 
        on:click={() => showMenu = !showMenu} />
    
    <TextButton text="Home" on:click={() => onClickNavigate('/')}/>
    <TextButton text="About me" on:click={() => onClickNavigate('/aboutMe')}/>
    <TextButton text="Projects" on:click={() => onClickNavigate('/projects')}/>
</nav>
{:else}
<nav class="bg-opacity-0">
    <IconButton src="menu.png" alt="hamburger" color="bg-green-500" hoverColor="bg-yellow-300" 
        on:click={() => showMenu = !showMenu} />
</nav>
{/if}
