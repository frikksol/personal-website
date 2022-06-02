<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import StandardCard from "../components/cards/standardCard.svelte";
  import TechTag from "../components/tags/techTag.svelte";
</script>

<div class="w-full h-screen bg-blue-400">
  <div class="grid grid-cols-2 grid-flow-col px-60 pt-60">
    <div class="">
      <h1 class="text-8xl text-black font-bold">Projects</h1>
      <BorderHref text="about me" link="/aboutMe" color="bg-yellow-300" />
    </div>
    <div class="pt-28">
      <StandardCard
        headerColor="bg-neopurple"
        bodyColor="bg-white"
        title="This website"
      >
        <p>
          This is my personal website. Written to have a place to showcase some
          of my projects, and to have a playground for testing webtechnologies.
          <br /><br />
          It is written from the ground up in typescript using SvelteKit as the main
          web-framwork. It uses Vite as its bundler, and Tailwind to make CSS kind
          of sane. So dipping my feet in some of the latest and greatest technologies,
          but I guess they will all be outdated and out of fashion within the end
          of the year 😄
        </p>
        <div class="mt-8 flex flex-row space-x-4">
          <TechTag
            href="https://svelte.dev/"
            text="Svelte"
            color="bg-blue-500"
          />
          <TechTag
            href="https://kit.svelte.dev/"
            text="SvelteKit"
            color="bg-blue-500"
          />
          <TechTag href="https://vitejs.dev/" text="Vite" color="bg-red-500" />
        </div>
      </StandardCard>
    </div>
  </div>
</div>
