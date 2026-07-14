<template>
  <div class="ultrasight-page">
    <!-- 1. Hero -->
    <HeroBackgroundLayout
      header-offset
      section-class="hero-section"
      image-src="/ultrasight/hero-tool.png"
    >
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        UltraSight
        <span class="hero-title-gold">Modular ILI Tool</span>
      </h1>

      <p class="hero-lead">
        A patent pending, modular inline inspection platform designed to adapt to challenging pipework,
        complex geometries and demanding inspection requirements.
      </p>
      <p class="hero-body">
        UltraSight is WASP’s adaptable inline inspection platform, designed to capture high-density ultrasonic data in pipelines, fired heaters and complex process assets. Its modular construction allows the tool to be configured around diameter, bend geometry, drive method, inspection length and reporting objective; giving clients reliable inspection data where standard tools may not be suitable.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS TOOL SUITABILITY</router-link>
        <a
          href="/ultrasight/UltraSight-Spec-Sheet.pdf"
          class="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD SPEC SHEET
        </a>
      </div>
    </HeroBackgroundLayout>

    <!-- 2. Technical capability -->
    <section class="section section--dark capability-section">
      <div class="section-container capability-grid">
        <div class="capability-specs">
          <h2 class="section-heading">Technical capability</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <dl class="spec-list">
            <div v-for="spec in technicalSpecs" :key="spec.label" class="spec-row">
              <dt>{{ spec.label }}</dt>
              <dd>{{ spec.value }}</dd>
            </div>
          </dl>
        </div>
        <div class="capability-accuracy">
          <h2 class="section-heading">Accuracy you can rely on</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            UltraSight is designed to provide repeatable ultrasonic inspection data suitable for
            condition assessment, anomaly detection and integrity review.
          </p>
          <div class="stats-grid">
            <div v-for="stat in accuracyStats" :key="stat.label" class="stat-item">
              <img :src="stat.icon" alt="" class="stat-icon" aria-hidden="true" />
              <p class="stat-value">{{ stat.value }}</p>
              <p v-if="stat.subvalue" class="stat-subvalue">{{ stat.subvalue }}</p>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Built to fit -->
    <section class="section section--light built-section">
      <div class="section-container built-grid">
        <div class="built-copy">
          <h2 class="section-heading">One run. The full picture.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            UltraSight swims untethered through 3–12" pipework, takes short-radius 1D bends, passes unbarred tees, and handles finned and studded tubes — geometry that stops conventional ILI tools at the launch door. It maps wall thickness to ±0.1mm, locates every reading to within 50mm, and runs bi-directionally so restricted access isn't a dead end.
          </p>
        </div>

        <div class="tool-diagram">
          <img
            src="/ultrasight/modular-tool.png"
            alt="UltraSight modular inline inspection tool with brush drive sections and central sensor array"
            class="tool-diagram-image"
          />
        </div>
      </div>
    </section>

    <!-- 4. Modular architecture -->
    <section id="capabilities" class="section section--dark modules-section">
      <div class="section-container modules-layout">
        <div class="modules-intro">
          <h2 class="section-heading">Modular architecture for changing inspection requirements</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            UltraSight is designed around interchangeable modules that allow the inspection setup to
            be tailored to the asset and inspection objective. The same platform can be adapted for
            different drive, centring, battery, location and sensing requirements, reducing the need
            for bespoke tool redesign between projects.
          </p>
        </div>
        <article v-for="module in modules" :key="module.title" class="module-card">
          <img :src="module.icon" alt="" class="module-icon" aria-hidden="true" />
          <h3 class="module-title">{{ module.title }}</h3>
          <p class="module-description">{{ module.description }}</p>
        </article>
      </div>
    </section>

    <!-- 5. Pipe geometries -->
    <section class="section section--light geometries-section">
      <div class="section-container geometries-layout">
        <h2 class="section-heading">Designed for difficult pipe geometries</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <p class="body-text geometries-intro">
          UltraSight is intended for assets where conventional ILI tools may struggle with passage,
          centring or configuration.
        </p>
        <div class="geometries-grid">
          <article v-for="item in geometries" :key="item.title" class="geometry-item">
            <div class="geometry-media">
              <img :src="item.image" alt="" class="geometry-image" aria-hidden="true" />
            </div>
            <h3 class="geometry-title">{{ item.title }}</h3>
            <p class="geometry-description">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 6. DeepPulse -->
    <section class="section section--light deeppulse-section" id="deeppulse">
      <div class="section-container deeppulse-grid">
        <div class="deeppulse-copy">
          <h2 class="section-heading">DeepPulse data processing</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="deeppulse-subheading">
            From raw inspection data to clear, actionable reporting.
          </p>
          <p class="body-text">
            DeepPulse is WASP's in-house data processing engine. From the moment data is downloaded
            from the pig, DeepPulse handles mapping, filtering, analysis, visualisation and report
            generation within a single automated workflow.
          </p>
          <p class="body-text">
            This reduces the manual handling normally associated with large inspection datasets and
            helps produce faster, more consistent reports that can be reviewed and acted on with
            confidence.
          </p>
          <div class="pipeline-flow">
            <div class="pipeline-row">
              <template v-for="(step, index) in pipelineSteps.slice(0, 3)" :key="step.label">
                <div class="pipeline-step">
                  <img :src="step.icon" alt="" class="pipeline-icon" aria-hidden="true" />
                  <span class="pipeline-label">{{ step.label }}</span>
                </div>
                <span
                  v-if="index < 2"
                  class="pipeline-arrow"
                  aria-hidden="true"
                >&gt;</span>
              </template>
            </div>
            <div class="pipeline-row">
              <template v-for="(step, index) in pipelineSteps.slice(3)" :key="step.label">
                <div class="pipeline-step">
                  <img :src="step.icon" alt="" class="pipeline-icon" aria-hidden="true" />
                  <span class="pipeline-label">{{ step.label }}</span>
                </div>
                <span
                  v-if="index < pipelineSteps.slice(3).length - 1"
                  class="pipeline-arrow"
                  aria-hidden="true"
                >&gt;</span>
              </template>
            </div>
          </div>
        </div>
        <div class="deeppulse-visual">
          <img
            src="/ultrasight/deeppulse-laptop.png"
            alt="DeepPulse inspection report displayed on laptop"
            class="deeppulse-laptop"
            width="1024"
            height="768"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- 7. Enables & configure -->
    <section class="section section--dark enables-section">
      <div class="section-container enables-grid">
        <div class="enables-copy">
          <h2 class="section-heading">What UltraSight enables</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <ul class="check-list enables-list">
            <li v-for="item in enables" :key="item">
              <img src="/ultrasight/check-circle.png" alt="" class="check-icon" aria-hidden="true" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="configure-copy">
          <h2 class="section-heading">How we configure UltraSight for your asset</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Before confirming the inspection approach, WASP reviews the asset geometry, access
            conditions, operating constraints and inspection objective. This allows the tool
            configuration to be selected around the actual line rather than relying on a standard
            setup.
          </p>
          <div class="config-table-wrap">
            <table class="config-table">
              <thead>
                <tr>
                  <th scope="col">Input</th>
                  <th scope="col">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in configRows" :key="row.input">
                  <th scope="row">{{ row.input }}</th>
                  <td>{{ row.why }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Footer CTA -->
    <section class="cta-section section--light">
      <div class="cta-layout">
        <div class="cta-copy">
          <h2 class="section-heading section-heading--dark">
            Need an ILI tool configured for a difficult asset?
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Send us your pipe details, drawings or inspection objective and we'll advise how
            UltraSight can be configured for the application.
          </p>
          <router-link to="/contact" class="btn btn-primary">DISCUSS ULTRASIGHT &gt;</router-link>
        </div>
        <div class="cta-image-panel" aria-hidden="true">
          <img
            src="/ultrasight/cta-refinery.png"
            alt=""
            class="cta-image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'

const modules = [
  {
    title: 'Advanced IMU module',
    description:
      'A 9DOF IMU with sensor fusion and odometer wheels for applications requiring improved location accuracy. Outputs can be provided as XYZ cartesian data or interactive map overlays.',
    icon: '/ultrasight/imu-module.png'
  },
  {
    title: 'Battery modules',
    description:
      'Additional battery capacity can extend run time and support longer pipeline runs and more demanding inspection objectives.',
    icon: '/ultrasight/battery-module.png'
  },
  {
    title: 'Sensor modules',
    description:
      'Sensor modules can be selected or added to suit specific inspection requirements and provide the right data for the job.',
    icon: '/ultrasight/sensor-module.png'
  }
]

const geometries = [
  {
    title: 'Short-radius 1D bends',
    description: 'Navigate tight bends with short centre-line radius.',
    image: '/ultrasight/geometry-short-radius-1d-bends.png'
  },
  {
    title: 'Unbarred tees',
    description: 'Pass through unbarred tees in multiple orientations.',
    image: '/ultrasight/geometry-unbarred-tees.png'
  },
  {
    title: 'Back-to-back bends',
    description: 'Maintain stability through complex bend sequences.',
    image: '/ultrasight/geometry-back-to-back-bends.png'
  },
  {
    title: 'Diameter changes',
    description: 'Handle reductions and increases in bore.',
    image: '/ultrasight/geometry-diameter-changes.png'
  },
  {
    title: 'Bore restrictions',
    description: 'Inspect through localised bore restrictions.',
    image: '/ultrasight/geometry-bore-restrictions.png'
  }
]

const technicalSpecs = [
  { label: 'Diameter range', value: '3 to 12 inch / 75 to 300 mm' },
  { label: 'Construction', value: 'Aerospace-grade 7068 aluminium' },
  { label: 'Deployment', value: 'Untethered' },
  { label: 'Direction', value: 'Bi-directional' },
  { label: 'Bend capability', value: 'Short-radius 1D bends' },
  { label: 'Pipe compatibility', value: 'Finned and studded tubes, where suitable' },
  {
    label: 'Drive / centring',
    value: 'Brushes, polymer discs or combined configuration'
  },
  {
    label: 'Location module',
    value: '9DOF IMU with sensor fusion and odometer wheels'
  },
  {
    label: 'Mapping output',
    value: 'XYZ cartesian data or interactive mapping overlay'
  }
]

const accuracyStats = [
  {
    value: '±0.1mm',
    label: 'Measurement accuracy',
    icon: '/ultrasight/accuracy-measurement.png'
  },
  {
    value: '±50mm',
    label: 'Axial location accuracy',
    icon: '/ultrasight/accuracy-axial-location.png'
  },
  {
    value: '4 mm',
    subvalue: 'at 95% POD',
    label: 'Probability of detection',
    icon: '/ultrasight/accuracy-pod.png'
  },
  {
    value: '60MHz',
    label: 'Sampling frequency',
    icon: '/ultrasight/accuracy-sampling.png'
  }
]

const pipelineSteps = [
  { label: 'Mapping', icon: '/ultrasight/deeppulse-mapping.png' },
  { label: 'Filtering', icon: '/ultrasight/deeppulse-filtering.png' },
  { label: 'Analysis', icon: '/ultrasight/deeppulse-analysis.png' },
  { label: 'Visualisation', icon: '/ultrasight/deeppulse-visualisation.png' },
  { label: 'Report generation', icon: '/ultrasight/deeppulse-report.png' }
]

const enables = [
  'Inspection of difficult-access assets',
  'Reduced need for bespoke tool redesign',
  'Faster reconfiguration between runs',
  'Improved location accuracy where required',
  'Support for interactive reporting and data visualisation',
  'Greater confidence in inspection planning'
]

const configRows = [
  {
    input: 'Internal diameter',
    why: 'Determines tool body and centring setup'
  },
  {
    input: 'Bend radius',
    why: 'Confirms passage and flexibility requirements'
  },
  {
    input: 'Length',
    why: 'Determines battery and run-time requirements'
  },
  {
    input: 'Access points',
    why: 'Defines launch and retrieval approach'
  },
  {
    input: 'Diameter changes',
    why: 'Affects module and drive configuration'
  },
  {
    input: 'Internal features',
    why: 'May require brushes, discs or hybrid setup'
  },
  {
    input: 'Location requirement',
    why: 'Determines IMU/odometer configuration'
  },
  {
    input: 'Inspection objective',
    why: 'Determines sensor and reporting setup'
  }
]
</script>

<style scoped>
.ultrasight-page {
  background-color: #0a0a0a;
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.section-heading--dark {
  color: #0a0a0a;
}

.section-heading--light {
  color: #ffffff;
}

.section-accent--center {
  margin-left: 0;
  margin-right: auto;
}

.section-intro {
  max-width: 820px;
  margin-bottom: 40px;
}

.section-intro--center {
  margin-left: 0;
  margin-right: auto;
  text-align: left;
}

.body-text {
  line-height: var(--leading-copy);
}

.section--light .body-text {
  color: var(--color-text-body-on-light);
}

.section--dark .body-text {
  color: var(--color-text-body);
}

.body-text--light {
  color: var(--color-text-body);
}

.body-text:last-child {
  margin-bottom: 0;
}

.ultrasight-page > :deep(.hero-background .hero-layout > .hero-copy) {
  padding: 24px 0 56px;
}

.ultrasight-page > :deep(.hero-background .hero-layout) {
  min-height: clamp(420px, 56vh, 620px);
}

.ultrasight-page > :deep(.hero-background .hero-image-wrap) {
  margin-top: clamp(48px, 3rem + 1vw, 72px);
}

.ultrasight-page > :deep(.hero-background .hero-image) {
  min-height: clamp(380px, 56vh, 580px);
  object-fit: contain;
  object-position: right top;
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  mask-composite: intersect;
}

.ultrasight-page > :deep(.hero-background .hero-image-wrap::after) {
  background:
    linear-gradient(to right, #0a0a0a 0%, transparent 3%, transparent 97%, #0a0a0a 100%),
    linear-gradient(to bottom, #0a0a0a 0%, transparent 4%, transparent 94%, #0a0a0a 100%);
}

@media (max-width: 768px) {
  .ultrasight-page > :deep(.hero-background .hero-layout) {
    min-height: auto;
  }

  .ultrasight-page > :deep(.hero-background .hero-layout > .hero-copy) {
    padding: 20px var(--site-gutter) 28px;
  }

  .ultrasight-page > :deep(.hero-background .hero-image-wrap) {
    margin-top: 0;
  }

  .ultrasight-page > :deep(.hero-background .hero-image) {
    min-height: 0;
    max-height: min(52vh, 420px);
    object-position: top center;
    -webkit-mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
    mask-composite: intersect;
  }
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
}

.hero-lead {
  color: var(--color-text-lead);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-body {
  color: var(--color-text-secondary);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.built-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 48px;
  align-items: center;
}

.tool-diagram {
  position: relative;
  width: 100%;
}

.tool-diagram-image {
  width: 100%;
  height: auto;
  display: block;
}

.modules-layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  align-items: start;
}

.modules-intro {
  grid-column: span 2;
  padding-right: 40px;
}

.module-card {
  padding: 0 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  text-align: center;
}

.module-card:first-of-type {
  padding-left: 32px;
}

.module-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin: 0 auto 18px;
}

.section--dark .module-title {
  color: #ffffff;
}

.section--dark .module-description {
  color: var(--color-text-muted);
}

.section--light .module-title {
  color: #0a0a0a;
}

.section--light .module-description {
  color: rgba(10, 10, 10, 0.78);
}

.module-title {
  margin: 0 0 12px;
}

.module-description {
  margin: 0;
}

.geometries-layout {
  text-align: left;
}

.geometries-intro {
  max-width: 720px;
  margin-bottom: 40px;
}

.geometries-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.geometry-item {
  text-align: center;
}

.geometry-media {
  margin-bottom: 16px;
  background-color: #f2f2f2;
}

.geometry-image {
  width: 100%;
  aspect-ratio: 1;
  display: block;
  object-fit: contain;
  object-position: center;
  padding: 0;
  background-color: #f2f2f2;
}

.section--dark .geometry-title {
  color: #ffffff;
}

.section--dark .geometry-description {
  color: var(--color-text-legal);
}

.section--light .geometry-title {
  color: #0a0a0a;
}

.section--light .geometry-description {
  color: rgba(10, 10, 10, 0.72);
}

.geometry-title {
  margin: 0 0 8px;
}

.geometry-description {
  margin: 0;
}

.capability-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.capability-accuracy {
  padding-left: 48px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.section--light .capability-accuracy {
  border-left-color: rgba(10, 10, 10, 0.12);
}

.capability-section .spec-row {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.section--light.capability-section .spec-row {
  border-bottom-color: rgba(10, 10, 10, 0.1);
}

.capability-section .spec-row dt {
  font-weight: var(--font-weight-bold);
  color: #ffffff;
}

.capability-section .spec-row dd {
  margin: 0;
  color: var(--color-text-muted);
}

.section--light.capability-section .spec-row dt {
  color: #0a0a0a;
}

.section--light.capability-section .spec-row dd {
  color: rgba(10, 10, 10, 0.78);
}

.capability-section .stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 28px;
}

.stat-item {
  text-align: left;
}

.stat-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin: 0 auto 14px;
  display: block;
}

.capability-section .stat-value {
  color: #ffffff;
  margin: 0 0 4px;
}

.section--light.capability-section .stat-value {
  color: #0a0a0a;
}

.stat-subvalue {
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 6px;
}

.section--light.capability-section .stat-subvalue {
  color: rgba(10, 10, 10, 0.65);
}

.capability-section .stat-label {
  color: var(--color-text-legal);
  margin: 0;
}

.section--light.capability-section .stat-label {
  color: rgba(10, 10, 10, 0.72);
}

.deeppulse-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.deeppulse-subheading {
  color: rgba(10, 10, 10, 0.9);
}

.section--dark .deeppulse-subheading {
  color: var(--color-text-lead);
}

.deeppulse-btn {
  margin-top: 8px;
}

.pipeline-flow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  margin-top: 32px;
}

.pipeline-row {
  display: contents;
}

.pipeline-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  width: 72px;
}

.pipeline-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.pipeline-label {
  color: var(--color-text-body-on-light);
}

.section--dark .pipeline-label {
  color: var(--color-text-body);
}

.pipeline-arrow {
  align-self: center;
  margin-top: 12px;
  color: rgba(10, 10, 10, 0.35);
}

.section--dark .pipeline-arrow {
  color: rgba(255, 255, 255, 0.35);
}

.deeppulse-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
}

