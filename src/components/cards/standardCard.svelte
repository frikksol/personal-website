<script lang="ts">
  export let headerColor: string;
  export let bodyColor: string;
  export let title: string;
</script>

<div
  class="my-6 h-fit w-auto rounded-xl border-4
            border-black xl:my-12
            {bodyColor}"
>
  <div
    class="-mx-1 -mt-1 h-auto w-auto rounded-xl border-4
                border-black p-4
                {headerColor}"
  >
    <h1 class="font-sans text-lg font-semibold uppercase">{title}</h1>
  </div>
  <div class="h-auto w-auto p-4">
    <slot />
  </div>
</div>
