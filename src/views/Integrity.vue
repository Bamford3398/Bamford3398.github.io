<template>
  <div class="integrity-page">
    <!-- Hero -->
    <HeroBackgroundLayout
      header-offset
      section-class="hero-section"
      image-src="/integrity/hero.png"
    >
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        INTEGRITY
        <span class="hero-title-gold">ASSESSMENT</span>
      </h1>

      <p class="hero-lead">
        Level 1, 2 and 3 Fitness for Service assessments to API 579-1 / ASME FFS-1 - a clear, defensible answer on ageing or damaged equipment: run, repair, or replace.”
      </p>
      <p class="hero-text">
        Inspection tells you what condition your asset is in. Integrity assessment tells you what to do about it. WASP assesses whether ageing or damaged pressure equipment, piping and pipelines are fit for continued operation — and on what terms — backed by full engineering justification.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS AN ASSESSMENT</router-link>
        <router-link to="/contact" class="btn btn-secondary">DOWNLOAD OUR BROCHURE</router-link>
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

    <!-- Findings -->
    <section class="section section--light findings-section">
      <div class="section-container findings-grid">
        <div class="findings-copy">
          <h2 class="section-heading section-heading--dark">
            Inspection findings only matter when they support the right decision.
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            Wall thickness data, C-scans and anomaly tables are only the starting point. Operators
            still need to understand which findings are significant, whether the asset can continue
            operating, what needs repair, and where further investigation is justified.
          </p>
          <p class="body-text body-text--dark">
            ASME B31.3 was written primarily for the design and construction of process piping, not
            for assessing degraded equipment in service. API 579-1/ASME FFS-1, by contrast, was
            specifically developed to evaluate the fitness-for-service of existing pressure equipment
            containing corrosion, cracks, and other damage mechanisms, allowing engineers to
            determine whether continued operation, repair, or replacement is appropriate.
          </p>
          <p class="body-text body-text--dark">
            An UltraSight inspection generates exactly the high-density data FFS analysis depends on —
            every defect captured in DeepPulse feeds the assessment with position and dimensions
            already established. Integrity is also available standalone: we routinely assess data
            from third-party pigging, handheld UT surveys and historical inspection records.
          </p>
        </div>
        <img
          src="/integrity/findings.png"
          alt="3D C-scan condition visualisation of pipe bend with wall thickness heatmap"
          class="findings-image"
          width="1024"
          height="768"
          decoding="async"
        />
      </div>
    </section>

    <!-- What we do -->
    <section class="section section--dark what-we-do-section">
      <div class="section-container">
        <p class="eyebrow">WHAT WE ASSESS</p>
        <h2 class="section-heading">From raw inspection data to asset condition insight.</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <p class="body-text section-intro">
          Integrity assessment should reduce uncertainty. The aim is to convert inspection results
          into a clear understanding of condition, severity, confidence and the practical next step.
        </p>
        <div class="service-cards-grid">
          <article v-for="card in serviceCards" :key="card.title" class="service-card">
            <img :src="card.icon" alt="" class="service-card-icon" aria-hidden="true" />
            <h3 class="service-card-title">{{ card.title }}</h3>
            <p class="service-card-description">{{ card.description }}</p>
          </article>
        </div>
        <p class="damage-mechanisms-note">
          Damage mechanisms assessed: general and local metal loss, pitting, gouges and dents, weld
          misalignment and shell distortion, crack-like flaws, creep, hydrogen damage (HIC and SOHIC),
          laminations, and fire damage.
        </p>
      </div>
    </section>

    <!-- Process -->
    <section class="section section--light process-section">
      <div class="section-container process-section-grid">
        <div class="process-intro">
          <p class="eyebrow">ASSESSMENT WORKFLOW</p>
          <h2 class="section-heading section-heading--dark">
            How inspection data becomes a recommendation.
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            The process should be transparent. Each assessment step narrows the question from “what
            did the inspection find?” to “what action is required?”
          </p>
        </div>
        <div class="process-flow process-flow--light">
          <article v-for="step in processSteps" :key="step.number" class="process-card process-card--light">
            <div class="process-icon-wrap process-icon-wrap--light">
              <img :src="step.icon" alt="" class="process-icon" aria-hidden="true" />
              <span class="process-number">{{ step.number }}</span>
            </div>
            <h3 class="process-title process-title--dark">{{ step.title }}</h3>
            <p class="process-description process-description--dark">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Engineering assessment -->
    <section class="section section--dark assessment-section">
      <div class="section-container">
        <p class="eyebrow">FITNESS-FOR-SERVICE AND REMAINING LIFE</p>
        <h2 class="section-heading">Level 1, 2, 3 – we carry out all three.</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <div class="assessment-grid">
          <div class="assessment-copy">
            <p class="body-text">
              Level 1 is a conservative screening using the code's standard tables — quick, and suited to straightforward damage. Level 2 applies detailed stress analysis where Level 1 can't give an acceptable result. Level 3 uses advanced numerical methods including finite element analysis, for complex damage or high-value assets where Levels 1 and 2 would be overly restrictive. We start with the most efficient level that fits the case and escalate only where the damage mechanism demands it.
            </p>
          </div>
          <dl class="assessment-questions">
            <div v-for="item in assessmentQuestions" :key="item.question" class="assessment-row">
              <dt class="assessment-question">{{ item.question }}</dt>
              <dd class="assessment-answer">{{ item.answer }}</dd>
            </div>
          </dl>
        </div>
        <ul class="standards-list" aria-label="Relevant standards and guidance">
          <li v-for="standard in standards" :key="standard.title" class="standards-item">
            <span class="standards-title">{{ standard.title }}</span>
            <span class="standards-subtitle">{{ standard.subtitle }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- What clients receive -->
    <section class="section section--light deliverables-section">
      <div class="section-container deliverables-grid">
        <div class="deliverables-copy">
          <h2 class="section-heading section-heading--dark">What clients receive</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            Reporting is designed to be useful to inspection and integrity teams — clear on the
            findings, clear on confidence, and clear on the recommended next step.
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
          src="/integrity/hero-laptop.png"
          alt="Integrity assessment report with pipe condition visualisation displayed on laptop"
          class="deliverables-image"
          width="1024"
          height="768"
          decoding="async"
        />
      </div>
    </section>

    <!-- Information we need -->
    <section class="section section--dark info-section">
      <div class="section-container info-grid">
        <div class="info-copy">
          <p class="eyebrow">ASSESSMENT INPUTS</p>
          <h2 class="section-heading">Information we need to assess your asset.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            The better the asset information, the more useful the assessment. If some information is
            missing, WASP can still review the data and identify what assumptions or further checks
            are needed.
          </p>
        </div>
        <dl class="info-list">
          <div v-for="item in informationNeeded" :key="item.label" class="info-row">
            <dt class="info-label">{{ item.label }}</dt>
            <dd class="info-detail">{{ item.detail }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Support -->
    <section class="section section--dark support-section">
      <div class="section-container">
        <p class="eyebrow">WHY WASP</p>
        <h2 class="section-heading">Inspection-aware integrity support.</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <div class="support-grid">
          <article v-for="item in supportItems" :key="item.title" class="support-card">
            <img :src="item.icon" alt="" class="support-icon" aria-hidden="true" />
            <h3 class="support-title">
              {{ item.title }}
              <span v-if="item.detail" class="support-title-detail">{{ item.detail }}</span>
            </h3>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="integrity-cta">
      <div class="integrity-cta-layout">
        <div class="integrity-cta-content">
          <h2 class="integrity-cta-title">Need certainty on an inspection finding?</h2>
          <p class="integrity-cta-text">
            Send us your inspection data, asset details or operating context and we'll advise how
            the findings can be assessed.
          </p>
          <router-link to="/contact" class="integrity-cta-button">
            DISCUSS AN INTEGRITY ASSESSMENT
          </router-link>
        </div>
        <div class="integrity-cta-image-panel" aria-hidden="true">
          <img src="/home-cta-refinery.png" alt="" class="integrity-cta-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'

const features = [
  {
    lines: ['LEVEL 1-3 FFS', 'ASSESSMENT'],
    icon: '/integrity/icons/fitness-for-service-screening.png'
  },
  {
    lines: ['REMAINING LIFE', 'ASSESSMENT'],
    icon: '/integrity/icons/remaining-life-assessment.png'
  },
  {
    lines: ['ANOMALY', 'SIGNIFICANCE'],
    icon: '/integrity/icons/anomaly-significance.png'
  },
  { lines: ['REPAIR', 'PRIORITISATION'], icon: '/integrity/icons/repair-prioritisation.png' },
  {
    lines: ['DATA CONFIDENCE', 'REVIEW'],
    icon: '/integrity/icons/data-confidence-review.png'
  },
  {
    lines: ['RUN / REPAIR /', 'REPLACE'],
    icon: '/integrity/icons/clear-engineering-recommendations.png'
  }
]

const serviceCards = [
  {
    title: 'Wall loss and corrosion',
    description:
      'Review of wall thickness data, minimum readings and corrosion patterns to understand the severity and distribution of degradation.',
    icon: '/integrity/icons/assessment-wall-loss-corrosion.png'
  },
  {
    title: 'Anomaly significance',
    description:
      'Assessment of which features are likely to be operationally significant and which can be monitored or deprioritised.',
    icon: '/integrity/icons/assessment-anomaly-significance.png'
  },
  {
    title: 'Remaining life',
    description:
      'Findings support remaining life, reassessment interval and monitoring decisions.',
    icon: '/integrity/icons/assessment-remaining-life.png'
  },
  {
    title: 'Operating context',
    description:
      'Interpretation considers pressure, temperature, design data, material, corrosion allowance, service and known inspection limitations.',
    icon: '/integrity/icons/assessment-operating-context.png'
  }
]

const processSteps = [
  {
    number: 1,
    title: 'Review data',
    description:
      'Check inspection coverage, confidence, limitations, asset details and the inspection objective.',
    icon: '/integrity/icons/assessment-operating-context.png'
  },
  {
    number: 2,
    title: 'Screen findings',
    description:
      'Identify significant anomalies, minimum wall areas and features requiring engineering review.',
    icon: '/integrity/icons/assessment-wall-loss-corrosion.png'
  },
  {
    number: 3,
    title: 'Assess severity',
    description:
      'Consider defect size, location, remaining wall, operating conditions and applicable guidance.',
    icon: '/integrity/icons/anomaly-significance.png'
  },
  {
    number: 4,
    title: 'Prioritise',
    description:
      'Rank findings by significance, confidence and likely operational consequence.',
    icon: '/integrity/icons/assessment-remaining-life.png'
  },
  {
    number: 5,
    title: 'Recommend',
    description:
      'Provide practical next steps for repair, monitoring, further inspection or continued operation.',
    icon: '/integrity/icons/clear-engineering-recommendations.png'
  }
]

const assessmentQuestions = [
  {
    question: 'Can it remain in service?',
    answer:
      'Assessment of findings against asset context, operating conditions and available acceptance criteria.'
  },
  {
    question: 'What controls the risk?',
    answer:
      'Identification of significant defects, controlling locations and areas of uncertainty.'
  },
  {
    question: 'What should be repaired?',
    answer:
      'Practical repair prioritisation, monitoring or further inspection recommendations.'
  },
  {
    question: 'When should it be rechecked?',
    answer:
      'Remaining life or reassessment interval guidance where suitable inputs are available.'
  }
]

const standards = [
  {
    title: 'API 579 / ASME FFS-1',
    subtitle: 'Fitness-for-service where applicable'
  },
  {
    title: 'API RP 573',
    subtitle: 'Fired heater inspection context'
  },
  {
    title: 'API 1163',
    subtitle: 'ILI systems qualification context'
  },
  {
    title: 'POF Guidance',
    subtitle: 'ILI and defect assessment guidance'
  },
  {
    title: 'ISO 9001',
    subtitle: 'Quality management'
  }
]

const deliverablesLeft = [
  'Summary of significant findings',
  'Minimum wall and feature tables',
  'Damage mechanism identification and classification',
  'Recommended inspection intervals and monitoring',
  'Full methodology, inputs and results, structured for third-party audit'
]

const deliverablesRight = [
  'Anomaly ranking and prioritisation',
  'Recommended operating conditions, including pressure/temperature derating where required',
  'Calculated remaining strength and remaining life',
  'Limitations and data confidence notes',
  'Final assessment report'
]

const informationNeeded = [
  {
    label: 'Inspection data',
    detail:
      'C-scan outputs, anomaly tables, wall thickness data, coverage and data quality comments.'
  },
  {
    label: 'Asset details',
    detail:
      'Diameter, schedule/wall thickness, material grade, geometry, welds and known repairs.'
  },
  {
    label: 'Design basis',
    detail:
      'Design code, design pressure, design temperature and corrosion allowance where available.'
  },
  {
    label: 'Operating conditions',
    detail:
      'Pressure, temperature, medium, duty cycle and known degradation mechanisms.'
  },
  {
    label: 'History',
    detail:
      'Previous inspections, repairs, failures, leaks, fouling history or known problematic locations.'
  },
  {
    label: 'Objective',
    detail:
      'Continue operation, repair scope, shutdown planning, remaining life, replacement decision or further inspection.'
  }
]

const supportItems = [
  {
    title: 'Chartered-led team',
    detail:
      '(assessments led by Chartered Engineers with experience across all 14 parts of API 579-1 / ASME FFS-1)',
    icon: '/integrity/icons/data-interpreted-in-context.png'
  },
  {
    title: 'Materials and metallurgy depth',
    detail:
      '(decades of combined experience in materials science, metallurgy and structural integrity)',
    icon: '/integrity/icons/practical-recommendations.png'
  },
  {
    title: 'Judgement beyond the lookup chart',
    icon: '/integrity/icons/transparent-confidence.png'
  }
]
</script>

<style scoped>
.integrity-page {
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

.hero-text {
  color: var(--color-text-secondary);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.integrity-page > :deep(.hero-background .hero-layout > .hero-copy) {
  padding: 24px 0 56px;
}

.integrity-page > :deep(.hero-background .hero-layout) {
  min-height: clamp(420px, 56vh, 620px);
}

.integrity-page > :deep(.hero-background .hero-image-wrap) {
  background-color: #0a0a0a;
  margin-top: clamp(48px, 3rem + 1vw, 72px);
}

.integrity-page > :deep(.hero-background .hero-image) {
  min-height: clamp(380px, 56vh, 580px);
  object-fit: contain;
  object-position: right top;
  -webkit-mask-image:
    linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.45) 5%, #000 12%, #000 84%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.35) 8%, rgba(0, 0, 0, 0.75) 18%, #000 30%, #000 96%, rgba(0, 0, 0, 0.5) 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.45) 5%, #000 12%, #000 84%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.35) 8%, rgba(0, 0, 0, 0.75) 18%, #000 30%, #000 96%, rgba(0, 0, 0, 0.5) 100%);
  mask-composite: intersect;
}

.integrity-page > :deep(.hero-background .hero-image-wrap::after) {
  background:
    linear-gradient(to bottom, #0a0a0a 0%, rgba(10, 10, 10, 0.55) 5%, transparent 14%, transparent 68%, rgba(10, 10, 10, 0.45) 88%, #0a0a0a 100%),
    linear-gradient(to right, #0a0a0a 0%, rgba(10, 10, 10, 0.8) 7%, rgba(10, 10, 10, 0.35) 16%, transparent 30%);
}

@media (max-width: 768px) {
  .integrity-page > :deep(.hero-background .hero-layout) {
    min-height: auto;
  }

  .integrity-page > :deep(.hero-background .hero-layout > .hero-copy) {
    padding: 20px var(--site-gutter) 12px;
  }

  .integrity-page > :deep(.hero-background .hero-image-wrap) {
    margin-top: -16px;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .integrity-page > :deep(.hero-background .hero-image) {
    min-height: 0;
    width: 118%;
    max-width: 118%;
    object-fit: cover;
    object-position: 68% 42%;
    max-height: min(50vh, 360px);
    -webkit-mask-image:
      linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 5%, #000 14%, #000 84%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 6%, #000 14%, #000 86%, rgba(0, 0, 0, 0.25) 94%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 5%, #000 14%, #000 84%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 6%, #000 14%, #000 86%, rgba(0, 0, 0, 0.25) 94%, transparent 100%);
    mask-composite: intersect;
  }

  .integrity-page > :deep(.hero-background .hero-image-wrap::after) {
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

.findings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.findings-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.service-card {
  background-color: #141414;
  border: 1px solid rgba(231, 199, 58, 0.15);
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.service-card-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-inline: auto;
}

.service-card-title {
  color: #e7c73a;
  margin: 0;
}

.service-card-description {
  color: var(--color-text-muted);
  margin: 0;
}

.damage-mechanisms-note {
  margin: 32px 0 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-body);
  color: var(--color-text-muted);
}

.process-section-grid {
  display: grid;
  grid-template-columns: minmax(240px, 0.85fr) minmax(0, 2.15fr);
  gap: 48px;
  align-items: start;
}

.process-flow--light {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.process-card--light {
  background-color: #ffffff;
  border: 1px solid rgba(10, 10, 10, 0.1);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.process-icon-wrap--light {
  position: relative;
  width: 88px;
  height: 88px;
  margin-bottom: 18px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(10, 10, 10, 0.15);
  border-radius: 50%;
  background-color: #f2f2f2;
}

.process-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
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

.process-title--dark {
  color: #0a0a0a;
  margin: 0 0 8px;
}

.process-description--dark {
  color: rgba(10, 10, 10, 0.78);
  margin: 0;
}

.assessment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  margin-top: 8px;
}

.assessment-questions {
  margin: 0;
}

.assessment-row {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.assessment-row:first-child {
  padding-top: 0;
}

.assessment-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.assessment-question {
  color: #ffffff;
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.assessment-answer {
  margin: 0;
  color: var(--color-text-muted);
}

.standards-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  margin: 40px 0 0;
  padding: 24px 0 0;
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.standards-item {
  padding: 16px 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.standards-item:first-child {
  border-left: none;
  padding-left: 0;
}

.standards-title {
  display: block;
  color: #e7c73a;
  font-family: var(--font-body);
  font-size: var(--text-subheading-md);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.standards-subtitle {
  display: block;
  color: var(--color-text-legal);
  font-family: var(--font-body);
  font-size: var(--text-caption);
  line-height: 1.45;
  letter-spacing: normal;
  text-transform: none;
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

.info-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) 1fr;
  gap: 48px;
  align-items: start;
}

.info-list {
  margin: 0;
}

.info-row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-row:first-child {
  padding-top: 0;
}

.info-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-label {
  color: #ffffff;
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.info-detail {
  margin: 0;
  color: var(--color-text-muted);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 8px;
}

.support-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.support-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.support-title {
  color: #ffffff;
  margin: 0;
}

.support-title-detail {
  display: block;
  margin-top: 10px;
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-body);
  color: var(--color-text-legal);
}

.support-description {
  color: var(--color-text-muted);
  margin: 0;
}

.integrity-cta {
  background-color: #e7c73a;
  overflow: hidden;
}

.integrity-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.integrity-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 64px max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.integrity-cta-title {
  color: #0a0a0a;
  margin-bottom: 20px;
}

.integrity-cta-text {
  color: var(--color-text-muted-on-gold);
  margin-bottom: 32px;
}

.integrity-cta-button {
  display: inline-block;
  align-self: flex-start;
  padding: 16px 32px;
  font-family: var(--font-body);
  font-size: var(--text-button);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-button);
  text-decoration: none;
  border-radius: 4px;
  background-color: #0a0a0a;
  color: #e7c73a;
  border: 2px solid #0a0a0a;
  transition: all 0.25s ease;
}

.integrity-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
}

.integrity-cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background-color: #e7c73a;
}

.integrity-cta-image-panel::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: min(120px, 18%);
  background: linear-gradient(to right, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

.integrity-cta-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

@media (max-width: 1100px) {
  .feature-bar-container {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px var(--site-gutter);
  }

  .feature-item:nth-child(3n + 1) {
    border-left: none;
  }

  .service-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-flow--light {
    grid-template-columns: repeat(3, 1fr);
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

  .feature-item + .feature-item {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .feature-icon {
    object-position: left center;
  }

  .findings-grid,
  .assessment-grid,
  .deliverables-grid,
  .info-grid,
  .support-grid,
  .process-section-grid {
    grid-template-columns: 1fr;
  }

  .service-cards-grid {
    grid-template-columns: 1fr;
  }

  .process-flow--light {
    grid-template-columns: 1fr;
  }

  .deliverables-lists {
    grid-template-columns: 1fr;
  }

  .deliverables-image {
    max-width: min(100%, 420px);
    margin: 0 auto;
  }

  .assessment-row,
  .info-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .standards-list {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .standards-item {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding: 16px 0;
  }

  .standards-item:first-child {
    border-top: none;
    padding-top: 0;
  }

  .integrity-cta-layout {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .integrity-cta-content {
    max-width: none;
    padding: 48px var(--site-gutter) 32px;
  }

  .integrity-cta-button {
    align-self: stretch;
    width: 100%;
    text-align: center;
  }

  .integrity-cta-image-panel {
    min-height: 280px;
  }

  .integrity-cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  }
}

@media (max-width: 768px) {
  .integrity-cta-image-panel {
    min-height: 220px;
  }
}
</style>
