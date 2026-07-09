import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Integrity from '../views/Integrity.vue'
import InlineInspection from '../views/InlineInspection.vue'
import Ultrasight from '../views/Ultrasight.vue'
import CameraPigging from '../views/CameraPigging.vue'
import ConsultancySupport from '../views/ConsultancySupport.vue'
import Partners from '../views/Partners.vue'
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
    path: '/inline-inspection',
    name: 'InlineInspection',
    component: InlineInspection
  },
  {
    path: '/smart-pigging',
    redirect: '/inline-inspection'
  },
  {
    path: '/ultrasight',
    name: 'Ultrasight',
    component: Ultrasight
  },
  {
    path: '/camera-pigging',
    name: 'CameraPigging',
    component: CameraPigging
  },
  {
    path: '/consultancy-support',
    name: 'ConsultancySupport',
    component: ConsultancySupport
  },
  {
    path: '/other-services',
    redirect: '/consultancy-support'
  },
  {
    path: '/technical',
    redirect: '/consultancy-support'
  },
  {
    path: '/advisory',
    redirect: '/consultancy-support'
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
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
