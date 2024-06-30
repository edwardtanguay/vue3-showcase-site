<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '../data/techbooks.json'
import { useRoute } from 'vue-router'
import { defineComponent, ref } from 'vue'

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
	}
})
</script>

<template>
	<section>
		<div v-if="techbook === undefined">
			<p>Sorry, no tech book found with id {{ id }}.</p>
		</div>
		<div v-if="techbook">
			<p>
				Showing <strong>{{ techbook.title }}</strong> as a single techbook
			</p>
		</div>
	</section>
</template>
