<script lang="ts">
	import { goto } from '$app/navigation';
	import IconButton from './buttons/iconButton.svelte';
	import TextButton from './buttons/textButton.svelte';

	let showMenu = false;

	function onClickNavigate(path: string): void {
		showMenu = false;
		goto(path);
	}
</script>

{#if showMenu}
	<div class="flex flex-row">
		<button class="h-screen lg:w-[60vw] w-0" on:click={() => (showMenu = !showMenu)} />
		<nav class="bg-green-300 flex flex-col h-screen lg:w-[40vw] w-screen flex-none">
			<IconButton
				src="menu.png"
				alt="hamburger"
				color="bg-green-500"
				on:click={() => (showMenu = !showMenu)}
			/>

			<TextButton text="Home" on:click={() => onClickNavigate('/')} />
			<TextButton text="About me" on:click={() => onClickNavigate('/aboutMe')} />
			<TextButton text="Projects" on:click={() => onClickNavigate('/projects')} />
		</nav>
	</div>
{:else}
	<nav class="bg-opacity-0">
		<IconButton
			src="menu.png"
			alt="hamburger"
			color="bg-green-500"
			on:click={() => (showMenu = !showMenu)}
		/>
	</nav>
{/if}
