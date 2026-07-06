<template>
  <div class="ultrasight-page">
    <!-- 1. Hero -->
    <HeroBackgroundLayout
      header-offset
      theme="light"
      section-class="hero-section"
      image-src="/ultrasight/hero-tool.png"
    >
      <h1 class="hero-title">
        UltraSight
        <span class="hero-title-gold">Modular ILI Tool</span>
      </h1>
      <span class="hero-title-accent" aria-hidden="true"></span>

      <p class="hero-lead">
        A patented, modular inline inspection platform designed to adapt to challenging pipework,
        complex geometries and demanding inspection requirements.
      </p>
      <p class="hero-body">
        UltraSight is WASP's adaptable inline inspection platform. Its modular construction allows
        the tool to be configured around the asset — including bore, bends, internal features, run
        length, location requirements and inspection objective — rather than forcing the asset to
        fit a fixed tool design.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS TOOL SUITABILITY</router-link>
        <a href="#capabilities" class="btn btn-secondary btn-secondary--dark">VIEW CAPABILITIES</a>
      </div>
    </HeroBackgroundLayout>

    <!-- 2. Built to fit -->
    <section class="section section--dark built-section">
      <div class="section-container built-grid">
        <div class="built-copy">
          <h2 class="section-heading">Built to fit the inspection, not the other way around.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Pipeline geometry, access conditions and inspection objectives vary from asset to asset.
            UltraSight's modular design allows the inspection platform to be configured using soft
            alignment brushes, polymer discs or a combination of both, creating the right drive and
            centring arrangement for the bore, bends and internal features of the pipe.
          </p>
          <p class="body-text">
            Add-on modules can then extend capability for location accuracy, run time, battery
            capacity or additional sensing requirements. This allows WASP to reconfigure between
            runs without redesigning the entire inspection platform.
          </p>
        </div>

        <div class="tool-diagram">
          <img
            src="/ultrasight/modular-tool.png"
            alt="UltraSight modular tool showing interchangeable carriage sections"
            class="tool-diagram-image"
          />
        </div>
      </div>
    </section>

    <!-- 3. Modular architecture -->
    <section id="capabilities" class="section section--light modules-section">
      <div class="section-container modules-layout">
        <div class="modules-intro">
          <span class="section-accent section-accent--top" aria-hidden="true"></span>
          <h2 class="section-heading">Modular architecture for changing inspection requirements</h2>
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

    <!-- 4. Pipe geometries -->
    <section class="section section--dark geometries-section">
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

    <!-- 5. Technical capability -->
    <section class="section section--light capability-section">
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

    <!-- 6. DeepPulse -->
    <section class="section section--dark deeppulse-section">
      <div class="section-container deeppulse-grid">
        <div class="deeppulse-copy">
          <span class="section-accent" aria-hidden="true"></span>
          <h2 class="section-heading">DeepPulse data processing</h2>
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
          <router-link to="/contact" class="btn btn-primary deeppulse-btn">EXPLORE DEEPPULSE &gt;</router-link>
          <div class="pipeline-flow">
            <template v-for="(step, index) in pipelineSteps" :key="step.label">
              <div class="pipeline-step">
                <img :src="step.icon" alt="" class="pipeline-icon" aria-hidden="true" />
                <span class="pipeline-label">{{ step.label }}</span>
              </div>
              <span
                v-if="index < pipelineSteps.length - 1"
                class="pipeline-arrow"
                aria-hidden="true"
              >&gt;</span>
            </template>
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
    <section class="section section--light enables-section">
      <div class="section-container enables-grid">
        <div class="enables-copy">
          <span class="section-accent" aria-hidden="true"></span>
          <h2 class="section-heading section-heading--dark">What UltraSight enables</h2>
          <ul class="check-list enables-list">
            <li v-for="item in enables" :key="item">
              <img src="/ultrasight/check-circle.png" alt="" class="check-icon" aria-hidden="true" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="configure-copy">
          <span class="section-accent" aria-hidden="true"></span>
          <h2 class="section-heading section-heading--dark">How we configure UltraSight for your asset</h2>
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
    <section class="cta-section">
      <div class="cta-layout">
        <div class="cta-copy">
          <h2 class="section-heading section-heading--light">
            Need an ILI tool configured for a difficult asset?
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--light">
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
  { label: 'Tube compatibility', value: 'Finned and studded tubes, where suitable' },
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
  background-color: #ffffff;
}

