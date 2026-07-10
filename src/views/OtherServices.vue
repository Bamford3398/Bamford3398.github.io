<template>
  <div class="other-services-page">
    <HeroBackgroundLayout
      header-offset
      section-class="hero-section"
      image-src="/other-services/hero.png"
    >
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        OTHER
        <span class="hero-title-gold">SERVICES</span>
      </h1>
      <p class="hero-lead hero-lead--tagline">
        Practical support for cleaning, visual investigation and inspection readiness. WASP manages
        the practical work required to make inspection possible, using pigging expertise, trusted
        industrial partners and visual verification tools.
      </p>
      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary btn-with-icon">
          Discuss a service requirement
          <ArrowIcon class="btn-icon" />
        </router-link>
        <a href="#" class="btn btn-secondary btn-with-icon">
          Download camera pig specification
          <img src="/other-services/icons/download.png" alt="" class="btn-icon" aria-hidden="true" />
        </a>
      </div>
    </HeroBackgroundLayout>

    <section class="service-tabs-section section section--dark">
      <div class="section-container">
        <div class="service-tabs" role="tablist" aria-label="Other services">
          <button
            id="tab-mechanical"
            type="button"
            role="tab"
            class="service-tab"
            :class="{ 'service-tab--active': activeTab === 'mechanical' }"
            :aria-selected="activeTab === 'mechanical'"
            aria-controls="panel-mechanical"
            @click="activeTab = 'mechanical'"
          >
            Mechanical Cleaning / Pigging
          </button>
          <button
            id="tab-camera"
            type="button"
            role="tab"
            class="service-tab"
            :class="{ 'service-tab--active': activeTab === 'camera' }"
            :aria-selected="activeTab === 'camera'"
            aria-controls="panel-camera"
            @click="activeTab = 'camera'"
          >
            Camera Pigging
          </button>
        </div>

        <div
          v-show="activeTab === 'mechanical'"
          id="panel-mechanical"
          role="tabpanel"
          aria-labelledby="tab-mechanical"
          class="service-panel"
        >
          <div class="service-split-grid">
            <div class="service-main">
              <div class="service-intro-hero">
                <div class="service-intro-hero-layout">
                  <div class="service-intro-hero-text">
                    <h2 class="service-panel-title">Mechanical Cleaning / Pigging</h2>
                    <span class="section-accent" aria-hidden="true"></span>
                    <p class="body-text">{{ mechanical.intro }}</p>
                  </div>
                  <div class="service-intro-hero-image-wrap">
                    <img
                      :src="mechanical.image"
                      alt="Mechanical cleaning pig inside industrial pipework"
                      class="service-intro-hero-image"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div class="service-features">
                <article
                  v-for="feature in mechanical.features"
                  :key="feature.title"
                  class="service-feature-card"
                >
                  <img :src="feature.icon" alt="" class="service-feature-icon" aria-hidden="true" />
                  <h3 class="service-feature-title">{{ feature.title }}</h3>
                  <p class="service-feature-text">{{ feature.description }}</p>
                </article>
              </div>
            </div>

            <aside class="service-sidebar">
              <div class="service-sidebar-cameras" aria-hidden="true">
                <img
                  src="/other-services/camera-pig-tools.png"
                  alt=""
                  class="service-sidebar-cameras-image"
                  decoding="async"
                />
              </div>
              <div class="service-sidebar-screen">
                <img
                  src="/other-services/camera-pig-view-tablet.png"
                  alt="WASP visual review showing internal pipe condition on rugged tablet"
                  class="service-sidebar-screen-image"
                  decoding="async"
                />
              </div>
              <p class="service-sidebar-text">{{ camera.previewText }}</p>
              <a href="#" class="btn btn-secondary btn-with-icon service-sidebar-cta">
                Download camera pig specification
                <img src="/other-services/icons/download.png" alt="" class="btn-icon" aria-hidden="true" />
              </a>
            </aside>
          </div>

          <router-link to="/contact" class="btn btn-primary btn-with-icon service-panel-cta">
            Discuss cleaning requirements
            <ArrowIcon class="btn-icon" />
          </router-link>
        </div>

        <div
          v-show="activeTab === 'camera'"
          id="panel-camera"
          role="tabpanel"
          aria-labelledby="tab-camera"
          class="service-panel"
        >
          <div class="service-main service-main--full">
            <div class="service-intro-grid service-intro-grid--camera">
              <div class="service-intro-copy">
                <h2 class="service-panel-title">Camera Pigging</h2>
                <span class="section-accent" aria-hidden="true"></span>
                <p v-for="(paragraph, index) in camera.intro" :key="index" class="body-text">
                  {{ paragraph }}
                </p>
              </div>
              <div class="service-camera-visuals">
                <div class="service-camera-visuals-inner">
                  <div class="service-camera-visuals-cameras" aria-hidden="true">
                    <img
                      src="/other-services/camera-pig-tools.png"
                      alt=""
                      class="service-camera-visuals-cameras-image"
                      decoding="async"
                    />
                  </div>
                  <div class="service-camera-visuals-screen">
                    <img
                      src="/other-services/camera-pig-view-tablet.png"
                      alt="WASP visual review showing internal pipe condition on rugged tablet"
                      class="service-camera-visuals-screen-image"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="service-features">
              <article
                v-for="feature in camera.features"
                :key="feature.title"
                class="service-feature-card"
              >
                <img :src="feature.icon" alt="" class="service-feature-icon" aria-hidden="true" />
                <h3 class="service-feature-title">{{ feature.title }}</h3>
                <p class="service-feature-text">{{ feature.description }}</p>
              </article>
            </div>

            <div class="service-panel-actions">
              <a href="#" class="btn btn-primary btn-with-icon">
                Download camera pig spec sheet
                <img src="/other-services/icons/download.png" alt="" class="btn-icon" aria-hidden="true" />
              </a>
              <router-link to="/contact" class="btn btn-secondary btn-with-icon">
                Discuss camera pigging
                <ArrowIcon class="btn-icon" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark readiness-services-section">
      <div class="section-container">
        <div class="readiness-services-grid">
          <article
            v-for="item in readinessServices"
            :key="item.title"
            class="readiness-service-item"
          >
            <img :src="item.icon" alt="" class="readiness-service-icon" aria-hidden="true" />
            <h2 class="readiness-service-title">{{ item.title }}</h2>
            <p class="readiness-service-text">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--light when-used-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--dark">When these services are used</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <div class="when-used-grid">
          <article
            v-for="item in whenUsedItems"
            :key="item.title"
            class="when-used-item"
          >
            <img
              src="/other-services/icons/check-circle.png"
              alt=""
              class="when-used-check"
              aria-hidden="true"
            />
            <h3 class="when-used-title">{{ item.title }}</h3>
            <p class="when-used-text">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark os-process-section">
      <div class="section-container">
        <div class="os-process-flow">
          <template v-for="(step, index) in processSteps" :key="step.title">
            <article class="os-process-step">
              <img :src="step.icon" alt="" class="os-process-icon" aria-hidden="true" />
              <h3 class="os-process-title">{{ step.title }}</h3>
              <p class="os-process-text">{{ step.description }}</p>
            </article>
            <div
              v-if="index < processSteps.length - 1"
              class="os-process-arrow"
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

    <section class="other-services-cta">
      <div class="other-services-cta-layout">
        <div class="other-services-cta-content">
          <h2 class="other-services-cta-title">Need support before an inspection?</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="other-services-cta-text">
            Send us the asset details and inspection objective, and we'll recommend the most
            practical support approach.
          </p>
          <router-link to="/contact" class="other-services-cta-button btn-with-icon">
            Contact WASP
            <ArrowIcon class="btn-icon other-services-cta-arrow" />
          </router-link>
        </div>
        <div class="other-services-cta-image-panel" aria-hidden="true">
          <img src="/other-services/cta-plant.png" alt="" class="other-services-cta-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'

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

