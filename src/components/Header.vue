<template>
  <header class="header" :class="{ 'header--hidden': !isHeaderVisible }">
    <div class="header-accent-line"></div>
    <div class="header-container">
      <router-link to="/" class="logo-section" @click="handleNavClick">
        <img src="/logo.png" alt="WASP Inline Inspection" class="logo-image" />
      </router-link>
      <button
        class="burger-menu"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="burger-line" :class="{ open: isMenuOpen }"></span>
        <span class="burger-line" :class="{ open: isMenuOpen }"></span>
        <span class="burger-line" :class="{ open: isMenuOpen }"></span>
      </button>
      <nav class="navigation" :class="{ open: isMenuOpen }">
        <!-- Desktop -->
        <div class="desktop-nav">
          <router-link to="/" class="nav-link" @click="handleNavClick">Home</router-link>
          <router-link to="/about" class="nav-link" @click="handleNavClick">About</router-link>
          <div
            class="nav-dropdown"
            @mouseenter="isServicesOpen = true"
            @mouseleave="isServicesOpen = false"
          >
            <button
              type="button"
              class="nav-link nav-dropdown-trigger"
              :aria-expanded="isServicesOpen"
              aria-haspopup="true"
            >
              Services
              <span class="nav-dropdown-chevron" :class="{ open: isServicesOpen }">▾</span>
            </button>
            <ul class="nav-dropdown-menu" :class="{ open: isServicesOpen }">
              <li
                class="nav-dropdown-group"
                @mouseenter="isInlineOpen = true"
                @mouseleave="isInlineOpen = false"
              >
                <router-link to="/inline-inspection" class="nav-dropdown-item" @click="handleNavClick">
                  Inline Inspection
                </router-link>
                <ul class="nav-dropdown-submenu" :class="{ open: isInlineOpen }">
                  <li>
                    <router-link to="/ultrasight" class="nav-dropdown-item nav-dropdown-subitem" @click="handleNavClick">
                      UltraSight
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/integrity" class="nav-dropdown-item" @click="handleNavClick">
                  Integrity
                </router-link>
              </li>
              <li>
                <router-link to="/technical" class="nav-dropdown-item" @click="handleNavClick">
                  Technical
                </router-link>
              </li>
              <li>
                <router-link to="/other-services" class="nav-dropdown-item" @click="handleNavClick">
                  Other Services
                </router-link>
              </li>
            </ul>
          </div>
          <router-link to="/partners" class="nav-link" @click="handleNavClick">Partners</router-link>
          <router-link to="/contact" class="nav-link" @click="handleNavClick">Contact</router-link>
        </div>

        <!-- Mobile -->
        <div
          class="mobile-nav-panels"
          :class="{ 'services-open': mobilePanel === 'services' }"
        >
          <div class="mobile-nav-panel mobile-nav-panel--main">
            <router-link to="/" class="nav-link" @click="handleNavClick">Home</router-link>
            <router-link to="/about" class="nav-link" @click="handleNavClick">About</router-link>
            <button
              type="button"
              class="nav-link mobile-services-trigger"
              @click="openMobileServices"
            >
              Services
              <span class="mobile-nav-chevron" aria-hidden="true">›</span>
            </button>
            <router-link to="/partners" class="nav-link" @click="handleNavClick">Partners</router-link>
            <router-link to="/contact" class="nav-link" @click="handleNavClick">Contact</router-link>
          </div>

          <div class="mobile-nav-panel mobile-nav-panel--sub">
            <button type="button" class="mobile-nav-back" @click="backToMainNav">
              <span class="mobile-nav-back-icon" aria-hidden="true">‹</span>
              Services
            </button>
            <ul class="mobile-subnav-list">
              <li>
                <router-link to="/inline-inspection" class="mobile-subnav-link" @click="handleNavClick">
                  Inline Inspection
                </router-link>
              </li>
              <li>
                <router-link to="/ultrasight" class="mobile-subnav-link mobile-subnav-link--child" @click="handleNavClick">
                  ULTRASIGHT
                </router-link>
              </li>
              <li>
                <router-link to="/integrity" class="mobile-subnav-link" @click="handleNavClick">
                  Integrity
                </router-link>
              </li>
              <li>
                <router-link to="/technical" class="mobile-subnav-link" @click="handleNavClick">
                  Technical
                </router-link>
              </li>
              <li>
                <router-link to="/other-services" class="mobile-subnav-link" @click="handleNavClick">
                  Other Services
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isServicesOpen = ref(false)
const isInlineOpen = ref(false)
const mobilePanel = ref('main')
const isHeaderVisible = ref(true)
const lastScrollY = ref(0)

const resetMobilePanel = () => {
  mobilePanel.value = 'main'
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    resetMobilePanel()
  } else {
    isHeaderVisible.value = true
  }
}

const openMobileServices = () => {
  mobilePanel.value = 'services'
}

const backToMainNav = () => {
  mobilePanel.value = 'main'
}

const handleNavClick = () => {
  isMenuOpen.value = false
  isServicesOpen.value = false
  isInlineOpen.value = false
  resetMobilePanel()
}

