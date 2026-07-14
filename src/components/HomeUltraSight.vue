<template>
  <section class="home-ultrasight">
    <HeroBackgroundLayout image-src="/home-ultrasight-tool.png">
      <span class="hero-title-accent" aria-hidden="true"></span>
      <p class="eyebrow home-ultrasight-eyebrow">FLAGSHIP TOOL</p>
      <h2 class="hero-title">
        ULTRASIGHT
        <span class="hero-title-gold">MODULAR ILI TOOL</span>
      </h2>
      <p class="hero-lead">
        A patent pending, modular ILI platform built for pipework conventional tools can't inspect.
      </p>
      <div class="hero-actions">
        <router-link to="/ultrasight" class="btn btn-primary btn-with-icon">
          MEET ULTRASIGHT
          <BtnArrowIcon />
        </router-link>
      </div>
      <p class="home-ultrasight-specs">3–12” · untethered · bi-directional · ±0.1mm</p>
    </HeroBackgroundLayout>
  </section>
</template>

<script setup>
import HeroBackgroundLayout from './HeroBackgroundLayout.vue'
import BtnArrowIcon from './icons/BtnArrowIcon.vue'
</script>

<style scoped>
.home-ultrasight {
  background-color: #0a0a0a;
  border-top: 2px solid #e7c73a;
}

.home-ultrasight :deep(.hero-background) {
  background-color: #0a0a0a;
  --image-overlap: min(200px, calc(var(--text-width) * 0.28));
}

.home-ultrasight :deep(.hero-layout) {
  min-height: clamp(360px, 48vh, 520px);
  align-items: center;
}

.home-ultrasight :deep(.hero-layout::before) {
  width: calc(var(--text-gutter) + var(--text-width) + var(--image-overlap) * 0.25);
  background: linear-gradient(
    to right,
    #0a0a0a 0%,
    #0a0a0a 55%,
    rgba(10, 10, 10, 0.55) 78%,
    transparent 100%
  );
}

.home-ultrasight :deep(.hero-layout > .hero-copy) {
  padding: 56px 0;
}

.home-ultrasight :deep(.hero-copy::before) {
  right: calc(-1 * var(--image-overlap) * 0.2);
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.75) 0%,
    rgba(10, 10, 10, 0.35) 60%,
    transparent 100%
  );
}

.home-ultrasight :deep(.hero-image-wrap) {
  align-self: center;
  margin-top: 0;
  width: min(720px, calc(100% - var(--image-start) + 40px));
}

.home-ultrasight :deep(.hero-image) {
  width: 100%;
  height: auto;
  min-height: 0;
  max-height: none;
  object-fit: contain;
  object-position: center center;
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  mask-composite: intersect;
}

.home-ultrasight :deep(.hero-image-wrap::after) {
  background:
    linear-gradient(to right, #0a0a0a 0%, transparent 3%, transparent 97%, #0a0a0a 100%),
    linear-gradient(to bottom, #0a0a0a 0%, transparent 4%, transparent 94%, #0a0a0a 100%);
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
  color: var(--color-text-secondary);
  max-width: 520px;
}

.home-ultrasight-specs {
  margin: 20px 0 0;
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-normal);
  letter-spacing: 0.04em;
  color: var(--color-text-meta);
}

@media (max-width: 768px) {
  .home-ultrasight :deep(.hero-layout > .hero-copy) {
    padding: 40px 0 32px;
  }

  .home-ultrasight :deep(.hero-image-wrap) {
    width: 100%;
    margin-top: 8px;
  }

  .home-ultrasight :deep(.hero-image) {
    max-height: none;
    -webkit-mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
    mask-composite: intersect;
  }
}
</style>
