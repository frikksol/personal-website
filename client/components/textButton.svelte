<script lang='ts'>
    let buttonProps = { class:[$$restProps.class] }
    export let text: string
</script>

<button on:click on:mouseover on:mouseenter on:mouseleave on:focus {...buttonProps}
            class="mr-96 ml-12 mt-12 w-full
            text-black hover:underline text-left text-5xl font-bold font-sans">
    <h1>{text}</h1>
</button>
