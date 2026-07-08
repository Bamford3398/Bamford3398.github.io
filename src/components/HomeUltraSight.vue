<template>
  <section class="home-ultrasight">
    <HeroBackgroundLayout image-placeholder>
      <span class="hero-title-accent" aria-hidden="true"></span>
      <p class="eyebrow home-ultrasight-eyebrow">FLAGSHIP TOOL</p>
      <h2 class="hero-title">
        ULTRASIGHT
        <span class="hero-title-gold">MODULAR ILI TOOL</span>
      </h2>
      <p class="hero-lead">
        A patented, modular ILI platform built for pipework conventional tools can't inspect.
      </p>
      <div class="hero-actions">
        <router-link to="/ultrasight" class="btn btn-primary">MEET ULTRASIGHT →</router-link>
      </div>
      <p class="home-ultrasight-specs">3–12” · untethered · bi-directional · ±0.1mm</p>
    </HeroBackgroundLayout>
  </section>
</template>

<script setup>
import HeroBackgroundLayout from './HeroBackgroundLayout.vue'
</script>

<style scoped>
.home-ultrasight {
  background-color: #0a0a0a;
  border-top: 2px solid #e7c73a;
}

.home-ultrasight :deep(.hero-background) {
  background-color: #0a0a0a;
}

.home-ultrasight :deep(.hero-layout) {
  min-height: clamp(360px, 48vh, 520px);
}

.home-ultrasight :deep(.hero-layout > .hero-copy) {
  padding: 56px 0;
}

.home-ultrasight-eyebrow {
  color: #e7c73a;
  margin: 0 0 16px;
}

.home-ultrasight .hero-title {
  color: #ffffff;
}

.home-ultrasight .hero-title-gold {
  display: block;
  color: #e7c73a;
}

.home-ultrasight .hero-lead {
  color: rgba(255, 255, 255, 0.82);
  max-width: 520px;
}

.home-ultrasight-specs {
  margin: 20px 0 0;
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-normal);
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 768px) {
  .home-ultrasight :deep(.hero-layout > .hero-copy) {
    padding: 40px 0 32px;
  }
}
</style>