.section {
  padding: 80px 32px;
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-heading {
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 16px;
}

.section-heading--center {
  text-align: center;
}

.section-heading--dark {
  color: #0a0a0a;
}

.section-heading--light {
  color: #ffffff;
}

.section-accent {
  display: block;
  width: 56px;
  height: 5px;
  background-color: #D4AF37;
  margin-bottom: 28px;
}

.section-accent--center {
  margin-left: auto;
  margin-right: auto;
}

.section-intro {
  max-width: 820px;
  margin-bottom: 40px;
}

.section-intro--center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.body-text {
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 20px;
}

.section--light .body-text {
  color: rgba(10, 10, 10, 0.82);
}

.section--dark .body-text {
  color: rgba(255, 255, 255, 0.85);
}

.body-text--light {
  color: rgba(255, 255, 255, 0.88);
}

.body-text:last-child {
  margin-bottom: 0;
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

.btn-secondary--dark {
  color: #0a0a0a;
  border-color: rgba(10, 10, 10, 0.85);
}

.btn-secondary--dark:hover {
  background-color: rgba(10, 10, 10, 0.08);
}

.ultrasight-page > :deep(.hero-background .hero-text) {
  padding: 24px 0 56px;
}

.ultrasight-page > :deep(.hero-layout) {
  min-height: clamp(480px, 62vh, 700px);
}

.ultrasight-page > :deep(.hero-image) {
  min-height: clamp(460px, 62vh, 700px);
  object-fit: contain;
  object-position: right center;
  -webkit-mask-image:
    linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  mask-composite: intersect;
}

.ultrasight-page > :deep(.hero-image-wrap::after) {
  background:
    linear-gradient(to bottom, transparent 72%, rgba(255, 255, 255, 0.45) 90%, #ffffff 100%),
    linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.15) 8%, transparent 20%);
}

@media (max-width: 768px) {
  .ultrasight-page > :deep(.hero-layout) {
    min-height: auto;
  }

  .ultrasight-page > :deep(.hero-background .hero-text) {
    padding: 20px 0 40px;
  }

  .ultrasight-page > :deep(.hero-image) {
    min-height: 300px;
    -webkit-mask-image:
      linear-gradient(to bottom, #000 0%, #000 80%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 12%, #000 30%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to bottom, #000 0%, #000 80%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 12%, #000 30%);
    mask-composite: intersect;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0;
  color: #0a0a0a;
}

.hero-title-gold {
  display: block;
  color: #D4AF37;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-top: 8px;
}

.hero-title-accent {
  display: block;
  width: 64px;
  height: 5px;
  background-color: #D4AF37;
  margin: 18px 0 24px;
}

.hero-lead {
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 20px;
  color: rgba(10, 10, 10, 0.9);
}

.hero-body {
  font-size: 1.02rem;
  line-height: 1.7;
  margin: 0 0 40px;
  color: rgba(10, 10, 10, 0.82);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.built-section .section-heading {
  color: #ffffff;
}

.built-section .body-text {
  color: rgba(255, 255, 255, 0.85);
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

.section-accent--top {
  margin-bottom: 16px;
}

.module-card {
  padding: 0 24px;
  border-left: 1px solid rgba(10, 10, 10, 0.12);
}

.module-card:first-of-type {
  padding-left: 32px;
}

.module-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-bottom: 18px;
}

.module-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0a0a0a;
  margin: 0 0 12px;
  line-height: 1.35;
}

.module-description {
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(10, 10, 10, 0.78);
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
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 4px;
  overflow: hidden;
}

.geometry-image {
  width: 100%;
  aspect-ratio: 1;
  display: block;
  object-fit: contain;
  object-position: center;
  padding: 10px;
}

.geometry-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1.35;
}

.geometry-description {
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
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
  border-left: 1px solid rgba(10, 10, 10, 0.12);
}

.capability-section .spec-row {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  font-size: 0.875rem;
  line-height: 1.35;
}

.capability-section .spec-row dt {
  font-weight: 700;
  color: #0a0a0a;
}

.capability-section .spec-row dd {
  margin: 0;
  color: rgba(10, 10, 10, 0.78);
}

.capability-section .stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 28px;
}

.stat-item {
  text-align: center;
}

.stat-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin: 0 auto 14px;
  display: block;
}

