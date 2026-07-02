<template>
  <div class="home">
    <Hero />
    <HomeClarity />
    <ServicePanes />
    <ClientGains />
    <HomeCtaBanner />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import HomeClarity from '../components/HomeClarity.vue'
import ServicePanes from '../components/ServicePanes.vue'
import ClientGains from '../components/ClientGains.vue'
import HomeCtaBanner from '../components/HomeCtaBanner.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
