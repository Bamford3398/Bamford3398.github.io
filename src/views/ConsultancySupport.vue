<template>
  <div class="consultancy-support-page">
    <HeroBackgroundLayout
      header-offset
      section-class="hero-section"
      image-src="/consultancy-support/hero.png"
    >
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        CONSULTANCY
        <span class="hero-title-gold">&amp; SUPPORT</span>
      </h1>

      <p class="hero-lead">
        Everything around the inspection: independent expertise, inspection software, and pigging
        equipment — from a team that builds and runs its own tools.
      </p>
      <p class="hero-body">
        From inspection planning and feasibility reviews to managed cleaning programmes, Flowsense
        run monitoring and WASP-built pig signallers — practical support delivered by engineers who
        understand both the technology and the field.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS A REQUIREMENT</router-link>
      </div>
    </HeroBackgroundLayout>

    <section class="section section--panel consultancy-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--light">Consultancy</h2>
        <span class="section-accent" aria-hidden="true"></span>

        <div class="consultancy-grid">
          <div class="consultancy-copy">
            <p class="eyebrow consultancy-eyebrow">Independent technical input</p>
            <ul class="consultancy-list">
              <li v-for="item in consultancyItems" :key="item">{{ item }}</li>
            </ul>
          </div>

          <article class="managed-card">
            <img
              src="/consultancy-support/decoking-pig.png"
              alt="Studded decoking pig inside a fouled pipe"
              class="managed-image"
              decoding="async"
            />
            <div class="managed-body">
              <h3 class="card-title">Managed cleaning &amp; decoking programmes</h3>
              <p class="card-text">
                WASP plans, manages and verifies cleaning and decoking programmes delivered through
                established industrial partners — one accountable party from planning through
                verified-clean.
              </p>
            </div>
          </article>
        </div>

        <div class="process-flow">
          <article v-for="(step, index) in processSteps" :key="step.title" class="process-step">
            <div class="process-number">{{ index + 1 }}</div>
            <h3 class="process-label">{{ step.title }}</h3>
            <p class="process-desc">{{ step.description }}</p>
            <span
              v-if="index < processSteps.length - 1"
              class="process-arrow"
              aria-hidden="true"
            >→</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark software-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--light">Software</h2>
        <span class="section-accent" aria-hidden="true"></span>

        <div class="two-col-grid">
          <article class="service-card">
            <h3 class="card-title">Flowsense — decoking run monitoring</h3>
            <p class="product-name">WASP-built pressure &amp; flow tracking</p>
            <p class="card-text">
              Flowsense tracks pressure and flow through decoking runs — live visibility of pig
              behaviour and run progress.
            </p>
            <p class="proof-line">Already in commercial use by other pigging companies.</p>
          </article>

          <article class="service-card">
            <h3 class="card-title">Bespoke inspection software</h3>
            <p class="card-text">
              Review tools, client dashboards and platforms built around your workflow, reporting
              requirements and asset structure — where off-the-shelf does not fit.
            </p>
            <p class="card-text">
              Our own inspection data engine,
              <router-link to="/ultrasight#deeppulse" class="inline-link">DeepPulse</router-link>,
              powers UltraSight reporting.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--panel equipment-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--light">Equipment</h2>
        <span class="section-accent" aria-hidden="true"></span>

        <div class="two-col-grid">
          <article class="service-card">
            <h3 class="card-title">Pig signallers &amp; trackers</h3>
            <p class="card-text">
              Designed and manufactured by WASP. Available to buy, and deployable by WASP on managed
              jobs — confirm pig location and movement throughout the line.
            </p>
            <div class="photo-slot">Photo of WASP signaller unit to follow</div>
          </article>

          <article class="service-card">
            <h3 class="card-title">Utility pig procurement</h3>
            <p class="card-text">
              Cleaning, sealing and gauging pigs specified and supplied to suit the line — pairing
              naturally with WASP-managed cleaning programmes.
            </p>
            <div class="pig-types">
              <div v-for="type in pigTypes" :key="type" class="pig-type">{{ type }}</div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="consultancy-cta">
      <div class="consultancy-cta-layout">
        <div class="consultancy-cta-content">
          <h2 class="consultancy-cta-title">Need support around an inspection?</h2>
          <p class="consultancy-cta-text">
            Planning, cleaning management, software or equipment — tell us the requirement and we'll
            recommend the practical approach.
          </p>
          <router-link to="/contact" class="consultancy-cta-button">Discuss a requirement</router-link>
        </div>
        <div class="consultancy-cta-image-panel" aria-hidden="true">
          <img src="/home-cta-refinery.png" alt="" class="consultancy-cta-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'

