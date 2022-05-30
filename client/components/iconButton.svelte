<script lang='ts'>
    let buttonProps = { class:[$$restProps.class] }
    export let src: string
    export let alt: string
    export let color: string
    export let hoverColor: string
</script>

<button on:click on:mouseover on:mouseenter on:mouseleave on:focus {...buttonProps}
            class="mx-12 mt-12 w-16
            border-4 border-black drop-shadow-block
            {color} hover:{hoverColor}">
        <img class="p-3" src={src} alt={alt} />
</button>
