<script lang="ts">
  import ChatAppCard from "../../components/cards/projects/chatAppCard.svelte";
  import Gpterm from "../../components/cards/projects/gpterm.svelte";
  import Playground from "../../components/cards/projects/playground.svelte";
  import ThisWebsiteCard from "../../components/cards/projects/thisWebsiteCard.svelte";

  let innerWidth = 0;
  $: singleCol = innerWidth <= 1280;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="min-h-screen min-w-full bg-purple-400">
  <div
    class="grid grid-flow-row grid-cols-1 px-6 py-12 xl:grid-flow-col xl:grid-cols-2 xl:px-60 xl:pt-60"
  >
    <div>
      <h1 class="text-5xl font-bold text-black sm:text-8xl">Projects</h1>
    </div>
    <div class="px-0 pt-6 xl:px-6">
      <p class="font-sans text-lg font-medium">
        This is a collection of some of my private projects. It is not much yet,
        as I have several projects that I have not yet deployed, and some are
        still not finished. Feel free to have a look, and in addition there is
        more code on my github and gitlab.
      </p>
    </div>
  </div>

  {#if singleCol}
    <div class="grid grid-cols-1 gap-0 px-6 py-12 xl:px-52">
      <ThisWebsiteCard />
      <Gpterm />
      <ChatAppCard />
      <Playground />
    </div>
  {:else}
    <div class="grid grid-cols-1 justify-start xl:grid-cols-2 xl:px-52">
      <div class="pl-8 pr-6">
        <ThisWebsiteCard />
        <Playground />
      </div>
      <div class="pl-6 pr-8">
        <Gpterm />
        <ChatAppCard />
      </div>
    </div>
  {/if}
</div>
