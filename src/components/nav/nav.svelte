<script lang="ts">
  import HamburgerNav from "./hamburgerNav.svelte";
  import VerticalNav from "./verticalNav.svelte";

  let innerWidth = 0;
  $: useHamburgerMenu = innerWidth <= 1280;
</script>

<svelte:window bind:innerWidth />

{#if useHamburgerMenu}
  <HamburgerNav />
{:else}
  <VerticalNav />
{/if}