const activeTab = ref('mechanical')

const mechanical = {
  intro:
    'Before any intelligent pigging inspection can take place, the pipe must be clean. Residual fouling, coke, scale or debris compromises data quality and can prevent the pig from completing its run. Getting the cleaning right is not a preliminary step — it is the foundation the entire inspection is built on.',
  image: '/other-services/mechanical-cleaning.png',
  features: [
    {
      title: 'The foundation of inspection quality',
      description:
        'Before inspection data can be trusted, the asset must be clean. Mechanical cleaning removes fouling that could mask defects, create false readings or prevent reliable data capture.',
      icon: '/other-services/icons/foundation.png'
    },
    {
      title: 'Experienced pigging engineering',
      description:
        "WASP's engineers have worked in pigging since the early days of the industry and understand what each asset requires before inspection can proceed.",
      icon: '/other-services/icons/experienced-engineering.png'
    },
    {
      title: 'Delivered with trusted partners',
      description:
        "Cleaning and pigging operations are delivered with established industrial partners who meet WASP's technical and operational standards.",
      icon: '/other-services/icons/trusted-partners.png'
    },
    {
      title: 'One managed programme',
      description:
        'From planning through cleaning, pigging and inspection readiness confirmation, WASP can manage the complete support programme.',
      icon: '/other-services/icons/managed-programme.png'
    }
  ]
}

