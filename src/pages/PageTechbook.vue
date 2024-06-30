<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '../data/techbooks.json'
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		const test = 'hello'
		const id = 18

		const techbooks: Techbook[] = structuredClone(_techbooks)
		const techbook = techbooks.find((m) => m.id === id)

		return {
			techbook,
			id,
			test
		}
	}
})
</script>

<template>
	<section>
		<p>[{{ test }}]</p>
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
