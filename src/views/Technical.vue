<template>
  <div class="technical-page">
    <!-- Hero -->
    <section class="tech-hero">
      <div class="tech-hero-container">
        <div class="tech-hero-copy">
          <p class="eyebrow">Technical Services</p>
          <h1 class="hero-title">
            <span class="hero-title-accent" aria-hidden="true"></span>
            Inspection expertise, data tools and
            <span class="hero-title-gold">custom software.</span>
          </h1>
          <p class="hero-lead">
            WASP provides technical support and software solutions that help operators plan
            inspections, interpret results and manage data with confidence. From one-off advice to
            bespoke client platforms, our services are built around the real-world challenges of
            inline inspection.
          </p>
          <div class="hero-actions">
            <router-link to="/contact" class="btn btn-primary btn-with-icon">
              Discuss a technical requirement
              <ArrowIcon class="btn-icon" />
            </router-link>
          </div>
        </div>
        <div class="tech-hero-art" aria-hidden="true">
          <img
            src="/technical/hero-laptop-dashboard.png"
            alt=""
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
          <img
            src="/technical/icons/advisory-support.png"
            alt=""
            class="tech-section-icon"
            aria-hidden="true"
          />
          <h2 class="section-heading section-heading--dark">
            Technical support for inspection decisions
          </h2>
          <span class="section-accent section-accent--dark" aria-hidden="true"></span>
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
          <img
            src="/technical/icons/inspection-data-review.png"
            alt=""
            class="tech-section-icon"
            aria-hidden="true"
          />
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
        <div class="tech-software-visual" aria-hidden="true">
          <img
            src="/technical/software-dashboard-monitor.png"
            alt=""
            class="tech-software-image"
            decoding="async"
          />
        </div>
        <div class="tech-feature-grid">
          <article
            v-for="feature in softwareFeatures"
            :key="feature.label"
            class="tech-feature"
          >
            <img :src="feature.icon" alt="" class="tech-feature-icon" aria-hidden="true" />
            <span class="card-title tech-feature-label">{{ feature.label }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="tech-process section section--dark">
      <div class="section-container tech-process-grid">
        <div class="tech-process-intro">
          <img
            src="/technical/icons/bespoke-software.png"
            alt=""
            class="tech-section-icon"
            aria-hidden="true"
          />
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
              <img :src="step.icon" alt="" class="tech-step-icon" aria-hidden="true" />
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
          <img
            src="/technical/icons/specific-problems.png"
            alt=""
            class="tech-section-icon"
            aria-hidden="true"
          />
          <h2 class="section-heading section-heading--dark">Built for specific inspection problems</h2>
          <span class="section-accent section-accent--dark" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            Some requirements need focused support rather than a standard product.
          </p>
          <p class="body-text body-text--dark">
            We work with clients to understand the challenge, define the data and build a solution
            that fits — whether that is a simple reporting tool, a data viewer, a comparison system or
            a complete platform for managing inspection outputs across assets or sites.
          </p>
        </div>
        <div class="tech-drawing-area" aria-hidden="true">
          <img
            src="/technical/fired-heater-ga-drawing.png"
            alt=""
            class="tech-drawing"
            decoding="async"
          />
          <div class="tech-callout tech-callout--top">
            <div class="tech-callout-line" aria-hidden="true"></div>
            <div class="tech-callout-content">
              <strong class="detect-title tech-callout-title">Custom reporting</strong>
              <span class="type-caption tech-callout-text">Built around your data and workflows.</span>
            </div>
          </div>
          <div class="tech-callout tech-callout--bottom">
            <div class="tech-callout-line" aria-hidden="true"></div>
            <div class="tech-callout-content">
              <strong class="detect-title tech-callout-title">Client-specific tools</strong>
              <span class="type-caption tech-callout-text">Designed to solve real inspection challenges.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="tech-cta">
      <img
        src="/technical/refinery-processing-unit.png"
        alt=""
        class="tech-cta-plant"
        aria-hidden="true"
      />
      <div class="tech-cta-container">
        <div class="tech-cta-content">
          <img src="/logo.png" alt="" class="tech-cta-logo" aria-hidden="true" />
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
  {
    label: 'Inspection data review tools',
    icon: '/technical/icons/inspection-data-review.png'
  },
  {
    label: 'Reporting interfaces & automated reports',
    icon: '/technical/icons/reporting-interfaces.png'
  },
  {
    label: 'Wall thickness & ID data visualisation',
    icon: '/technical/icons/wall-thickness-visualisation.png'
  },
  {
    label: 'Client-specific dashboards',
    icon: '/technical/icons/client-dashboards.png'
  },
  {
    label: 'Defect tables & anomaly tracking',
    icon: '/technical/icons/defect-tracking.png'
  },
  {
    label: 'Custom workflows for fired heater or pipeline inspection data',
    icon: '/technical/icons/custom-workflows.png'
  },
  {
    label: 'Comparison of repeat inspection results',
    icon: '/technical/icons/comparison-results.png'
  },
  {
    label: 'Bespoke software for unusual inspection requirements',
    icon: '/technical/icons/bespoke-software.png'
  }
]

