<template>
  <div class="about-page">
    <HeroBackgroundLayout header-offset section-class="hero-section" image-placeholder>
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        SPECIALIST INLINE INSPECTION.
        <span class="hero-title-gold">ENGINEERING-LED INTEGRITY INSIGHT.</span>
      </h1>

      <p class="hero-lead">
        WASP is a specialist intelligent pigging and integrity assessment company built around
        experienced inspection engineers, adaptable technology and practical reporting.
      </p>
      <p class="hero-text">
        Our team has spent careers working across refining, petrochemical, power generation, pipeline
        and industrial assets. Every project is led by people who understand both the inspection
        technology and the operational reality of the assets being inspected.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS YOUR NEEDS</router-link>
        <router-link to="/inline-inspection" class="btn btn-secondary">OUR SERVICES</router-link>
      </div>

      <template #after>
        <div class="feature-bar">
          <div class="feature-bar-container about-feature-bar-container">
            <div v-for="feature in heroFeatures" :key="feature.stat" class="feature-item">
              <div class="about-feature-icon" aria-hidden="true">
                <component :is="feature.icon" />
              </div>
              <p class="feature-label about-feature-label">
                <span class="about-feature-stat">{{ feature.stat }}</span>
                <span class="about-feature-detail">{{ feature.detail }}</span>
              </p>
            </div>
          </div>
        </div>
      </template>
    </HeroBackgroundLayout>

    <section class="section section--light about-specialists">
      <div class="section-container about-specialists-grid">
        <div class="about-specialists-copy">
          <h2 class="section-heading section-heading--dark">
            Built by inspection specialists, not generalists.
          </h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            WASP brings together senior figures from the global inline inspection industry with
            hands-on experience in ultrasonic pigging, inspection technology development, field
            operations, project delivery and integrity assessment.
          </p>
          <p class="body-text body-text--dark">
            Our engineers have worked on complex inspection projects across multiple sectors and
            regions, supporting operators where access, geometry, cleanliness, degradation mechanisms
            or uncertainty make conventional inspection difficult.
          </p>
        </div>
        <div class="about-objective-copy">
          <h2 class="section-heading section-heading--dark">The objective is simple.</h2>
          <p class="body-text body-text--dark">
            Give clients accurate, actionable data on the condition of their assets — and the
            engineering context needed to make confident decisions.
          </p>
          <p class="body-text body-text--dark">
            That means understanding what the inspection data shows, where confidence is high, where
            limitations exist and what the next practical step should be.
          </p>
          <p class="about-objective-callout">
            Inspection data only has value when it supports the right engineering decision.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--dark about-what-we-do">
      <div class="section-container">
        <p class="eyebrow">WHAT WE DO</p>
        <h2 class="section-heading">Inspection data with engineering context.</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <p class="body-text about-what-we-do-intro">
          WASP supports clients from initial inspection planning through to final reporting and
          integrity assessment.
        </p>
        <div class="about-service-cards-grid">
          <article v-for="card in whatWeDoCards" :key="card.title" class="about-service-card">
            <img :src="card.icon" alt="" class="about-service-card-icon" aria-hidden="true" />
            <h3 class="about-service-card-title">{{ card.title }}</h3>
            <p class="about-service-card-description">{{ card.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark about-approach">
      <div class="section-container about-approach-grid">
        <div class="about-approach-intro">
          <p class="eyebrow">OUR APPROACH</p>
          <h2 class="section-heading">Practical, adaptable and integrity-led.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text">
            Every inspection begins with the asset, not the tool. We review the inspection objective,
            geometry, access, operating conditions, cleanliness, data requirements and reporting
            expectations before defining the right approach.
          </p>
        </div>
        <div class="about-approach-pillars">
          <article
            v-for="item in approachItems"
            :key="item.title"
            class="about-approach-pillar"
          >
            <h3 class="about-approach-pillar-title">{{ item.title }}</h3>
            <p class="about-approach-pillar-text">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--light about-standards">
      <div class="section-container about-standards-grid">
        <article class="about-quality-card">
          <div class="about-quality-icon" aria-hidden="true">
            <component :is="QualityShieldIcon" />
          </div>
          <h2 class="section-heading section-heading--dark">Certified quality management.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark">
            WASP is certified to <strong>BS EN ISO 9001:2015</strong> by
            <strong>Qualitas Veritas</strong>.
          </p>
          <p class="body-text body-text--dark about-quality-certificate">
            Certificate number: <strong>006619</strong>
          </p>
        </article>
        <div class="about-guidance">
          <h2 class="section-heading section-heading--dark">Recognised engineering guidance.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--dark about-guidance-intro">
            Our inspection and assessment work can be delivered in line with recognised industry
            standards and guidance where applicable.
          </p>
          <div class="about-standards-cards">
            <article
              v-for="standard in engineeringStandards"
              :key="standard.code"
              class="about-standard-card"
            >
              <h3 class="about-standard-code">{{ standard.code }}</h3>
              <p class="about-standard-detail">{{ standard.detail }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark about-team">
      <div class="section-container">
        <div class="about-team-header">
          <div class="about-team-heading">
            <p class="eyebrow">MEET THE TEAM</p>
            <h2 class="section-heading">Experienced people behind the inspection.</h2>
            <span class="section-accent" aria-hidden="true"></span>
          </div>
          <p class="body-text about-team-intro-text">
            WASP is built around people with direct experience in inspection technology, field
            delivery, engineering assessment and operational project management. Our leadership team
            has held senior technical, operational and commercial roles across the intelligent
            pigging industry.
          </p>
        </div>

        <div class="about-team-cards">
          <article v-for="member in teamMembers" :key="member.id" class="about-team-card">
            <div class="about-team-avatar" aria-hidden="true">
              <span class="about-team-initials">{{ member.initials }}</span>
            </div>
            <h3 class="about-team-name">{{ member.name }}</h3>
            <p class="about-team-role">{{ member.role }}</p>
            <p class="about-team-bio">{{ member.bio }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="about-cta-layout">
        <div class="about-cta-content">
          <h2 class="home-cta-title">Need experienced support with a challenging inspection?</h2>
          <p class="home-cta-text">
            Send us your pipe details, drawings or inspection objective and we'll help define the
            right inspection and assessment approach.
          </p>
          <router-link to="/contact" class="about-cta-button">
            DISCUSS YOUR INSPECTION
          </router-link>
        </div>
        <div class="about-cta-image-panel" aria-hidden="true">
          <img src="/home-cta-refinery.png" alt="" class="about-cta-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h } from 'vue'
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'

const iconProps = {
  viewBox: '0 0 64 64',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}

const stroke = '#e7c73a'

const ShieldIcon = () =>
  h('svg', iconProps, [
    h('path', {
      d: 'M32 10 L48 18 L48 34 C48 44 40 52 32 56 C24 52 16 44 16 34 L16 18 Z',
      stroke,
      'stroke-width': '2.5',
      'stroke-linejoin': 'round'
    }),
    h('circle', { cx: '32', cy: '32', r: '8', stroke, 'stroke-width': '2.5' }),
    h('circle', { cx: '32', cy: '32', r: '3', fill: stroke })
  ])

const GlobeIcon = () =>
  h('svg', iconProps, [
    h('circle', { cx: '32', cy: '32', r: '20', stroke, 'stroke-width': '2.5' }),
    h('path', {
      d: 'M12 32 H52 M32 12 C24 20 24 44 32 52 C40 44 40 20 32 12',
      stroke,
      'stroke-width': '2.5',
      'stroke-linecap': 'round'
    })
  ])

const IsoIcon = () =>
  h('svg', iconProps, [
    h('path', {
      d: 'M14 40 C20 24 28 18 32 18 C36 18 44 24 50 40',
      stroke,
      'stroke-width': '2.5',
      'stroke-linecap': 'round'
    }),
    h('path', {
      d: 'M20 40 H44 M26 30 H38',
      stroke,
      'stroke-width': '2.5',
      'stroke-linecap': 'round'
    })
  ])

const DocumentIcon = () =>
  h('svg', iconProps, [
    h('rect', { x: '18', y: '14', width: '28', height: '36', rx: '3', stroke, 'stroke-width': '2.5' }),
    h('path', {
      d: 'M26 24 H38 M26 32 H38 M26 40 H34',
      stroke,
      'stroke-width': '2.5',
      'stroke-linecap': 'round'
    })
  ])

const QualityShieldIcon = () =>
  h(
    'svg',
    {
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      style: { width: '30px', height: '30px' }
    },
    [
      h('path', {
        d: 'M32 10 L48 18 L48 34 C48 44 40 52 32 56 C24 52 16 44 16 34 L16 18 Z',
        stroke: '#0a0a0a',
        'stroke-width': '2.5',
        'stroke-linejoin': 'round'
      }),
      h('circle', { cx: '32', cy: '32', r: '8', stroke: '#0a0a0a', 'stroke-width': '2.5' }),
      h('circle', { cx: '32', cy: '32', r: '3', fill: '#0a0a0a' })
    ]
  )

const heroFeatures = [
  {
    stat: '75+',
    detail: 'Years combined inspection experience',
    icon: ShieldIcon
  },
  {
    stat: '40+',
    detail: 'Countries of project experience',
    icon: GlobeIcon
  },
  {
    stat: 'ISO',
    detail: '9001:2015 certified quality management',
    icon: IsoIcon
  },
  {
    stat: 'API',
    detail: 'Inspection and assessment guidance',
    icon: DocumentIcon
  }
]

const whatWeDoCards = [
  {
    title: 'Inline UT inspection',
    description:
      'High-resolution ultrasonic inspection for pipework, pipelines and process assets where reliable wall thickness data and anomaly detection are required.',
    icon: '/inline-inspection/full-circumferential-coverage.png'
  },
  {
    title: 'Integrity assessment',
    description:
      'Engineering-led review of inspection findings to support remaining life assessment, repair planning, risk reduction and continued safe operation.',
    icon: '/integrity/icons/fitness-for-service-screening.png'
  },
  {
    title: 'Technology and tooling',
    description:
      'Adaptable inspection platforms, modular tooling and data processing workflows designed for challenging assets and difficult geometries.',
    icon: '/inline-inspection/tool-deployment.png'
  }
]

const approachItems = [
  {
    title: 'Specialist inspection engineers',
    description:
      'Projects are led by people with direct experience in ultrasonic pigging, inspection operations and asset-condition reporting.'
  },
  {
    title: 'Full project support',
    description:
      'WASP can support the process from initial planning and cleaning requirements through to inspection delivery, reporting and integrity assessment.'
  },
  {
    title: 'Recognised standards and guidance',
    description:
      'Where applicable, our work can be aligned with API RP 573, API 579 / ASME FFS-1, API 1163 and POF 100 | 300 | 500.'
  },
  {
    title: 'Interactive digital reporting',
    description:
      'Our reporting is designed to give clients data they can interrogate, understand and use — not just read.'
  }
]

const engineeringStandards = [
  {
    code: 'API RP 573',
    detail: 'Inspection of fired boilers and heaters'
  },
  {
    code: 'API 579 / ASME FFS-1',
    detail: 'Fitness-for-service assessment'
  },
  {
    code: 'API 1163',
    detail: 'Inline inspection systems qualification'
  },
  {
    code: 'POF 100 | 300 | 500',
    detail: 'Recommended inspection practices'
  }
]

const teamMembers = [
  {
    id: 'david-thewsey',
    initials: 'DT',
    name: 'Dr David Thewsey',
    role: 'Chief Executive Officer',
    bio:
      'David is a recognised leader in inline inspection technology, with senior leadership experience across specialist inspection companies. He holds a PhD in Materials Science and Engineering, a first-class degree in Electronic Engineering and is a Chartered Engineer. At WASP, David leads strategic direction, commercial development and technology vision.'
  },
  {
    id: 'ryan-caird',
    initials: 'RC',
    name: 'Ryan Caird',
    role: 'Chief Operating Officer',
    bio:
      'Ryan combines international field experience with specialist knowledge in intelligent pig design, mechanical engineering and asset integrity. He has been directly involved in more than 100 inspection operations across 40+ countries. At WASP, Ryan leads engineering, technology development and operational execution.'
  },
  {
    id: 'gray-dessington',
    initials: 'GD',
    name: 'Gray Dessington',
    role: 'Business Operations Manager',
    bio:
      'Gray brings more than 12 years of inline inspection experience, progressing from field technician to senior operational leadership. He has been involved in more than 200 inspection operations across five continents. At WASP, Gray is responsible for business operations and project delivery.'
  }
]
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background-color: #0a0a0a;
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

.about-page > :deep(.hero-background .hero-layout > .hero-copy) {
  padding: 24px 0 56px;
}

.about-page > :deep(.hero-background .hero-layout) {
  min-height: clamp(420px, 56vh, 620px);
}

.about-page > :deep(.hero-background .hero-image-wrap) {
  background-color: #0a0a0a;
  margin-top: clamp(48px, 3rem + 1vw, 72px);
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
  grid-template-columns: repeat(4, 1fr);
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

.about-feature-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-feature-icon svg {
  width: 100%;
  height: 100%;
}

.about-feature-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  color: #ffffff;
}

.about-feature-stat {
  font-family: var(--font-heading);
  font-size: var(--text-section-title);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.about-feature-detail {
  font-family: var(--font-heading);
  font-size: var(--text-micro);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-feature);
  line-height: 1.25;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.section-heading--dark {
  color: #0a0a0a;
}

.section--light .body-text {
  color: var(--color-text-body-on-light);
}

.body-text--dark {
  color: var(--color-text-body-on-light);
}

.about-specialists-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.about-specialists-copy .body-text + .body-text,
.about-objective-copy .body-text + .body-text {
  margin-top: 18px;
}

.about-objective-copy {
  border-left: 1px solid rgba(10, 10, 10, 0.12);
  padding-left: 64px;
}

.about-objective-callout {
  margin: 32px 0 0;
  padding: 28px 32px;
  background-color: #ffffff;
  font-family: var(--font-heading);
  font-size: var(--text-subsection);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  color: #0a0a0a;
}

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.eyebrow {
  color: #e7c73a;
  margin-bottom: var(--gap-heading-to-accent);
}

.section--dark .body-text {
  color: var(--color-text-body);
  line-height: var(--leading-copy);
}

.about-what-we-do-intro {
  max-width: 820px;
  margin-bottom: 40px;
}

.about-service-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.about-service-card {
  background-color: #141414;
  border: 1px solid rgba(231, 199, 58, 0.15);
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.about-service-card-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-inline: auto;
}

.about-service-card-title {
  font-family: var(--font-heading);
  font-size: var(--text-subsection);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  color: #ffffff;
  margin: 0;
}

.about-service-card-description {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  color: var(--color-text-muted);
  margin: 0;
}

.about-approach-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.82fr) minmax(0, 1.55fr);
  gap: 64px;
  align-items: start;
}

.about-approach-pillars {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px 40px;
}

.about-approach-pillar {
  border-left: 3px solid #e7c73a;
  padding-left: 20px;
}

.about-approach-pillar-title {
  font-family: var(--font-heading);
  font-size: var(--text-subsection);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  color: #ffffff;
  margin: 0 0 12px;
}

.about-approach-pillar-text {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  color: var(--color-text-muted);
  margin: 0;
}

.about-standards-grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.5fr);
  gap: 48px;
  align-items: start;
}

.about-quality-card {
  background-color: #ffffff;
  border: 1px solid rgba(10, 10, 10, 0.08);
  padding: 32px 36px;
}

.about-quality-icon {
  width: 56px;
  height: 56px;
  border: 2px solid #e7c73a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.about-quality-card .body-text + .body-text {
  margin-top: 16px;
}

.about-quality-certificate {
  margin-bottom: 0;
}

.about-guidance-intro {
  max-width: 640px;
  margin-bottom: 24px;
}

.about-standards-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.about-standard-card {
  background-color: #e9e9e9;
  padding: 20px 22px;
}

.about-standard-code {
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  color: #0a0a0a;
  margin: 0 0 8px;
}

.about-standard-detail {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  color: rgba(10, 10, 10, 0.72);
  margin: 0;
}

.about-team-header {
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.05fr);
  gap: 48px 64px;
  align-items: start;
  margin-bottom: 56px;
}

