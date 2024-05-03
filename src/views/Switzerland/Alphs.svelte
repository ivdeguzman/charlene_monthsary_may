<script>
  import pose1 from "../../assets/img/poses/pose1.png"
  import pose2 from "../../assets/img/poses/pose2.png"
  import pose3 from "../../assets/img/poses/pose3.png"
  import pose4 from "../../assets/img/poses/pose4.png"
  import pose5 from "../../assets/img/poses/pose5.png"
  import alphs from "../../assets/img/switzerland/alphs/alphs.jpg"
  import alphs1 from "../../assets/img/switzerland/alphs/alphs1.jpg"
  import alphs2 from "../../assets/img/switzerland/alphs/alphs2.jpg"
  import alphs3 from "../../assets/img/switzerland/alphs/alphs3.jpg"
  import alphs4 from "../../assets/img/switzerland/alphs/alphs4.jpg"
  import alphs5 from "../../assets/img/switzerland/alphs/alphs5.jpg"

	import { switzerlandSelected } from "../../stores/imagesSelected"
	import { pageIndex } from "../../stores/pageSelected"
  
  let alphsSelected
  let background
  $: {
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
  
  background = alphsSelected
  }
</script>


<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({alphs});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  <img src="{alphsSelected}" alt="" loading="lazy" class="rounded-lg h-2/6">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16">
    <h1 class="text-3xl">What an amazing view!</h1>
    <h2 class="text-xl">Help me take a picture, Mun.</h2>
  </div>
  <div class="w-full flex justify-evenly items-center">
    <button on:focus={() => $switzerlandSelected[0] = 1} on:mouseover={() => $switzerlandSelected[0] = 1} on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose1}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[0] = 2} on:mouseover={() => $switzerlandSelected[0] = 2} on:click={() => $pageIndex = 1} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose2}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[0] = 3} on:mouseover={() => $switzerlandSelected[0] = 3} on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose3}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[0] = 4} on:mouseover={() => $switzerlandSelected[0] = 4} on:click={() => $pageIndex = 1} class="transform scale-110 rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose4}" alt="" loading="lazy" class="rounded-lg">
    </button>
    <button on:focus={() => $switzerlandSelected[0] = 5} on:mouseover={() => $switzerlandSelected[0] = 5} on:click={() => $pageIndex = 1} class="transform scale-110 -rotate-6 hover:rotate-0 w-28 transition ease-in-out grid place-items-center">
      <img src="{pose5}" alt="" loading="lazy" class="rounded-lg">
    </button>
  </div>
</div>