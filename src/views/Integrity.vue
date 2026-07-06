<template>
  <div class="integrity-page">
    <section class="page-hero">
      <div class="page-container">
        <h1 class="page-title">Integrity</h1>
        <p class="page-tagline">
          Inspection tells you what condition your asset is in. Integrity assessment tells you what
          to do about it.
        </p>
        <p class="page-lead">
          WASP's Integrity service provides Level 1, 2 and 3 Fitness for Service assessments to API
          579-1 / ASME FFS-1 — the globally recognised standard for assessing whether ageing or
          damaged pressure equipment, piping and pipelines are fit for continued operation, and on
          what terms. The result is a clear, defensible answer: run, repair, or replace, backed by
          full engineering justification.
        </p>
      </div>
    </section>

    <div class="page-container page-body">
      <section class="content-section">
        <h2 class="section-title">The natural next step after intelligent pigging</h2>
        <p class="body-text">
          API 579 and ASME B31.3 were never intended to evaluate a pipe with decades of corrosion
          or a weld with a developing crack. They govern new construction. Fitness for Service
          exists to bridge that gap, using real inspection data to determine whether ageing or
          damaged equipment remains safe to operate, and for how long.
        </p>
        <p class="body-text">
          An ULTRASIGHT inspection generates exactly the kind of high-density data Fitness for
          Service analysis depends on. Every defect captured by DeepPulse — corrosion, pitting,
          gouging, dents, creep, weld anomalies — feeds directly into the assessment, with full
          positional and dimensional accuracy already established.
        </p>
        <p class="body-text">
          We always recommend pairing intelligent pigging with an Integrity assessment to make full
          use of this data. That said, Integrity is also available as a standalone service. We
          routinely carry out FFS assessments using data from other inspection methods, including
          third-party intelligent pigging, handheld UT surveys, or historical inspection records.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Level 1, 2 and 3 assessments</h2>
        <p class="body-text">
          API 579 defines three assessment levels, each requiring a different depth of engineering
          analysis. We carry out all three.
        </p>
        <p class="body-text">
          <strong class="level-label">Level 1</strong>
          is a conservative screening assessment using standard tables and charts from the code. It
          requires the least data and can be completed quickly, making it well suited to
          straightforward cases with limited damage.
        </p>
        <p class="body-text">
          <strong class="level-label">Level 2</strong>
          applies more detailed analysis where Level 1 doesn't provide an acceptable result, or where
          a component falls outside Level 1's scope. This typically involves more rigorous stress
          analysis and a closer look at the specific damage mechanism involved.
        </p>
        <p class="body-text">
          <strong class="level-label">Level 3</strong>
          uses advanced numerical methods, including finite element analysis (FEA), for complex damage
          scenarios or high-value assets where the conservatism of Levels 1 and 2 would be overly
          restrictive. This is where our integrity and metallurgy team's depth of experience matters
          most.
        </p>
        <p class="body-text">
          Each level builds on the last. We start with the most efficient assessment that fits the
          situation, and only progress to a more detailed level where the data and the damage
          mechanism call for it.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Damage mechanisms we assess</h2>
        <p class="body-text">
          General and local metal loss, pitting corrosion, gouges and dents, weld misalignment and
          shell distortion, crack-like flaws, creep damage, hydrogen damage (including HIC and
          SOHIC), laminations, and fire damage, across pipelines, process piping, and fired heater
          (furnace) process tubes.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">What's in the report</h2>
        <p class="body-text">
          A WASP Integrity report provides a complete remaining life assessment for the equipment
          under review, including:
        </p>
        <ul class="bullet-list">
          <li v-for="item in reportItems" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="content-section">
        <h2 class="section-title">Why WASP</h2>
        <p class="body-text">
          Our Integrity assessments are carried out by a team with decades of combined experience in
          materials science, metallurgy and structural integrity, led by Chartered Engineers with
          direct experience across all 14 parts of API 579-1 / ASME FFS-1.
        </p>
        <p class="body-text">
          That depth matters most when a case doesn't fit neatly into a Level 1 screening table, when
          the right call requires real engineering judgement, not just a lookup chart.
        </p>
      </section>

      <section class="content-section page-cta">
        <router-link to="/contact" class="cta-button">
          Contact us to discuss your asset
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup>
const reportItems = [
  'Identification and classification of the damage mechanism(s) present',
  'Calculated remaining strength and remaining life',
  'Recommended future operating conditions, including any pressure or temperature derating where required',
  'Recommended inspection intervals and monitoring methods',
  'Full methodology documentation, input data and results, structured for internal review and third-party audit'
]
</script>

<style scoped>
.integrity-page {
  min-height: 100vh;
  background-color: #0a0a0a;
  padding-top: 80px;
}

.page-hero {
  padding: 64px 0 0;
}

.page-body {
  padding-bottom: 80px;
}

.eyebrow {
  color: #e7c73a;
  margin-bottom: 16px;
}

.page-title {
  color: #ffffff;
}

.page-tagline {
  color: rgba(255, 255, 255, 0.95);
  max-width: 760px;
}

.page-lead {
  color: rgba(255, 255, 255, 0.88);
  max-width: 760px;
}

.content-section {
  margin-top: 48px;
}

.section-title {
  color: #e7c73a;
}

.body-text {
  color: rgba(255, 255, 255, 0.88);
}

.body-text:last-child {
  margin-bottom: 0;
}

.level-label {
  color: #ffffff;
  font-weight: var(--font-weight-semibold);
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
  color: rgba(255, 255, 255, 0.88);
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

@media (max-width: 768px) {
  .integrity-page {
    padding-top: 70px;
  }

  .page-hero {
    padding-top: 48px;
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
