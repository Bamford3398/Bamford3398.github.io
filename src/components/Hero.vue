<template>
  <HeroBackgroundLayout header-offset section-class="home-hero">
    <h1 class="hero-title">ADAPTABLE INLINE INSPECTION</h1>
    <p class="hero-subtitle">
      Specialist inline inspection services for pipelines and process assets. Delivering
      accurate condition data and integrity-led reporting to support your maintenance,
      repair and operational decisions.
    </p>
    <div class="hero-actions">
      <router-link to="/contact" class="btn btn-primary">
        DISCUSS YOUR NEEDS
      </router-link>
      <a href="#services" class="btn btn-secondary">OUR SERVICES</a>
    </div>
  </HeroBackgroundLayout>
</template>

<script setup>
import HeroBackgroundLayout from './HeroBackgroundLayout.vue'
</script>

<style scoped>
.hero-title {
  color: #ffffff;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}
</style>
