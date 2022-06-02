<script lang="ts">
  export let color: string;
  export let text: string;
  export let href: string;
</script>

<a
  {href}
  class="w-auto h-auto
            border-4 border-black drop-shadow-block 
            {color} hover:bg-white"
>
  <h1 class="my-2 mx-4 font-semibold">{text}</h1>
</a>
