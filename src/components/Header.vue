<template>
  <header class="header">
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
        <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
        <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
        <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
      </button>
      <nav class="navigation" :class="{ 'open': isMenuOpen }">
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
            @click="toggleServices"
          >
            Services
            <span class="nav-dropdown-chevron" :class="{ open: isServicesOpen }">▾</span>
          </button>
          <ul class="nav-dropdown-menu" :class="{ open: isServicesOpen }">
            <li>
              <router-link to="/smart-pigging" class="nav-dropdown-item" @click="handleNavClick">
                Smart Pigging
              </router-link>
            </li>
            <li>
              <router-link to="/integrity" class="nav-dropdown-item" @click="handleNavClick">
                Integrity
              </router-link>
            </li>
            <li>
              <router-link to="/other-services" class="nav-dropdown-item" @click="handleNavClick">
                Other Services
              </router-link>
            </li>
          </ul>
        </div>
        <router-link to="/technical" class="nav-link" @click="handleNavClick">Technical</router-link>
        <router-link to="/contact" class="nav-link" @click="handleNavClick">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isServicesOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value
}

const handleNavClick = () => {
  isMenuOpen.value = false
  isServicesOpen.value = false
}

const handleServiceClick = (service) => {
  console.log('Service clicked:', service)
  handleNavClick()
}
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
  padding: 10px 0;
  overflow: visible;
}

.header-accent-line {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: #D4AF37;
  z-index: 0;
  pointer-events: none;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
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
  height: 100px;
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

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #D4AF37;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #D4AF37;
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
  font-size: 0.75rem;
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
  border: 1px solid rgba(212, 175, 55, 0.25);
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
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease, background-color 0.2s ease, padding-left 0.2s ease;
}

.nav-dropdown-item:hover {
  color: #D4AF37;
  background-color: rgba(212, 175, 55, 0.08);
  padding-left: 1.5rem;
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
    padding: 0 1rem;
    position: relative;
  }
  
  .burger-menu {
    display: flex;
  }
  
  .navigation {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 0;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(212, 175, 55, 0.2);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
  }
  
  .navigation.open {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.1rem;
    padding: 1rem 0;
    width: 100%;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  }
  
  .nav-link::after {
    display: none;
  }
  
  .nav-link:hover {
    color: #D4AF37;
    padding-left: 0.5rem;
  }

  .nav-dropdown {
    width: 100%;
  }

  .nav-dropdown-trigger {
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  }

  .nav-dropdown-trigger::after {
    display: none;
  }

  .nav-dropdown-menu {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    display: none;
    width: 100%;
    margin-top: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: #0a0a0a;
    padding: 0;
  }

  .nav-dropdown-menu.open {
    display: block;
    transform: none;
  }

  .nav-dropdown-item {
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.08);
  }

  .nav-dropdown-item:hover {
    padding-left: 1.5rem;
  }
  
  .logo-image {
    height: 60px;
  }
}
</style>