const camera = {
  intro: [
    'Sometimes the most direct answer is the clearest one. Where intelligent pigging provides ultra-high-density ultrasonic data, camera pigging provides something different: direct optical evidence of what is happening inside a pipe.',
    'WASP offers two advanced camera pig platforms, suited to different applications and operating environments.'
  ],
  previewText:
    'Camera pigging provides direct optical evidence of internal condition, capturing high-resolution imagery to confirm what is inside the asset. Unlike ultrasonic ILI, camera inspection delivers what the eye can see—fast, clear and unambiguous.',
  features: [
    {
      title: 'Direct visual evidence',
      description:
        'Camera pigging provides real-time optical footage showing what is inside the pipe, reducing uncertainty and interpretation delays.',
      icon: '/other-services/icons/visual-evidence.png'
    },
    {
      title: 'Pre-inspection confidence',
      description:
        'Useful before committing to full ILI, to assess internal condition, fouling or obstructions quickly.',
      icon: '/other-services/icons/pre-inspection.png'
    },
    {
      title: 'Post-cleaning verification',
      description:
        'Confirms cleaning programmes have delivered an acceptable internal condition before intelligent pigging proceeds.',
      icon: '/other-services/icons/post-cleaning.png'
    },
    {
      title: 'Two camera platforms available',
      description:
        'WASP offers RVIX 4K and RVIX-VR platforms, each suited to different bore sizes, bend geometries and operating environments.',
      icon: '/other-services/icons/camera-platforms.png'
    }
  ]
}

const readinessServices = [
  {
    title: 'Pig Tracking',
    description: 'Confirm pig location and movement throughout the line.',
    icon: '/other-services/icons/pig-tracking.png'
  },
  {
    title: 'Cleaning Verification',
    description: 'Visually evidence clean and check cleaning effectiveness.',
    icon: '/other-services/icons/cleaning-verification.png'
  },
  {
    title: 'Inspection Support',
    description: 'On-site support for planning, readiness and execution.',
    icon: '/other-services/icons/inspection-support.png'
  },
  {
    title: 'Tooling & Deployment Advice',
    description: 'Guidance on tool selection, launch and retrieval strategy.',
    icon: '/other-services/icons/tooling-advice.png'
  }
]

