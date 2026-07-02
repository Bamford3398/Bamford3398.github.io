<template>
  <section class="home-cta-banner">
    <div class="home-cta-container">
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
      <div class="home-cta-image-wrap">
        <div class="home-cta-image-placeholder" aria-hidden="true">
          <span>Pig image placeholder</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-cta-banner {
  background-color: #D4AF37;
  padding: 64px 32px;
}

.home-cta-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.home-cta-content {
  max-width: 520px;
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
}

.home-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
}

.home-cta-image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-cta-image-placeholder {
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 7;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.12);
  border: 2px dashed rgba(10, 10, 10, 0.25);
  color: rgba(10, 10, 10, 0.5);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .home-cta-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .home-cta-content {
    max-width: none;
    text-align: center;
  }

  .home-cta-button {
    display: block;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .home-cta-banner {
    padding: 48px 16px;
  }
}
</style>
