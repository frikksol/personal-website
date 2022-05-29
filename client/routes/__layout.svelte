<script>
import "../app.css";
import Nav from "../components/nav.svelte";
</script>

<main class="w-screen h-screen">
    <div class="flex flex-row">
        <div class="flex-grow">
            <slot />
        </div>
        <div class="flex-grow">
            <Nav />
        </div>
    </div>
</main>