const whenUsedItems = [
  {
    title: 'Before intelligent pigging inspection',
    description: 'Ensure the asset is clean and ready for reliable inspection.'
  },
  {
    title: 'After cleaning or decoking',
    description: 'Visually verify that the line is clean and free of obstructions.'
  },
  {
    title: 'When the asset may be fouled or restricted',
    description: 'Confirm internal condition and passage before running ILI tools.'
  },
  {
    title: 'When visual confirmation is required quickly',
    description: 'Fast optical insight to support decisions and reduce uncertainty.'
  },
  {
    title: 'When pig movement or access conditions are uncertain',
    description: 'Verify access points, bends, welds and internal restrictions.'
  },
  {
    title: 'When inspection findings need optical verification',
    description: 'Use imagery to validate anomalies and support actions.'
  }
]

const processSteps = [
  {
    title: 'Review',
    description: 'Understand the asset, history and inspection objectives.',
    icon: '/other-services/icons/review.png'
  },
  {
    title: 'Prepare',
    description: 'Clean, decoke and prepare the line for inspection readiness.',
    icon: '/other-services/icons/prepare.png'
  },
  {
    title: 'Verify',
    description: 'Visually confirm conditions and cleaning effectiveness with camera tools.',
    icon: '/other-services/icons/verify.png'
  },
  {
    title: 'Inspect',
    description: 'Run the inspection with confidence and clarity.',
    icon: '/other-services/icons/inspect.png'
  }
]
</script>

<style scoped>
.other-services-page {
  min-height: 100vh;
  background-color: #0a0a0a;
}

.other-services-page .eyebrow {
  color: #e7c73a;
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
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.hero-lead {
  color: var(--color-text-lead);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-lead--tagline {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.hero-text {
  color: var(--color-text-secondary);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.other-services-page > :deep(.hero-background .hero-image) {
  object-position: right center;
}

.other-services-page .hero-actions {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  gap: 16px;
  width: 100%;
}

.other-services-page .hero-actions .btn {
  display: inline-flex;
  flex: 1 1 0;
  min-width: 0;
  width: auto;
  max-width: none;
  align-self: auto;
  padding-inline: 18px;
  text-align: center;
}

.btn-with-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: uppercase;
}

.btn-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  object-fit: contain;
}

.btn-icon-svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.btn-primary.btn-with-icon {
  color: #0a0a0a;
}

.btn-primary.btn-with-icon .btn-icon {
  filter: brightness(0);
}

.btn-secondary.btn-with-icon .btn-icon {
  filter: brightness(0) invert(1);
}

.service-tabs-section {
  padding-top: 0;
  padding-bottom: 0;
}

.readiness-services-section {
  padding-top: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.readiness-services-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  align-items: stretch;
}

.readiness-service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 28px;
}

.readiness-service-item + .readiness-service-item {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.readiness-service-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-bottom: 20px;
}

.readiness-service-title {
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0 0 12px;
}

.readiness-service-text {
  color: var(--color-text-muted);
  font-size: var(--text-body-sm);
  line-height: var(--leading-relaxed);
  margin: 0;
  max-width: 240px;
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

.when-used-section {
  padding-top: 64px;
  padding-bottom: 64px;
}

.when-used-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px 40px;
  margin-top: 32px;
}

.when-used-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.when-used-check {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
}

.when-used-title {
  color: #0a0a0a;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;
}

.when-used-text {
  color: rgba(10, 10, 10, 0.78);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  margin: 0;
}

.os-process-section {
  padding-top: 56px;
  padding-bottom: 56px;
}

.os-process-flow {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.os-process-step {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 8px;
}

.os-process-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  margin-bottom: 18px;
}

.os-process-title {
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.os-process-text {
  color: var(--color-text-muted);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  margin: 0;
  max-width: 220px;
}

.os-process-arrow {
  flex: 0 0 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  color: #e7c73a;
}

.other-services-cta {
  background-color: #e7c73a;
  overflow: hidden;
}

.other-services-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.other-services-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 64px
    max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.other-services-cta-title {
  color: #0a0a0a;
  font-family: var(--font-heading);
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-title);
  text-transform: uppercase;
  margin-bottom: var(--gap-heading-to-accent);
}

.other-services-cta-text {
  color: var(--color-text-muted-on-gold);
  font-size: var(--text-body);
  line-height: var(--leading-body);
  margin-bottom: 28px;
}

.other-services-cta-button {
  display: inline-flex;
  align-self: flex-start;
  padding: 16px 28px;
  font-family: var(--font-body);
  font-size: var(--text-button);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-button);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: #0a0a0a;
  color: #ffffff;
  border: 2px solid #0a0a0a;
  transition: all 0.25s ease;
}

