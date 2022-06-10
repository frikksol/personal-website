<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard headerColor="bg-purple-400" bodyColor="bg-white" title="Tungo">
  <p class="text-lg">
    This is a game for playing spotify bingo. It's currently under development,
    and the Spotify integration currently only works with development accounts,
    so wont work for most people yet. I hope to be able to get it deployed soon.
    <br /><br />
    It is written from the ground up in typescript using SvelteKit with Tailwind
    CSS, its hosted on Vercel, with a backend running on Google CloudRun and uses
    soncketIO for realtime operations.
    <br /><br />
    The repo is currently private, but I can share access for interested people.
  </p>
  <div class="mt-2 flex flex-row flex-wrap space">
    <TechTag
      href="https://tungo.vercel.app/"
      text="Visit Tungo"
      color="bg-orange-500"
    />
  </div>
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
