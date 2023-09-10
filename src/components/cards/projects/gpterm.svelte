<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard title="gpterm">
  <p class="text-lg">
    This is a terminal client for chat-GPT written in rust. Buzzwords you say?
    YES! It works in either single prompt mode, or in conversation mode.
    <br /><br />
    You can install it using Homebrew on mac, with Cargo, or build it from source.
    When I have the time I'll add Apt and AUR installation methods. You need a chat-GPT
    API key but that is easy to get and the application assists you in setting it
    up.
    <br /><br />
    Not much more to say. Install it and have some fun!
  </p>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag
      href="https://github.com/frikksol/gpterm"
      text="Visit repo to install"
    />
  </div>

  <h1 class="pt-4 font-semibold">Technologies used:</h1>
  <div class="space mt-2 flex flex-row flex-wrap">
    <TechTag href="https://www.rustlang.org/" text="Rust" />
  </div>
</StandardCard>
