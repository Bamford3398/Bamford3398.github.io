<template>
  <HeroBackgroundLayout header-offset>
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
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 24px;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 40px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.25s ease;
}

.btn-primary {
  background-color: #D4AF37;
  color: #0a0a0a;
  border: 2px solid #D4AF37;
}

.btn-primary:hover {
  background-color: #E5C158;
  border-color: #E5C158;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.85);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
