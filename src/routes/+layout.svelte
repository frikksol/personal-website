<script>
  import "../app.css";
  import Nav from "../components/nav.svelte";
</script>

<main class="h-screen w-screen">
  <div class="static">
    <div class="absolute right-0 top-0 z-50">
      <Nav />
    </div>
    <slot />
  </div>
</main>
