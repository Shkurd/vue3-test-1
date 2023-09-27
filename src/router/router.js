
import { createRouter, createWebHistory } from "vue-router"
import MainPage from '@/pages/MainPage.vue'
import PostPage from '@/pages/PostPage.vue'

const routes = [
	{ path: '/', component: MainPage },
  { path: '/post', component: PostPage },
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router