const consultancyItems = [
  'Inspection planning and feasibility',
  'Piggability and access reviews',
  'Fired heater and pipeline inspection strategy',
  'Inspection method selection',
  'Review of previous inspection data',
  'Interpretation of inspection results',
  'Report review and technical clarification',
  'Data quality and coverage review'
]

const processSteps = [
  {
    title: 'Review',
    description: 'Understand the asset, history and inspection objectives.'
  },
  {
    title: 'Prepare',
    description: 'Clean, decoke and prepare the line for inspection readiness.'
  },
  {
    title: 'Verify',
    description: 'Visually confirm conditions and cleaning effectiveness.'
  },
  {
    title: 'Inspect',
    description: 'Run the inspection with confidence and clarity.'
  }
]

const pigTypes = ['Cleaning', 'Sealing', 'Gauging']
</script>

<style scoped>
.consultancy-support-page {
  background-color: #0a0a0a;
}

.consultancy-support-page > :deep(.hero-background) {
  --text-width: min(680px, calc(100vw - 2 * var(--text-gutter)));
  --image-overlap: min(280px, calc(var(--text-width) * 0.41));
}

.consultancy-support-page > :deep(.hero-background .hero-layout > .hero-copy) {
  padding: 24px 0 56px;
}

.consultancy-support-page > :deep(.hero-background .hero-layout) {
  min-height: clamp(420px, 56vh, 620px);
}

.consultancy-support-page > :deep(.hero-background .hero-image-wrap) {
  align-self: stretch;
  width: calc(100vw - var(--image-start) - 200px);
  margin-top: 0;
  min-height: clamp(380px, 56vh, 580px);
}

.consultancy-support-page > :deep(.hero-background .hero-image) {
  width: 100%;
  height: 100%;
  min-height: clamp(380px, 56vh, 580px);
  max-width: none;
  max-height: none;
  object-fit: cover;
  object-position: right top;
  -webkit-mask-image:
    linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  mask-composite: intersect;
}

.consultancy-support-page > :deep(.hero-background .hero-image-wrap::after) {
  background:
    linear-gradient(to bottom, transparent 72%, rgba(10, 10, 10, 0.45) 90%, #0a0a0a 100%),
    linear-gradient(to right, transparent 0%, rgba(10, 10, 10, 0.15) 8%, transparent 20%);
}

.consultancy-support-page .eyebrow {
  margin-bottom: var(--gap-heading-to-accent);
}

.hero-title {
  color: #ffffff;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.hero-title-gold {
  display: block;
  color: #e7c73a;
  margin-top: 8px;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.hero-lead {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-body {
  color: rgba(255, 255, 255, 0.82);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .consultancy-support-page > :deep(.hero-background .hero-layout) {
    min-height: auto;
  }

  .consultancy-support-page > :deep(.hero-background .hero-layout > .hero-copy) {
    padding: 20px var(--site-gutter) 28px;
  }

  .consultancy-support-page > :deep(.hero-background .hero-image-wrap) {
    margin-top: 0;
    width: 100%;
    min-height: 0;
  }

  .consultancy-support-page > :deep(.hero-background .hero-image) {
    width: 100%;
    height: auto;
    min-height: 0;
    max-height: min(52vh, 420px);
    object-fit: cover;
    object-position: top center;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
  }
}

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.section--panel {
  background-color: #131310;
  color: #ffffff;
}

.section-heading--light {
  color: #ffffff;
}

.consultancy-eyebrow {
  margin-top: 26px;
  margin-bottom: 20px;
}

.consultancy-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 48px;
  margin-top: 8px;
  align-items: stretch;
}

.consultancy-list {
  margin: 0;
  padding: 0;
  list-style: none;
  columns: 2;
  column-gap: 44px;
}

.consultancy-list li {
  position: relative;
  break-inside: avoid;
  padding: 8px 0 8px 20px;
  color: rgba(255, 255, 255, 0.78);
  font-size: var(--text-lead);
  line-height: var(--leading-body);
}

.consultancy-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 16px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #e7c73a;
}

.managed-card {
  --managed-inset: 28px;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--managed-inset);
  align-items: center;
  align-self: stretch;
  height: 100%;
  padding: var(--managed-inset);
  background-color: #0f0f0d;
  border: 1.5px solid #2e2e28;
  border-radius: 10px;
}

