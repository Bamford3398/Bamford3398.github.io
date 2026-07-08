<template>
  <section class="clarity-features" aria-label="Inspection capability highlights">
    <div class="clarity-features-container">
      <article v-for="item in features" :key="item.id" class="clarity-feature">
        <h3 class="clarity-feature-heading">{{ item.title }}</h3>
        <span class="clarity-feature-accent" aria-hidden="true"></span>
        <p class="clarity-feature-text">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 'measurements',
    title: '30,000 measurements per linear foot',
    description:
      'High-density UT data captured continuously around the full 360° for unmatched detail and defect confidence.'
  },
  {
    id: 'coverage',
    title: 'Overlapping coverage',
    description:
      'Staggered-ring probe overlap ensures complete coverage with no gaps—reducing uncertainty and improving reliability.'
  },
  {
    id: 'ai-review',
    title: 'AI-assisted review',
    description:
      'Machine learning prioritizes true indications and reduces noise—helping analysts review faster with greater accuracy.'
  },
  {
    id: 'reporting',
    title: 'Digital reporting & cloud data',
    description:
      'Secure cloud storage and digital reports deliver traceable, shareable evidence anywhere, anytime.'
  }
]
</script>

<style scoped>
.clarity-features {
  position: relative;
  z-index: 4;
  padding: 8px var(--site-gutter) 48px;
}

.clarity-features-container {
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  align-items: start;
}

.clarity-feature {
  padding: 8px 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.clarity-feature + .clarity-feature {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.clarity-feature-heading {
  margin: 0 0 var(--gap-heading-to-accent);
  font-family: var(--font-heading);
  font-size: var(--text-pane-title);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-pane);
  text-transform: uppercase;
  color: #e7c73a;
}

.clarity-feature-accent {
  display: block;
  width: 40px;
  height: 3px;
  background-color: #e7c73a;
  margin-bottom: 16px;
}

.clarity-feature-text {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--leading-body);
  color: rgba(255, 255, 255, 0.78);
}

@media (max-width: 1024px) {
  .clarity-features-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .clarity-feature {
    padding: 24px 20px;
  }

  .clarity-feature:nth-child(2n + 1) {
    border-left: none;
  }

  .clarity-feature:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}

@media (max-width: 768px) {
  .clarity-features {
    padding: 0 var(--site-gutter) 32px;
  }

  .clarity-features-container {
    grid-template-columns: 1fr;
  }

  .clarity-feature,
  .clarity-feature:nth-child(2n + 1) {
    border-left: none;
    padding: 20px 0;
  }

  .clarity-feature + .clarity-feature,
  .clarity-feature:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>