.deeppulse-section .body-text {
  margin-bottom: 16px;
}

.deeppulse-laptop {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.enables-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.enables-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
  margin-top: 16px;
}

.enables-list li {
  margin-bottom: 20px;
}

.enables-list .check-icon {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}

.spec-list {
  margin: 0;
}


.check-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.check-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.section--dark .check-list li {
  color: var(--color-text-body);
}

.section--light .check-list li {
  color: var(--color-text-body-on-light);
}

.check-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  object-fit: contain;
}

.config-table-wrap {
  overflow-x: auto;
  margin-top: 8px;
}

.config-table {
  width: 100%;
  border-collapse: collapse;
}

.config-table th,
.config-table td {
  padding: 6px 12px;
  text-align: left;
  vertical-align: top;
}

.config-table thead th {
  font-weight: var(--font-weight-bold);
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.08);
}

.config-table tbody th {
  font-weight: var(--font-weight-bold);
  color: #ffffff;
  width: 35%;
}

.config-table tbody td {
  font-weight: var(--font-weight-regular);
  color: var(--color-text-muted);
}

.config-table th,
.config-table td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.section--light .config-table thead th {
  color: #0a0a0a;
  background-color: #f5f0e6;
}

.section--light .config-table tbody th {
  color: #0a0a0a;
}

