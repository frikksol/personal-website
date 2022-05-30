<script lang="ts">
    import BorderButton from "../components/buttons/borderButton.svelte";

    function onClick() {
        console.log("clicked")
    }
</script>
<div class="w-full h-screen bg-neopurple">
    <div class="grid grid-cols-2 grid-flow-col px-60 pt-32">
        <div class="">
            <h1 class="text-8xl text-black font-bold">
                About me
            </h1>
            <div class="flex justify-start">
                <img class="mr-12 mt-12 w-72
                        border-4 border-black drop-shadow-block-thick" 
                        src="me.jpeg" alt="me" />
            </div>
        </div>
        <div class="pt-36">
            <p class="font-sans font-medium text-lg">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <div class="flex justify-end">
                <BorderButton on:click={() => onClick()} text="go somewhere" />
            </div>
        </div>
    </div>
</div>