const processSteps = [
  {
    title: 'Review',
    description:
      'Data is reviewed using specialist tools and engineering judgement. Coverage, confidence and anomalies are assessed.',
    icon: '/technical/icons/review.png'
  },
  {
    title: 'Interpret',
    description:
      'Findings are interpreted in the context of the asset, operating conditions and integrity requirements.',
    icon: '/technical/icons/interpret.png'
  },
  {
    title: 'Advise',
    description:
      'Clear reporting and practical recommendations support maintenance, repair or further assessment.',
    icon: '/technical/icons/advise.png'
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
  color: rgba(255, 255, 255, 0.88);
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.section-heading--dark {
  color: #0a0a0a;
}

.body-text--dark {
  color: rgba(10, 10, 10, 0.82);
}

.section-accent--dark {
  background-color: #0a0a0a;
}

/* Hero */
.tech-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 77% 22%, rgba(231, 199, 58, 0.12), transparent 21%),
    linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 42%, #080808 100%);
  border-bottom: 1px solid #222;
  padding-top: 132px;
}

.tech-hero .hero-title {
  color: #ffffff;
  max-width: 760px;
}

.tech-hero .hero-title-gold {
  display: block;
  color: #e7c73a;
}

.tech-hero .hero-lead {
  max-width: 690px;
  color: rgba(255, 255, 255, 0.84);
}

.tech-hero .hero-actions {
  margin-top: var(--gap-hero-to-actions);
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
  grid-template-columns: 44% 56%;
  align-items: center;
  gap: 24px;
  min-height: clamp(480px, 56vh, 620px);
}

.tech-hero-copy {
  position: relative;
  z-index: 5;
}

.tech-hero-art {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
}

.tech-hero-art::before {
  content: '';
  position: absolute;
  z-index: 3;
  pointer-events: none;
  left: -18%;
  top: -60px;
  bottom: -60px;
  width: 43%;
  background: linear-gradient(90deg, #0a0a0a 0%, rgba(10, 10, 10, 0.9) 52%, transparent 100%);
}

.tech-hero-image {
  position: relative;
  z-index: 1;
  width: min(920px, 120%);
  max-width: none;
  transform: translateX(24px) translateY(8px);
  filter: drop-shadow(0 44px 40px rgba(0, 0, 0, 0.58));
}

/* Support */
.tech-support {
  padding: 0;
}

.tech-support-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;
}

.tech-support-copy {
  max-width: 700px;
  width: 100%;
  justify-self: end;
  padding: 72px 48px 72px max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
}

.tech-section-icon {
  width: 46px;
  height: 46px;
  object-fit: contain;
  margin-bottom: 18px;
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
  min-height: 560px;
  background: radial-gradient(circle at 54% 35%, #303438, #090909 64%);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-left: 1px solid #ddd;
}

.tech-support-visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(242, 242, 238, 0.12), transparent 35%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.52), transparent 48%);
  pointer-events: none;
}

.tech-support-image {
  position: relative;
  z-index: 1;
  width: 111%;
  max-width: none;
  transform: translateX(-1%) translateY(2%);
  filter: drop-shadow(0 34px 38px rgba(0, 0, 0, 0.5));
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tech-software-visual::before {
  content: '';
  position: absolute;
  width: 94%;
  height: 72%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(231, 199, 58, 0.09), transparent 62%);
  filter: blur(20px);
}

