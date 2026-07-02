<template>
  <section class="client-gains">
    <h2 class="client-gains-title">WHAT OUR CLIENTS GAIN</h2>
    <div class="client-gains-grid">
      <div
        v-for="item in gains"
        :key="item.label"
        class="gain-item"
      >
        <div class="gain-icon" aria-hidden="true">
          <component :is="item.icon" />
        </div>
        <p class="gain-label">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const iconProps = {
  viewBox: '0 0 64 64',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}

const stroke = '#D4AF37'

const ReliableDataIcon = () => h('svg', iconProps, [
  h('circle', { cx: '32', cy: '32', r: '20', stroke, 'stroke-width': '2.5' }),
  h('circle', { cx: '32', cy: '32', r: '4', fill: stroke }),
  h('path', { d: 'M32 12 L32 20 M32 44 L32 52 M12 32 L20 32 M44 32 L52 32', stroke, 'stroke-width': '2.5', 'stroke-linecap': 'round' })
])

const ExperienceIcon = () => h('svg', iconProps, [
  h('circle', { cx: '24', cy: '32', r: '10', stroke, 'stroke-width': '2.5' }),
  h('circle', { cx: '40', cy: '32', r: '10', stroke, 'stroke-width': '2.5' }),
  h('path', { d: 'M24 22 L24 18 M40 22 L40 18 M28 32 L36 32', stroke, 'stroke-width': '2.5', 'stroke-linecap': 'round' }),
  h('circle', { cx: '32', cy: '32', r: '3', fill: stroke })
])

const RiskIcon = () => h('svg', iconProps, [
  h('circle', { cx: '32', cy: '34', r: '18', stroke, 'stroke-width': '2.5' }),
  h('path', { d: 'M32 20 L32 34 L42 40', stroke, 'stroke-width': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
  h('path', { d: 'M22 48 L28 54 M42 48 L36 54', stroke, 'stroke-width': '2.5', 'stroke-linecap': 'round' })
])

const ConfidenceIcon = () => h('svg', iconProps, [
  h('path', { d: 'M32 10 L48 18 L48 34 C48 44 40 52 32 56 C24 52 16 44 16 34 L16 18 Z', stroke, 'stroke-width': '2.5', 'stroke-linejoin': 'round' }),
  h('circle', { cx: '32', cy: '32', r: '8', stroke, 'stroke-width': '2.5' }),
  h('circle', { cx: '32', cy: '32', r: '3', fill: stroke })
])

const ReportingIcon = () => h('svg', iconProps, [
  h('rect', { x: '18', y: '14', width: '28', height: '36', rx: '3', stroke, 'stroke-width': '2.5' }),
  h('path', { d: 'M26 24 L38 24 M26 32 L38 32 M26 40 L34 40', stroke, 'stroke-width': '2.5', 'stroke-linecap': 'round' }),
  h('path', { d: 'M42 20 L48 26 L42 32', stroke, 'stroke-width': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const gains = [
  { label: 'Reliable data', icon: ReliableDataIcon },
  { label: '75+ years combined experience', icon: ExperienceIcon },
  { label: 'Reduced risk & downtime', icon: RiskIcon },
  { label: 'Confidence in your assets', icon: ConfidenceIcon },
  { label: 'Clear reporting and recommendations', icon: ReportingIcon }
]
</script>

<style scoped>
.client-gains {
  background-color: #0a0a0a;
  padding: 80px 32px;
  text-align: center;
}

.client-gains-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #D4AF37;
  margin-bottom: 56px;
}

.client-gains-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  align-items: start;
}

.gain-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.gain-icon {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gain-icon svg {
  width: 100%;
  height: 100%;
}

.gain-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.45;
  max-width: 180px;
}

@media (max-width: 1024px) {
  .client-gains-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 24px;
  }
}

@media (max-width: 640px) {
  .client-gains {
    padding: 64px 16px;
  }

  .client-gains-title {
    margin-bottom: 40px;
  }

  .client-gains-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 16px;
  }

  .gain-icon {
    width: 60px;
    height: 60px;
  }

  .gain-label {
    font-size: 0.85rem;
  }
}
</style>