.other-services-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
}

.other-services-cta-arrow {
  filter: brightness(0) invert(1);
}

.other-services-cta-button:hover .other-services-cta-arrow {
  filter: brightness(0);
}

.other-services-cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background-color: #e7c73a;
}

.other-services-cta-image {
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

.service-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-bottom: 0;
}

.service-tab {
  position: relative;
  padding: 22px 28px;
  font-family: var(--font-heading);
  font-size: clamp(13px, 1.4vw, 16px);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(231, 199, 58, 0.45);
  background-color: #0a0a0a;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.service-tab:first-child {
  border-right: none;
}

.service-tab--active {
  background-color: #e7c73a;
  color: #0a0a0a;
  border-color: #e7c73a;
  z-index: 1;
}

.service-panel {
  border: 2px solid rgba(231, 199, 58, 0.35);
  border-top: none;
  padding: 32px 28px 40px;
  background-color: #0a0a0a;
}

.service-split-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(200px, 240px);
  gap: 16px;
  align-items: stretch;
}

.service-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

.service-main--full {
  width: 100%;
}

.service-intro-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 42%);
  gap: 28px;
  align-items: start;
  margin-bottom: 36px;
}

.service-intro-hero {
  --intro-text-width: min(58%, 520px);
  --intro-image-overlap: min(160px, calc(var(--intro-text-width) * 0.3));

  position: relative;
  overflow: hidden;
  margin: 0 0 24px;
}

.service-intro-hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  min-height: clamp(170px, 22vw, 240px);
}

.service-intro-hero-layout::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(var(--intro-text-width) + var(--intro-image-overlap) * 0.55);
  background: linear-gradient(
    to right,
    #0a0a0a 0%,
    #0a0a0a 30%,
    rgba(10, 10, 10, 0.92) 48%,
    rgba(10, 10, 10, 0.55) 68%,
    rgba(10, 10, 10, 0.15) 86%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
}

.service-intro-hero-text {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  position: relative;
  z-index: 3;
  width: var(--intro-text-width);
  max-width: 100%;
  padding: 0 8px 0 0;
}

.service-intro-hero-text::before {
  content: '';
  position: absolute;
  top: -12px;
  bottom: -12px;
  left: -16px;
  right: calc(-1 * var(--intro-image-overlap) * 0.35);
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.9) 0%,
    rgba(10, 10, 10, 0.55) 48%,
    rgba(10, 10, 10, 0.15) 78%,
    transparent 100%
  );
  z-index: -1;
  pointer-events: none;
}

.service-intro-hero-image-wrap {
  grid-column: 1;
  grid-row: 1;
  align-self: stretch;
  justify-self: end;
  width: calc(100% - var(--intro-text-width) + var(--intro-image-overlap));
  min-width: 42%;
  line-height: 0;
  position: relative;
  z-index: 1;
}

.service-intro-hero-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, transparent 55%, rgba(10, 10, 10, 0.55) 82%, #0a0a0a 100%),
    linear-gradient(to right, #0a0a0a 0%, rgba(10, 10, 10, 0.75) 8%, rgba(10, 10, 10, 0.2) 18%, transparent 32%);
  pointer-events: none;
}

