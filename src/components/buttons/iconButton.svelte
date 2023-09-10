<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let src: string;
  export let alt: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="mx-12 mt-12
            w-16 rounded-xl border-2
            border-black hover:bg-white"
>
  <img class="h-15 w-15 p-4" {src} {alt} />
</button>
