<template>
  <section class="clarity-section" aria-label="Inspection with clarity">
    <div class="clarity-accent" aria-hidden="true"></div>
    <h2 class="clarity-title">INSPECTION WITH CLARITY</h2>
  </section>
</template>

<style scoped>
.clarity-section {
  position: relative;
  z-index: 4;
  background-color: #0a0a0a;
  margin-top: -72px;
  padding: 48px var(--site-gutter) 40px;
}

.clarity-accent {
  width: 48px;
  height: 4px;
  background-color: #e7c73a;
  margin-bottom: 32px;
}

.clarity-title {
  color: #ffffff;
  max-width: 900px;
}

@media (max-width: 768px) {
  .clarity-section {
    margin-top: -40px;
    padding-block: 32px 40px;
  }

  .clarity-accent {
    margin-bottom: 24px;
  }
}
</style>
