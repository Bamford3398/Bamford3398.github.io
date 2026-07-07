<template>
  <div class="inline-inspection-page">
    <!-- Hero -->
    <HeroBackgroundLayout header-offset section-class="hero-section" image-src="/inline-inspection/hero.png">
      <h1 class="hero-title">
        <span class="hero-title-accent" aria-hidden="true"></span>
        INLINE
        <span class="hero-title-gold">INSPECTION</span>
      </h1>

      <p class="hero-lead">
        Adaptable ultrasonic inspection for pipework, pipelines and process assets where accurate
        wall thickness data, AI Anomaly Detection, and integrity-ready reporting
        are required.
      </p>
      <p class="hero-body">
        WASP provides inline ultrasonic inspection services to help operators understand the
        internal condition of critical assets. Our inspection approach is designed to capture
        reliable wall thickness data, identify relevant anomalies and provide reporting that
        supports maintenance, repair and integrity decisions.
      </p>

      <div class="hero-actions">
        <router-link to="/ultrasight" class="btn btn-primary">OUR ULTRASIGHT TOOL</router-link>
        <a href="#" class="btn btn-secondary">DOWNLOAD BROCHURE</a>
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
              <p class="application-description">{{ app.description }}</p>
            </div>
          </article>
        </div>
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
              The specific features that can be detected depend on the inspection method, asset
              geometry, cleanliness and data quality. Where suitable, inline UT inspection can support
              detection, measurement and mapping of common degradation and geometry-related
              features.
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

    <!-- Integrity decisions -->
    <section class="section section--dark">
      <div class="section-container integrity-grid">
        <div class="integrity-copy">
          <h2 class="section-heading">From inspection data to integrity decisions</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Inspection data only has value when it can support the right engineering decision.
          </p>
          <p class="body-text">
            Findings can then be used to assess remaining life, prioritise maintenance, define
            required repair scope and support continued safe operation or further assessment where
            needed.
          </p>
        </div>
        <div class="workflow-steps">
          <template v-for="(step, index) in workflowSteps" :key="step.title">
            <article class="workflow-step">
              <img :src="step.icon" alt="" class="workflow-icon" aria-hidden="true" />
              <h3 class="workflow-title">{{ step.title }}</h3>
              <p class="workflow-description">{{ step.description }}</p>
            </article>
            <span
              v-if="index < workflowSteps.length - 1"
              class="workflow-arrow"
              aria-hidden="true"
            >→</span>
          </template>
        </div>
      </div>
    </section>

    <!-- What clients receive -->
    <section class="section section--light">
      <div class="section-container deliverables-grid">
        <div class="deliverables-copy">
          <h2 class="section-heading section-heading--dark">What clients receive</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            WASP reporting is designed to give inspection and integrity teams a clear understanding
            of the asset condition and the confidence level of the inspection data. Reports should be
            practical, transparent and useful for decision-making.
          </p>
        </div>
        <div class="deliverables-lists">
          <ul class="check-list">
            <li v-for="item in deliverablesLeft" :key="item">{{ item }}</li>
          </ul>
          <ul class="check-list">
            <li v-for="item in deliverablesRight" :key="item">{{ item }}</li>
          </ul>
        </div>
        <img
          src="/inline-inspection/laptop-reporting.png"
          alt="WASP inspection report software displayed on a laptop"
          class="deliverables-image"
          width="1024"
          height="768"
          decoding="async"
        />
      </div>
    </section>

    <!-- How the inspection works -->
    <section class="section section--dark">
      <div class="section-container process-section-grid">
        <div class="process-intro">
          <h2 class="section-heading">How the inspection works</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Each inspection begins with a review of the asset, the inspection objective and the
            practical conditions that may affect tool selection or data quality. This allows WASP to
            recommend the most suitable approach before mobilisation.
          </p>
        </div>
        <div class="process-flow">
          <div class="process-track" aria-hidden="true"></div>
          <article v-for="step in processSteps" :key="step.number" class="process-card">
            <div class="process-icon-wrap">
              <img :src="step.icon" alt="" class="process-icon" aria-hidden="true" />
              <span class="process-number">{{ step.number }}</span>
            </div>
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-description">{{ step.description }}</p>
          </article>
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
    title: 'Fired heaters',
    description:
      'Inspection of heater coils, bends and associated tubing where remaining wall thickness, localised degradation or fouling-related concerns need to be understood.',
    icon: '/inline-inspection/applications/fired-heaters.png'
  },
  {
    title: 'Transfer lines',
    description:
      'Inspection support for process and utility transfer lines where external inspection access may be limited or where internal condition is uncertain.',
    icon: '/inline-inspection/applications/transfer-lines.png'
  },
  {
    title: 'HRSG boilers',
    description:
      'Condition assessment support for boiler tubing and related assets where wall thickness information is required.',
    icon: '/inline-inspection/applications/hrsg-boilers.png'
  },
  {
    title: 'Process piping',
    description:
      'Inspection of critical plant piping, spools and process lines to support maintenance planning and integrity review.',
    icon: '/inline-inspection/applications/process-piping.png'
  },
  {
    title: 'Pipelines',
    description:
      'Inline inspection data for pipeline sections where anomaly detection, wall thickness measurement and practical integrity reporting are required.',
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

const workflowSteps = [
  {
    title: 'Inspect',
    description: 'Collect UT data from inside the asset using adaptable inspection tooling.',
    icon: '/inline-inspection/inspect.png'
  },
  {
    title: 'Interpret',
    description:
      'Review wall thickness, anomalies, coverage and data confidence with experienced specialists.',
    icon: '/inline-inspection/interpret.png'
  },
  {
    title: 'Advise',
    description: 'Provide practical reporting and recommendations for next steps.',
    icon: '/inline-inspection/advise.png'
  }
]

const deliverablesLeft = [
  'Wall thickness data',
  'Minimum wall readings',
  'Anomaly tables',
  'C-scan or visual outputs (where applicable)',
  'A-scan verification (where applicable)',
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

const processSteps = [
  {
    number: 1,
    title: 'Asset review',
    description:
      "We review drawings, pipe data, previous inspection history and the client's inspection objective.",
    icon: '/inline-inspection/asset-review.png'
  },
  {
    number: 2,
    title: 'Method selection',
    description:
      'We confirm tool suitability, access requirements, cleaning needs and any operational constraints.',
    icon: '/inline-inspection/method-selection.png'
  },
  {
    number: 3,
    title: 'Inspection planning',
    description:
      'We define the launch/retrieval approach, reporting requirements and inspection acceptance criteria.',
    icon: '/inline-inspection/inspection-planning.png'
  },
  {
    number: 4,
    title: 'Tool deployment & data capture',
    description:
      'The inspection is carried out in accordance with the agreed method, with attention to safety, data quality and site practicality.',
    icon: '/inline-inspection/tool-deployment.png'
  },
  {
    number: 5,
    title: 'Data review & reporting',
    description:
      'The data is reviewed, findings are assessed and the client receives a clear report with limitations and recommendations.',
    icon: '/inline-inspection/data-review-step.png'
  }
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
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-lead strong {
  font-weight: var(--font-weight-semibold);
}

.hero-body {
  color: rgba(255, 255, 255, 0.82);
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
    linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  mask-composite: intersect;
}

.inline-inspection-page > :deep(.hero-background .hero-image-wrap::after) {
  background:
    linear-gradient(to bottom, transparent 72%, rgba(10, 10, 10, 0.45) 90%, #0a0a0a 100%),
    linear-gradient(to right, transparent 0%, rgba(10, 10, 10, 0.15) 8%, transparent 20%);
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
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
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
  color: rgba(255, 255, 255, 0.85);
  line-height: var(--leading-copy);
}

.body-text--dark {
  color: rgba(10, 10, 10, 0.82);
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
  text-align: left;
  flex: 1;
}

.application-title {
  color: #e7c73a;
  margin-bottom: 10px;
}

.application-description {
  color: rgba(255, 255, 255, 0.78);
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
  color: rgba(10, 10, 10, 0.82);
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
  color: rgba(255, 255, 255, 0.85);
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

.integrity-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.workflow-steps {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.workflow-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  min-width: 0;
}

.workflow-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.workflow-title {
  color: #ffffff;
  margin: 0;
}

.workflow-description {
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
}

.workflow-arrow {
  flex-shrink: 0;
  align-self: center;
  padding: 0 10px;
  margin-top: 20px;
  color: #e7c73a;
}

.deliverables-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr 1fr;
  gap: 40px;
  align-items: center;
}

.deliverables-lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 32px;
}

.deliverables-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.process-section-grid {
  display: grid;
  grid-template-columns: minmax(240px, 0.85fr) minmax(0, 2.15fr);
  gap: 48px;
  align-items: start;
}

.process-flow {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.process-track {
  position: absolute;
  top: 52px;
  left: 10%;
  right: 10%;
  border-top: 1px dashed rgba(255, 255, 255, 0.22);
  z-index: 0;
}

.process-card {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.process-icon-wrap {
  position: relative;
  width: 104px;
  height: 104px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  background-color: #0a0a0a;
}

.process-number {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #e7c73a;
  color: #0a0a0a;
}

.process-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.process-title {
  color: #ffffff;
  margin: 0 0 8px;
}

.process-description {
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
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
  .integrity-grid,
  .deliverables-grid,
  .uncertainty-grid {
    grid-template-columns: 1fr;
  }

  .workflow-steps {
    flex-direction: column;
    gap: 28px;
    margin-top: 8px;
  }

  .workflow-arrow {
    display: none;
  }

  .process-section-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .process-flow {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 20px;
  }

  .process-track {
    display: none;
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
  .detect-grid,
  .process-flow {
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

  .deliverables-lists {
    grid-template-columns: 1fr;
  }
}
</style>
