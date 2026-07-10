<template>
  <div class="technical-page">
    <!-- Hero -->
    <section class="tech-hero">
      <div class="tech-hero-container">
        <div class="tech-hero-copy">
          <span class="hero-title-accent" aria-hidden="true"></span>
          <h1 class="hero-title">
            TECHNICAL
            <span class="hero-title-gold">SERVICES</span>
          </h1>
          <p class="hero-lead">
            Inspection expertise, data tools and custom software.
          </p>
          <p class="hero-text">
            WASP provides technical support and software solutions that help operators plan
            inspections, interpret results and manage data with confidence. From one-off advice to
            bespoke client platforms, our services are built around the real-world challenges of
            inline inspection.
          </p>
          <div class="hero-actions">
            <router-link to="/contact" class="btn btn-primary btn-with-icon">
              DISCUSS A TECHNICAL REQUIREMENT
              <ArrowIcon class="btn-icon" />
            </router-link>
          </div>
        </div>
        <div class="tech-hero-art">
          <img
            src="/technical/hero-laptop-dashboard.png"
            alt="WASP inline inspection software dashboard on laptop"
            class="tech-hero-image"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- Advisory support -->
    <section class="tech-support section section--light">
      <div class="tech-support-grid">
        <div class="tech-support-copy">
          <h2 class="section-heading section-heading--dark">
            Technical support for inspection decisions
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            Not every inspection requirement is straightforward. Geometry, access, operating
            conditions and previous inspection history can all affect what is possible — and what the
            data really means.
          </p>
          <p class="body-text body-text--dark tech-support-intro">
            WASP can provide independent technical input across:
          </p>
          <ul class="bullet-list tech-bullet-grid">
            <li v-for="item in supportBullets" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="tech-support-visual">
          <img
            src="/technical/engineer-reviewing-data.png"
            alt="Engineer reviewing inspection data and pipe route drawings"
            class="tech-support-image"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- Software -->
    <section class="tech-software section section--dark">
      <div class="section-container tech-software-grid">
        <div class="tech-software-intro">
          <h2 class="section-heading">Software built around inspection data</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            WASP develops and supports software for the way inspection data is collected, reviewed
            and used.
          </p>
          <p class="body-text">
            From internal review tools to full client platforms, we build practical solutions that
            turn complex inspection outputs into clear, usable information.
          </p>
          <p class="body-text">
            Where off-the-shelf systems do not fit, we develop bespoke software around your workflow,
            reporting requirements and asset structure.
          </p>
        </div>
        <div class="tech-software-visual">
          <img
            src="/technical/software-dashboard-monitor.png"
            alt="WASP inspection software dashboard showing fired heater coil corrosion map and anomaly data"
            class="tech-software-image"
            decoding="async"
          />
        </div>
        <div class="tech-feature-grid">
          <article
            v-for="feature in softwareFeatures"
            :key="feature"
            class="tech-feature"
          >
            <span class="tech-feature-label">{{ feature }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="tech-process section section--dark">
      <div class="section-container tech-process-grid">
        <div class="tech-process-intro">
          <h2 class="section-heading">From inspection data to usable information</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Inspection data only has value if it can be understood, reviewed and acted on.
          </p>
          <p class="body-text">
            We bridge the gap between raw inspection outputs and engineering decisions, helping your
            teams assess integrity, define repair scope and plan with confidence.
          </p>
        </div>
        <div class="tech-steps">
          <template v-for="(step, index) in processSteps" :key="step.title">
            <article class="tech-step">
              <h3 class="process-title tech-step-title">{{ step.title }}</h3>
              <p class="process-description tech-step-text">{{ step.description }}</p>
            </article>
            <div
              v-if="index < processSteps.length - 1"
              class="tech-step-arrow"
              aria-hidden="true"
            >
              <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 8h24M18 2l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Custom solutions -->
    <section class="tech-custom section section--light">
      <div class="section-container tech-custom-grid">
        <div class="tech-custom-copy">
          <h2 class="section-heading section-heading--dark">Built for specific inspection problems</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            Some requirements need focused support rather than a standard product.
          </p>
          <p class="body-text body-text--dark">
            We work with clients to understand the challenge, define the data and build a solution
            that fits — whether that is a simple reporting tool, a data viewer, a comparison system or
            a complete platform for managing inspection outputs across assets or sites.
          </p>
        </div>
        <div class="tech-drawing-area">
          <img
            src="/technical/fired-heater-ga-drawing.png"
            alt="Wireframe engineering model of a fired heater inspection asset"
            class="tech-drawing-image"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="tech-cta">
      <div class="tech-cta-visual" aria-hidden="true">
        <img
          src="/technical/cta-refinery-plant.png"
          alt=""
          class="tech-cta-image"
          decoding="async"
        />
      </div>
      <div class="tech-cta-container">
        <div class="tech-cta-content">
          <h2 class="home-cta-title">Need technical support or inspection software?</h2>
          <p class="home-cta-text tech-cta-text">
            Whether you need help planning an inspection, reviewing data, improving reporting, or
            developing a custom software tool, WASP can provide focused technical support.
          </p>
          <router-link to="/contact" class="home-cta-button btn-with-icon">
            Speak to our technical team
            <ArrowIcon class="btn-icon" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h } from 'vue'

