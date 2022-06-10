<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import EskoCard from "../components/cards/about-me/eskoCard.svelte";
  import NtnuCard from "../components/cards/about-me/ntnuCard.svelte";
  import UnlocCard from "../components/cards/about-me/unlocCard.svelte";
  import VivaCard from "../components/cards/about-me/vivaCard.svelte";
</script>

<div class="min-w-full min-h-screen bg-blue-400">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div class="">
      <h1 class="sm:text-8xl text-5xl text-black font-bold">About me</h1>
      <div class="flex justify-start">
        <img
          class="mr-12 mt-12 w-96
                        border-4 border-black drop-shadow-block-thick"
          src="me.jpeg"
          alt="me"
        />
      </div>
    </div>
    <div class="xl:pt-36 pt-12">
      <p class="font-sans font-medium text-lg">
        My name is Frikk Herding and I am a norwegian software developer. I love
        building software of all kinds, serious, funny, big and small, but my
        love really lies where software makes things happen in the physical
        world.
        <br /><br />
        My root and background is in electronics, but I quickly realized that I enjoyed
        software development way more, and switched my career in that direction.
        I like to see myself as a bit of a potato developer; working all the way
        from embedded C through the backend to different types of frontends. The
        one area where I feel I have been lacking is in the UI department, which
        is also the main motivation for building this website from the ground up,
        to learn the ropes, and familirize myself with web technologies.
      </p>
      <UnlocCard />
      <VivaCard />
      <EskoCard />
      <NtnuCard />
      <div class="flex justify-end">
        <BorderHref text="back home?" link="/" color="bg-yellow-300" />
      </div>
    </div>
  </div>
</div>
