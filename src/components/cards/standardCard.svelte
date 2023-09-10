<script lang="ts">
  export let title: string;
</script>

<div
  class="my-6 h-fit w-auto rounded-xl border-2
            border-black xl:my-12"
>
  <div
    class="h-auto w-auto rounded-t-xl border-b-2
                border-black bg-white bg-opacity-40
                p-4"
  >
    <h1 class="font-sans text-lg font-semibold uppercase">
      {title}
    </h1>
  </div>
  <div class="h-auto w-auto rounded-b-xl bg-gray-50 p-4">
    <slot />
  </div>
</div>
