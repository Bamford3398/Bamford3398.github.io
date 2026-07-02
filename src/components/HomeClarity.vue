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
  padding: 48px 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.clarity-accent {
  width: 48px;
  height: 4px;
  background-color: #D4AF37;
  margin-bottom: 32px;
}

.clarity-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.08em;
  line-height: 1.3;
  max-width: 900px;
}

@media (max-width: 768px) {
  .clarity-section {
    margin-top: -40px;
    padding: 32px 16px 40px;
  }

  .clarity-accent {
    margin-bottom: 24px;
  }
}
</style>
