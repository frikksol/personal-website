<script lang="ts">
  import StandardCard from "../standardCard.svelte";
</script>

<StandardCard
  headerColor="bg-lime-400"
  bodyColor="bg-white"
  title="Software Engineer at Esko [2016-2018]"
>
  <p class="text-lg">
    From 2016 to 2018 I worked as a software engineer at Esko in their digital
    finishing department. They create machines for pricise cutting of materials
    like cardboard, plastic fabric etc. Picture a CNC equipped with a razor
    blade.
    <br /><br />
    In my role I did several different things like:
    <br />
    - Development of the Windows application written in C# and C++ used to manage
    the machines.
    <br />
    - Embedded development in C on the machines themselves. Controlling of highspeed
    electrical motors etc.
    <br />
    - Integration with Kuka Robots to manage on and offloading of materials on the
    machines cutting table.
    <br />
    - Scrum master for the development team.
  </p>
  <h1 class="pt-4 font-semibold">Tags:</h1>
  <div class="mt-2 flex flex-row flex-wrap space">
    C++, C#, Embedded systems, Kuka Robots
  </div></StandardCard
>
