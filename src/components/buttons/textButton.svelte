<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let text: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="mx-12 mt-12 w-fit
            text-left font-sans text-5xl font-bold text-black hover:underline"
>
  <h1>{text}</h1>
</button>
