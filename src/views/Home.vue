<template>
  <div class="home">
    <Hero />
    <Cards />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Cards from '../components/Cards.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