.service-intro-hero-image {
  width: 100%;
  height: 100%;
  min-height: clamp(170px, 22vw, 240px);
  display: block;
  object-fit: cover;
  object-position: center right;
  -webkit-mask-image:
    linear-gradient(to bottom, #000 0%, #000 92%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 8%, rgba(0, 0, 0, 0.65) 16%, #000 28%, #000 78%, rgba(0, 0, 0, 0.45) 92%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 0%, #000 92%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 8%, rgba(0, 0, 0, 0.65) 16%, #000 28%, #000 78%, rgba(0, 0, 0, 0.45) 92%, transparent 100%);
  mask-composite: intersect;
}

.service-intro-hero-text .service-panel-title {
  margin-bottom: var(--gap-heading-to-accent);
}

.service-intro-hero-text .body-text {
  margin-bottom: 0;
}

.service-intro-grid--camera {
  grid-template-columns: minmax(0, 1fr) minmax(300px, 50%);
  gap: 20px;
  align-items: center;
}

.service-camera-visuals {
  position: relative;
  padding: 6px 4px;
  overflow: hidden;
  background-color: #0a0a0a;
}

.service-camera-visuals::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 36% 50%, transparent 11%, rgba(231, 199, 58, 0.1) 13%, rgba(231, 199, 58, 0.04) 15%, transparent 17%),
    radial-gradient(circle at 36% 50%, transparent 23%, rgba(231, 199, 58, 0.08) 25%, rgba(231, 199, 58, 0.03) 27%, transparent 29%),
    radial-gradient(circle at 36% 50%, transparent 35%, rgba(231, 199, 58, 0.06) 37%, rgba(231, 199, 58, 0.02) 39%, transparent 41%),
    radial-gradient(ellipse 80% 65% at 42% 52%, rgba(231, 199, 58, 0.05) 0%, transparent 58%);
  pointer-events: none;
  z-index: 1;
}

.service-camera-visuals::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, #0a0a0a 0%, rgba(10, 10, 10, 0.7) 5%, transparent 18%, transparent 82%, rgba(10, 10, 10, 0.7) 95%, #0a0a0a 100%),
    linear-gradient(to bottom, #0a0a0a 0%, rgba(10, 10, 10, 0.55) 6%, transparent 20%, transparent 80%, rgba(10, 10, 10, 0.55) 94%, #0a0a0a 100%);
  pointer-events: none;
  z-index: 3;
}

.service-camera-visuals-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  align-items: end;
}

.service-camera-visuals-cameras {
  position: relative;
  padding: 8px 0 4px;
  overflow: hidden;
}

.service-camera-visuals-cameras-image {
  display: block;
  width: 106%;
  max-width: none;
  margin-left: -3%;
  object-fit: contain;
}

.service-camera-visuals-screen {
  padding: 0 6px 4px;
}

.service-camera-visuals-screen-image {
  display: block;
  width: 100%;
  max-width: none;
  margin-left: 0;
  object-fit: contain;
}

.service-panel-title {
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: var(--text-section-title);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-title);
  text-transform: uppercase;
  margin-bottom: var(--gap-heading-to-accent);
}

.service-panel .body-text {
  color: var(--color-text-body);
}

.service-features {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 0;
  align-items: stretch;
}

.service-feature-card {
  border: 1px solid rgba(231, 199, 58, 0.2);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100%;
}

.service-feature-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 16px;
  margin-inline: auto;
}

