import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome.vue'
import PageAbout from '@/pages/PageAbout.vue'
import PageTechbooks from '@/pages/PageTechbooks.vue'
import PageTechbook from '@/pages/PageTechbook.vue'
import PageError404 from '@/pages/PageError404.vue'
import PageExamples001 from '@/pages/PageExamples001.vue';

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
			path: '/techbooks/:id',
			component: PageTechbook
		},
		{
			path: '/examples001',
			component: PageExamples001
		},
		{
			path: '/about',
			component: PageAbout
		},
		{
			path: '/:pathMatch(.*)*',
			component: PageError404
		}
	]
})

export default router