.section--light .config-table tbody td {
  color: rgba(10, 10, 10, 0.78);
}

.section--light .config-table th,
.section--light .config-table td {
  border-bottom-color: rgba(10, 10, 10, 0.1);
}

.section--dark .enables-list li {
  color: var(--color-text-body);
}

.section--light .enables-list li {
  color: var(--color-text-body-on-light);
}

.cta-section {
  background-color: #f2f2f2;
  overflow: hidden;
}

.cta-section.section--light {
  color: #0a0a0a;
}

.cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.cta-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 60px max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.cta-copy .body-text {
  margin-bottom: 32px;
}

.cta-copy .btn {
  align-self: stretch;
}

.cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
}

.cta-image-panel::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: min(120px, 18%);
  background: linear-gradient(
    to right,
    #f2f2f2 0%,
    rgba(242, 242, 242, 0.85) 35%,
    transparent 100%
  );
  z-index: 1;
  pointer-events: none;
}

.cta-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

@media (max-width: 900px) {
  .cta-layout {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .cta-copy {
    max-width: none;
    padding: 48px var(--site-gutter) 32px;
    align-items: flex-start;
  }

  .cta-image-panel {
    min-height: 280px;
  }

  .cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(
      to bottom,
      #f2f2f2 0%,
      rgba(242, 242, 242, 0.85) 35%,
      transparent 100%
    );
  }
}

