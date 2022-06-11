<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import ChatAppCard from "../components/cards/projects/chatAppCard.svelte";
  import ThisWebsiteCard from "../components/cards/projects/thisWebsiteCard.svelte";
  import TungoCard from "../components/cards/projects/tungoCard.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="min-w-full min-h-screen bg-neopurple">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div class="">
      <h1 class="sm:text-8xl text-5xl text-black font-bold">Projects</h1>
      <BorderHref text="about me" link="/aboutMe" color="bg-yellow-300" />
    </div>
    <div>
      <ThisWebsiteCard />
      <TungoCard />
      <ChatAppCard />
    </div>
  </div>
</div>
