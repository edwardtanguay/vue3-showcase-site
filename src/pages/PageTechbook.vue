<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '@/data/techbooks.json'
import { useRoute } from 'vue-router'
import { defineComponent, ref } from 'vue'
import SingleTechbook from '@/components/SingleTechbook.vue'
import PageError404 from './PageError404.vue'

export default defineComponent({
	setup() {
		const route = useRoute()
		const id = ref(route.params.id as string)

		const techbooks: Techbook[] = structuredClone(_techbooks)
		const techbook = techbooks.find((m) => m.id === Number(id.value))

		return {
			techbook,
			id
		}
	},
	components: {
		SingleTechbook,
		PageError404
	}
})
</script>

<template>
	<section>
		<div v-if="techbook === undefined">
			<p>Sorry, no tech book found with id {{ id }}.</p>
			<PageError404 />
		</div>
		<div v-if="techbook">
			<SingleTechbook :techbook="techbook" context="single" />
		</div>
	</section>
</template>
