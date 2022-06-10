<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard
  headerColor="bg-blue-400"
  bodyColor="bg-white"
  title="This website"
>
  <p class="text-lg">
    This is my personal website. Written to have a place to showcase some of my
    projects, and to have a playground for testing web technologies.
    <br /><br />
    It is written from the ground up in typescript using SvelteKit as the main web-framwork.
    It uses Vite as its bundler, and Tailwind to make CSS kind of sane. So dipping
    my feet in some of the latest and greatest technologies, but I guess they will
    all be outdated and out of fashion within the end of the year anyways, so let's
    see how long it lasts 😄
  </p>
  <h1 class="pt-4 font-semibold">Technologies used:</h1>
  <div class="mt-2 flex flex-row flex-wrap space">
    <TechTag href="https://svelte.dev/" text="Svelte" color="bg-orange-400" />
    <TechTag
      href="https://kit.svelte.dev/"
      text="SvelteKit"
      color="bg-orange-500"
    />
    <TechTag href="https://vitejs.dev/" text="Vite" color="bg-purple-400" />
    <TechTag
      href="https://tailwindcss.com/"
      text="Tailwind"
      color="bg-blue-500"
    />
    <TechTag
      href="https://www.typescriptlang.org/"
      text="TypeScript"
      color="bg-blue-200"
    />
  </div>
</StandardCard>
