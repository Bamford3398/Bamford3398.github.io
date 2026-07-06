import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Integrity from '../views/Integrity.vue'
import InlineInspection from '../views/InlineInspection.vue'
import Ultrasight from '../views/Ultrasight.vue'
import OtherServices from '../views/OtherServices.vue'
import Advisory from '../views/Advisory.vue'
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
    path: '/other-services',
    name: 'OtherServices',
    component: OtherServices
  },
  {
    path: '/advisory',
    name: 'Advisory',
    component: Advisory
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/technical',
    redirect: '/partners'
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
