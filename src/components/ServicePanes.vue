<template>
  <section id="services" class="service-panes">
    <div class="service-panes-container">
      <article
        v-for="pane in panes"
        :key="pane.id"
        class="service-pane"
      >
        <div class="pane-image-wrap">
          <img
            :src="pane.image"
            :alt="pane.imageAlt"
            class="pane-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="pane-body">
          <h3 class="pane-title">{{ pane.title }}</h3>
          <p class="pane-description">{{ pane.description }}</p>
          <router-link :to="pane.to" class="pane-link">LEARN MORE &gt;</router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const panes = [
  {
    id: 'inline-ut',
    title: 'INLINE UT INSPECTION',
    description:
      'High-resolution ILI for fired heaters, HRSG boilers, transfer lines, process piping and pipelines. Up to 30,000+ measurements per linear foot. Interactive 3D digital reports.',
    to: '/inline-inspection',
    image: '/inline-inspection/hero.png',
    imageAlt: 'Inline UT inspection tool in pipeline'
  },
  {
    id: 'integrity',
    title: 'INTEGRITY ASSESSMENT',
    description:
      'Level 1, 2 and 3 FFS assessments to API 579 / ASME FFS-1, carried out by integrity and metallurgy specialists.',
    to: '/integrity',
    image: '/integrity/hero.png',
    imageAlt: 'Integrity assessment and pipeline inspection'
  },
  {
    id: 'other',
    title: 'OTHER SERVICES',
    description:
      'Camera pigging, mechanical cleaning and decoking, pig tracking, software, and ILI consultancy.',
    to: '/other-services',
    image: '/other-services/hero.png',
    imageAlt: 'Other inline inspection support services'
  }
]
</script>

<style scoped>
.service-panes {
  background-color: #0a0a0a;
  padding: 16px var(--site-gutter) 80px;
  scroll-margin-top: var(--site-header-height);
}

.service-panes-container {
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-pane {
  background-color: #141414;
  border: 1px solid rgba(231, 199, 58, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pane-image-wrap {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: #0a0a0a;
}

.pane-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
}

.pane-body {
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.pane-title {
  color: #ffffff;
}

.pane-description {
  color: var(--color-text-muted);
  margin-bottom: 24px;
  flex: 1;
}

.pane-link {
  color: #e7c73a;
  transition: color 0.2s ease;
  align-self: flex-start;
}

.pane-link:hover {
  color: #e7c73a;
}

@media (max-width: 1024px) {
  .service-panes-container {
    grid-template-columns: 1fr;
    max-width: 520px;
  }
}

@media (max-width: 768px) {
  .service-panes {
    padding-top: 12px;
    padding-bottom: 24px;
  }

  .pane-body {
    padding: 24px 20px 28px;
  }
}
</style>
