<script lang="ts">
  import GithubButton from "../../components/buttons/githubButton.svelte";
  import GitlabButton from "../../components/buttons/gitlabButton.svelte";
  import LinkedinButton from "../../components/buttons/linkedinButton.svelte";
  import EskoCard from "../../components/cards/about-me/eskoCard.svelte";
  import NtnuCard from "../../components/cards/about-me/ntnuCard.svelte";
  import TrashTagCard from "../../components/cards/about-me/trashTagCard.svelte";
  import UnlocCard from "../../components/cards/about-me/unlocCard.svelte";
  import VivaCard from "../../components/cards/about-me/vivaCard.svelte";
  import WebstepCard from "../../components/cards/about-me/webstepCard.svelte";

  let innerWidth = 0;
  $: singleCol = innerWidth <= 1280;
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="min-h-screen min-w-full bg-blue-400">
  <div
    class="grid grid-flow-row grid-cols-1 px-6 py-12 xl:grid-flow-col xl:grid-cols-2 xl:px-60 xl:pt-60"
  >
    <div class="">
      <h1 class="text-5xl font-bold text-black sm:text-8xl">About me</h1>
      <div class="flex justify-start">
        <img
          class="mr-12 mt-12 h-fit w-96
						  border-4 border-black drop-shadow-block-thick"
          src="me.webp"
          alt="me"
        />
      </div>
    </div>
    <div class="px-0 pt-12 xl:px-6 xl:pt-48">
      <p class="font-sans text-lg font-medium">
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
      <div class="flex justify-center pt-12">
        <GithubButton />
        <GitlabButton />
        <LinkedinButton />
      </div>
    </div>
  </div>

  {#if singleCol}
    <div class="grid grid-cols-1 gap-0 px-6 py-12 xl:px-52">
      <WebstepCard />
      <UnlocCard />
      <VivaCard />
      <EskoCard />
      <TrashTagCard />
      <NtnuCard />
    </div>
  {:else}
    <div class="grid grid-cols-1 justify-start xl:grid-cols-2 xl:px-52">
      <div class="pl-8 pr-6">
        <WebstepCard />
        <VivaCard />
        <NtnuCard />
      </div>
      <div class="pl-6 pr-8">
        <UnlocCard />
        <TrashTagCard />
        <EskoCard />
      </div>
    </div>
  {/if}
</div>
