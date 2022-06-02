<script>
  import "../app.css";
  import Nav from "../components/nav.svelte";
</script>

<main class="w-screen h-screen">
  <div class="static">
    <div class="absolute top-0 right-0 z-50">
      <Nav />
    </div>
    <slot />
  </div>
</main>
