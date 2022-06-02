<script lang="ts">
  export let color: string;
  export let text: string;
  export let href: string;
</script>

<a {href} class="w-auto h-auto">
  <h1 class="my-2 mr-4 font-semibold underline">{text}</h1>
</a>
