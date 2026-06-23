<template>
  <div class="wasp-morph">
    <canvas ref="canvasRef" aria-hidden="true"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { initWaveToTube } from '../lib/waveToTube.js'

const canvasRef = ref(null)
let cleanup = null

onMounted(() => {
  if (canvasRef.value) {
    cleanup = initWaveToTube(canvasRef.value)
  }
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<style scoped>
.wasp-morph {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 60%, #14100a 0%, #06070a 60%);
}

.wasp-morph canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
