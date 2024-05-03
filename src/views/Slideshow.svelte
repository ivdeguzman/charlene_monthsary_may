<script>
  import alphs1 from "../assets/img/switzerland/alphs/alphs1.jpg"
  import alphs2 from "../assets/img/switzerland/alphs/alphs2.jpg"
  import alphs3 from "../assets/img/switzerland/alphs/alphs3.jpg"
  import alphs4 from "../assets/img/switzerland/alphs/alphs4.jpg"
  import alphs5 from "../assets/img/switzerland/alphs/alphs5.jpg"
  import tulips1 from "../assets/img/switzerland/tulips/tulips1.jpg"
  import tulips2 from "../assets/img/switzerland/tulips/tulips2.jpg"
  import tulips3 from "../assets/img/switzerland/tulips/tulips3.jpg"
  import tulips4 from "../assets/img/switzerland/tulips/tulips4.jpg"
  import tulips5 from "../assets/img/switzerland/tulips/tulips5.jpg"
  import fuji1 from "../assets/img/japan/fuji/fuji1.jpg"
  import fuji2 from "../assets/img/japan/fuji/fuji2.jpg"
  import fuji3 from "../assets/img/japan/fuji/fuji3.jpg"
  import fuji4 from "../assets/img/japan/fuji/fuji4.jpg"
  import fuji5 from "../assets/img/japan/fuji/fuji5.jpg"
  import akiba1 from "../assets/img/japan/akiba/akiba1.jpg"
  import akiba2 from "../assets/img/japan/akiba/akiba2.jpg"
  import akiba3 from "../assets/img/japan/akiba/akiba3.jpg"
  import akiba4 from "../assets/img/japan/akiba/akiba4.jpg"
  import akiba5 from "../assets/img/japan/akiba/akiba5.jpg"
  import intra1 from "../assets/img/philippines/intra/intra1.jpg"
  import intra2 from "../assets/img/philippines/intra/intra2.jpg"
  import intra3 from "../assets/img/philippines/intra/intra3.jpg"
  import intra4 from "../assets/img/philippines/intra/intra4.jpg"
  import intra5 from "../assets/img/philippines/intra/intra5.jpg"
  import baguio1 from "../assets/img/philippines/baguio/baguio1.jpg"
  import baguio2 from "../assets/img/philippines/baguio/baguio2.jpg"
  import baguio3 from "../assets/img/philippines/baguio/baguio3.jpg"
  import baguio4 from "../assets/img/philippines/baguio/baguio4.jpg"
  import baguio5 from "../assets/img/philippines/baguio/baguio5.jpg"
  import menuImage from "../assets/img/main.jpg"
  import bgm from "../assets/bgm.mp3"

  import { switzerlandSelected, philippinesSelected, japanSelected } from "../stores/imagesSelected"
	import { pageIndex } from "../stores/pageSelected";

  import { fly, fade } from "svelte/transition";


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
  }

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
  }

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
  }

  let slideshowIndex = 0;
  let testing = setInterval(() => {
    slideshowIndex++
    console.log("Testing" + slideshowIndex)
  }, 2500)

  $: if (slideshowIndex >= 15) {
    clearInterval(testing)
    $pageIndex = 0;
  }
</script>

<audio autoplay preload="auto">
  <source src="{bgm}" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

<div class="flex justify-center items-center bg-cover bg-center h-full w-full" style="background-image: url({menuImage});">
  <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-md w-full h-full" />
</div>

<div class="w-full h-full flex flex-col items-center justify-center fixed top-0">
  {#if slideshowIndex == 0}
    <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16" in:fly={{ delay: 300, y:-25, duration: 150 }}>>
      <h1 class="text-5xl">Happy 4th Monthsary Munmun ko!</h1>
      <h2 class="text-3xl">Sana naman kahit paano natuwa ka dito haha.</h2>
    </div>
  {:else if slideshowIndex == 1}
    <div class="w-full flex justify-evenly items-center" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <div class="w-7/12 transition ease-in-out grid place-items-center">
        <img src="{alphsSelected}" alt="" loading="lazy" class="rounded-lg">
        <h1 class="text-3xl">Alphs</h1>
      </div>
    </div>
  {:else if slideshowIndex == 2}
    <div class="w-full flex justify-evenly items-center" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <div class="w-7/12 transition ease-in-out grid place-items-center">
        <img src="{tulipsSelected}" alt="" loading="lazy" class="rounded-lg">
        <h1 class="text-3xl">Tulips</h1>
      </div>
    </div>
  {:else if slideshowIndex == 3}
    <div class="w-full flex justify-evenly items-center" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <div class="w-7/12 transition ease-in-out grid place-items-center">
        <img src="{fujiSelected}" alt="" loading="lazy" class="rounded-lg">
        <h1 class="text-3xl">Fuji</h1>
      </div>
    </div>
  {:else if slideshowIndex == 4}
    <div class="w-full flex justify-evenly items-center" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <div class="w-7/12 transition ease-in-out grid place-items-center">
        <img src="{akibaSelected}" alt="" loading="lazy" class="rounded-lg">
        <h1 class="text-3xl">Akihabara</h1>
      </div>
    </div>
  {:else if slideshowIndex == 5}
    <div class="w-full flex justify-evenly items-center" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <div class="w-7/12 transition ease-in-out grid place-items-center">
        <img src="{intraSelected}" alt="" loading="lazy" class="rounded-lg">
        <h1 class="text-3xl">Intramuros</h1>
      </div>
    </div>
  {:else if slideshowIndex == 6}
    <div class="w-full flex justify-evenly items-center" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <div class="w-7/12 transition ease-in-out grid place-items-center">
        <img src="{baguioSelected}" alt="" loading="lazy" class="rounded-lg">
        <h1 class="text-3xl">Baguio</h1>
      </div>
    </div>
  {:else if slideshowIndex >= 7}
    <div class="bg-white/30 flex flex-col items-center p-5 px-8 backdrop-blur-lg rounded-xl m-16" in:fly={{ delay: 300, y:-25, duration: 150 }}>
      <h1 class="text-2xl text-center">Sorry po kung nararamdaman mo po na inaaway kita palagi 🥺 I promise you po that I will continue to become the best man for you. It will take time, but I am willing to change for you po. I love you po sobra mahal ko. I hope you have a nice day. Oh, and if may problema ka please tell me immediately ah. I love you sobra 🥹💖💕</h1>
    </div>
  {/if}
</div>