import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Container from '../components/Container.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cards',
    name: 'Container',
    component: Container,
  },
  {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
