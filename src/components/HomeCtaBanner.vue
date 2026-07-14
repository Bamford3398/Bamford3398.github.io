<template>
  <section class="home-cta-banner">
    <div class="home-cta-layout">
      <div class="home-cta-content">
        <h2 class="home-cta-title">Need certainty on your asset's condition?</h2>
        <p class="home-cta-text">
          Send us your pipe details and we'll work with you to deliver the best inspection
          approach.
        </p>
        <router-link to="/contact" class="home-cta-button">
          DISCUSS AN INSPECTION
        </router-link>
      </div>
      <div class="home-cta-image-panel" aria-hidden="true">
        <img
          src="/home-cta-refinery.png"
          alt=""
          class="home-cta-image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-cta-banner {
  background-color: #e7c73a;
  overflow: hidden;
}

.home-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  height: 360px;
  min-height: 360px;
  max-height: 360px;
}

.home-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 48px 48px max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.home-cta-title {
  color: #0a0a0a;
  margin-bottom: 20px;
}

.home-cta-text {
  color: var(--color-text-muted-on-gold);
  margin-bottom: 32px;
}

.home-cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}

.home-cta-image-panel::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: min(120px, 18%);
  background: linear-gradient(to right, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

.home-cta-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

@media (max-width: 900px) {
  .home-cta-layout {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 0;
    max-height: none;
  }

  .home-cta-content {
    max-width: none;
    padding: 48px var(--site-gutter) 32px;
  }

  .home-cta-button {
    align-self: stretch;
    width: 100%;
    text-align: center;
  }

  .home-cta-image-panel {
    min-height: 280px;
  }

  .home-cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  }
}

@media (max-width: 768px) {
  .home-cta-content {
    padding-bottom: 24px;
  }

  .home-cta-image-panel {
    min-height: 220px;
  }
}
</style>
