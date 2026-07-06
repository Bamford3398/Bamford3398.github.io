<template>
  <div class="partners-page">
    <section class="page-hero">
      <div class="page-container">
        <h1 class="page-title">Partners</h1>
      </div>
    </section>

    <div class="page-container page-body">
      <section class="content-section">
        <p class="body-text">
          WASP works with a select group of established industry partners to deliver seamless,
          end-to-end project support for our clients. Every partner is chosen for their technical
          capability, operational standards and alignment with the way we work.
        </p>

        <article
          v-for="partner in partners"
          :key="partner.name"
          class="partner-block"
        >
          <h2 class="partner-name">{{ partner.name }}</h2>
          <p class="body-text">{{ partner.description }}</p>
          <div class="partner-contact">
            <a
              v-if="partner.website"
              :href="partner.website"
              class="partner-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ partner.websiteLabel || partner.website }}
            </a>
            <p v-if="partner.websitePlaceholder" class="partner-placeholder">
              {{ partner.websitePlaceholder }}
            </p>
            <p v-if="partner.phone" class="partner-detail">T: {{ partner.phone }}</p>
            <p v-if="partner.email" class="partner-detail">
              E:
              <a :href="`mailto:${partner.email}`" class="partner-link">{{ partner.email }}</a>
            </p>
            <p v-if="partner.contactPlaceholder" class="partner-placeholder">
              {{ partner.contactPlaceholder }}
            </p>
          </div>
        </article>
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
const partners = [
  {
    name: 'USA DeBusk',
    description:
      'A leading provider of industrial cleaning, decoking and pipeline services across North America, USA DeBusk supports WASP\'s operations in the region with state-of-the-art mechanical cleaning, pigging and turnaround capabilities. Their extensive fleet of state of the art TriMax decoking pumping units and multi-disciplinary team deliver single-source solutions across refining and downstream energy applications.',
    website: 'https://www.usadebusk.com',
    websiteLabel: 'www.usadebusk.com',
    phone: '+1 (844) 243-5557',
    email: 'sales@usadebusk.com'
  },
  {
    name: 'Adler & Allan',
    description:
      'One of the UK\'s leading pipeline and environmental services providers, Adler & Allan support WASP\'s operations with specialist pipeline pigging, maintenance and commissioning services. They specialise in turnkey cleaning solutions for difficult and unpiggable pipelines, and provide pipeline inspection services across the UK and Europe.',
    website: 'https://www.adlerandallan.co.uk',
    websiteLabel: 'www.adlerandallan.co.uk',
    phone: '+44 (0) 800 592 827'
  },
  {
    name: 'Corefitz Ltd.',
    description:
      'Specialists in common header pig delivery and pipeline pigging support, Corefitz provide critical operational capability for complex pigging programmes.',
    websitePlaceholder: '[Website to follow]',
    contactPlaceholder: '[Contact details to follow]'
  },
  {
    name: '3P Services GmbH & Co. KG',
    description:
      'A global leader in challenging pipeline inspections for over 30 years, 3P Services operate a fleet of more than 400 inline inspection tools ranging from 2 to 48 inches in diameter, covering MFL, UT, GEO, XYZ and short-range distance technologies. They specialise in pipelines considered difficult or unpiggable by conventional means, and provide associated services including feasibility studies, pre-inspection proving, cleaning and post-inspection support.',
    website: 'https://www.3p-services.com',
    websiteLabel: 'www.3p-services.com'
  },
  {
    name: 'Kanooz Contracting Est.',
    description:
      'Based in the Kingdom of Saudi Arabia, Kanooz is a leading provider of industrial services to the oil and gas, water and power sectors across the Middle East. Their capabilities include plant turnaround, mechanical cleaning, decoking, pipeline pigging and commissioning services. In collaboration with WASP, Kanooz provides intelligent pigging and inline inspection services for fired heater tubes and pipelines across the region.',
    website: 'https://www.kanooz.com',
    websiteLabel: 'www.kanooz.com'
  }
]
</script>

<style scoped>
.partners-page {
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

.partner-block {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(231, 199, 58, 0.15);
}

.partner-block:first-of-type {
  margin-top: 32px;
  padding-top: 0;
  border-top: none;
}

.partner-name {
  color: #ffffff;
  margin-bottom: 16px;
}

.partner-contact {
  margin-top: 16px;
}

.partner-link {
  display: inline-block;
  color: #e7c73a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.partner-link:hover {
  color: #e7c73a;
}

.partner-detail {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.75);
}

.partner-placeholder {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.page-cta {
  margin-top: 56px;
}

@media (max-width: 768px) {
  .partners-page {
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