const handleScroll = () => {
  const currentY = window.scrollY

  if (isMenuOpen.value) {
    isHeaderVisible.value = true
    lastScrollY.value = currentY
    return
  }

  if (currentY <= 0) {
    isHeaderVisible.value = true
  } else if (currentY > lastScrollY.value && currentY > 72) {
    isHeaderVisible.value = false
  } else if (currentY < lastScrollY.value) {
    isHeaderVisible.value = true
  }

  lastScrollY.value = currentY
}

onMounted(() => {
  lastScrollY.value = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: var(--site-header-padding-block) 0;
  overflow: visible;
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.header--hidden {
  transform: translateY(-100%);
  pointer-events: none;
}

.header-accent-line {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: #e7c73a;
  z-index: 0;
  pointer-events: none;
}

.header-container {
  max-width: var(--site-max-width);
  margin: 0 auto;
  padding: 0 var(--site-gutter);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.logo-section:hover {
  opacity: 0.8;
}

.logo-image {
  height: var(--site-header-logo-height);
  width: auto;
  object-fit: contain;
}

.navigation {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.desktop-nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.mobile-nav-panels {
  display: none;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #e7c73a;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e7c73a;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-dropdown {
  position: relative;
}

.nav-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
}

.nav-dropdown-chevron {
  transition: transform 0.3s ease;
}

.nav-dropdown-chevron.open {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  min-width: 180px;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
  background-color: #0a0a0a;
  border: 1px solid rgba(231, 199, 58, 0.25);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
  z-index: 10;
}

.nav-dropdown:hover .nav-dropdown-menu,
.nav-dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.nav-dropdown-item {
  display: block;
  padding: 0.65rem 1.25rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease, padding-left 0.2s ease;
}

.nav-dropdown-item:hover {
  color: #e7c73a;
  background-color: rgba(231, 199, 58, 0.08);
  padding-left: 1.5rem;
}

.nav-dropdown-group {
  position: relative;
}

.nav-dropdown-submenu {
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 180px;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;
  background-color: #0a0a0a;
  border: 1px solid rgba(231, 199, 58, 0.25);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
  z-index: 11;
}

.nav-dropdown-group:hover .nav-dropdown-submenu,
.nav-dropdown-submenu.open {
  opacity: 1;
  visibility: visible;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.burger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.burger-line.open:nth-child(2) {
  opacity: 0;
}

.burger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 var(--site-gutter);
    position: relative;
    flex-direction: row-reverse;
  }

  .burger-menu {
    display: flex;
  }

  .desktop-nav {
    display: none;
  }

  .navigation {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(100%, 320px);
    height: 100vh;
    height: 100dvh;
    background-color: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 5rem 0 2rem;
    gap: 0;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(231, 199, 58, 0.2);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .navigation.open {
    right: 0;
  }

  .mobile-nav-panels {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .mobile-nav-panel {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    transition: transform 0.3s ease;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .mobile-nav-panel--main {
    transform: translateX(0);
  }

  .mobile-nav-panel--sub {
    transform: translateX(100%);
  }

  .mobile-nav-panels.services-open .mobile-nav-panel--main {
    transform: translateX(-100%);
  }

  .mobile-nav-panels.services-open .mobile-nav-panel--sub {
    transform: translateX(0);
  }

  .nav-link {
    display: block;
    padding: 1rem 0;
    width: 100%;
    border-bottom: 1px solid rgba(231, 199, 58, 0.1);
    font-family: var(--font-body);
    font-size: var(--text-lead);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-nav);
    text-align: left;
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
  }

  .nav-link::after {
    display: none;
  }

  .nav-link:hover {
    color: #e7c73a;
    padding-left: 0.5rem;
  }

  .mobile-services-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #ffffff;
  }

  .mobile-nav-chevron {
    color: #e7c73a;
    font-size: 1.25rem;
    line-height: 1;
  }

  .mobile-nav-back {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid rgba(231, 199, 58, 0.1);
    background: none;
    color: #e7c73a;
    font-family: var(--font-body);
    font-size: var(--text-lead);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-nav);
    cursor: pointer;
    text-align: left;
  }

  .mobile-nav-back-icon {
    font-size: 1.5rem;
    line-height: 1;
  }

  .mobile-subnav-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile-subnav-link {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(231, 199, 58, 0.08);
    color: #ffffff;
    text-decoration: none;
    font-family: var(--font-body);
    font-size: var(--text-lead);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-nav);
    transition: color 0.2s ease, padding-left 0.2s ease;
  }

  .mobile-subnav-link--child {
    position: relative;
    padding-left: 1.5rem;
    font-size: var(--text-nav);
    text-transform: uppercase;
    letter-spacing: var(--tracking-nav);
  }

  .mobile-subnav-link--child::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #e7c73a;
  }

  .mobile-subnav-link:hover {
    color: #e7c73a;
    padding-left: 0.5rem;
  }

  .mobile-subnav-link--child:hover {
    padding-left: 1.75rem;
  }

  .logo-image {
    height: var(--site-header-logo-height-mobile);
  }
}
</style>