.about-team-heading .section-heading {
  max-width: 520px;
}

.about-team-intro-text {
  margin: 0;
  max-width: 640px;
}

.about-team-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.about-team-card {
  background-color: #141414;
  border: 1px solid rgba(231, 199, 58, 0.12);
  padding: 36px 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.about-team-avatar {
  width: 120px;
  height: 120px;
  border: 2px solid #e7c73a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
}

.about-team-initials {
  font-family: var(--font-heading);
  font-size: var(--text-section-title);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-pane);
  color: #e7c73a;
}

.about-team-name {
  font-family: var(--font-heading);
  font-size: var(--text-subsection);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  color: #ffffff;
  margin: 0 0 8px;
}

.about-team-role {
  font-family: var(--font-body);
  font-size: var(--text-micro);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-feature);
  line-height: var(--leading-normal);
  text-transform: uppercase;
  color: #e7c73a;
  margin: 0 0 20px;
}

.about-team-bio {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  color: var(--color-text-secondary);
  margin: 0;
}

.about-cta {
  background-color: #e7c73a;
  overflow: hidden;
}

.about-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.about-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 64px
    max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.about-cta-content .home-cta-title {
  color: #0a0a0a;
  margin-bottom: 20px;
}

.about-cta-content .home-cta-text {
  color: var(--color-text-muted-on-gold);
  margin-bottom: 32px;
}

