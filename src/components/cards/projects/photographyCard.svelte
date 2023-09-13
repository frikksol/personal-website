<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard title="Photography">
  <p class="text-lg">
    This is a gallery for my analog photography. There is not much here yet, but
    it is fun to build something that uses Svelte server components, Postgres
    and images served from a bucket.
  </p>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag
      href="https://photography.frikkherding.dev"
      text="Visit photography site"
    />
  </div>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://github.com/frikksol/photography" text="Visit repo" />
  </div>
  <h1 class="pt-4 font-semibold">Technologies used:</h1>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://svelte.dev/" text="Svelte" />
    <TechTag href="https://kit.svelte.dev/" text="SvelteKit" />
    <TechTag href="https://vitejs.dev/" text="Vite" />
    <TechTag href="https://tailwindcss.com/" text="Tailwind" />
    <TechTag href="https://www.typescriptlang.org/" text="TypeScript" />
    <TechTag href="https://www.postgresql.org/" text="Postgres" />
  </div>
</StandardCard>
