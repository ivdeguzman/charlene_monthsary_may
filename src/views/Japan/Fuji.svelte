<script>
  import pose1 from "../../assets/img/poses/pose1.png"
  import pose2 from "../../assets/img/poses/pose2.png"
  import pose3 from "../../assets/img/poses/pose3.png"
  import pose4 from "../../assets/img/poses/pose4.png"
  import pose5 from "../../assets/img/poses/pose5.png"
  import fuji from "../../assets/img/japan/fuji/fuji.jpg"
  import fuji1 from "../../assets/img/japan/fuji/fuji1.jpg"
  import fuji2 from "../../assets/img/japan/fuji/fuji2.jpg"
  import fuji3 from "../../assets/img/japan/fuji/fuji3.jpg"
  import fuji4 from "../../assets/img/japan/fuji/fuji4.jpg"
  import fuji5 from "../../assets/img/japan/fuji/fuji5.jpg"

	import { japanSelected } from "../../stores/imagesSelected"
	import { pageIndex } from "../../stores/pageSelected"
  
  let fujiSelected
  let background
  $: {
  switch ($japanSelected[0]) {
    case 1:
      fujiSelected = fuji1
      break
    case 2:
      fujiSelected = fuji2
      break
    case 3:
      fujiSelected = fuji3
      break
    case 4:
      fujiSelected = fuji4
      break
    case 5:
      fujiSelected = fuji5
      break
    default:
      fujiSelected = fuji
      break
  }  
  
  background = fujiSelected
  }
</script>


<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({fuji});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <img src="{fujiSelected}" alt="" loading="lazy" class="rounded-lg h-2/6">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-3xl">What an amazing view!</h1>
    <h2 class="text-xl">Help me take a picture, Mun.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:focus={() => $japanSelected[0] = 1} on:mouseover={() => $japanSelected[0] = 1} on:click={() => $pageIndex = 2} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose1}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[0] = 2} on:mouseover={() => $japanSelected[0] = 2} on:click={() => $pageIndex = 2} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose2}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[0] = 3} on:mouseover={() => $japanSelected[0] = 3} on:click={() => $pageIndex = 2} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose3}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[0] = 4} on:mouseover={() => $japanSelected[0] = 4} on:click={() => $pageIndex = 2} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose4}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[0] = 5} on:mouseover={() => $japanSelected[0] = 5} on:click={() => $pageIndex = 2} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose5}" alt="" loading="lazy" class="rounded-lg">
    </button>
  </div>
</div>