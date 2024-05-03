<script>
  import menuImage from "../assets/img/main.jpg"
  import alphs from "../assets/img/switzerland/alphs/alphs.jpg"
  import alphs1 from "../assets/img/switzerland/alphs/alphs1.jpg"
  import alphs2 from "../assets/img/switzerland/alphs/alphs2.jpg"
  import alphs3 from "../assets/img/switzerland/alphs/alphs3.jpg"
  import alphs4 from "../assets/img/switzerland/alphs/alphs4.jpg"
  import alphs5 from "../assets/img/switzerland/alphs/alphs5.jpg"
  import fuji from "../assets/img/japan/fuji/fuji.jpg"
  import fuji1 from "../assets/img/japan/fuji/fuji1.jpg"
  import fuji2 from "../assets/img/japan/fuji/fuji2.jpg"
  import fuji3 from "../assets/img/japan/fuji/fuji3.jpg"
  import fuji4 from "../assets/img/japan/fuji/fuji4.jpg"
  import fuji5 from "../assets/img/japan/fuji/fuji5.jpg"
  import intra from "../assets/img/philippines/intra/intra.jpg";
  import intra1 from "../assets/img/philippines/intra/intra1.jpg";
  import intra2 from "../assets/img/philippines/intra/intra2.jpg";
  import intra3 from "../assets/img/philippines/intra/intra3.jpg";
  import intra4 from "../assets/img/philippines/intra/intra4.jpg";
  import intra5 from "../assets/img/philippines/intra/intra5.jpg";

  import { pageIndex } from "../stores/pageSelected"
  import { switzerlandSelected, philippinesSelected, japanSelected } from "../stores/imagesSelected"

  let switzerland;
  switch ($switzerlandSelected[0]) {
    case 1:
      switzerland = alphs1
      break
    case 2:
      switzerland = alphs2
      break
    case 3:
      switzerland = alphs3
      break
    case 4:
      switzerland = alphs4
      break
    case 5:
      switzerland = alphs5
      break
    default:
      switzerland = alphs
      break
  }

  let japan;
  switch ($japanSelected[0]) {
    case 1:
      japan = fuji1
      break
    case 2:
      japan = fuji2
      break
    case 3:
      japan = fuji3
      break
    case 4:
      japan = fuji4
      break
    case 5:
      japan = fuji5
      break
    default:
      japan = fuji
      break
  }

  let philippines;
  switch ($philippinesSelected[0]) {
    case 1:
      philippines = intra1
      break
    case 2:
      philippines = intra2
      break
    case 3:
      philippines = intra3
      break
    case 4:
      philippines = intra4
      break
    case 5:
      philippines = intra5
      break
    default:
      philippines = intra
      break
  }

  let completed = 0;
  if ($switzerlandSelected[0] != 0 && switzerlandSelected[1] != 0 && $japanSelected[0] != 0 && $japanSelected[1] != 0 && $philippinesSelected[0] != 0 && $philippinesSelected[1] != 0) {
    completed = 1;
  }
</script>

<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({menuImage});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl">
    <h1 class="text-5xl">Hi Charlene</h1>
    <h2 class="text-3xl">Where do you want to go?</h2>
  </div>
</div>

<button on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 fixed top-0 m-24 transition ease-in-out grid place-items-center">
  <img src="{switzerland}" alt="" loading="lazy" class="rounded-lg">
  <h1 class="text-lg">Switzerland</h1>
</button>

<button on:click={() => $pageIndex = 2} class="transform scale-110 rotate-6 hover:rotate-0 w-2/12 fixed top-0 right-0 my-52 mx-24 m transition ease-in-out grid place-items-center">
  <img src="{japan}" alt="" loading="lazy" class="rounded-lg">
  <h1 class="text-lg">Japan</h1>
</button>

<button on:click={() => $pageIndex = 3} class="transform scale-110 rotate-12 hover:rotate-0 w-2/12 fixed bottom-0 my-24 mx-40 transition ease-in-out grid place-items-center">
  <img src="{philippines}" alt="" loading="lazy" class="rounded-lg">
  <h1 class="text-lg">Philippines</h1>
</button>

{#if completed == 1}
  <button on:click={() => $pageIndex = 4} class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl fixed bottom-0 right-0 m-16 hover:transform hover:scale-110 transition ease-in-out">
    <h1 class="text-5xl">Watch Slideshow ></h1>
  </button>
{/if}