const ArrowIcon = {
  render() {
    return h(
      'svg',
      {
        class: 'btn-icon-svg',
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        'aria-hidden': 'true'
      },
      [
        h('path', {
          d: 'M5 12h14M13 6l6 6-6 6',
          stroke: 'currentColor',
          'stroke-width': '2.2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        })
      ]
    )
  }
}

const supportBullets = [
  'Inspection planning and feasibility',
  'Interpretation of inspection results',
  'Piggability and access reviews',
  'Report review and technical clarification',
  'Fired heater and pipeline inspection strategy',
  'Data quality and coverage review',
  'Inspection method selection',
  'Follow-up recommendations after inspection',
  'Review of previous inspection data'
]

const softwareFeatures = [
  'Inspection data review tools',
  'Reporting interfaces & automated reports',
  'Wall thickness & ID data visualisation',
  'Client-specific dashboards',
  'Defect tables & anomaly tracking',
  'Custom workflows for fired heater or pipeline inspection data',
  'Comparison of repeat inspection results',
  'Bespoke software for unusual inspection requirements'
]

const processSteps = [
  {
    title: 'Review',
    description:
      'Data is reviewed using specialist tools and engineering judgement. Coverage, confidence and anomalies are assessed.'
  },
  {
    title: 'Interpret',
    description:
      'Findings are interpreted in the context of the asset, operating conditions and integrity requirements.'
  },
  {
    title: 'Advise',
    description:
      'Clear reporting and practical recommendations support maintenance, repair or further assessment.'
  }
]
</script>

<style scoped>
.technical-page {
  min-height: 100vh;
  background-color: #0a0a0a;
}

.technical-page .eyebrow {
  color: #e7c73a;
  margin-bottom: var(--gap-heading-to-accent);
}

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.section--dark .body-text {
  color: var(--color-text-body);
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.section-heading--dark {
  color: #0a0a0a;
}

.body-text--dark {
  color: var(--color-text-body-on-light);
}

/* Hero */
.tech-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 77% 22%, rgba(231, 199, 58, 0.12), transparent 21%),
    linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 42%, #080808 100%);
  border-bottom: 1px solid #222;
  padding-top: var(--site-header-height);
}

.tech-hero .hero-title {
  color: #ffffff;
  max-width: 760px;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.tech-hero .hero-title-gold {
  display: block;
  color: #e7c73a;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.tech-hero .hero-lead {
  max-width: 690px;
  color: var(--color-text-lead);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.tech-hero .hero-text {
  max-width: 690px;
  color: var(--color-text-secondary);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.tech-hero .hero-actions {
  margin-top: 0;
}

.tech-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: 0.34;
  mask-image: linear-gradient(90deg, transparent, #000 18%, #000 86%, transparent);
  pointer-events: none;
}

.tech-hero-container {
  position: relative;
  z-index: 2;
  max-width: var(--site-max-width);
  margin: 0 auto;
  padding: 48px var(--site-gutter) 56px;
  display: grid;
  grid-template-columns: minmax(300px, 0.94fr) minmax(0, 1.06fr);
  align-items: center;
  gap: 8px;
  min-height: clamp(480px, 56vh, 620px);
}

.tech-hero-copy {
  position: relative;
  z-index: 5;
  max-width: none;
}

.tech-hero-art {
  position: relative;
  min-height: 400px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: visible;
}

.tech-hero-image {
  width: 112%;
  max-width: none;
  height: auto;
  max-height: min(540px, 54vh);
  object-fit: contain;
  object-position: left center;
  display: block;
  margin-left: -6%;
  filter: drop-shadow(0 28px 48px rgba(0, 0, 0, 0.55));
}

.tech-image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(255, 255, 255, 0.22);
}

.tech-image-placeholder-text {
  font-family: var(--font-body);
  font-size: var(--text-tiny);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-pane);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
}

.tech-image-placeholder--light {
  border-color: rgba(10, 10, 10, 0.18);
  background-color: #f5f5f5;
}

.tech-image-placeholder--light .tech-image-placeholder-text {
  color: rgba(10, 10, 10, 0.38);
}

.tech-image-placeholder--cta {
  border-color: rgba(10, 10, 10, 0.22);
  background-color: rgba(10, 10, 10, 0.06);
}

.tech-image-placeholder--cta .tech-image-placeholder-text {
  color: rgba(10, 10, 10, 0.42);
}

/* Support */
.tech-support {
  padding: 0;
}

.tech-support-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
}

.tech-support-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  justify-self: start;
  padding: 80px 48px 80px
    max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
}

