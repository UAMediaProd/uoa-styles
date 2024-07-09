<template>
  <canvas class="mx-auto mt-4" id="canvas" width="500" height="500" style="width: 800px; height: 800px;"></canvas>
</template>
<script setup>
import {onMounted} from "vue";
import * as rive from "@rive-app/canvas";



onMounted(() => {
  const r = new rive.Rive({
    src: "./assets/KBar Buttons.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1", // Name of the State Machine to play
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
})

</script>

<!--https://public.rive.app/community/runtime-files/2732-5606-clean-the-car.riv-->

<!--https://public.rive.app/community/runtime-files/10423-19890-heads-or-tails.riv-->

<!--https://public.rive.app/community/runtime-files/11229-21493-memory-game.riv-->

<!--https://universityofadelaide.box.com/shared/static/jewlgjt6hzy7ztp8eyim9wpbmx8p99ct.riv-->