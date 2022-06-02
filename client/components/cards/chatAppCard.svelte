<script lang="ts">
  import TechTag from "../tags/techTag.svelte";
  import StandardCard from "./standardCard.svelte";
</script>

<StandardCard headerColor="bg-orange-400" bodyColor="bg-white" title="Chat app">
  <p class="text-lg">This is a chat app. Soon to be built...</p>
  <div class="mt-8 flex flex-row space-x-4">
    <TechTag
      href="https://kit.svelte.dev/"
      text="SvelteKit"
      color="bg-orange-500"
    />
    <TechTag
      href="https://www.rustlang.org/"
      text="Rust"
      color="bg-green-500"
    />
    <TechTag href="https://rocket.rs/" text="Rocket" color="bg-red-400" />
  </div>
</StandardCard>
