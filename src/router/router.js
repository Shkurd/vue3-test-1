
import { createRouter, createWebHistory } from "vue-router"
import MainPage from '@/pages/MainPage.vue'
import AllPostsPage from '@/pages/AllPostsPage.vue'
import SinglePostPage from '@/pages/SinglePostPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import AllPostsPageWithVUEX from '@/pages/AllPostsPageWithVUEX.vue'


const routes = [
	{ path: '/', component: MainPage },
	{ path: '/posts', component: AllPostsPage },
	{ path: '/posts/:id', component: SinglePostPage },
	{ path: '/about', component: AboutPage },
	{ path: '/posts-vuex', component: AllPostsPageWithVUEX },

	
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router