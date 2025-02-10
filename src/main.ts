import type { RouteRecordRaw } from 'vue-router'
import { createPinia } from 'pinia'
import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./pages/DrawListPage.vue') },
  { path: '/:uuid/details', name: 'details', component: () => import('./pages/DrawDetailsPage.vue') },
  { path: '/:uuid/edit', name: 'edit', component: () => import('./pages/DrawEditPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(pinia)
app.use(DataLoaderPlugin, { router })
app.use(router)
app.mount('#app')
