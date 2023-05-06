<script lang="ts">
  import BorderHref from "../../components/buttons/borderHref.svelte";
  import EskoCard from "../../components/cards/about-me/eskoCard.svelte";
  import NtnuCard from "../../components/cards/about-me/ntnuCard.svelte";
  import TrashTagCard from "../../components/cards/about-me/trashTagCard.svelte";
  import UnlocCard from "../../components/cards/about-me/unlocCard.svelte";
  import VivaCard from "../../components/cards/about-me/vivaCard.svelte";

  let innerWidth = 0;
  $: singleCol = innerWidth <= 1280;
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="min-w-full min-h-screen bg-blue-400">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div class="">
      <h1 class="sm:text-8xl text-5xl text-black font-bold">About me</h1>
      <div class="flex justify-start">
        <img
          class="mr-12 mt-12 w-96 h-fit
						  border-4 border-black drop-shadow-block-thick"
          src="me.webp"
          alt="me"
        />
      </div>
      <div class="flex justify-start">
        <BorderHref text="back home?" link="/" color="bg-green-500" />
      </div>
    </div>
    <div class="xl:pt-48 pt-12 xl:px-6 px-0">
      <p class="h-full font-sans font-medium text-lg">
        My name is Frikk Herding and I am a Norwegian software developer. I love
        building software of all kinds; serious, funny, big and small, but my
        love really lies where software makes things happen in the physical
        world.
        <br /><br />
        My root and background is in electronics, but I quickly realized that I enjoyed
        software development way more, and switched my career in that direction.
        I like to see myself as a bit of a potato developer; working all the way
        from embedded C through the backend to different types of frontends. The
        one area where I feel I have been lacking is in the UI department, which
        is also the main motivation for building this website from the ground up,
        to learn the ropes, and familiarize myself with web technologies.
      </p>
    </div>
  </div>

  {#if singleCol}
    <div class="grid grid-cols-1 gap-0 xl:px-52 px-6 py-12">
      <UnlocCard />
      <VivaCard />
      <EskoCard />
      <TrashTagCard />
      <NtnuCard />
    </div>
  {:else}
    <div class="grid xl:grid-cols-2 grid-cols-1 justify-start xl:px-52">
      <div class="pl-8 pr-6">
        <UnlocCard />
        <TrashTagCard />
        <NtnuCard />
      </div>
      <div class="pl-6 pr-8">
        <VivaCard />
        <EskoCard />
      </div>
    </div>
  {/if}
</div>
