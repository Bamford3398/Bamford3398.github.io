<template>
  <section class="hero">
    <div class="hero-layout">
      <div class="hero-image-wrap">
        <img
          src="/hero-background.png"
          alt=""
          class="hero-image"
          aria-hidden="true"
        />
      </div>
      <div class="hero-text">
        <h1 class="hero-title">Inspection with Integrity</h1>
        <p class="hero-subtitle">
          Advanced intelligent pigging and integrity assessment for fired heaters,
          transfer lines, pipelines and process piping.
        </p>
        <div class="hero-actions">
          <a href="#services" class="hero-button">See our services</a>
          <router-link to="/contact" class="hero-button hero-button-secondary">
            Contact us
          </router-link>
        </div>
        <div class="what-we-do">
          <h2 class="section-title">What we do</h2>
          <p>
            WASP delivers advanced intelligent pigging and integrity assessment for fired heaters,
            transfer lines, pipelines and process piping.
          </p>
          <p>
            Behind WASP is a team with decades of senior experience across the global ILI industry —
            engineers and operators who've developed inspection technology, run thousands of operations,
            and led some of the biggest names in the sector.
          </p>
          <p class="what-we-do-closing">
            That experience is the foundation WASP is built on.
          </p>
        </div>
        <div id="services" class="services">
          <h2 class="section-title">Services</h2>
          <article
            v-for="service in services"
            :key="service.id"
            class="service-item"
          >
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <component
              :is="service.to ? 'router-link' : 'a'"
              :to="service.to"
              :href="service.href"
              class="service-link"
            >
              Learn more →
            </component>
          </article>
        </div>
        <div class="by-the-numbers content-section">
          <h2 class="section-title">By the numbers</h2>
          <p class="section-body stats-line">
            75+ years combined experience · 300+ site operations · 40+ countries –
            <span class="stats-highlight">ZERO failures</span>
          </p>
        </div>
        <div class="standards content-section">
          <h2 class="section-title">Standards we work to</h2>
          <p class="section-body">
            API RP 573 · API 579 / ASME FFS-1 · API 1163 · POF 100 | 300 | 500 · ISO 9001
          </p>
        </div>
        <div class="closing-cta content-section">
          <p class="closing-text">
            Need certainty on your asset's condition?
            <router-link to="/contact" class="service-link">Get in touch</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 'intelligent-pigging',
    title: 'Intelligent Pigging',
    description:
      'High-resolution ILI for fired heaters, HRSG boilers, transfer lines, process piping and pipelines. 30,000+ measurements per linear foot. Interactive 3D digital reports.',
    to: '/smart-pigging'
  },
  {
    id: 'fitness-for-service',
    title: 'Fitness for Service',
    description:
      'Level 1, 2 and 3 FFS assessments to API 579 / ASME FFS-1, carried out by integrity and metallurgy specialists.',
    to: '/integrity'
  },
  {
    id: 'other-services',
    title: 'Other Services',
    description:
      'Camera pigging, mechanical cleaning and decoking, pig tracking, pigging software, and intelligent pigging consultancy.',
    to: '/other-services'
  }
]
</script>


<style scoped>
.hero {
  --text-gutter: max(32px, calc((100vw - 1400px) / 2 + 32px));
  --text-width: min(700px, calc(100vw - 2 * var(--text-gutter)));
  /* Pull image left so it sits behind the title around the hyphen */
  --image-overlap: min(288px, calc(var(--text-width) * 0.42));
  --image-start: calc(var(--text-gutter) + var(--text-width) - var(--image-overlap));

  position: relative;
  margin-top: 124px;
  background-color: #0a0a0a;
  overflow: hidden;
}

.hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
}

