<template>
  <div class="camera-pigging-page">
    <HeroBackgroundLayout
      header-offset
      section-class="hero-section"
      image-src="/camera-pigging/hero.png"
    >
      <span class="hero-title-accent" aria-hidden="true"></span>
      <h1 class="hero-title">
        CAMERA
        <span class="hero-title-gold">PIGGING</span>
      </h1>

      <p class="hero-lead">
        Direct optical evidence of what is happening inside a pipe — 4K footage available for
        review within minutes of the pig being retrieved.
      </p>
      <p class="hero-body">
        WASP offers RVIX 4K and RVIX-VR camera pig platforms for bores from 2.5 to 36 inches —
        direct visual evidence for pre-inspection checks, post-cleaning verification and anomaly
        confirmation.
      </p>

      <div class="hero-actions">
        <router-link to="/contact" class="btn btn-primary">DISCUSS CAMERA PIGGING</router-link>
        <a
          href="/camera-pigging/wasp-camera-pigging.pdf"
          class="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPEC SHEET
        </a>
      </div>
    </HeroBackgroundLayout>

    <section class="section section--panel platforms-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--light">
          Two platforms. Every bore from 2.5 to 36 inches.
        </h2>
        <span class="section-accent" aria-hidden="true"></span>
        <p class="body-text body-text--light section-intro">
          The RVIX 4K covers small and mid-bore lines with class-leading manoeuvrability; the
          RVIX-VR scales to large-bore pipelines with a fully immersive VR review experience.
        </p>

        <div class="platforms-grid">
          <article
            v-for="platform in platforms"
            :key="platform.title"
            class="platform-card"
            :class="{ 'platform-card--text-only': !platform.images?.length }"
          >
            <div v-if="platform.images?.length" class="platform-media">
              <img
                v-for="image in platform.images"
                :key="image.src"
                :src="image.src"
                :alt="image.alt"
                class="platform-image"
                decoding="async"
              />
            </div>
            <div class="platform-body">
              <h3 class="platform-title">{{ platform.title }}</h3>
              <p class="platform-tag">{{ platform.tagline }}</p>
              <ul class="platform-list">
                <li v-for="item in platform.specs" :key="item">{{ item }}</li>
              </ul>
            </div>
            <p class="platform-patent">
              Camera pig technology: patent pending — application filed 2025
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark benefits-section">
      <div class="section-container">
        <div class="benefits-grid">
          <article v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-text">{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark capability-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--light">What camera pigging can see</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <p class="body-text body-text--light section-intro">
          Optical inspection identifies condition and features that matter before, during and after
          intelligent pigging:
        </p>
        <ul class="check-list capability-list">
          <li v-for="item in capabilities" :key="item">
            <img src="/ultrasight/check-circle.png" alt="" class="check-icon" aria-hidden="true" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section--dark proof-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--light">What the camera actually sees.</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <div class="proof-grid">
          <figure v-for="still in proofStills" :key="still.alt" class="proof-still">
            <img :src="still.image" :alt="still.alt" class="proof-image" decoding="async" />
            <figcaption v-if="still.caption" class="proof-caption">{{ still.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section section--light when-used-section">
      <div class="section-container">
        <h2 class="section-heading section-heading--dark">When camera pigging is used</h2>
        <span class="section-accent" aria-hidden="true"></span>
        <div class="when-used-grid">
          <article v-for="item in whenUsedItems" :key="item.title" class="when-used-item">
            <img
              src="/other-services/icons/check-circle.png"
              alt=""
              class="when-used-check"
              aria-hidden="true"
            />
            <h3 class="when-used-title">{{ item.title }}</h3>
            <p class="when-used-text">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark pairs-section">
      <div class="section-container pairs-grid">
        <div class="pairs-copy">
          <h2 class="section-heading section-heading--light">Pairs with UltraSight.</h2>
          <span class="section-accent" aria-hidden="true"></span>
          <p class="body-text body-text--light">
            Camera pigging answers “what is in there” — UltraSight answers “how thick is the wall.”
            Many inspection programmes run both.
          </p>
          <router-link to="/ultrasight" class="btn btn-primary pairs-cta">Meet UltraSight</router-link>
        </div>
        <img
          src="/ultrasight/modular-tool.png"
          alt="UltraSight modular inline inspection tool"
          class="pairs-image"
          decoding="async"
        />
      </div>
    </section>

    <section class="camera-cta">
      <div class="camera-cta-layout">
        <div class="camera-cta-content">
          <h2 class="camera-cta-title">Need eyes inside the line?</h2>
          <p class="camera-cta-text">
            Send us the asset details and we'll advise whether camera pigging, ultrasonic inspection
            or both is the right approach.
          </p>
          <router-link to="/contact" class="camera-cta-button">Discuss camera pigging</router-link>
        </div>
        <div class="camera-cta-image-panel" aria-hidden="true">
          <img src="/home-cta-refinery.png" alt="" class="camera-cta-image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroBackgroundLayout from '../components/HeroBackgroundLayout.vue'

const platforms = [
  {
    title: 'RVIX 4K — Advanced Optical Pig',
    tagline:
      'Miniaturised and highly manoeuvrable — reaches lines conventional camera tools cannot.',
    images: [
      {
        src: '/camera-pigging/optical-still.png',
        alt: 'Interior pipe view captured by advanced optical pig'
      }
    ],
    specs: [
      '4K up to 240fps (720P) · 2.7K / 1080P / 720P',
      '2.5–12 inch (63–300mm) diameter',
      'Short-radius 1D bend capability',
      'Up to 5 hrs run · 256GB (12 hrs footage)',
      '450PSI design / 250PSI tested · water or gas/air',
      'Standard pig traps — no specialist launchers'
    ]
  },
  {
    title: 'RVIX-VR — Virtual Reality Pig',
    tagline: '206° immersive VR review — the engineer is, in effect, inside the pipe.',
    images: [
      {
        src: '/camera-pigging/rvix-4k.png',
        alt: 'RVIX-VR camera pig'
      }
    ],
    specs: [
      '206° VR 4K field of view',
      'Up to 36 inch (900mm) diameter · 12 hrs run time',
      'Aluminium 6061-T6 · rated to 600PSI',
      'AI video enhancement · digital stabilisation',
      'Playback via VR headset, tablet, phone or PC',
      'Written visual inspection report after every run'
    ]
  }
]

const benefits = [
  {
    title: 'Direct visual evidence',
    description:
      'Real-time optical footage showing what is inside the pipe, reducing uncertainty and interpretation delays.'
  },
  {
    title: 'Pre-inspection confidence',
    description:
      'Assess internal condition, fouling or obstructions quickly before committing to full ILI.'
  },
  {
    title: 'Post-cleaning verification',
    description:
      'Confirms cleaning programmes have delivered an acceptable internal condition before intelligent pigging proceeds.'
  },
  {
    title: 'Anomaly verification',
    description:
      'Optical confirmation of features identified by ultrasonic inspection — imagery to validate anomalies and support actions.'
  }
]

const capabilities = [
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

const proofStills = [
  {
    image: '/camera-pigging/still-bore.png',
    alt: 'Camera pig footage — view looking down the pipe bore'
  },
  {
    image: '/camera-pigging/still-travel.png',
    alt: 'Camera pig footage — close detail of the internal pipe surface'
  }
]

const whenUsedItems = [
  {
    title: 'After cleaning or decoking',
    description: 'Visually verify the line is clean and free of obstructions.'
  },
  {
    title: 'When the asset may be fouled or restricted',
    description: 'Confirm internal condition and passage before running ILI tools.'
  },
  {
    title: 'When visual confirmation is required quickly',
    description: 'Footage in minutes — fast optical insight to support decisions.'
  },
  {
    title: 'When findings need optical verification',
    description: 'Use imagery to validate anomalies and support actions.'
  }
]
</script>

<style scoped>
.camera-pigging-page {
  background-color: #0a0a0a;
}

.camera-pigging-page > :deep(.hero-background) {
  --text-width: min(680px, calc(100% - 2 * var(--text-gutter)));
  --image-overlap: min(280px, calc(var(--text-width) * 0.41));
}

.camera-pigging-page > :deep(.hero-background .hero-layout > .hero-copy) {
  padding: 24px 0 56px;
}

.camera-pigging-page > :deep(.hero-background .hero-layout) {
  min-height: clamp(400px, 54vh, 580px);
}

.camera-pigging-page > :deep(.hero-background .hero-image-wrap) {
  justify-self: stretch;
  width: auto;
  max-width: none;
  margin-top: clamp(48px, 3rem + 1vw, 72px);
  margin-left: calc(var(--text-gutter) + var(--text-width));
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.camera-pigging-page > :deep(.hero-background .hero-image) {
  width: auto;
  max-width: min(640px, 100%);
  height: auto;
  min-height: 0;
  max-height: clamp(320px, 48vh, 490px);
  object-fit: contain;
  object-position: center top;
  -webkit-mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  mask-composite: intersect;
}

.camera-pigging-page > :deep(.hero-background .hero-image-wrap::after) {
  background:
    linear-gradient(to right, #0a0a0a 0%, transparent 3%, transparent 97%, #0a0a0a 100%),
    linear-gradient(to bottom, #0a0a0a 0%, transparent 4%, transparent 94%, #0a0a0a 100%);
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
  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.9),
    0 0 40px rgba(0, 0, 0, 0.6);
}

.hero-lead {
  color: var(--color-text-lead);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.hero-body {
  color: var(--color-text-secondary);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .camera-pigging-page > :deep(.hero-background .hero-layout) {
    min-height: auto;
  }

  .camera-pigging-page > :deep(.hero-background .hero-layout > .hero-copy) {
    padding: 20px var(--site-gutter) 28px;
  }

  .camera-pigging-page > :deep(.hero-background .hero-image-wrap) {
    margin-top: 0;
    margin-right: 0;
    width: 100%;
    max-width: none;
  }

  .camera-pigging-page > :deep(.hero-background .hero-image) {
    min-height: 0;
    max-height: min(52vh, 420px);
    max-width: min(100%, 540px);
    margin-inline: auto;
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

.section--dark {
  background-color: #0a0a0a;
  color: #ffffff;
}

.section--light {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.section--panel {
  background-color: #131310;
  color: #ffffff;
}

.section-heading--light {
  color: #ffffff;
}

.section-heading--dark {
  color: #0a0a0a;
}

.section-intro {
  max-width: 52ch;
  margin-bottom: 40px;
}

.body-text--light {
  color: var(--color-text-body);
}

.body-text--dark {
  color: var(--color-text-body-on-light);
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.platform-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 26px;
  padding: 28px;
  background-color: #0f0f0d;
  border: 1.5px solid #2e2e28;
  border-radius: 10px;
}

.platform-card--text-only {
  grid-template-columns: 1fr;
}

.platform-media {
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.platform-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
  object-fit: contain;
}

.platform-title {
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-md);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.platform-tag {
  color: #ffffff;
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  margin: 0 0 16px;
}

.platform-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.platform-list li {
  position: relative;
  padding: 5px 0 5px 20px;
  color: var(--color-text-muted);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
}

.platform-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 13px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #e7c73a;
}

.platform-patent {
  grid-column: 1 / -1;
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.45);
  font-size: var(--text-caption);
  font-style: italic;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.benefit-card {
  padding: 26px;
  background-color: #0f0f0d;
  border: 1.5px solid #2e2e28;
  border-radius: 8px;
  text-align: center;
}

.benefit-title {
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.benefit-text {
  color: var(--color-text-muted);
  font-size: var(--text-caption);
  line-height: var(--leading-body);
  margin: 0;
}

.capability-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 60px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.capability-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  padding-left: 0;
  color: var(--color-text-body);
}

.capability-list li::before {
  content: none;
}

.capability-list .check-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  object-fit: contain;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  margin-top: 8px;
}

.proof-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border: 1px solid #2e2e28;
  border-radius: 6px;
}

.proof-caption {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.45);
  font-size: var(--text-caption);
}

.when-used-section {
  padding-top: 64px;
  padding-bottom: 64px;
}

.when-used-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 34px 60px;
  margin-top: 8px;
}

.when-used-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.when-used-check {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
}

.when-used-title {
  color: #0a0a0a;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0;
}

.when-used-text {
  color: rgba(10, 10, 10, 0.78);
  font-size: var(--text-body-sm);
  line-height: var(--leading-body);
  margin: 0;
}

.pairs-section {
  border-top: 3px solid #e7c73a;
}

.pairs-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}

.pairs-copy .body-text {
  max-width: 52ch;
  margin-bottom: 28px;
}

.pairs-cta {
  align-self: flex-start;
}

.pairs-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.camera-cta {
  background-color: #e7c73a;
  overflow: hidden;
}

.camera-cta-layout {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(0, 1.15fr);
  min-height: 360px;
}

.camera-cta-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px 60px max(var(--site-gutter), calc((100vw - var(--site-max-width)) / 2 + var(--site-gutter)));
  max-width: 620px;
  position: relative;
  z-index: 2;
}

.camera-cta-title {
  font-family: var(--font-heading);
  font-size: var(--text-cta-title);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-title);
  color: #0a0a0a;
  margin-bottom: 16px;
}

.camera-cta-text {
  color: var(--color-text-muted-on-gold);
  font-size: var(--text-lead);
  line-height: var(--leading-body);
  margin-bottom: 26px;
  max-width: 48ch;
}

.camera-cta-button {
  display: inline-block;
  align-self: flex-start;
  padding: 16px 32px;
  background-color: #0a0a0a;
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-button);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-button);
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.camera-cta-button:hover {
  background-color: transparent;
  color: #0a0a0a;
  outline: 2px solid #0a0a0a;
}

