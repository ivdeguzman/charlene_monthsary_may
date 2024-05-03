<script>
  import alphs from "../assets/img/switzerland/alphs/alphs.jpg"
  import alphs1 from "../assets/img/switzerland/alphs/alphs1.jpg"
  import alphs2 from "../assets/img/switzerland/alphs/alphs2.jpg"
  import alphs3 from "../assets/img/switzerland/alphs/alphs3.jpg"
  import alphs4 from "../assets/img/switzerland/alphs/alphs4.jpg"
  import alphs5 from "../assets/img/switzerland/alphs/alphs5.jpg"
  import tulips from "../assets/img/switzerland/tulips/tulips.jpg"
  import tulips1 from "../assets/img/switzerland/tulips/tulips1.jpg"
  import tulips2 from "../assets/img/switzerland/tulips/tulips2.jpg"
  import tulips3 from "../assets/img/switzerland/tulips/tulips3.jpg"
  import tulips4 from "../assets/img/switzerland/tulips/tulips4.jpg"
  import tulips5 from "../assets/img/switzerland/tulips/tulips5.jpg"
  import menuImage from "../assets/img/main.jpg"

	import { switzerlandSelected } from "../stores/imagesSelected"
  import { pageIndex } from "../stores/pageSelected"

  let alphsSelected;
  switch ($switzerlandSelected[0]) {
    case 1:
      alphsSelected = alphs1
      break
    case 2:
      alphsSelected = alphs2
      break
    case 3:
      alphsSelected = alphs3
      break
    case 4:
      alphsSelected = alphs4
      break
    case 5:
      alphsSelected = alphs5
      break
    default:
      alphsSelected = alphs
      break
  }

  let tulipsSelected;
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

  let background = alphsSelected;
</script>

<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({background});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-5xl">Grüezi, Welcome to Switzerland!</h1>
    <h2 class="text-3xl">Please select a destination.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:click={() => $pageIndex = 11} on:focus={() => background = alphsSelected} on:mouseover={() => background = alphsSelected} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{alphsSelected}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Alphs</h1>
    </button>
    
    <button on:click={() => $pageIndex = 12} on:focus={() => background = alphsSelected} on:mouseover={() => background = tulipsSelected} class="transform scale-110 rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{tulipsSelected}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Tulips</h1>
    </button>

    <button on:click={() => $pageIndex = 0} on:focus={() => background = alphsSelected} on:mouseover={() => background = menuImage} class="transform scale-110 -rotate-6 hover:rotate-0 w-2/12 transition ease-in-out grid place-items-center">
      <img src="{menuImage}" alt="" loading="lazy" class="rounded-lg">
      <h1 class="text-lg">Go Back</h1>
    </button>
  </div>
</div>