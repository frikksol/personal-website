<script lang="ts">
  export let text: string;
  export let link: string;
  export let color: string;
</script>

<div
  class="my-5 w-fit rounded-xl
            border-2 border-black p-2
            font-semibold uppercase
            {color} hover:bg-white"
>
  <a href={link}>
    <h1>
      {text}
    </h1>
  </a>
</div>
