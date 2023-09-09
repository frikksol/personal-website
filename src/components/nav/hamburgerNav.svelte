<script lang="ts">
  import { goto } from "$app/navigation";
  import IconButton from "../buttons/iconButton.svelte";
  import TextButton from "../buttons/textButton.svelte";

  let showMenu = false;

  function onClickNavigate(path: string): void {
    showMenu = false;
    goto(path);
  }
</script>

{#if showMenu}
  <div class="flex flex-row">
    <button
      class="h-screen w-0 lg:w-[60vw]"
      on:click={() => (showMenu = !showMenu)}
    />
    <nav class="h-screen w-screen bg-green-300 lg:w-[40vw]">
      <ul>
        <li>
          <TextButton text="Home" on:click={() => onClickNavigate("/")} />
        </li>
        <li>
          <TextButton
            text="About me"
            on:click={() => onClickNavigate("/aboutMe")}
          />
        </li>
        <li>
          <TextButton
            text="Projects"
            on:click={() => onClickNavigate("/projects")}
          />
        </li>
      </ul>
      <IconButton
        src="menu.png"
        alt="hamburger"
        color="bg-green-500"
        on:click={() => (showMenu = !showMenu)}
      />
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
