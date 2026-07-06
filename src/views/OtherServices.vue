<template>
  <div class="other-services-page">
    <section class="page-hero">
      <div class="page-container">
        <h1 class="page-title">Other Services</h1>
      </div>
    </section>

    <div class="page-container page-body">
      <section class="content-section">
        <h2 class="section-title">Mechanical Cleaning / Pigging</h2>
        <p class="body-text">
          Before any intelligent pigging inspection can take place, the pipe must be clean. Residual
          fouling, coke, scale or debris compromises data quality and can prevent the pig from
          completing its run. Getting the cleaning right is not a preliminary step, it is the
          foundation the entire inspection is built on.
        </p>
        <p class="body-text">
          WASP's team includes some of the most experienced pigging engineers in the world, with
          roots going back to the early days of the industry in the 1990s. That depth of knowledge
          means we understand what cleaning a given pipeline or process system actually requires, not
          just in theory, but from decades of doing it across every type of asset and operating
          environment.
        </p>
        <p class="body-text">
          Where we operate cleaning programmes, we work with a select group of industrial partners who
          share our standards and our attention to detail. They bring state-of-the-art pumping
          equipment, launchers, receivers and pigging hardware. We bring the engineering expertise
          to plan, specify and oversee operations from start to finish.
        </p>
        <p class="body-text">
          The result is a genuinely turnkey solution. One point of contact. One quality standard.
          From initial cleaning through to final inspection report, the entire process is managed as
          a single, integrated programme.
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">Camera Pigging</h2>
        <p class="body-text">
          Sometimes the most direct answer is the clearest one. Where intelligent pigging provides
          ultra-high-density ultrasonic data, camera pigging provides something different: direct
          optical evidence of what is happening inside a pipe, in real time, with no interpretation
          required.
        </p>
        <p class="body-text">
          WASP offers two advanced camera pig platforms, suited to different applications and
          operating environments.
        </p>

        <article class="platform-block">
          <h3 class="platform-title">RVIX 4K — Advanced Optical Pig</h3>
          <p class="body-text">
            The RVIX 4K delivers ultra-high-definition 4K optical inspection at up to 240fps, with a
            programmable ultra-bright LED halo array for consistent illumination regardless of pipe
            condition. Its miniaturised, lightweight design makes it one of the most manoeuvrable
            camera pigs available, capable of navigating tight-radius bends and inspecting pipelines
            that conventional tools cannot reach.
          </p>
          <p class="body-text">
            It operates without specialist launchers or receivers, uses standard pig traps, and can be
            mobilised rapidly with minimal equipment. Footage is available for review within minutes
            of retrieval.
          </p>
          <ul class="bullet-list">
            <li v-for="item in rvix4kSpecs" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="platform-block">
          <h3 class="platform-title">RVIX-VR — Virtual Reality Pig</h3>
          <p class="body-text">
            The RVIX-VR takes camera pigging a step further. With a 206° field of view and full VR
            capability, it creates a completely immersive inspection experience — the engineer is, in
            effect, inside the pipe.
          </p>
          <p class="body-text">
            Footage can be reviewed through a VR headset, tablet, phone or PC, and is available for
            playback within minutes of the pig being retrieved. AI video enhancement sharpens the
            footage for clearer defect identification, and a full written visual inspection report is
            delivered following every run.
          </p>
          <p class="body-text">
            The RVIX-VR's configurable design scales to pipelines up to 36 inches (900mm) in
            diameter, making it suitable for large-bore applications where conventional camera pigs
            fall short.
          </p>
          <ul class="bullet-list">
            <li v-for="item in rvixVrSpecs" :key="item">{{ item }}</li>
          </ul>
        </article>

        <div class="subsection">
          <h3 class="subsection-title">What camera pigging can see</h3>
          <ul class="bullet-list">
            <li v-for="item in cameraCanSee" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="subsection">
          <h3 class="subsection-title">When to use camera pigging</h3>
          <p class="body-text">
            Camera pigging is not a replacement for intelligent pigging. It does not provide the
            measurement density, wall thickness data or dimensional accuracy that ultrasonic ILI
            delivers. What it provides is speed, simplicity and visual certainty, making it
            particularly well suited to:
          </p>
          <ul class="bullet-list">
            <li v-for="item in whenToUse" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2 class="section-title">Software</h2>
        <p class="body-text">
          WASP develops its own inspection and pigging software, built in-house for real operational
          use.
        </p>
        <p class="body-text">
          DeepPulse is our proprietary data processing engine, handling everything from raw data
          download through to automated report generation. It is the system behind every ULTRASIGHT
          inspection report we produce.
        </p>
        <p class="body-text">
          FlowSense is our mechanical pigging pressure and flow monitoring platform, tracking
          operating pressures and flows, pig locations and valve status in real time during pigging
          operations. FlowSense is available for licence to operators and pigging contractors running
          their own programmes.
        </p>
        <p class="body-text">
          We also undertake bespoke software development for pigging and inspection-related
          applications, including pig sensors and tracking systems, on a project basis.
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
const rvix4kSpecs = [
  '4K resolution. 2.7K / 1080P / 720P also available',
  'Up to 240fps at 720P',
  '2.5 to 12 inch (63 to 300mm) diameter',
  'Short-radius 1D bend capability',
  'Up to 5 hours run time',
  'Pressure rated to 450PSI design / 250PSI tested',
  '256GB onboard storage (up to 12 hours footage)',
  'Water or gas / air medium'
]

const rvixVrSpecs = [
  '206° VR 4K field of view',
  'Up to 12 hours run time',
  'Up to 36 inch (900mm) diameter',
  'Aluminium 6061-T6 construction',
  'Pressure rated to 600PSI',
  'Digital video stabilisation and auto exposure adjustment',
  'AI video enhancement',
  'Playback via VR headset, phone, tablet or PC',
  'Written visual inspection report delivered post-run'
]

const cameraCanSee = [
  'Internal fouling and coke deposits',
  'Foreign objects and obstructions',
  'General internal corrosion and metal loss',
  'Pitting and erosion',
  'Gouging and dents',
  'Repairs and patchwork',
  'Pipeline features (tees, valves, bends, flanges)',
  'Weld penetration',
  'Pig scoring and localised pitting',
  'Creep damage and swelling'
]

const whenToUse = [
  'Pre-inspection surveys to assess internal condition before committing to a full ILI programme',
  'Post-cleaning verification, confirming the pipe is ready for intelligent pigging',
  'Inspection of pipelines deemed unpiggable by conventional ILI tools',
  'Rapid deployment where a visual answer is needed quickly',
  'Verification of intelligent pigging findings where optical confirmation is required'
]
</script>

<style scoped>
.other-services-page {
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
  margin-bottom: 0;
}

.content-section {
  margin-top: 48px;
}

.section-title {
  color: #e7c73a;
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
  color: rgba(255, 255, 255, 0.88);
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
  .other-services-page {
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
