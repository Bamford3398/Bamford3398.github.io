<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-container footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo-link">
            <img src="/logo.png" alt="WASP" class="footer-logo" />
          </router-link>
          <p class="footer-tagline">PIPELINE INTEGRITY | DELIVERED</p>
          <p class="footer-intro">
            Specialist pipeline inspection and integrity solutions. Accurate data. Practical insight.
            Confident decisions.
          </p>
          <span class="footer-accent" aria-hidden="true"></span>
          <ul class="footer-contact-quick">
            <li>
              <a href="tel:+61749566100" class="footer-contact-link">
                <PhoneIcon class="footer-icon" />
                +61 7 4956 6100
              </a>
            </li>
            <li>
              <a href="mailto:info@wasp-pipe.com" class="footer-contact-link">
                <EmailIcon class="footer-icon" />
                info@wasp-pipe.com
              </a>
            </li>
          </ul>
        </div>

        <nav class="footer-column" aria-label="Services">
          <h2 class="footer-heading">Services</h2>
          <ul class="footer-links">
            <li v-for="link in serviceLinks" :key="link.label">
              <router-link :to="link.to" class="footer-link">{{ link.label }}</router-link>
            </li>
          </ul>
        </nav>

        <nav class="footer-column" aria-label="About WASP">
          <h2 class="footer-heading">About WASP</h2>
          <ul class="footer-links">
            <li v-for="link in aboutLinks" :key="link.label">
              <router-link :to="link.to" class="footer-link">{{ link.label }}</router-link>
            </li>
          </ul>
        </nav>

        <nav class="footer-column" aria-label="Resources">
          <h2 class="footer-heading">Resources</h2>
          <ul class="footer-links">
            <li v-for="link in resourceLinks" :key="link.label">
              <router-link :to="link.to" class="footer-link">{{ link.label }}</router-link>
            </li>
          </ul>
        </nav>

        <div class="footer-column footer-contact">
          <h2 class="footer-heading">Contact</h2>
          <address class="footer-address">
            <LocationIcon class="footer-icon footer-icon--address" />
            <span>
              WASP Pty Ltd<br />
              10 Titanium Drive<br />
              Paget QLD 4740<br />
              Australia
            </span>
          </address>
          <ul class="footer-contact-details">
            <li>
              <a href="mailto:info@wasp-pipe.com" class="footer-contact-link">
                <EmailIcon class="footer-icon" />
                info@wasp-pipe.com
              </a>
            </li>
            <li>
              <a href="tel:+61749566100" class="footer-contact-link">
                <PhoneIcon class="footer-icon" />
                +61 7 4956 6100
              </a>
            </li>
          </ul>
        </div>

        <aside class="footer-sidebar">
          <div class="footer-quality">
            <h2 class="footer-heading">Certified Quality</h2>
            <img
              src="/qualitas-veritas.png"
              alt="Qualitas Veritas ISO 9001-2015 certification"
              class="footer-cert-image"
              width="689"
              height="894"
              decoding="async"
            />
          </div>

          <div class="footer-connect">
            <h2 class="footer-heading">Connect</h2>
            <a href="#" class="footer-linkedin" aria-label="Follow WASP on LinkedIn">
              <LinkedInIcon class="footer-linkedin-icon" />
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
        </aside>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-container footer-bottom-inner">
        <p class="footer-legal">
          <span>&copy; {{ currentYear }} WASP Pty Ltd. All rights reserved.</span>
          <span class="footer-legal-sep" aria-hidden="true">|</span>
          <a href="#" class="footer-legal-link">Privacy Policy</a>
          <span class="footer-legal-sep" aria-hidden="true">|</span>
          <a href="#" class="footer-legal-link">Terms of Use</a>
          <span class="footer-legal-sep" aria-hidden="true">|</span>
          <a href="#" class="footer-legal-link">Sitemap</a>
        </p>
        <p class="footer-tagline-bottom">PREPARE. INSPECT. PROTECT.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { h } from 'vue'

const currentYear = new Date().getFullYear()

const serviceLinks = [
  { label: 'Intelligent Pigging (ILI)', to: '/inline-inspection' },
  { label: 'Other Services', to: '/other-services' },
  { label: 'Integrity Engineering', to: '/integrity' },
  { label: 'Data Management', to: '/other-services' },
  { label: 'Consulting', to: '/technical' }
]

const aboutLinks = [
  { label: 'Who We Are', to: '/about' },
  { label: 'Our Team', to: '/about' },
  { label: 'Why WASP', to: '/about' },
  { label: 'Careers', to: '/contact' }
]

const resourceLinks = [
  { label: 'Case Studies', to: '/contact' },
  { label: 'News & Insights', to: '/contact' },
  { label: 'Downloads', to: '/contact' }
]

