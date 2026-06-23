<template>
  <div class="smart-pigging-page">
    <section class="page-hero">
      <div class="page-container">
        <p class="eyebrow">Services</p>
        <h1 class="page-title">Intelligent Pigging</h1>
        <p class="page-lead">
          High-resolution inline inspection (ILI), also known as smartpigging, for fired heaters,
          HRSG boilers, transfer lines, process piping and pipelines.
        </p>
      </div>
    </section>

    <div class="page-container page-body">
      <section class="content-section">
        <h2 class="section-title">What you get</h2>
        <p class="body-text">
          A complete picture of your asset's condition, not a sample. 30,000+ measurements per
          linear foot. Overlapping data coverage. No gaps, no guesswork.
        </p>
        <p class="body-text">
          A 24-hour field report flags any major defects or out-of-tolerance findings, so pipework
          can be prepared before returning online. A full written inspection and digital report
          follows within one week, with interactive 3D C-scans, defect mapping and sizing, ready
          for review on any computer or touchscreen device.
        </p>
        <p class="body-text">
          Where remediation is needed, Level 1, 2 and 3 Fitness for Service assessments to API 579
          are carried out by our own integrity and metallurgy team, with direct links through to
          POF guidelines.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Clean. Verify. Inspect.</h2>
        <p class="body-text">
          Every run follows the same disciplined sequence. Decoking removes internal fouling using
          advanced bi-directional pigging systems. Internal fouling scans confirm cleaning
          effectiveness, locating and quantifying anything left behind. Intelligent inspection then
          captures the full dataset, accurately locating and measuring every defect.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">What we measure…</h2>
        <ul class="bullet-list">
          <li v-for="item in measurements" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="content-section">
        <h2 class="section-title">Accuracy you can rely on…</h2>
        <ul class="bullet-list">
          <li v-for="item in accuracyPoints" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="content-section">
        <h2 class="section-title">How we do it: ULTRASIGHT</h2>
        <p class="body-text">
          Patented modular construction means the ULTRASIGHT adapts to your application, not the
          other way around.
        </p>
        <p class="body-text">
          Soft, flexible alignment brushes, polymer discs, or a combination of both configure the
          pig's drive and centring elements to suit the bore, bends and internal features of your
          pipe. Add-on modules extend capability without redesigning the platform:
        </p>
        <ul class="bullet-list">
          <li v-for="item in ultrasightModules" :key="item">{{ item }}</li>
        </ul>
        <p class="body-text">
          Reconfigure between runs, not between projects. Faster turnaround, lower cost, no
          compromise on fit.
        </p>
        <p class="body-text">
          Aerospace-grade 7068 aluminium construction gives an exceptional strength-to-weight ratio.
          The pig is bi-directional, untethered, and covers 3 to 12 inch (75 to 300mm) diameters,
          with short-radius 1D bend capability and the ability to inspect finned and studded tubes.
        </p>
        <p class="body-text">
          The ULTRASIGHT's patented modular design gives it exceptional flexibility and
          manoeuvrability through the most challenging pipeline geometries — short-radius 1D bends,
          unbarred tees, back-to-back bends, diameter changes and bore restrictions, opening up
          pipelines that conventional ILI tools simply cannot inspect.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">How we do it: DeepPulse</h2>
        <p class="body-text">
          DeepPulse is our data processing engine, designed and built entirely in-house. From the
          moment data comes off the pig, DeepPulse handles mapping, filtering, analysis,
          visualisation and report generation in one automated pipeline.
        </p>
        <p class="body-text">
          That automation is what makes our turnaround possible, and it eliminates the human error
          that comes with manual data analysis. The result is faster, more consistent reporting you
          can act on with confidence.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Why settle for spot readings?</h2>
        <p class="body-text">
          Handheld UT gives you readings. Intelligent pigging gives you a complete dataset. The
          difference is access, data density, repeatability and cost — and on every measure, the
          ULTRASIGHT comes out ahead.
        </p>

        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Handheld UT</th>
                <th scope="col">ULTRASIGHT</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparisonRows" :key="row.feature">
                <th scope="row">{{ row.feature }}</th>
                <td>{{ row.handheld }}</td>
                <td class="comparison-highlight">{{ row.ultrasight }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Standards we work to</h2>
        <p class="body-text">
          API RP 573 (Inspection of Fired Boilers &amp; Heaters). API 579 / ASME FFS-1 (Fitness for
          Service). API 1163 (Inline Inspection Systems Qualification). POF 100 | 300 | 500
          (Recommended Practices). ISO 9001 (Quality Management).
        </p>
      </section>

      <section class="content-section page-cta">
        <router-link to="/contact" class="cta-button">
          Contact us to discuss your project
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup>
const measurements = [
  'Internal corrosion',
  'External corrosion',
  'Internal fouling and coke',
  'Pitting',
  'Dents',
  'Ovality',
  'Mechanical creep and bulging',
  'Gouging',
  'Grooves and tracking',
  'Historic repairs and inserts',
  'Corrosion under insulation',
  'Full XYZ positioning via 3D plots and map overlays'
]

const accuracyPoints = [
  'Measurement accuracy of ±0.1mm, with 60MHz sampling',
  'Axial location accuracy of ±50mm',
  'Probability of detection (POD): 4mm at 95%'
]

const ultrasightModules = [
  'Advanced IMU module. A 9DOF IMU with sensor fusion and odometer wheels for applications demanding precise location accuracy. Output as XYZ cartesian data or an interactive overlay on mapping software.',
  'Battery modules. Increase run time, capacity and maximum pipeline run length.',
  'Sensor modules. Add capability to suit specific inspection requirements.'
]

const comparisonRows = [
  { feature: 'Access', handheld: 'Difficult / limited', ultrasight: 'Full piping access' },
  { feature: 'Scaffolding', handheld: 'Extensive', ultrasight: 'Minimal' },
  { feature: 'Data density', handheld: 'Low', ultrasight: 'Ultra-high' },
  { feature: 'Repeatability', handheld: 'Operator dependent', ultrasight: 'Automated & consistent' },
  { feature: 'Remaining coke detection', handheld: 'No', ultrasight: 'Yes, thickness & location' },
  { feature: 'Reporting', handheld: 'Limited, tabulated', ultrasight: 'Interactive 3D digital' },
  { feature: 'Inspection time', handheld: 'Long, labour intensive', ultrasight: 'Fast & efficient' },
  { feature: 'Overall cost', handheld: 'Higher (with downtime)', ultrasight: 'Lower total cost' }
]
</script>

<style scoped>
.smart-pigging-page {
  min-height: 100vh;
  background-color: #0a0a0a;
  padding-top: 80px;
}

.page-hero {
  padding: 64px 0 0;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.page-body {
  padding-bottom: 80px;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 16px;
}

.page-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 24px;
}

.page-lead {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 760px;
}

.content-section {
  margin-top: 48px;
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2rem);
  font-weight: 700;
  color: #D4AF37;
  line-height: 1.2;
  margin-bottom: 24px;
}

