<script lang="ts">
  import { goto } from "$app/navigation";
  import TextButtonSmall from "../buttons/textButtonSmall.svelte";

  function onClickNavigate(path: string): void {
    goto(path);
  }
</script>

<nav class="flex w-screen flex-row justify-center bg-transparent">
  <TextButtonSmall text="Home" on:click={() => onClickNavigate("/")} />
  <TextButtonSmall
    text="About me"
    on:click={() => onClickNavigate("/aboutMe")}
  />
  <TextButtonSmall
    text="Projects"
    on:click={() => onClickNavigate("/projects")}
  />
</nav>
