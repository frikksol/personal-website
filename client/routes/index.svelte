<script lang="ts">
  import BorderHref from "../components/buttons/borderHref.svelte";
  import GithubButton from "../components/buttons/githubButton.svelte";
  import GitlabButton from "../components/buttons/gitlabButton.svelte";
  import LinkedinButton from "../components/buttons/linkedinButton.svelte";
</script>

<div class="w-full h-screen bg-index-background bg-cover bg-no-repeat">
  <div class="">
    <div class="grid grid-cols-2 grid-flow-col px-60 pt-60">
      <div>
        <h1 class="text-8xl text-black font-bold">Frikk</h1>
        <h1 class="text-8xl text-black font-bold bg-rose">Herding</h1>
        <BorderHref text="my projects" link="/projects" color="bg-yellow-300" />
      </div>
      <div class="pt-28">
        <p class="font-sans font-medium text-xl">
          My name is Frikk Herding and I am a norwegian software developer. I
          love building software of all kinds, serious, funny, big and small,
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
  <div class="absolute top-24 left-20">
    <GithubButton />
  </div>
  <div class="absolute bottom-10 right-1/4">
    <LinkedinButton />
  </div>
  <div class="absolute top-30 left-96">
    <GitlabButton />
  </div>
</div>
