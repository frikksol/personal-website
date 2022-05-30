<script lang="ts">
import { goto } from "$app/navigation";
import BorderButton from "../components/buttons/borderButton.svelte";
import GithubButton from "../components/buttons/githubButton.svelte";
import GitlabButton from "../components/buttons/gitlabButton.svelte";
import LinkedinButton from "../components/buttons/linkedinButton.svelte";

function onClick() {
    goto('/projects')
}
</script>


<div class="w-full h-screen bg-[url('background.svg')] bg-cover bg-no-repeat">
    <div class="">
        <div class="grid grid-cols-2 grid-flow-col px-60 pt-60">
            <div>
                <h1 class="text-8xl text-black font-bold">
                    Frikk
                </h1>
                <h1 class="text-8xl text-black font-bold bg-rose">
                    Herding
                </h1>
                <BorderButton on:click={() => onClick()} text="my projects" />
            </div>
            <div class="pt-28">
                <p class="font-sans font-medium text-lg">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <LinkedinButton />
                <GithubButton />
                <GitlabButton />
            </div>
        </div>
    </div>
</div>