.service-feature-title {
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.service-feature-text {
  color: var(--color-text-muted);
  font-size: var(--text-tiny);
  line-height: var(--leading-relaxed);
  margin: 0;
}

.service-panel-cta,
.service-panel-actions {
  margin-top: 28px;
}

.service-panel-cta {
  display: inline-flex;
}

.service-panel-actions {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.service-sidebar {
  position: relative;
  z-index: 2;
  border: 1px solid rgba(231, 199, 58, 0.2);
  padding: 14px 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-self: stretch;
  background-color: #0a0a0a;
}

.service-sidebar-cameras {
  position: relative;
  margin: 0 2px;
  padding: 18px 4px 14px;
  overflow: hidden;
  background:
    radial-gradient(ellipse 90% 75% at 50% 55%, rgba(231, 199, 58, 0.14) 0%, transparent 68%),
    radial-gradient(circle at 22% 38%, rgba(231, 199, 58, 0.08) 0%, transparent 42%),
    radial-gradient(circle at 78% 62%, rgba(231, 199, 58, 0.07) 0%, transparent 38%),
    linear-gradient(180deg, rgba(231, 199, 58, 0.04) 0%, transparent 100%),
    #0a0a0a;
}

.service-sidebar-cameras::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 48%, transparent 18%, rgba(231, 199, 58, 0.07) 19%, transparent 20%),
    radial-gradient(circle at 50% 48%, transparent 34%, rgba(231, 199, 58, 0.05) 35%, transparent 36%),
    radial-gradient(circle at 50% 48%, transparent 52%, rgba(231, 199, 58, 0.04) 53%, transparent 54%);
  pointer-events: none;
}

.service-sidebar-cameras-image {
  position: relative;
  z-index: 1;
  width: 118%;
  max-width: none;
  margin-left: -9%;
  display: block;
  object-fit: contain;
}

.service-sidebar-screen {
  padding: 0 6px;
}

.service-sidebar-screen-image {
  width: 100%;
  display: block;
  object-fit: contain;
}

.service-sidebar-text {
  color: var(--color-text-secondary);
  font-size: var(--text-tiny);
  line-height: var(--leading-body);
  margin: 0;
  padding: 0 4px;
}

.service-sidebar-cta {
  margin-top: auto;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-size: var(--text-tiny);
  padding-inline: 12px;
}

.page-body {
  padding-bottom: 80px;
}

.content-section {
  margin-top: 48px;
}

.section-title {
  color: var(--color-text);
}

.platform-block {
  margin-top: 40px;
}

.platform-block:first-of-type {
  margin-top: 32px;
}

.platform-title,
.subsection-title {
  color: #ffffff;
}

.subsection {
  margin-top: 40px;
}

.body-text {
  color: var(--color-text-body);
}

.body-text:last-child {
  margin-bottom: 0;
}

.bullet-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.bullet-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 16px;
  color: var(--color-text-body);
}

.bullet-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e7c73a;
}

.bullet-list li:last-child {
  margin-bottom: 0;
}

.page-cta {
  margin-top: 56px;
}

@media (max-width: 1100px) {
  .service-split-grid {
    grid-template-columns: 1fr;
  }

  .service-sidebar {
    max-width: 420px;
  }

  .service-features {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .readiness-services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .readiness-service-item:nth-child(odd) {
    border-left: none;
  }

  .readiness-service-item:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .readiness-service-item:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
  }

  .when-used-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 32px;
  }

  .os-process-flow {
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 16px;
  }

  .os-process-arrow {
    display: none;
  }

  .os-process-step {
    flex: 1 1 calc(50% - 16px);
    max-width: 280px;
  }

  .other-services-cta-layout {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .other-services-cta-content {
    padding: 48px var(--site-gutter) 32px;
    max-width: none;
  }

  .other-services-cta-image-panel {
    min-height: 280px;
  }

  .other-services-cta-image {
    width: 100%;
    right: 0;
    object-position: center bottom;
  }

  .service-intro-grid--camera {
    grid-template-columns: 1fr;
  }

  .service-intro-hero {
    --intro-text-width: min(62%, 480px);
    --intro-image-overlap: min(130px, calc(var(--intro-text-width) * 0.26));
  }
}

