<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard title="Playground">
  <p class="text-lg">
    This is just a collection of smaller projects and experiments, that did not
    deserve their own repo
  </p>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag
      href="https://playground.frikkherding.dev"
      text="Visit Playground"
    />
  </div>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://github.com/frikksol/playground" text="Visit repo" />
  </div>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://svelte.dev/" text="Svelte" />
    <TechTag href="https://kit.svelte.dev/" text="SvelteKit" />
    <TechTag href="https://vitejs.dev/" text="Vite" />
    <TechTag href="https://tailwindcss.com/" text="Tailwind" />
    <TechTag href="https://www.typescriptlang.org/" text="TypeScript" />
  </div>
</StandardCard>