.camera-cta-image-panel {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  background-color: #e7c73a;
}

.camera-cta-image-panel::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: min(120px, 18%);
  background: linear-gradient(to right, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  z-index: 1;
  pointer-events: none;
}

.camera-cta-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

@media (max-width: 1024px) {
  .platforms-grid,
  .pairs-grid,
  .camera-cta-layout {
    grid-template-columns: 1fr;
  }

  .camera-cta-layout {
    min-height: 0;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .platform-card {
    grid-template-columns: 1fr;
  }

  .capability-list,
  .when-used-grid {
    grid-template-columns: 1fr;
    gap: 8px 0;
  }

  .camera-cta-image-panel {
    min-height: 280px;
  }

  .camera-cta-image-panel::before {
    inset: 0 0 auto 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to bottom, #e7c73a 0%, rgba(231, 199, 58, 0.85) 35%, transparent 100%);
  }
}

@media (max-width: 768px) {
  .benefits-grid,
  .proof-grid {
    grid-template-columns: 1fr;
  }

  .camera-cta-content {
    max-width: none;
    padding: 48px var(--site-gutter) 32px;
  }

  .camera-cta-button {
    align-self: stretch;
    width: 100%;
    text-align: center;
  }

  .camera-cta-image-panel {
    min-height: 220px;
  }
}
</style>
