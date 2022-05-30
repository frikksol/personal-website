<script lang="ts">
import BorderHref from "../components/buttons/borderHref.svelte";
import GithubButton from "../components/buttons/githubButton.svelte";
import GitlabButton from "../components/buttons/gitlabButton.svelte";
import LinkedinButton from "../components/buttons/linkedinButton.svelte";
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
                <BorderHref text="my projects" link="/projects"  color="bg-yellow-300" hoverColor="hover:bg-teal-300"/>
            </div>
            <div class="pt-28">
                <p class="font-sans font-medium text-lg">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>
    </div>
    <div class="absolute top-24 left-20">
        <GithubButton />
    </div>
    <div class="absolute bottom-10 right-1/4">
        <LinkedinButton />
    </div>
    <div class="absolute top-30 left-96">
        <GitlabButton />
    </div>
</div>
