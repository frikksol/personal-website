<script lang="ts">
  export let link: string;
  export let src: string;
  export let alt: string;
  export let color: string;
</script>

<a href={link}>
  <img
    class="mx-12 my-2 h-16 w-16 rounded-xl
        border-2 border-black p-3
        {color} hover:bg-white"
    {src}
    {alt}
  />
</a>
