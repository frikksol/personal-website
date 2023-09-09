<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import GithubButton from "../components/buttons/githubButton.svelte";
  import GitlabButton from "../components/buttons/gitlabButton.svelte";
  import LinkedinButton from "../components/buttons/linkedinButton.svelte";
</script>

<svelte:head>
  <title>Frikk Herding</title>
</svelte:head>

<div
  class="min-h-screen min-w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
>
  <div class="">
    <div
      class="grid grid-flow-row grid-cols-1 px-6 pt-12 xl:grid-flow-col xl:grid-cols-2 xl:px-60 xl:pt-60"
    >
      <div>
        <h1 class="text-5xl font-bold text-black sm:text-8xl">Frikk</h1>
        <h1 class="bg-rose text-5xl font-bold text-black sm:text-8xl">
          Herding
        </h1>
        <BorderHref text="my projects" link="/projects" color="bg-green-500" />
      </div>
      <div class="pt-2 xl:pt-28">
        <p class="font-sans text-xl font-medium">
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
  <div class="mt-12 flex flex-row justify-between">
    <div class="xl:absolute xl:left-20 xl:top-24">
      <GithubButton />
    </div>
    <div class="xl:absolute xl:bottom-10 xl:right-1/4">
      <LinkedinButton />
    </div>
    <div class="xl:top-30 xl:absolute xl:left-96">
      <GitlabButton />
    </div>
  </div>
</div>
