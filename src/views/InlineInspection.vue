<template>
  <div class="inline-inspection-page">
    <!-- Hero -->
    <HeroBackgroundLayout header-offset section-class="hero-section" image-src="/inline-inspection/hero.png">
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        INLINE
        <span class="hero-title-gold">INSPECTION</span>
      </h1>

      <p class="hero-lead">
        Adaptable ultrasonic inspection for pipework, pipelines and process assets where accurate
        wall thickness data, AI anomaly detection, and integrity-ready reporting
        are required.
      </p>
      <p class="hero-body">
        WASP provides adaptable inline ultrasonic inspection for pipelines, fired heaters and process assets. Our inspection approach combines modular tooling, overlapping coverage, AI A-scan verification and digital reporting to deliver data that can be reviewed, trusted and acted on.
      </p>

      <div class="hero-actions">
        <router-link to="/ultrasight" class="btn btn-primary">OUR ULTRASIGHT TOOL</router-link>
        <a
          href="/inline-inspection/wasp-intelligent-pigging-brochure.pdf"
          class="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD BROCHURE
        </a>
      </div>

      <template #after>
        <div class="feature-bar">
          <div class="feature-bar-container">
            <div v-for="feature in features" :key="feature.lines[0]" class="feature-item">
              <img :src="feature.icon" alt="" class="feature-icon" aria-hidden="true" />
              <p class="feature-label">
                <span>{{ feature.lines[0] }}</span>
                <span>{{ feature.lines[1] }}</span>
              </p>
            </div>
          </div>
        </div>
      </template>
    </HeroBackgroundLayout>

    <!-- Typical applications -->
    <section class="section section--dark">
      <div class="section-container">
        <p class="eyebrow">TYPICAL APPLICATIONS</p>
        <h2 class="section-heading">Where inline UT inspection applies</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <div class="applications-grid">
          <article v-for="app in applications" :key="app.title" class="application-card">
            <div class="application-media">
              <img :src="app.icon" alt="" class="application-icon" aria-hidden="true" />
            </div>
            <div class="application-body">
              <h3 class="application-title">{{ app.title }}</h3>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Uncertainty -->
    <section class="section section--light uncertainty-section">
      <div class="section-container uncertainty-grid">
        <div class="uncertainty-copy">
          <h2 class="section-heading section-heading--dark">
            Inspection data for assets where access, geometry or condition creates uncertainty.
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            Many process assets cannot be assessed confidently using external inspection alone.
            Access restrictions, insulation, complex routing, internal fouling, previous repairs and
            unknown degradation mechanisms can all limit the value of conventional inspection
            methods.
          </p>
          <p class="body-text body-text--dark">
            Inline UT inspection allows condition data to be collected from inside the asset, giving
            operators a clearer understanding of remaining wall thickness, localised degradation and
            areas requiring further assessment.
          </p>
          <p class="body-text body-text--dark">
            WASP's UT inspection service is built around practical deployment, reliable data capture
            and experienced interpretation. The objective is not simply to collect inspection data,
            but to provide information that can be used by inspection, maintenance and integrity
            teams to make confident decisions.
          </p>
        </div>
        <img
          src="/inline-inspection/c-scan-interface.png"
          alt="C-scan inspection software interface showing pipe wall thickness data"
          class="uncertainty-image"
        />
      </div>
    </section>

    <!-- What we detect -->
    <section class="section section--light">
      <div class="section-container">
        <div class="detect-grid">
          <div class="detect-intro">
            <h2 class="section-heading section-heading--dark">What we detect and measure</h2>
            <span class="section-accent" aria-hidden="true"></span>
            <p class="body-text body-text--dark">
              Inline UT inspection supports detection, measurement and mapping of the degradation and geometry features here. Exact detection capability depends on asset geometry, cleanliness and data quality.
            </p>
          </div>
          <article v-for="group in detectGroups" :key="group.title" class="detect-card">
            <h3 class="detect-title">{{ group.title }}</h3>
            <ul class="check-list">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Reporting -->
    <section class="section section--dark reporting-section">
      <div class="section-container">
        <div class="reporting-intro">
          <h2 class="section-heading">Reporting built for decision-making</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text reporting-intro-text">
            Inspection data only has value when it can be reviewed, understood and acted on. WASP
            delivers rapid fired heater reporting, digital inspection outputs and cloud-held data
            that supports repeat comparison and long-term asset history.
          </p>
        </div>

        <div class="reporting-blocks">
          <article
            v-for="block in reportingBlocks"
            :key="block.title"
            class="reporting-block"
          >
            <h3 class="reporting-block-title">{{ block.title }}</h3>
            <p class="reporting-block-text">{{ block.description }}</p>
          </article>
        </div>

        <div class="reporting-deliverables">
          <div class="reporting-list-panel">
            <h3 class="reporting-list-heading">What clients receive</h3>
            <span class="section-accent" aria-hidden="true"></span>
            <div class="reporting-lists">
              <ul class="check-list">
                <li v-for="item in deliverablesLeft" :key="item">{{ item }}</li>
              </ul>
              <ul class="check-list">
                <li v-for="item in deliverablesRight" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="reporting-graph-panel">
            <img
              src="/inline-inspection/thickness-trend-comparison.png"
              alt="Thickness trend comparison graph showing wall thickness over location across inspection years"
              class="reporting-graph-image"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'
