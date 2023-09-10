<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard title="Chat app">
  <p class="text-lg">
    This is a realtime chat app which runs on a rust backend with rocket, diesel
    and a postgres database. The fronend is written in typescript using
    SvelteKit and Tailwind CSS. The backend is hosted on Render and the frondend
    is hosted on Vercel.
    <br /><br />
    I wanted to start learning rust, since it seems like a really interesting language
    which can make fast and reliable code easier to write, and the fact that it runs
    on everything from web frontends with WebAssembly to embedded devices is very
    interesting to me. Also the cross-compilation in rust must be the best solution
    for cross-compilation I have ever seen.
  </p>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://chat-app.frikkherding.dev" text="Visit Chat App" />
  </div>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://github.com/frikksol/chat-app" text="Visit repo" />
  </div>

  <h1 class="pt-4 font-semibold">Technologies used:</h1>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://kit.svelte.dev/" text="SvelteKit" />
    <TechTag href="https://www.rustlang.org/" text="Rust" />
    <TechTag href="https://rocket.rs/" text="Rocket" />
    <TechTag href="https://diesel.rs/" text="Diesel" />
    <TechTag href="https://www.postgresql.org/" text="Postgres" />
  </div>
</StandardCard>
