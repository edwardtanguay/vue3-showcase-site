import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'
import PageAbout from '../pages/PageAbout.vue'
import PageTechbooks from '../pages/PageTechbooks.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: PageHome
		},
		{
			path: '/techbooks',
			component: PageTechbooks
		},
		{
			path: '/about',
			component: PageAbout
		}
	]
})

export default router
