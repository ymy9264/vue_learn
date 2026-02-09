import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post/:slug', component: Post },
  {
    path: '/ucs',
    name: 'ucs',
    // 确保这里的路径指向你那个 Ucs.vue
    component: () => import('../components/Ucs.vue') 
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})