@media (max-width: 768px) {
  .service-panel {
    padding: 24px 20px 32px;
  }

  .readiness-services-grid {
    grid-template-columns: 1fr;
  }

  .readiness-service-item + .readiness-service-item {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .readiness-service-item {
    padding: 32px 20px;
  }

  .when-used-section {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .when-used-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-top: 24px;
  }

  .os-process-section {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .os-process-step {
    flex: 1 1 100%;
    max-width: none;
  }

  .other-services-cta-content {
    padding: 40px var(--site-gutter) 24px;
  }

  .other-services-cta-image-panel {
    min-height: 220px;
  }

  .other-services-cta-image {
    object-position: left center;
    width: 118%;
    max-height: min(48vh, 360px);
  }

  .other-services-page > :deep(.hero-background .hero-layout > .hero-copy) {
    padding-bottom: 12px;
  }

  .other-services-page > :deep(.hero-background .hero-image-wrap) {
    margin-top: -16px;
  }

  .other-services-page > :deep(.hero-background .hero-image) {
    object-position: center center;
    max-height: min(48vh, 380px);
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 5%,
      #000 14%,
      #000 86%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 5%,
      #000 14%,
      #000 86%,
      transparent 100%
    );
  }

  .other-services-page > :deep(.hero-background .hero-image-wrap::after) {
    background: linear-gradient(
      to bottom,
      #0a0a0a 0%,
      rgba(10, 10, 10, 0.75) 6%,
      transparent 16%,
      transparent 72%,
      rgba(10, 10, 10, 0.55) 90%,
      #0a0a0a 100%
    );
  }

  .service-intro-hero {
    --intro-text-width: 100%;
    --intro-image-overlap: 0;
    margin-right: 0;
    margin-bottom: 28px;
  }

  .service-intro-hero-layout {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }

  .service-intro-hero-layout::before,
  .service-intro-hero-text::before {
    display: none;
  }

  .service-intro-hero-text {
    width: 100%;
    padding-right: 0;
    padding-bottom: 12px;
  }

  .service-intro-hero-image-wrap {
    width: 100%;
    min-width: 0;
    margin-top: -16px;
    overflow: hidden;
  }

  .service-intro-hero-image-wrap::after {
    background: linear-gradient(
      to bottom,
      #0a0a0a 0%,
      rgba(10, 10, 10, 0.75) 6%,
      transparent 16%,
      transparent 72%,
      rgba(10, 10, 10, 0.55) 90%,
      #0a0a0a 100%
    );
  }

  .service-intro-hero-image {
    min-height: 0;
    width: 118%;
    max-width: 118%;
    max-height: min(48vh, 360px);
    object-fit: cover;
    object-position: center center;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 5%,
      #000 14%,
      #000 86%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.35) 5%,
      #000 14%,
      #000 86%,
      transparent 100%
    );
  }

  .other-services-page .hero-actions {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 12px;
  }

  .other-services-page .hero-actions .btn {
    display: inline-flex;
    flex: 1 1 0;
    min-width: 0;
    width: auto;
    max-width: none;
    align-self: auto;
    padding-inline: 12px;
    font-size: var(--text-tiny);
  }

  .other-services-page .service-panel-actions .btn {
    width: auto;
    flex: 1 1 calc(50% - 8px);
    min-width: 0;
  }

  .service-panel-actions {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .service-panel-cta,
  .service-sidebar-cta {
    width: auto;
  }

  .service-tabs {
    grid-template-columns: 1fr;
  }

  .service-tab:first-child {
    border-right: 2px solid rgba(231, 199, 58, 0.45);
    border-bottom: none;
  }

  .service-tab--active:first-child {
    border-color: #e7c73a;
  }

  .service-panel {
    padding: 28px var(--site-gutter) 36px;
  }

  .service-features {
    grid-template-columns: 1fr;
  }

  .service-camera-visuals-inner {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .service-camera-visuals-cameras-image {
    width: 100%;
    margin-left: 0;
  }

  .service-camera-visuals-screen-image {
    width: 100%;
    max-width: 260px;
    margin-inline: auto;
  }

  .service-sidebar {
    max-width: none;
  }

  .page-body {
    padding-bottom: 64px;
  }

  .content-section {
    margin-top: 40px;
  }

  .cta-button {
    display: block;
    padding: 14px 32px;
  }
}
</style>
