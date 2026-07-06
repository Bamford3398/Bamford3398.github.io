<template>
  <section id="services" class="service-panes">
    <div class="service-panes-container">
      <article
        v-for="pane in panes"
        :key="pane.id"
        class="service-pane"
      >
        <div class="pane-image-wrap">
          <div class="pane-image-placeholder" aria-hidden="true">
            <span>Image placeholder</span>
          </div>
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
      'Advanced and reliable ILI tooling producing comprehensive digital reports.',
    to: '/inline-inspection'
  },
  {
    id: 'integrity',
    title: 'INTEGRITY ASSESSMENT',
    description:
      'Turning inspection data into engineering insight. We assess findings, identify significant concerns and provide practical recommendations.',
    to: '/integrity'
  },
  {
    id: 'other',
    title: 'OTHER SERVICES',
    description:
      'Camera pigging, mechanical cleaning and decoking, pig tracking, software, and ILI consultancy.',
    to: '/other-services'
  }
]
</script>

<style scoped>
.service-panes {
  background-color: #0a0a0a;
  padding: 0 var(--site-gutter) 80px;
  scroll-margin-top: 110px;
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
}

.pane-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 50%, #1a1a1a 100%);
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
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
  color: rgba(255, 255, 255, 0.78);
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
    padding-bottom: 24px;
  }

  .pane-body {
    padding: 24px 20px 28px;
  }
}
</style>
