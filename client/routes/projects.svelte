<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import ChatAppCard from "../components/cards/chatAppCard.svelte";
  import ThisWebsiteCard from "../components/cards/thisWebsiteCard.svelte";
</script>

<div class="min-w-full min-h-screen bg-blue-400">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div class="">
      <h1 class="sm:text-8xl text-5xl text-black font-bold">Projects</h1>
      <BorderHref text="about me" link="/aboutMe" color="bg-yellow-300" />
    </div>
    <div>
      <ThisWebsiteCard />
      <ChatAppCard />
    </div>
  </div>
</div>