const features = [
  { lines: ['WALL THICKNESS', 'DATA'], icon: '/inline-inspection/wall-thickness-data.png' },
  { lines: ['ANOMALY', 'DETECTION'], icon: '/inline-inspection/ai-anomaly-detection.png' },
  { lines: ['A-SCAN', 'VERIFICATION'], icon: '/inline-inspection/a-scan-verification.png' },
  { lines: ['LOCATION', 'MAPPING'], icon: '/inline-inspection/location-mapping.png' },
  {
    lines: ['FULL CIRCUMFERENTIAL', 'COVERAGE'],
    icon: '/inline-inspection/full-circumferential-coverage.png'
  },
  {
    lines: ['INTEGRITY-READY', 'REPORTING'],
    icon: '/inline-inspection/integrity-ready-reporting.png'
  }
]

const applications = [
  {
    title: 'Fired Heaters',
    icon: '/inline-inspection/applications/fired-heaters.png'
  },
  {
    title: 'Transfer Lines',
    icon: '/inline-inspection/applications/transfer-lines.png'
  },
  {
    title: 'HRSG Boilers',
    icon: '/inline-inspection/applications/hrsg-boilers.png'
  },
  {
    title: 'Process Piping',
    icon: '/inline-inspection/applications/process-piping.png'
  },
  {
    title: 'Pipelines',
    icon: '/inline-inspection/applications/pipelines.png'
  }
]

const detectGroups = [
  {
    title: 'Metal loss and corrosion',
    items: [
      'Internal corrosion',
      'External corrosion',
      'Pitting',
      'Erosion',
      'Gouging',
      'Grooving or tracking'
    ]
  },
  {
    title: 'Geometry and deformation',
    items: [
      'Dents',
      'Ovality',
      'Bulging',
      'Mechanical creep',
      'Bore restrictions'
    ]
  },
  {
    title: 'Operational and asset features',
    items: [
      'Internal fouling or coke',
      'Historic repairs or inserts',
      'Weld or landmark references',
      'Location / positional reference',
      'Areas requiring further inspection'
    ]
  }
]

const reportingBlocks = [
  {
    title: '24-hour field reporting',
    description:
      'Rapid turnaround reporting to support time-critical shutdown and repair decisions.'
  },
  {
    title: 'Digital reporting & data control',
    description:
      'Structured digital outputs designed for review, sharing and clear decision-making.'
  },
  {
    title: 'Cloud-held inspection history',
    description:
      "Previous years' data can be accessed, reviewed and compared with new inspection results."
  }
]

const deliverablesLeft = [
  'Wall thickness data',
  'Minimum wall readings',
  'Anomaly tables',
  'C-scan or visual outputs',
  'A-scan verification',
  'Location references'
]

