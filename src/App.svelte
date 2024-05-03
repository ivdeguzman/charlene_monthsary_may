<script>
  import Main from "./views/Main.svelte"
  import Switzerland from "./views/Switzerland.svelte"
  import Japan from "./views/Japan.svelte"
  import Philippines from "./views/Philippines.svelte"
  import Alphs from "./views/Switzerland/Alphs.svelte"
  import Tulips from "./views/Switzerland/Tulips.svelte"
  import Fuji from "./views/Japan/Fuji.svelte"
  import Akiba from "./views/Japan/Akiba.svelte"
  import Intra from "./views/Philippines/Intra.svelte"
  import Baguio from "./views/Philippines/Baguio.svelte"
  import Slideshow from "./views/Slideshow.svelte"
  import { switzerlandSelected, japanSelected, philippinesSelected } from "./stores/imagesSelected"
  import { pageIndex } from "./stores/pageSelected"
</script>

<svelte:head>
  <title>Charlene Monthsary</title>
</svelte:head>

<main class="w-screen h-screen">
  {#if $pageIndex == 0}
    <Main />
  {:else if $pageIndex == 1}
    <Switzerland />
  {:else if $pageIndex == 11}
    <Alphs />
  {:else if $pageIndex == 12}
    <Tulips />
  {:else if $pageIndex == 21}
    <Fuji />
  {:else if $pageIndex == 22}
    <Akiba />
  {:else if $pageIndex == 31}
    <Intra />
  {:else if $pageIndex == 32}
    <Baguio />
  {:else if $pageIndex == 2}
    <Japan />
  {:else if $pageIndex == 3}
    <Philippines />
  {:else if $pageIndex == 4}
    <Slideshow />
  {/if}
</main>