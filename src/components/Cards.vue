<template>
  <section class="cards-section">
    <div class="cards-container">
      <div 
        v-for="card in cards" 
        :key="card.id"
        class="card"
        @click="handleCardClick(card.route)"
      >
        <div class="card-icon">
          <component :is="card.icon" />
        </div>
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

// Icon components
const PipelineIcon = () => h('svg', {
  viewBox: '0 0 100 100',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  style: { width: '100%', height: '100%' }
}, [
  h('path', {
    d: 'M20 50 L80 50',
    stroke: '#e7c73a',
    'stroke-width': '4',
    'stroke-linecap': 'round'
  }),
  h('circle', {
    cx: '50',
    cy: '50',
    r: '15',
    fill: '#e7c73a',
    opacity: '0.3'
  }),
  h('path', {
    d: 'M35 50 L45 40 M45 40 L55 40 M55 40 L65 50',
    stroke: '#e7c73a',
    'stroke-width': '3',
    'stroke-linecap': 'round'
  })
])

const LearningIcon = () => h('svg', {
  viewBox: '0 0 100 100',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  style: { width: '100%', height: '100%' }
}, [
  h('circle', {
    cx: '50',
    cy: '50',
    r: '35',
    stroke: '#e7c73a',
    'stroke-width': '3',
    fill: 'none'
  }),
  h('path', {
    d: 'M50 30 L50 50 L65 60',
    stroke: '#e7c73a',
    'stroke-width': '3',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    fill: 'none'
  }),
  h('circle', {
    cx: '50',
    cy: '50',
    r: '8',
    fill: '#e7c73a'
  })
])

const ContactIcon = () => h('svg', {
  viewBox: '0 0 100 100',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  style: { width: '100%', height: '100%' }
}, [
  h('rect', {
    x: '25',
    y: '30',
    width: '50',
    height: '50',
    rx: '8',
    stroke: '#e7c73a',
    'stroke-width': '3',
    fill: 'none'
  }),
  h('path', {
    d: 'M35 45 L50 55 L65 45',
    stroke: '#e7c73a',
    'stroke-width': '3',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    fill: 'none'
  }),
  h('circle', {
    cx: '50',
    cy: '50',
    r: '3',
    fill: '#e7c73a'
  })
])

const IntegrityIcon = () => h('svg', {
  viewBox: '0 0 100 100',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  style: { width: '100%', height: '100%' }
}, [
  h('circle', {
    cx: '50',
    cy: '50',
    r: '30',
    stroke: '#e7c73a',
    'stroke-width': '3',
    fill: 'none'
  }),
  h('path', {
    d: 'M50 20 L50 50 L70 60',
    stroke: '#e7c73a',
    'stroke-width': '3',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    fill: 'none'
  }),
  h('path', {
    d: 'M30 50 L50 50 L50 80',
    stroke: '#e7c73a',
    'stroke-width': '3',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    fill: 'none'
  })
])

const cards = [
  {
    id: 1,
    title: 'Pipeline Inspection',
    description: 'Comprehensive inspection services for pipeline integrity and safety assessment.',
    icon: PipelineIcon,
    route: 'pipeline-inspection'
  },
  {
    id: 2,
    title: 'Learning & Skill',
    description: 'Expert training and skill development programs for inspection professionals.',
    icon: LearningIcon,
    route: 'learning'
  },
  {
    id: 3,
    title: 'Contact Our Team',
    description: 'Get in touch with our expert team for consultation and support services.',
    icon: ContactIcon,
    route: 'contact'
  },
  {
    id: 4,
    title: 'Pipeline Integrity',
    description: 'Advanced solutions for maintaining and ensuring pipeline integrity standards.',
    icon: IntegrityIcon,
    route: 'pipeline-integrity'
  }
]

const handleCardClick = (route) => {
  // Placeholder for navigation - pages not ready yet
  console.log(`Navigating to ${route} page`);
  // You can add router logic here when ready
}
</script>

<style scoped>
.cards-section {
  background-color: #0a0a0a;
  padding: 64px var(--site-gutter);
  position: relative;
  z-index: 2;
  scroll-margin-top: var(--site-header-height);
}

.cards-container {
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.card {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%);
  border: 1px solid rgba(231, 199, 58, 0.2);
  border-radius: 12px;
  padding: 40px 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.card:hover {
  transform: translateY(-8px);
  border-color: rgba(231, 199, 58, 0.5);
  box-shadow: 0 10px 30px rgba(231, 199, 58, 0.2);
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%);
}

.card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.card:hover .card-icon {
  transform: scale(1.1);
}

.card-title {
  color: #ffffff;
  margin: 0;
}

.card-description {
  color: var(--color-text-muted);
  margin: 0;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .cards-section {
    padding-block: 48px;
  }
  
  .cards-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card {
    padding: 2rem 1.5rem;
  }
  
  .card-icon {
    width: 70px;
    height: 70px;
  }
}

@media (min-width: 769px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  
  .card {
    padding: 2rem 1.25rem;
  }
}
</style>
