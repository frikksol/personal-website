<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let text: string;
  export let color: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="my-5 rounded-xl border-4
            border-black p-2
            {color} font-semibold
            uppercase hover:bg-white"
>
  <h1>{text}</h1>
</button>
