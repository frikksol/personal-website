<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import ChatAppCard from "../components/cards/chatAppCard.svelte";
  import ThisWebsiteCard from "../components/cards/thisWebsiteCard.svelte";
</script>

<div class="w-full h-screen bg-blue-400">
  <div class="grid grid-cols-2 grid-flow-col px-60 pt-60">
    <div class="">
      <h1 class="text-8xl text-black font-bold">Projects</h1>
      <BorderHref text="about me" link="/aboutMe" color="bg-yellow-300" />
    </div>
    <div>
      <ThisWebsiteCard />
      <ChatAppCard />
    </div>
  </div>
</div>
