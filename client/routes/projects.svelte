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
    <div>
      <h1 class="sm:text-8xl text-5xl text-black font-bold">Projects</h1>
      <BorderHref text="about me" link="/aboutMe" color="bg-yellow-300" />
    </div>
    <div>
      <p class="font-sans font-medium text-lg">
        This is a collection of some of my private projects. It is not much yet,
        as I have several projects that I have not yet deployed, and some are
        still not finished. Feel free to have a look, and in addition there is
        more code on my github and gitlab.
      </p>
      <ThisWebsiteCard />
      <TungoCard />
      <ChatAppCard />
    </div>
  </div>
</div>