const deliverablesRight = [
  'Coverage summary',
  'Data quality comments',
  'Inspection limitations',
  'Integrity comments',
  'Recommended next steps',
  'Final inspection report'
]
</script>

<style scoped>
.inline-inspection-page {
  background-color: #0a0a0a;
}

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
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

.hero-lead strong {
  font-weight: var(--font-weight-semibold);
}

.hero-body {
  color: var(--color-text-secondary);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.inline-inspection-page > :deep(.hero-background .hero-layout > .hero-copy) {
  padding: 24px 0 56px;
}

.inline-inspection-page > :deep(.hero-background .hero-layout > .hero-copy > .hero-title) {
  margin-bottom: var(--gap-hero-title-to-lead);
}

.inline-inspection-page > :deep(.hero-background .hero-layout > .hero-copy > .hero-lead) {
  margin-bottom: var(--gap-hero-to-actions);
}

.inline-inspection-page > :deep(.hero-background .hero-layout > .hero-copy > .hero-body) {
  margin-bottom: var(--gap-hero-to-actions);
}

.inline-inspection-page > :deep(.hero-background .hero-layout) {
  min-height: clamp(420px, 56vh, 620px);
}

.inline-inspection-page > :deep(.hero-background .hero-image-wrap) {
  margin-top: 0;
  align-self: start;
}

.inline-inspection-page > :deep(.hero-background .hero-image) {
  min-height: clamp(380px, 56vh, 580px);
  object-fit: contain;
  object-position: right top;
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, #000 0%, #000 90%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, #000 0%, #000 90%, transparent 100%);
  mask-composite: intersect;
}

.inline-inspection-page > :deep(.hero-background .hero-image-wrap::after) {
  background:
    linear-gradient(to right, #0a0a0a 0%, transparent 3%, transparent 97%, #0a0a0a 100%),
    linear-gradient(to bottom, transparent 88%, rgba(10, 10, 10, 0.5) 96%, #0a0a0a 100%);
}

@media (max-width: 768px) {
  .inline-inspection-page > :deep(.hero-background .hero-layout) {
    min-height: auto;
  }

  .inline-inspection-page > :deep(.hero-background .hero-layout > .hero-copy) {
    padding: 20px var(--site-gutter) 28px;
  }

  .inline-inspection-page > :deep(.hero-background .hero-image-wrap) {
    margin-top: 0;
  }

  .inline-inspection-page > :deep(.hero-background .hero-image) {
    min-height: 0;
    max-height: min(52vh, 420px);
    object-position: top center;
    -webkit-mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, #000 0%, #000 90%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, #000 0%, #000 90%, transparent 100%);
    mask-composite: intersect;
  }
}

.feature-bar {
  position: relative;
  z-index: 2;
  background-color: #0a0a0a;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.feature-bar-container {
  max-width: var(--site-max-width);
  margin: 0 auto;
  padding: 24px var(--site-gutter);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  align-items: stretch;
}

.feature-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 8px 14px;
  text-align: left;
}

.feature-item + .feature-item {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.feature-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  object-fit: contain;
}

.feature-label {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  color: #ffffff;
}

.eyebrow {
  color: #e7c73a;
  margin-bottom: 12px;
}

.section-heading--dark {
  color: #0a0a0a;
}

.section-intro {
  max-width: 820px;
  margin-bottom: 40px;
}

.body-text {
  color: var(--color-text-body);
  line-height: var(--leading-copy);
}

.body-text--dark {
  color: var(--color-text-body-on-light);
}

.body-text:last-child {
  margin-bottom: 0;
}

.uncertainty-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.uncertainty-image {
  width: 100%;
  height: auto;
  display: block;
}

.section-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.application-card {
  background-color: #141414;
  border: 1px solid rgba(231, 199, 58, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.application-media {
  width: 100%;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 50%, #1a1a1a 100%);
}

.application-icon {
  width: 72%;
  height: 72%;
  max-width: 160px;
  max-height: 160px;
  object-fit: contain;
}

.application-body {
  padding: 20px 18px 24px;
  text-align: center;
  flex: 1;
}

.application-title {
  color: #e7c73a;
  margin: 0;
}

.detect-grid {
  display: grid;
  grid-template-columns: 1.15fr repeat(3, 1fr);
  gap: 0;
  align-items: start;
}

.detect-intro {
  padding-right: 36px;
}

.detect-card {
  padding: 0 28px;
  border-left: 1px solid rgba(10, 10, 10, 0.12);
}

.detect-title {
  color: #0a0a0a;
  margin-bottom: 16px;
}

.check-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.check-list li {
  position: relative;
  padding-left: 22px;
  margin-bottom: 10px;
  color: var(--color-text-body-on-light);
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #e7c73a;
}

.bullet-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.bullet-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 10px;
  font-size: var(--text-caption);
  line-height: var(--leading-relaxed);
  color: var(--color-text-body);
}

.bullet-list--dark li {
  color: rgba(10, 10, 10, 0.8);
}

.bullet-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #e7c73a;
  font-weight: 700;
}

.reporting-intro {
  max-width: 820px;
  margin-bottom: 40px;
}

.reporting-intro-text {
  margin-top: 0;
  max-width: 760px;
}

.reporting-blocks {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 56px;
}

.reporting-block {
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 28px 24px;
  background-color: rgba(255, 255, 255, 0.02);
}

.reporting-block-title {
  margin: 0 0 14px;
  font-family: var(--font-heading);
  font-size: var(--text-pane-title);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-pane);
  text-transform: uppercase;
  color: #e7c73a;
}

.reporting-block-text {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  color: var(--color-text-muted);
}

.reporting-deliverables {
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.15fr);
  gap: 48px;
  align-items: center;
}

