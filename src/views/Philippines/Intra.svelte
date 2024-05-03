<script>
  import pose1 from "../../assets/img/poses/pose1.png"
  import pose2 from "../../assets/img/poses/pose2.png"
  import pose3 from "../../assets/img/poses/pose3.png"
  import pose4 from "../../assets/img/poses/pose4.png"
  import pose5 from "../../assets/img/poses/pose5.png"
  import intra from "../../assets/img/philippines/intra/intra.jpg"
  import intra1 from "../../assets/img/philippines/intra/intra1.jpg"
  import intra2 from "../../assets/img/philippines/intra/intra2.jpg"
  import intra3 from "../../assets/img/philippines/intra/intra3.jpg"
  import intra4 from "../../assets/img/philippines/intra/intra4.jpg"
  import intra5 from "../../assets/img/philippines/intra/intra5.jpg"

	import { philippinesSelected } from "../../stores/imagesSelected"
	import { pageIndex } from "../../stores/pageSelected"
  
  let intraSelected
  let background
  $: {
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
  
  background = intraSelected
  }
</script>


<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({intra});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <img src="{intraSelected}" alt="" loading="lazy" class="rounded-lg h-2/6">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-3xl">What an amazing view!</h1>
    <h2 class="text-xl">Help me take a picture, Mun.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:focus={() => $philippinesSelected[0] = 1} on:mouseover={() => $philippinesSelected[0] = 1} on:click={() => $pageIndex = 3} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose1}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[0] = 2} on:mouseover={() => $philippinesSelected[0] = 2} on:click={() => $pageIndex = 3} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose2}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[0] = 3} on:mouseover={() => $philippinesSelected[0] = 3} on:click={() => $pageIndex = 3} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose3}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[0] = 4} on:mouseover={() => $philippinesSelected[0] = 4} on:click={() => $pageIndex = 3} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose4}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $philippinesSelected[0] = 5} on:mouseover={() => $philippinesSelected[0] = 5} on:click={() => $pageIndex = 3} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose5}" alt="" loading="lazy" class="rounded-lg">
    </button>
  </div>
</div>