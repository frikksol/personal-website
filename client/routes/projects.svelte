<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import ChatAppCard from "../components/cards/projects/chatAppCard.svelte";
  import Playground from "../components/cards/projects/playground.svelte";
  import ThisWebsiteCard from "../components/cards/projects/thisWebsiteCard.svelte";

  let innerWidth = 0;
  $: singleCol = innerWidth <= 1280;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="min-w-full min-h-screen bg-neopurple">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div>
      <h1 class="sm:text-8xl text-5xl text-black font-bold">Projects</h1>
      <BorderHref text="about me" link="/aboutMe" color="bg-yellow-300" />
    </div>
    <div class="pt-6 xl:px-6 px-0">
      <p class="font-sans font-medium text-lg">
        This is a collection of some of my private projects. It is not much yet,
        as I have several projects that I have not yet deployed, and some are
        still not finished. Feel free to have a look, and in addition there is
        more code on my github and gitlab.
      </p>
    </div>
  </div>

  {#if singleCol}
    <div class="grid grid-cols-1 gap-0 xl:px-52 px-6 py-12">
      <ThisWebsiteCard />
      <ChatAppCard />
      <Playground />
    </div>
  {:else}
    <div class="grid xl:grid-cols-2 grid-cols-1 justify-start xl:px-52">
      <div class="pl-8 pr-6">
        <ThisWebsiteCard />
        <Playground />
      </div>
      <div class="pl-6 pr-8">
        <ChatAppCard />
      </div>
    </div>
  {/if}
</div>
