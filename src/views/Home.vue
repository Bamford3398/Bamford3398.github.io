<template>
  <div class="home">
    <div class="home-intro">
      <Hero />
      <HomeClarity />
      <ServicePanes class="home-service-panes" />
    </div>
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

.home-intro {
  position: relative;
  isolation: isolate;
  padding-bottom: 8px;
}

.home-intro::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, #0a0a0a);
  pointer-events: none;
  z-index: 3;
}

.home-intro :deep(.hero-background.home-hero) {
  position: relative;
  z-index: 1;
}

.home-intro :deep(.hero-background.home-hero .hero-layout::before) {
  z-index: 2;
}

.home-intro :deep(.home-service-panes) {
  position: relative;
  z-index: 4;
  margin-top: 0;
  background: transparent !important;
  padding-top: 8px;
}

.home-intro :deep(.home-service-panes .service-pane) {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .home-intro :deep(.home-service-panes) {
    margin-top: 0;
    padding-top: 8px;
  }
}
</style>