.reporting-list-heading {
  margin: 0 0 var(--gap-heading-to-accent);
  font-family: var(--font-heading);
  font-size: var(--text-subsection);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-pane);
  text-transform: uppercase;
  color: #ffffff;
}

.reporting-lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 32px;
}

.reporting-section .check-list li {
  color: var(--color-text-secondary);
}

.reporting-graph-panel {
  width: 100%;
}

.reporting-graph-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .feature-bar-container {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px var(--site-gutter);
  }

  .feature-item {
    padding: 14px 12px;
  }

  .feature-item:nth-child(3n + 1) {
    border-left: none;
  }

  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .detect-grid {
    grid-template-columns: 1fr 1fr;
  }

  .detect-intro {
    grid-column: 1 / -1;
    padding-right: 0;
    margin-bottom: 8px;
  }

  .detect-card {
    border-left: none;
    border-top: 1px solid rgba(10, 10, 10, 0.12);
    padding: 28px 0 0;
  }

  .detect-card:nth-child(2) {
    padding-right: 20px;
  }

  .detect-card:nth-child(3) {
    padding-left: 20px;
    border-left: 1px solid rgba(10, 10, 10, 0.12);
  }

  .detect-card:nth-child(4) {
    grid-column: 1 / -1;
    border-left: none;
    padding-left: 0;
    padding-right: 0;
  }
  .uncertainty-grid,
  .reporting-deliverables {
    grid-template-columns: 1fr;
  }

  .reporting-blocks {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .feature-bar-container {
    grid-template-columns: 1fr;
    padding: 16px var(--site-gutter);
  }

  .feature-item {
    border-left: none !important;
    justify-content: flex-start;
    padding: 16px 0;
  }

  .feature-icon {
    object-position: left center;
  }

  .feature-item + .feature-item {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .applications-grid,
  .detect-grid {
    grid-template-columns: 1fr;
  }

  .detect-card,
  .detect-card:nth-child(3),
  .detect-card:nth-child(4) {
    border-left: none;
    padding-left: 0;
    padding-right: 0;
  }

  .detect-card:nth-child(4) {
    grid-column: auto;
  }

  .reporting-lists {
    grid-template-columns: 1fr;
  }
}
</style>