.about-cta-button {
  display: inline-block;
  align-self: flex-start;
  padding: 16px 32px;
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

.about-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
}

.about-cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background-color: #e7c73a;
}

.about-cta-image-panel::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: min(120px, 18%);
  background: linear-gradient(to right, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

.about-cta-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

@media (max-width: 1180px) {
  .feature-bar-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-item:nth-child(odd) {
    border-left: none;
  }

  .feature-item:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
  }

  .feature-item:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .about-specialists-grid {
    gap: 48px;
  }

  .about-objective-copy {
    padding-left: 48px;
  }

  .about-service-cards-grid {
    grid-template-columns: 1fr;
  }

  .about-approach-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-standards-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-team-header {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about-team-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-page > :deep(.hero-background--header-offset) {
    padding-top: var(--site-header-height-mobile);
  }

  .feature-bar-container {
    grid-template-columns: 1fr;
    padding: 20px var(--site-gutter);
  }

  .feature-item,
  .feature-item + .feature-item,
  .feature-item:nth-child(even),
  .feature-item:nth-child(n + 3) {
    border-left: none;
    border-top: none;
    justify-content: flex-start;
    padding: 12px 0;
  }

  .feature-item + .feature-item {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .about-specialists-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-objective-copy {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid rgba(10, 10, 10, 0.12);
    padding-top: 40px;
  }

  .about-objective-callout {
    padding: 24px;
  }

  .about-approach-pillars {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-standards-cards {
    grid-template-columns: 1fr;
  }

  .about-quality-card {
    padding: 28px 24px;
  }

  .about-team-header {
    margin-bottom: 40px;
  }

  .about-cta-layout {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .about-cta-content {
    max-width: none;
    padding: 48px var(--site-gutter) 32px;
  }

  .about-cta-button {
    align-self: stretch;
    width: 100%;
    text-align: center;
  }

  .about-cta-image-panel {
    min-height: 280px;
  }

  .about-cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  }
}
</style>
