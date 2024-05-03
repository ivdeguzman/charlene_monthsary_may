<script>
  import intra from "../assets/img/philippines/intra/intra.jpg"
  import intra1 from "../assets/img/philippines/intra/intra1.jpg"
  import intra2 from "../assets/img/philippines/intra/intra2.jpg"
  import intra3 from "../assets/img/philippines/intra/intra3.jpg"
  import intra4 from "../assets/img/philippines/intra/intra4.jpg"
  import intra5 from "../assets/img/philippines/intra/intra5.jpg"
  import baguio from "../assets/img/philippines/baguio/baguio.jpg"
  import baguio1 from "../assets/img/philippines/baguio/baguio1.jpg"
  import baguio2 from "../assets/img/philippines/baguio/baguio2.jpg"
  import baguio3 from "../assets/img/philippines/baguio/baguio3.jpg"
  import baguio4 from "../assets/img/philippines/baguio/baguio4.jpg"
  import baguio5 from "../assets/img/philippines/baguio/baguio5.jpg"
  import menuImage from "../assets/img/main.jpg"

	import { philippinesSelected } from "../stores/imagesSelected"
  import { pageIndex } from "../stores/pageSelected"

  let intraSelected;
  switch ($philippinesSelected[0]) {
    case 1:
      intraSelected = intra1
      break
    case 2:
      intraSelected = intra2
      break
    case 3:
      intraSelected = intra3
      break
    case 4:
      intraSelected = intra4
      break
    case 5:
      intraSelected = intra5
      break
    default:
      intraSelected = intra
      break
  }

  let baguioSelected;
  switch ($philippinesSelected[1]) {
    case 1:
      baguioSelected = baguio1
      break
    case 2:
      baguioSelected = baguio2
      break
    case 3:
      baguioSelected = baguio3
      break
    case 4:
      baguioSelected = baguio4
      break
    case 5:
      baguioSelected = baguio5
      break
    default:
      baguioSelected = baguio
      break
  }

  let background = intraSelected;
</script>

<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({background});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-5xl">Mabuhay, Welcome to Philippines!</h1>
    <h2 class="text-3xl">Please select a destination.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:click={() => $pageIndex = 31} on:focus={() => background = intraSelected} on:mouseover={() => background = intraSelected} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{intraSelected}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Intramuros</h1>
    </button>
    
    <button on:click={() => $pageIndex = 32} on:focus={() => background = intraSelected} on:mouseover={() => background = baguioSelected} class="transform scale-110 rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{baguioSelected}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Baguio</h1>
    </button>

    <button on:click={() => $pageIndex = 0} on:focus={() => background = intraSelected} on:mouseover={() => background = menuImage} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{menuImage}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Go Back</h1>
    </button>
  </div>
</div>