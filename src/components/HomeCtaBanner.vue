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
  background-color: #D4AF37;
  overflow: hidden;
}

.home-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.home-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 64px max(32px, calc((100vw - 1400px) / 2 + 32px));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.home-cta-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #0a0a0a;
  line-height: 1.2;
  margin-bottom: 20px;
}

.home-cta-text {
  font-size: 1.05rem;
  color: rgba(10, 10, 10, 0.85);
  line-height: 1.65;
  margin-bottom: 32px;
}

.home-cta-button {
  display: inline-block;
  background-color: #0a0a0a;
  color: #D4AF37;
  border: 2px solid #0a0a0a;
  padding: 16px 32px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.25s ease;
  align-self: flex-start;
}

.home-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
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
  background: linear-gradient(to right, #D4AF37 0%, rgba(212, 175, 55, 0.85) 35%, transparent 100%);
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
    min-height: 0;
  }

  .home-cta-content {
    max-width: none;
    padding: 48px 32px 32px;
    text-align: center;
    align-items: center;
  }

  .home-cta-button {
    align-self: center;
  }

  .home-cta-image-panel {
    min-height: 280px;
  }

  .home-cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #D4AF37 0%, rgba(212, 175, 55, 0.85) 35%, transparent 100%);
  }
}

@media (max-width: 768px) {
  .home-cta-content {
    padding: 48px 16px 24px;
  }

  .home-cta-image-panel {
    min-height: 220px;
  }
}
</style>
