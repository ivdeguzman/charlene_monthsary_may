<script>
  import fuji from "../assets/img/japan/fuji/fuji.jpg"
  import fuji1 from "../assets/img/japan/fuji/fuji1.jpg"
  import fuji2 from "../assets/img/japan/fuji/fuji2.jpg"
  import fuji3 from "../assets/img/japan/fuji/fuji3.jpg"
  import fuji4 from "../assets/img/japan/fuji/fuji4.jpg"
  import fuji5 from "../assets/img/japan/fuji/fuji5.jpg"
  import akiba from "../assets/img/japan/akiba/akiba.jpg"
  import akiba1 from "../assets/img/japan/akiba/akiba1.jpg"
  import akiba2 from "../assets/img/japan/akiba/akiba2.jpg"
  import akiba3 from "../assets/img/japan/akiba/akiba3.jpg"
  import akiba4 from "../assets/img/japan/akiba/akiba4.jpg"
  import akiba5 from "../assets/img/japan/akiba/akiba5.jpg"
  import menuImage from "../assets/img/main.jpg"

	import { japanSelected } from "../stores/imagesSelected"
  import { pageIndex } from "../stores/pageSelected"

  let fujiSelected;
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

  let akibaSelected;
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

  let background = fujiSelected;
</script>

<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({background});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-5xl">Konnichiwa, Welcome to Japan!</h1>
    <h2 class="text-3xl">Please select a destination.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:click={() => $pageIndex = 21} on:focus={() => background = fujiSelected} on:mouseover={() => background = fujiSelected} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{fujiSelected}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Fuji</h1>
    </button>
    
    <button on:click={() => $pageIndex = 22} on:focus={() => background = fujiSelected} on:mouseover={() => background = akibaSelected} class="transform scale-110 rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{akibaSelected}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Akihabara</h1>
    </button>

    <button on:click={() => $pageIndex = 0} on:focus={() => background = fujiSelected} on:mouseover={() => background = menuImage} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{menuImage}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Go Back</h1>
    </button>
  </div>
</div>