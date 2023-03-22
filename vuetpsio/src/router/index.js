import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImportView from '../views/ImportView.vue'
import ExportView from '../views/ExportView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/import',
    name: 'import-View',
    component: ImportView
  },
  {
    path: '/export',
    name: 'export-View',
    component: ExportView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})