.capability-section .stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a0a0a;
  margin: 0 0 4px;
  line-height: 1.2;
}

.stat-subvalue {
  font-size: 0.78rem;
  color: rgba(10, 10, 10, 0.65);
  margin: 0 0 6px;
  line-height: 1.3;
}

.capability-section .stat-label {
  font-size: 0.82rem;
  color: rgba(10, 10, 10, 0.72);
  line-height: 1.4;
  margin: 0;
}

.deeppulse-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.deeppulse-copy .section-accent {
  margin-bottom: 20px;
}

.deeppulse-subheading {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 18px;
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

.deeppulse-section .pipeline-label {
  color: rgba(255, 255, 255, 0.85);
}

.pipeline-label {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.3;
}

.deeppulse-section .pipeline-arrow {
  color: rgba(255, 255, 255, 0.35);
}

.pipeline-arrow {
  align-self: center;
  margin-top: 12px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1;
}

.deeppulse-visual {
  display: flex;
  justify-content: center;
  align-items: center;
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

.enables-copy .section-heading {
  margin-bottom: 32px;
}

.enables-copy .section-accent,
.configure-copy .section-accent {
  margin-bottom: 20px;
}

.enables-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 40px;
  margin-top: 16px;
}

.enables-list li {
  font-size: 1.1rem;
  line-height: 1.6;
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
  font-size: 0.95rem;
  line-height: 1.55;
  color: rgba(10, 10, 10, 0.82);
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
  font-size: 0.875rem;
}

.config-table th,
.config-table td {
  padding: 6px 12px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid rgba(10, 10, 10, 0.1);
  line-height: 1.35;
}

.config-table thead th {
  font-weight: 700;
  color: #0a0a0a;
  background-color: #f5f0e6;
}

.config-table tbody th {
  font-weight: 700;
  color: #0a0a0a;
  width: 35%;
}

.config-table tbody td {
  font-weight: 400;
  color: rgba(10, 10, 10, 0.78);
}

.enables-section .enables-list li {
  color: rgba(10, 10, 10, 0.82);
}

.cta-section {
  background-color: #0a0a0a;
  overflow: hidden;
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
  padding: 64px 48px 60px max(32px, calc((100vw - 1400px) / 2 + 32px));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.cta-section .section-accent {
  margin-bottom: 24px;
}

.cta-copy .body-text {
  margin-bottom: 32px;
}

.cta-copy .btn {
  align-self: flex-start;
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
    #0a0a0a 0%,
    rgba(10, 10, 10, 0.85) 35%,
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
    padding: 48px 32px 32px;
    text-align: left;
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
      #0a0a0a 0%,
      rgba(10, 10, 10, 0.85) 35%,
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
    justify-content: center;
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
    border-top: 1px solid rgba(10, 10, 10, 0.12);
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
    border-left: 1px solid rgba(10, 10, 10, 0.12);
  }

  .geometries-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .tool-diagram {
    display: block;
  }
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
    text-align: center;
  }

  .section {
    padding: 48px 16px;
  }

  .modules-layout {
    grid-template-columns: 1fr;
  }

  .module-card,
  .module-card:nth-of-type(3),
  .module-card:nth-of-type(4) {
    border-left: none;
    padding-left: 0;
    padding-right: 0;
    border-top: 1px solid rgba(10, 10, 10, 0.12);
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
    grid-template-columns: repeat(2, 1fr);
  }

  .capability-section .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .capability-section .spec-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .enables-list {
    grid-template-columns: 1fr;
  }

  .pipeline-flow {
    max-width: none;
  }

  .cta-copy {
    padding: 48px 16px 24px;
  }

  .cta-image-panel {
    min-height: 220px;
  }
}
</style>
