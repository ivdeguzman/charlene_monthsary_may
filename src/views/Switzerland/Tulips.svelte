<script>
  import pose1 from "../../assets/img/poses/pose1.png"
  import pose2 from "../../assets/img/poses/pose2.png"
  import pose3 from "../../assets/img/poses/pose3.png"
  import pose4 from "../../assets/img/poses/pose4.png"
  import pose5 from "../../assets/img/poses/pose5.png"
  import tulips from "../../assets/img/switzerland/tulips/tulips.jpg"
  import tulips1 from "../../assets/img/switzerland/tulips/tulips1.jpg"
  import tulips2 from "../../assets/img/switzerland/tulips/tulips2.jpg"
  import tulips3 from "../../assets/img/switzerland/tulips/tulips3.jpg"
  import tulips4 from "../../assets/img/switzerland/tulips/tulips4.jpg"
  import tulips5 from "../../assets/img/switzerland/tulips/tulips5.jpg"

	import { switzerlandSelected } from "../../stores/imagesSelected"
	import { pageIndex } from "../../stores/pageSelected"
  
  let tulipsSelected
  let background
  $: {
  switch ($switzerlandSelected[1]) {
    case 1:
      tulipsSelected = tulips1
      break
    case 2:
      tulipsSelected = tulips2
      break
    case 3:
      tulipsSelected = tulips3
      break
    case 4:
      tulipsSelected = tulips4
      break
    case 5:
      tulipsSelected = tulips5
      break
    default:
      tulipsSelected = tulips
      break
  }  
  
  background = tulipsSelected
  }
</script>


<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({tulips});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <img src="{tulipsSelected}" alt="" loading="lazy" class="rounded-lg h-2/6">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-3xl">What an amazing view!</h1>
    <h2 class="text-xl">Help me take a picture, Mun.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:focus={() => $switzerlandSelected[1] = 1} on:mouseover={() => $switzerlandSelected[1] = 1} on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose1}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[1] = 2} on:mouseover={() => $switzerlandSelected[1] = 2} on:click={() => $pageIndex = 1} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose2}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[1] = 3} on:mouseover={() => $switzerlandSelected[1] = 3} on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose3}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[1] = 4} on:mouseover={() => $switzerlandSelected[1] = 4} on:click={() => $pageIndex = 1} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose4}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[1] = 5} on:mouseover={() => $switzerlandSelected[1] = 5} on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose5}" alt="" loading="lazy" class="rounded-lg">
    </button>
  </div>
</div>