.tech-support-intro {
  margin-top: 18px;
}

.bullet-list {
  margin: 26px 0 0;
  padding: 0;
  list-style: none;
}

.tech-bullet-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 40px;
}

.tech-bullet-grid li {
  position: relative;
  padding-left: 22px;
  margin-bottom: 0;
  color: #202020;
}

.tech-bullet-grid li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e7c73a;
}

.tech-support-visual {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
}

.tech-support-visual::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(90deg, rgba(242, 242, 242, 0.28), transparent 22%);
  pointer-events: none;
}

.tech-support-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  filter: drop-shadow(0 34px 38px rgba(0, 0, 0, 0.35));
}

/* Software */
.tech-software {
  padding-top: 72px;
  padding-bottom: 72px;
  border-top: 1px solid #232323;
  border-bottom: 1px solid #232323;
}

.tech-software-grid {
  display: grid;
  grid-template-columns: 0.82fr 1.03fr 1.14fr;
  gap: 48px;
  align-items: center;
}

.tech-software-intro .body-text + .body-text {
  margin-top: 16px;
}

.tech-software-visual {
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-software-image {
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: contain;
  object-position: center;
  display: block;
  filter: drop-shadow(0 24px 32px rgba(0, 0, 0, 0.45));
}

.tech-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tech-feature {
  min-height: 72px;
  background: linear-gradient(180deg, #181818, #121212);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 14px 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.tech-feature-label {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--text-body);
  line-height: 1.35;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-text);
  margin: 0;
}

/* Process */
.tech-process {
  position: relative;
  padding-top: 72px;
  padding-bottom: 72px;
  overflow: hidden;
  border-bottom: 1px solid #202020;
}

.tech-process::before {
  content: '';
  position: absolute;
  left: -20%;
  top: -8%;
  bottom: -8%;
  width: 58%;
  background: url('/technical/refinery-processing-unit.png') center / contain no-repeat;
  opacity: 0.17;
  filter: contrast(1.08) grayscale(0.08);
  pointer-events: none;
}

.tech-process::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(10, 10, 10, 0.15), #0a0a0a 46%, #0a0a0a);
  pointer-events: none;
}