.tech-software-image {
  position: relative;
  width: 114%;
  max-width: none;
  filter: drop-shadow(0 38px 42px rgba(0, 0, 0, 0.62));
}

.tech-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tech-feature {
  min-height: 94px;
  background: linear-gradient(180deg, #181818, #121212);
  border: 1px solid #333;
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 15px;
  align-items: center;
  padding: 17px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.tech-feature-icon {
  width: 39px;
  height: 39px;
  object-fit: contain;
  justify-self: center;
}

.tech-feature-label {
  color: #f4f4ee;
  margin-bottom: 0;
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
  align-items: start;
}

.tech-process-intro .body-text + .body-text {
  margin-top: 18px;
}

.tech-steps {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-top: 8px;
}

.tech-step {
  flex: 1;
  min-width: 0;
}

.tech-step-icon {
  width: 62px;
  height: 62px;
  object-fit: contain;
  margin-bottom: 20px;
}

.tech-step-title {
  color: #e7c73a;
  text-transform: uppercase;
  margin: 0 0 12px;
}

.tech-step-text {
  color: rgba(255, 255, 255, 0.84);
  margin: 0;
}

.tech-step-arrow {
  flex: 0 0 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 48px;
  color: #e7c73a;
}

/* Custom */
.tech-custom {
  padding-top: 72px;
  padding-bottom: 64px;
  background-color: #f8f8f5;
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
}

.tech-drawing {
  width: 88%;
  opacity: 0.88;
  filter: contrast(1.05);
}

.tech-callout {
  position: absolute;
  right: 1%;
  width: min(330px, 42%);
  display: grid;
  grid-template-columns: 76px 1fr;
  gap: 12px;
  align-items: start;
}

.tech-callout--top {
  top: 52px;
}

.tech-callout--bottom {
  bottom: 64px;
}

.tech-callout-line {
  position: relative;
  height: 3px;
  background: #e7c73a;
  margin-top: 17px;
}

.tech-callout-line::after {
  content: '';
  position: absolute;
  right: -6px;
  top: -3.5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e7c73a;
}

.tech-callout-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.tech-callout-title {
  display: block;
  margin-bottom: 0;
  color: #0a0a0a;
}

.tech-callout-text {
  display: block;
  color: #333;
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

.tech-cta::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e7c73a 0%,
    #e7c73a 34%,
    rgba(231, 199, 58, 0.94) 48%,
    rgba(231, 199, 58, 0.62) 64%,
    rgba(231, 199, 58, 0.18) 82%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
}

.tech-cta-plant {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: min(64%, 860px);
  height: 100%;
  object-fit: contain;
  object-position: right center;
  pointer-events: none;
  z-index: 1;
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

.tech-cta-logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
  margin-bottom: 14px;
  filter: brightness(0);
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
    width: min(860px, 100%);
    transform: none;
  }

  .tech-hero-art::before {
    display: none;
  }

  .tech-support-grid {
    grid-template-columns: 1fr;
  }

  .tech-support-copy {
    max-width: none;
    padding: 56px var(--site-gutter);
  }

  .tech-support-visual {
    min-height: 400px;
  }

  .tech-support-image {
    width: min(920px, 105%);
  }

  .tech-software-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tech-software-image {
    width: min(720px, 100%);
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
    min-height: auto;
    display: block;
  }

  .tech-drawing {
    width: 100%;
  }

  .tech-callout {
    position: static;
    width: auto;
    max-width: 430px;
    margin: 18px 0 0 auto;
  }

  .tech-cta-plant {
    width: min(92%, 640px);
    right: -8%;
    opacity: 0.92;
  }

  .tech-cta::after {
    background: linear-gradient(
      180deg,
      #e7c73a 0%,
      #e7c73a 42%,
      rgba(231, 199, 58, 0.88) 68%,
      rgba(231, 199, 58, 0.45) 100%
    );
  }
}

@media (max-width: 768px) {
  .tech-hero {
    padding-top: 96px;
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

  .tech-cta-plant {
    right: -18%;
    width: 115%;
    opacity: 0.55;
  }

  .tech-cta::after {
    background: linear-gradient(
      180deg,
      #e7c73a 0%,
      rgba(231, 199, 58, 0.92) 58%,
      rgba(231, 199, 58, 0.35) 100%
    );
  }
}
</style>
