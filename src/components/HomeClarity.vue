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
  background: transparent;
  margin-top: -15px;
  padding: 48px var(--site-gutter) 40px;
  text-align: center;
}

.clarity-accent {
  width: 48px;
  height: 4px;
  background-color: #e7c73a;
  margin: 0 auto 24px;
}

.clarity-title {
  color: #ffffff;
  max-width: 900px;
  margin-inline: auto;
  text-shadow:
    0 2px 16px rgba(0, 0, 0, 0.9),
    0 0 32px rgba(0, 0, 0, 0.65);
}

@media (max-width: 768px) {
  .clarity-section {
    margin-top: 0;
    padding-block: 40px 32px;
    background: linear-gradient(to bottom, transparent, #0a0a0a 36%);
  }

  .clarity-accent {
    margin: 0 auto 24px;
  }
}
</style>