/* Full-height fade — image dissolves as it passes behind the text */
.hero-layout::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(var(--text-gutter) + var(--text-width) + var(--image-overlap) * 0.6);
  background: linear-gradient(
    to right,
    #0a0a0a 0%,
    #0a0a0a 28%,
    rgba(10, 10, 10, 0.92) 42%,
    rgba(10, 10, 10, 0.7) 58%,
    rgba(10, 10, 10, 0.35) 75%,
    rgba(10, 10, 10, 0.08) 90%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-image-wrap {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  justify-self: end;
  width: calc(100vw - var(--image-start));
  line-height: 0;
  position: relative;
  z-index: 1;
}

.hero-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, transparent 55%, rgba(10, 10, 10, 0.6) 80%, #0a0a0a 100%),
    linear-gradient(to right, transparent 0%, rgba(10, 10, 10, 0.15) 8%, transparent 20%);
  pointer-events: none;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: right top;
  pointer-events: none;
  -webkit-mask-image:
    linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  mask-composite: intersect;
}

.hero-text {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  position: relative;
  z-index: 3;
  width: var(--text-width);
  margin-left: var(--text-gutter);
  padding: 48px 0 64px;
}

.hero-text::before {
  content: '';
  position: absolute;
  top: -24px;
  bottom: -24px;
  left: -24px;
  right: calc(-1 * var(--image-overlap) * 0.5);
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.85) 0%,
    rgba(10, 10, 10, 0.55) 45%,
    rgba(10, 10, 10, 0.2) 72%,
    transparent 100%
  );
  z-index: -1;
  pointer-events: none;
}

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
  margin-bottom: 0;
}

.what-we-do {
  position: relative;
  z-index: 3;
  margin-top: 40px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #D4AF37;
  line-height: 1.2;
  margin-bottom: 24px;
}

.what-we-do p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  margin-bottom: 20px;
}

.what-we-do p:last-child {
  margin-bottom: 0;
}

.what-we-do-closing {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
}

.services {
  position: relative;
  z-index: 3;
  margin-top: 40px;
  scroll-margin-top: 110px;
}

.content-section {
  position: relative;
  z-index: 3;
  margin-top: 40px;
}

.closing-cta {
  padding-bottom: 48px;
}

.service-item {
  margin-bottom: 32px;
}

.service-item:last-child {
  margin-bottom: 0;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 12px;
}

.service-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  margin-bottom: 12px;
}

.service-link {
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  color: #D4AF37;
  text-decoration: none;
  transition: color 0.2s ease;
}

.service-link:hover {
  color: #E5C158;
}

.section-body {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  margin: 0;
}

.stats-line {
  font-weight: 500;
}

.stats-highlight {
  font-weight: 700;
  color: #ffffff;
}

.closing-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0;
}

.closing-text .service-link {
  margin-left: 8px;
}

.hero-button {
  display: inline-block;
  background-color: #D4AF37;
  color: #0a0a0a;
  border: 2px solid #D4AF37;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.hero-button:hover {
  background-color: #E5C158;
  border-color: #E5C158;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}

.hero-button:active {
  transform: translateY(0);
}

.hero-button-secondary {
  background-color: transparent;
  color: #D4AF37;
  box-shadow: none;
}

.hero-button-secondary:hover {
  background-color: rgba(212, 175, 55, 0.12);
  color: #E5C158;
  border-color: #E5C158;
  box-shadow: none;
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .what-we-do p,
  .service-description,
  .section-body {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero {
    --text-gutter: 16px;
    --text-width: min(700px, 58vw);
    --image-overlap: min(128px, calc(var(--text-width) * 0.3));
    margin-top: 88px;
  }

  .hero-image {
    -webkit-mask-image:
      linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 12%, #000 30%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 12%, #000 30%);
    mask-composite: intersect;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }

  .hero-button {
    padding: 14px 32px;
    font-size: 1rem;
  }

  .what-we-do {
    margin-top: 40px;
  }

  .services {
    margin-top: 40px;
  }

  .closing-cta {
    padding-bottom: 32px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .what-we-do p,
  .service-description,
  .section-body {
    font-size: 0.95rem;
  }

  .closing-text {
    font-size: 1.1rem;
  }

  .service-title {
    font-size: 1.1rem;
  }
}
</style>
