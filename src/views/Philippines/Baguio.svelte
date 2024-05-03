<script>
  import pose1 from "../../assets/img/poses/pose1.png"
  import pose2 from "../../assets/img/poses/pose2.png"
  import pose3 from "../../assets/img/poses/pose3.png"
  import pose4 from "../../assets/img/poses/pose4.png"
  import pose5 from "../../assets/img/poses/pose5.png"
  import baguio from "../../assets/img/philippines/baguio/baguio.jpg"
  import baguio1 from "../../assets/img/philippines/baguio/baguio1.jpg"
  import baguio2 from "../../assets/img/philippines/baguio/baguio2.jpg"
  import baguio3 from "../../assets/img/philippines/baguio/baguio3.jpg"
  import baguio4 from "../../assets/img/philippines/baguio/baguio4.jpg"
  import baguio5 from "../../assets/img/philippines/baguio/baguio5.jpg"

	import { philippinesSelected } from "../../stores/imagesSelected"
	import { pageIndex } from "../../stores/pageSelected"
  
  let baguioSelected
  let background
  $: {
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
  
  background = baguioSelected
  }
</script>


<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({baguio});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <img src="{baguioSelected}" alt="" loading="lazy" class="rounded-lg h-2/6">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-3xl">What an amazing view!</h1>
    <h2 class="text-xl">Help me take a picture, Mun.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:focus={() => $philippinesSelected[1] = 1} on:mouseover={() => $philippinesSelected[1] = 1} on:click={() => $pageIndex = 3} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose1}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[1] = 2} on:mouseover={() => $philippinesSelected[1] = 2} on:click={() => $pageIndex = 3} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose2}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[1] = 3} on:mouseover={() => $philippinesSelected[1] = 3} on:click={() => $pageIndex = 3} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose3}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[1] = 4} on:mouseover={() => $philippinesSelected[1] = 4} on:click={() => $pageIndex = 3} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose4}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[1] = 5} on:mouseover={() => $philippinesSelected[1] = 5} on:click={() => $pageIndex = 3} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose5}" alt="" loading="lazy" class="rounded-lg">
    </button>
  </div>
</div>