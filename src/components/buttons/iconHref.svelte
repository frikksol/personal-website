<script lang="ts">
  export let link: string;
  export let src: string;
  export let alt: string;
</script>

<a href={link}>
  <img
    class="mx-8 my-2 h-16 w-16 rounded-xl border-2
        border-black p-3 xl:mx-12
        bg-white bg-opacity-70 hover:bg-opacity-90"
    {src}
    {alt}
  />
</a>
