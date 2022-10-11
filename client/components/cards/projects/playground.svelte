<script lang="ts">
  import TechTag from "../../tags/techTag.svelte";
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard
  headerColor="bg-green-500"
  bodyColor="bg-white"
  title="Playground"
>
  <p class="text-lg">
    This is just a collection of smaller projects and experiments, that did not
    deserve their own repo
  </p>
  <div class="mt-2 flex flex-row flex-wrap space">
    <TechTag
      href="https://playground.frikkherding.dev"
      text="Visit Playground"
    />
  </div>
  <div class="mt-2 flex flex-row flex-wrap space">
    <TechTag href="https://github.com/frikksol/playground" text="Visit repo" />
  </div>
</StandardCard>