const iconProps = {
  class: 'footer-svg',
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true'
}

const PhoneIcon = {
  render() {
    return h('svg', iconProps, [
      h('path', {
        d: 'M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z',
        fill: 'currentColor'
      })
    ])
  }
}

const EmailIcon = {
  render() {
    return h('svg', iconProps, [
      h('path', {
        d: 'M4 6h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm0 2 8 5 8-5',
        stroke: 'currentColor',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ])
  }
}

const LocationIcon = {
  render() {
    return h('svg', iconProps, [
      h('path', {
        d: 'M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z',
        stroke: 'currentColor',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }),
      h('circle', {
        cx: '12',
        cy: '11',
        r: '2.2',
        fill: 'currentColor'
      })
    ])
  }
}

const LinkedInIcon = {
  render() {
    return h(
      'svg',
      {
        class: 'footer-svg',
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        xmlns: 'http://www.w3.org/2000/svg',
        'aria-hidden': 'true'
      },
      [
        h('path', {
          d: 'M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.09V23h-4v-6.45c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.47 1.67-2.47 3.4V23h-4V8z'
        })
      ]
    )
  }
}
</script>

<style scoped>
.site-footer {
  background-color: #0a0a0a;
  color: #ffffff;
}

.footer-container {
  width: 100%;
  max-width: var(--site-max-width);
  margin-inline: auto;
  padding-inline: var(--site-gutter);
}

.footer-main {
  padding: 64px 0 48px;
}

.footer-grid {
  display: grid;
  grid-template-columns: minmax(220px, 1.35fr) repeat(4, minmax(0, 1fr)) minmax(220px, 1.15fr);
  gap: 32px 28px;
  align-items: start;
}

.footer-brand {
  padding-right: 12px;
}

.footer-logo-link {
  display: inline-block;
  margin-bottom: 16px;
  background: transparent;
}

.footer-logo {
  display: block;
  width: 140px;
  height: auto;
  background: transparent;
}

.footer-tagline {
  margin: 0 0 16px;
  color: #e7c73a;
  font-family: var(--font-body);
  font-size: var(--text-micro);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-eyebrow-wide);
  text-transform: uppercase;
}

.footer-intro {
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.82);
  font-size: var(--text-label);
  line-height: var(--leading-relaxed);
}

.footer-accent {
  display: block;
  width: 40px;
  height: 3px;
  background-color: #e7c73a;
  margin-bottom: 20px;
}

.footer-heading {
  margin: 0 0 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e7c73a;
  color: #e7c73a;
  font-family: var(--font-body);
  font-size: var(--text-micro);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-eyebrow-wide);
  text-transform: uppercase;
}

.footer-links,
.footer-contact-quick,
.footer-contact-details {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-links li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-link,
.footer-contact-link,
.footer-linkedin {
  display: block;
  padding: 12px 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: var(--text-label);
  line-height: var(--leading-normal);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover,
.footer-contact-link:hover,
.footer-linkedin:hover {
  color: #e7c73a;
}

.footer-contact-link,
.footer-linkedin {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-icon {
  flex-shrink: 0;
  color: #e7c73a;
}

.footer-icon--address {
  margin-top: 2px;
}

.footer-address {
  display: flex;
  gap: 10px;
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.82);
  font-style: normal;
  font-size: var(--text-label);
  line-height: var(--leading-relaxed);
}

.footer-contact-details li + li {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-sidebar {
  padding-left: 28px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-quality {
  margin-bottom: 36px;
}

.footer-cert-image {
  display: block;
  width: 120px;
  height: auto;
  background: #ffffff;
  border-radius: 2px;
}

.footer-linkedin {
  padding: 0;
}

.footer-linkedin-icon {
  flex-shrink: 0;
  color: #ffffff;
}

.footer-bottom {
  border-top: 2px solid #e7c73a;
  padding: 20px 0 28px;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.footer-legal {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: var(--text-tiny);
  line-height: var(--leading-normal);
}

.footer-legal-sep {
  margin: 0 10px;
  color: rgba(255, 255, 255, 0.35);
}

.footer-legal-link {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-legal-link:hover {
  color: #e7c73a;
}

.footer-tagline-bottom {
  margin: 0;
  color: #e7c73a;
  font-family: var(--font-heading);
  font-size: var(--text-subheading-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase;
  white-space: nowrap;
}

@media (max-width: 1200px) {
  .footer-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
  }

  .footer-sidebar {
    grid-column: 1 / -1;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-quality {
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 48px 0 36px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-sidebar {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-tagline-bottom {
    white-space: normal;
  }

  .footer-legal-sep {
    display: none;
  }

  .footer-legal {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
