<script lang="ts">
  import { goto } from "$app/navigation";
  import TextButtonSmall from "../buttons/textButtonSmall.svelte";

  function onClickNavigate(path: string): void {
    goto(path);
  }
</script>

<nav class="w-screen">
  <ul class="flex w-screen flex-row justify-center">
    <li>
      <TextButtonSmall text="Home" on:click={() => onClickNavigate("/")} />
    </li>
    <li>
      <TextButtonSmall
        text="About me"
        on:click={() => onClickNavigate("/aboutMe")}
      />
    </li>
    <li>
      <TextButtonSmall
        text="Projects"
        on:click={() => onClickNavigate("/projects")}
      />
    </li>
  </ul>
</nav>