@media (max-width: 1024px) {
  .built-grid,
  .capability-grid,
  .deeppulse-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .pipeline-flow {
    justify-content: flex-start;
    gap: 8px 4px;
  }

  .enables-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .capability-accuracy {
    padding-left: 0;
    border-left: none;
    padding-top: 32px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .section--light.capability-section .capability-accuracy {
    border-top-color: rgba(10, 10, 10, 0.12);
  }

  .capability-section .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .modules-layout {
    grid-template-columns: repeat(3, 1fr);
  }

  .modules-intro {
    grid-column: 1 / -1;
    padding-right: 0;
    margin-bottom: 32px;
  }

  .module-card {
    border-top: none;
    padding: 0 16px;
  }

  .module-card:first-of-type {
    padding-left: 0;
    border-left: none;
  }

  .module-card:nth-of-type(3),
  .module-card:nth-of-type(4) {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
  }

  .geometries-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tool-diagram {
    display: block;
  }
}

@media (max-width: 768px) {
  .modules-layout {
    grid-template-columns: 1fr;
  }

  .module-card,
  .module-card:nth-of-type(3),
  .module-card:nth-of-type(4) {
    border-left: none;
    padding-left: 0;
    padding-right: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 28px;
  }

  .module-card:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  .module-card:nth-of-type(4) {
    grid-column: auto;
  }

  .geometries-grid {
    grid-template-columns: 1fr;
  }

  .capability-section .stats-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .stat-item {
    display: grid;
    grid-template-columns: 48px 1fr;
    column-gap: 14px;
    align-items: start;
    text-align: left;
  }

  .stat-icon {
    grid-column: 1;
    grid-row: 1 / -1;
    margin: 0;
    object-position: left top;
  }

  .stat-value,
  .stat-subvalue,
  .stat-label {
    grid-column: 2;
  }

  .capability-section .spec-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .enables-list {
    grid-template-columns: 1fr;
  }

  .pipeline-flow {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;
  }

  .pipeline-row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 8px 4px;
    flex-wrap: nowrap;
  }

  .cta-copy {
    padding-bottom: 24px;
  }

  .cta-image-panel {
    min-height: 220px;
  }
}
</style>
