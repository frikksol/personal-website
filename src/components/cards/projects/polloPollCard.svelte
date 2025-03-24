<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard title="Pollo Poll">
  <p class="text-lg">
    A polling website created as a testing ground for shadcn-svelte, svelte 5,
    neondb, lucide-svelte etc.
  </p>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://pollo-poll.com" text="Visit Pollo poll" />
  </div>
  <h1 class="pt-4 font-semibold">Technologies used:</h1>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://svelte.dev/" text="Svelte" />
    <TechTag href="https://kit.svelte.dev/" text="SvelteKit" />
    <TechTag href="https://tailwindcss.com/" text="Tailwind" />
    <TechTag href="https://www.typescriptlang.org/" text="TypeScript" />
    <TechTag href="https://neon.tech/" text="NeonDb" />
    <TechTag href="https://www.shadcn-svelte.com/" text="shadcn-svelte" />
  </div>
</StandardCard>