.managed-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
  mask-composite: intersect;
}

.card-title {
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.card-text {
  color: rgba(255, 255, 255, 0.78);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  margin: 0 0 14px;
}

.card-text:last-child {
  margin-bottom: 0;
}

.product-name {
  color: rgba(255, 255, 255, 0.45);
  font-size: var(--text-caption);
  font-style: italic;
  margin: 0 0 14px;
}

.proof-line {
  margin: 18px 0 0;
  color: #e7c73a;
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-bold);
}

.inline-link {
  color: #e7c73a;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.inline-link:hover {
  color: #ffffff;
}

.process-flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 56px;
  text-align: center;
}

.process-step {
  position: relative;
  padding: 0 8px;
}

.process-number {
  width: 60px;
  height: 60px;
  margin: 0 auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e7c73a;
  border-radius: 50%;
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-lead);
  font-weight: var(--font-weight-bold);
}

.process-label {
  font-family: var(--font-heading);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 6px;
}

.process-desc {
  color: rgba(255, 255, 255, 0.45);
  font-size: var(--text-caption);
  line-height: var(--leading-body);
  margin: 0;
}

.process-arrow {
  position: absolute;
  right: -14px;
  top: 18px;
  color: #e7c73a;
  font-size: 24px;
  line-height: 1;
}

.two-col-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 8px;
}

.service-card {
  padding: 28px;
  background-color: #0f0f0d;
  border: 1.5px solid #2e2e28;
  border-radius: 10px;
}

.software-section .service-card {
  background-color: #0f0f0d;
}

.photo-slot {
  margin-top: 20px;
  padding: 22px;
  border: 2px dashed #e7c73a;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.45);
  font-size: var(--text-caption);
  text-align: center;
}

.pig-types {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.pig-type {
  padding: 18px 10px;
  border: 1.5px solid #2e2e28;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  font-family: var(--font-heading);
  font-size: var(--text-tiny);
  font-weight: var(--font-weight-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
}

.consultancy-cta {
  background-color: #e7c73a;
  overflow: hidden;
}

.consultancy-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.consultancy-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 60px max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.consultancy-cta-title {
  font-family: var(--font-heading);
  font-size: var(--text-section-title);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-title);
  color: #0a0a0a;
  margin-bottom: 16px;
}

.consultancy-cta-text {
  color: rgba(10, 10, 10, 0.85);
  font-size: var(--text-lead);
  line-height: var(--leading-body);
  margin-bottom: 26px;
  max-width: 48ch;
}

.consultancy-cta-button {
  display: inline-block;
  align-self: flex-start;
  padding: 16px 32px;
  background-color: #0a0a0a;
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-button);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-button);
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.consultancy-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
  outline: 2px solid #0a0a0a;
}

.consultancy-cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background-color: #e7c73a;
}

.consultancy-cta-image-panel::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: min(120px, 18%);
  background: linear-gradient(to right, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

.consultancy-cta-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

@media (max-width: 1024px) {
  .consultancy-grid,
  .two-col-grid,
  .consultancy-cta-layout {
    grid-template-columns: 1fr;
  }

  .consultancy-cta-layout {
    min-height: 0;
  }

  .consultancy-list {
    columns: 1;
  }

  .managed-card {
    grid-template-columns: 1fr;
    height: auto;
    align-items: start;
  }

  .process-flow {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 34px;
  }

  .process-arrow {
    display: none;
  }

  .consultancy-cta-image-panel {
    min-height: 280px;
  }

  .consultancy-cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  }
}

@media (max-width: 768px) {
  .process-flow,
  .pig-types {
    grid-template-columns: 1fr;
  }

  .consultancy-cta-content {
    max-width: none;
    padding: 48px var(--site-gutter) 32px;
  }

  .consultancy-cta-button {
    align-self: stretch;
    width: 100%;
    text-align: center;
  }

  .consultancy-cta-image-panel {
    min-height: 220px;
  }
}
</style>
