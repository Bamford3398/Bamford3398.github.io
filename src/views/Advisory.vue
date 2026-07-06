<template>
  <div class="advisory-page">
    <section class="page-hero">
      <div class="page-container">
        <h1 class="page-title">Advisory</h1>
      </div>
    </section>

    <div class="page-container page-body">
      <section class="content-section">
        <p class="body-text">
          WASP's team has been at the sharp end of intelligent pigging and pipeline operations for
          decades. That experience is available to clients directly, as independent technical advice.
        </p>
        <p class="body-text">
          Whether you are planning an intelligent pigging programme for the first time, reviewing an
          existing inspection strategy, or trying to understand what your data is actually telling
          you, we can help. Advisory engagements range from a single consultation through to ongoing
          technical support across a full inspection campaign.
        </p>
        <p class="body-text we-cover-label">We cover:</p>
        <ul class="bullet-list">
          <li v-for="item in advisoryItems" :key="item">{{ item }}</li>
        </ul>
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
const advisoryItems = [
  'Intelligent pigging strategy and pig technology selection',
  'Pipeline and furnace cleaning programme design',
  'Run planning and operational specifications',
  'Data interpretation and defect assessment',
  'Vendor-neutral ILI procurement advice'
]
</script>

<style scoped>
.advisory-page {
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

.page-title {
  color: #ffffff;
  margin-bottom: 0;
}

.content-section {
  margin-top: 48px;
}

.body-text {
  color: rgba(255, 255, 255, 0.88);
}

.body-text:last-child {
  margin-bottom: 0;
}

.we-cover-label {
  margin-bottom: 16px;
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
  .advisory-page {
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
