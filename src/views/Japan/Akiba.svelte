<script>
  import pose1 from "../../assets/img/poses/pose1.png"
  import pose2 from "../../assets/img/poses/pose2.png"
  import pose3 from "../../assets/img/poses/pose3.png"
  import pose4 from "../../assets/img/poses/pose4.png"
  import pose5 from "../../assets/img/poses/pose5.png"
  import akiba from "../../assets/img/japan/akiba/akiba.jpg"
  import akiba1 from "../../assets/img/japan/akiba/akiba1.jpg"
  import akiba2 from "../../assets/img/japan/akiba/akiba2.jpg"
  import akiba3 from "../../assets/img/japan/akiba/akiba3.jpg"
  import akiba4 from "../../assets/img/japan/akiba/akiba4.jpg"
  import akiba5 from "../../assets/img/japan/akiba/akiba5.jpg"

	import { japanSelected } from "../../stores/imagesSelected"
	import { pageIndex } from "../../stores/pageSelected"
  
  let akibaSelected
  let background
  $: {
  switch ($japanSelected[1]) {
    case 1:
      akibaSelected = akiba1
      break
    case 2:
      akibaSelected = akiba2
      break
    case 3:
      akibaSelected = akiba3
      break
    case 4:
      akibaSelected = akiba4
      break
    case 5:
      akibaSelected = akiba5
      break
    default:
      akibaSelected = akiba
      break
  }  
  
  background = akibaSelected
  }
</script>


<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({akiba});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <img src="{akibaSelected}" alt="" loading="lazy" class="rounded-lg h-2/6">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-3xl">What an amazing view!</h1>
    <h2 class="text-xl">Help me take a picture, Mun.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:focus={() => $japanSelected[1] = 1} on:mouseover={() => $japanSelected[1] = 1} on:click={() => $pageIndex = 2} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose1}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[1] = 2} on:mouseover={() => $japanSelected[1] = 2} on:click={() => $pageIndex = 2} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose2}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[1] = 3} on:mouseover={() => $japanSelected[1] = 3} on:click={() => $pageIndex = 2} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose3}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[1] = 4} on:mouseover={() => $japanSelected[1] = 4} on:click={() => $pageIndex = 2} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose4}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $japanSelected[1] = 5} on:mouseover={() => $japanSelected[1] = 5} on:click={() => $pageIndex = 2} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose5}" alt="" loading="lazy" class="rounded-lg">
    </button>
  </div>
</div>