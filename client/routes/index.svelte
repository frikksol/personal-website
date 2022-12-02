<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import GithubButton from "../components/buttons/githubButton.svelte";
  import GitlabButton from "../components/buttons/gitlabButton.svelte";
  import LinkedinButton from "../components/buttons/linkedinButton.svelte";
</script>

<svelte:head>
  <title>Frikk Herding</title>
</svelte:head>

<div class="min-w-full min-h-screen bg-index-background bg-cover bg-no-repeat">
  <div class="">
    <div
      class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
    >
      <div>
        <h1 class="sm:text-8xl text-5xl text-black font-bold">Frikk</h1>
        <h1 class="sm:text-8xl text-5xl text-black font-bold bg-rose">
          Herding
        </h1>
        <BorderHref text="my projects" link="/projects" color="bg-green-500" />
      </div>
      <div class="xl:pt-28 pt-12">
        <p class="font-sans font-medium text-xl">
          My name is Frikk Herding and I am a norwegian software developer. I
          love building software of all kinds; serious, funny, big and small,
          but my love really lies where software makes things happen in the
          physical world.
          <br /><br />
          My root and background is in electronics, but I quickly realized that I
          enjoyed software development way more, and switched my career in that direction.
          I like to see myself as a bit of a potato developer; working all the way
          from embedded C through the backend to different types of frontends. The
          one area where I feel I have been lacking is in the UI department, which
          is also the main motivation for building this website from the ground up,
          to learn the ropes, and familirize myself with web technologies.
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-between mt-12">
    <div class="xl:absolute xl:top-24 xl:left-20">
      <GithubButton />
    </div>
    <div class="xl:absolute xl:bottom-10 xl:right-1/4">
      <LinkedinButton />
    </div>
    <div class="xl:absolute xl:top-30 xl:left-96">
      <GitlabButton />
    </div>
  </div>
</div>