.body-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  margin-bottom: 20px;
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
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
}

.bullet-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #D4AF37;
}

.bullet-list li:last-child {
  margin-bottom: 0;
}

.comparison-table-wrap {
  margin-top: 32px;
  overflow-x: auto;
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 8px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
}

.comparison-table th,
.comparison-table td {
  padding: 16px 20px;
  text-align: left;
  vertical-align: top;
  font-size: 1rem;
  line-height: 1.5;
  border-bottom: 1px solid rgba(212, 175, 55, 0.12);
}

.comparison-table thead th {
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(212, 175, 55, 0.1);
}

.comparison-table thead th:first-child {
  width: 28%;
}

.comparison-table tbody th {
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.03);
}

.comparison-table tbody td {
  color: rgba(255, 255, 255, 0.82);
}

.comparison-table tbody tr:last-child th,
.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

.comparison-highlight {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
}

.page-cta {
  margin-top: 56px;
}

.cta-button {
  display: inline-block;
  background-color: #D4AF37;
  color: #0a0a0a;
  border: 2px solid #D4AF37;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.cta-button:hover {
  background-color: #E5C158;
  border-color: #E5C158;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}

@media (max-width: 768px) {
  .smart-pigging-page {
    padding-top: 70px;
  }

  .page-hero {
    padding-top: 48px;
  }

  .page-container {
    padding: 0 16px;
  }

  .page-body {
    padding-bottom: 64px;
  }

  .content-section {
    margin-top: 40px;
  }

  .page-lead,
  .body-text,
  .bullet-list li {
    font-size: 0.95rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 12px 14px;
    font-size: 0.9rem;
  }

  .cta-button {
    display: block;
    text-align: center;
    padding: 14px 32px;
    font-size: 1rem;
  }
}
</style>
