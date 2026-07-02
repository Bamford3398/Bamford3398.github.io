<template>
  <div class="ultrasight-page">
    <!-- 1. Hero -->
    <HeroBackgroundLayout header-offset section-class="hero-section">
      <h1 class="hero-title">
        UltraSight
        <span class="hero-title-gold">Modular ILI Tool</span>
      </h1>
      <span class="hero-title-accent" aria-hidden="true"></span>

      <p class="hero-lead">
        A patented, modular inline inspection platform designed to adapt to challenging pipework,
        complex geometries and demanding inspection requirements.
      </p>
      <p class="hero-text">
        UltraSight is WASP's adaptable inline inspection platform. Its modular construction allows
        the tool to be configured around the asset — including bore, bends, internal features, run
        length, location requirements and inspection objective — rather than forcing the asset to
        fit a fixed tool design.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS TOOL SUITABILITY</router-link>
        <a href="#capabilities" class="btn btn-secondary">VIEW CAPABILITIES</a>
      </div>
    </HeroBackgroundLayout>

    <!-- 2. Built to fit — light -->
    <section class="section section--light built-section">
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
    <section id="capabilities" class="section section--dark modules-section">
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
    <section class="section section--light geometries-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--dark">Designed for difficult pipe geometries</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <p class="body-text body-text--dark geometries-intro">
          UltraSight is intended for assets where conventional ILI tools may struggle with passage,
          centring or configuration.
        </p>
        <div class="geometries-grid">
          <article v-for="item in geometries" :key="item.title" class="geometry-item">
            <div class="geometry-media">
              <div class="geometry-placeholder" aria-hidden="true"></div>
              <img :src="item.icon" alt="" class="geometry-icon" aria-hidden="true" />
            </div>
            <h3 class="geometry-title">{{ item.title }}</h3>
            <p class="geometry-description">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 5. Technical capability -->
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

    <!-- 6. DeepPulse -->
    <section class="section section--light deeppulse-section">
      <div class="section-container deeppulse-grid">
        <div class="deeppulse-copy">
          <span class="section-accent" aria-hidden="true"></span>
          <h2 class="section-heading section-heading--dark">DeepPulse data processing</h2>
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
    <HeroBackgroundLayout section-class="cta-section">
      <h2 class="section-heading section-heading--light">
        Need an ILI tool configured for a difficult asset?
      </h2>
      <span class="section-accent" aria-hidden="true"></span>
      <p class="body-text body-text--light">
        Send us your pipe details, drawings or inspection objective and we'll advise how
        UltraSight can be configured for the application.
      </p>
      <router-link to="/contact" class="btn btn-primary">DISCUSS ULTRASIGHT &gt;</router-link>
    </HeroBackgroundLayout>
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
    icon: '/ultrasight/geometry-short-radius-1d-bends.svg'
  },
  {
    title: 'Unbarred tees',
    description: 'Pass through unbarred tees in multiple orientations.',
    icon: '/ultrasight/geometry-unbarred-tees.svg'
  },
  {
    title: 'Back-to-back bends',
    description: 'Maintain stability through complex bend sequences.',
    icon: '/ultrasight/geometry-back-to-back-bends.svg'
  },
  {
    title: 'Diameter changes',
    description: 'Handle reductions and increases in bore.',
    icon: '/ultrasight/geometry-diameter-changes.svg'
  },
  {
    title: 'Bore restrictions',
    description: 'Inspect through localised bore restrictions.',
    icon: '/ultrasight/geometry-bore-restrictions.svg'
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

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0;
  color: #ffffff;
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
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
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-text {
  font-size: 1.02rem;
  line-height: 1.7;
  margin-bottom: 28px;
  color: rgba(255, 255, 255, 0.82);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.built-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 48px;
  align-items: center;
}

.built-section .section-heading {
  color: #0a0a0a;
}

.built-section .body-text {
  color: rgba(10, 10, 10, 0.82);
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
  border-left: 1px solid rgba(255, 255, 255, 0.12);
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
  color: #ffffff;
  margin: 0 0 12px;
  line-height: 1.35;
}

.module-description {
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
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
  position: relative;
  margin-bottom: 16px;
}

.geometry-placeholder {
  aspect-ratio: 1;
  background: linear-gradient(135deg, #e8e8e8 0%, #f4f4f4 50%, #e0e0e0 100%);
  border: 1px solid rgba(10, 10, 10, 0.08);
  border-radius: 4px;
}

.geometry-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 56%;
  height: 56%;
  transform: translate(-50%, -50%);
  object-fit: contain;
}

.geometry-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0a0a0a;
  margin: 0 0 8px;
  line-height: 1.35;
}

.geometry-description {
  font-size: 0.82rem;
  line-height: 1.5;
  color: rgba(10, 10, 10, 0.72);
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

.capability-section .spec-row {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  line-height: 1.35;
}

.capability-section .spec-row dt {
  font-weight: 700;
  color: #ffffff;
}

.capability-section .spec-row dd {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
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
  color: #ffffff;
  margin: 0 0 4px;
  line-height: 1.2;
}

.stat-subvalue {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 6px;
  line-height: 1.3;
}

.capability-section .stat-label {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.4;
  margin: 0;
}

.deeppulse-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.deeppulse-copy .section-accent {
  margin-bottom: 20px;
}

.deeppulse-subheading {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5;
  color: #0a0a0a;
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

.pipeline-label {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(10, 10, 10, 0.75);
  line-height: 1.3;
}

.pipeline-arrow {
  align-self: center;
  margin-top: 12px;
  font-size: 0.85rem;
  color: rgba(10, 10, 10, 0.35);
  line-height: 1;
}

.deeppulse-visual {
  display: flex;
  justify-content: center;
  align-items: center;
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

.cta-section .section-heading--light {
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.cta-section .section-accent {
  margin-bottom: 24px;
}

.cta-section .body-text {
  margin-bottom: 32px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
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
    border-top: 1px solid rgba(255, 255, 255, 0.12);
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
}
</style>
