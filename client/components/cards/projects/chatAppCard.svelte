<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard headerColor="bg-orange-400" bodyColor="bg-white" title="Chat app">
  <p class="text-lg">
    This is a realtime chat app which runs on a rust backend with rocket. The
    fronend is written in typescript using SvelteKit and Tailwind CSS. The
    backend is hosted on CloudRun and the frondend is hosted on Vercel.
    <br /><br />
    I wanted to start learning rust, since it seems like a really interesting language
    which can make fast and reliable code easier to write, and the fact that it runs
    on everything from web frontends with WebAssembly to embedded devices is very
    interesting to me. Also the cross-compilation in rust must be the best solution
    for cross-compilation I have ever seen.
  </p>
  <div class="mt-2 flex flex-row flex-wrap space">
    <TechTag
      href="https://chat-app-flax-theta.vercel.app/"
      text="Visit Chat App"
      color="bg-orange-500"
    />
  </div>
  <div class="mt-2 flex flex-row flex-wrap space">
    <TechTag
      href="https://github.com/frikksol/chat-app"
      text="Visit repo"
      color="bg-orange-500"
    />
  </div>

  <h1 class="pt-4 font-semibold">Technologies used:</h1>
  <div class="mt-2 flex flex-row space-x-4">
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
