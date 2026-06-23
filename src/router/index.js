import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Integrity from '../views/Integrity.vue'
import SmartPigging from '../views/SmartPigging.vue'
import OtherServices from '../views/OtherServices.vue'
import Technical from '../views/Technical.vue'
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/integrity',
    name: 'Integrity',
    component: Integrity
  },
  {
    path: '/smart-pigging',
    name: 'SmartPigging',
    component: SmartPigging
  },
  {
    path: '/other-services',
    name: 'OtherServices',
    component: OtherServices
  },
  {
    path: '/technical',
    name: 'Technical',
    component: Technical
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