.tech-process-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 0.86fr 1.45fr;
  gap: 64px;
  align-items: center;
}

.tech-process-intro .body-text + .body-text {
  margin-top: 18px;
}

.tech-steps {
  display: flex;
  align-items: stretch;
  gap: 20px;
  align-self: center;
}

.tech-step {
  flex: 1;
  min-width: 0;
}

.tech-step-title {
  color: #e7c73a;
  text-transform: uppercase;
  margin: 0 0 12px;
}

.tech-step-text {
  color: var(--color-text-body);
  margin: 0;
}

.tech-step-arrow {
  flex: 0 0 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: #e7c73a;
}

/* Custom */
.tech-custom {
  padding-top: 72px;
  padding-bottom: 64px;
  background-color: #ffffff;
}

.tech-custom-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 64px;
  align-items: center;
}

.tech-custom-copy .body-text + .body-text {
  margin-top: 18px;
}

.tech-drawing-area {
  position: relative;
  min-height: 388px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  overflow: hidden;
}

.tech-drawing-image {
  width: 500px;
  height: 100%;
  min-height: 388px;
  object-fit: contain;
  object-position: center;
  display: block;
}

/* CTA */
.tech-cta {
  position: relative;
  min-height: 330px;
  background-color: #e7c73a;
  color: #0a0a0a;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.tech-cta-visual {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: min(64%, 860px);
  z-index: 1;
  overflow: hidden;
  background-color: #e7c73a;
}

.tech-cta-image {
  position: absolute;
  right: -4%;
  bottom: 0;
  width: 112%;
  max-width: none;
  height: auto;
  min-height: 100%;
  object-fit: contain;
  object-position: right bottom;
  display: block;
  pointer-events: none;
}

.tech-cta-container {
  position: relative;
  z-index: 3;
  max-width: var(--site-max-width);
  margin: 0 auto;
  padding: 48px var(--site-gutter);
  width: 100%;
}

.tech-cta-content {
  max-width: 640px;
}

.tech-cta .home-cta-title {
  color: #0a0a0a;
}

.tech-cta-text {
  color: #191919;
  margin: 18px 0 28px;
}

.btn-primary.btn-with-icon {
  color: #0a0a0a;
}

.btn-primary.btn-with-icon .btn-icon-svg {
  filter: brightness(0);
}

@media (max-width: 1180px) {
  .tech-hero-container {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-bottom: 40px;
  }

  .tech-hero-art {
    min-height: 320px;
    justify-content: center;
  }

  .tech-hero-image {
    width: 100%;
    margin-left: 0;
    object-position: center center;
  }

  .tech-support-grid {
    grid-template-columns: 1fr;
  }

  .tech-support-copy {
    max-width: none;
    padding: 56px var(--site-gutter);
  }

  .tech-support-visual {
    min-height: 360px;
  }

  .tech-support-image {
    object-position: center 30%;
  }

  .tech-software-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tech-process::before {
    left: -38%;
    width: 100%;
    opacity: 0.11;
  }

  .tech-process-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tech-steps {
    flex-direction: column;
    gap: 32px;
  }

  .tech-step-arrow {
    display: none;
  }

  .tech-custom-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tech-drawing-area {
    min-height: 280px;
  }

  .tech-cta-visual {
    width: min(92%, 640px);
    right: -8%;
  }
}

@media (max-width: 768px) {
  .tech-hero {
    padding-top: var(--site-header-height-mobile);
  }

  .tech-hero-container {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .tech-hero-art {
    min-height: 240px;
  }

  .tech-support-copy {
    padding: 48px var(--site-gutter);
  }

  .tech-bullet-grid,
  .tech-feature-grid {
    grid-template-columns: 1fr;
  }

  .tech-software,
  .tech-process,
  .tech-custom {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .tech-cta-container {
    padding: 40px var(--site-gutter);
  }

  .tech-cta-visual {
    position: absolute;
    right: -12%;
    bottom: 0;
    top: auto;
    width: 85%;
    height: 50%;
    min-height: 160px;
    margin-top: 0;
  }
}
</style>
