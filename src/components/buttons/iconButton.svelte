<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let src: string;
  export let alt: string;
  export let color: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="mx-12 mt-12 w-16
            rounded-xl border-2 border-black
            {color} hover:bg-white"
>
  <img class="h-14 w-14 p-3" {src} {alt} />
</button>
