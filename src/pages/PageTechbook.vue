<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '../data/techbooks.json'

const id = 5;

const techbooks: Techbook[] = structuredClone(_techbooks)
const techbook = techbooks.find((m) => m.id === id)

export default {
	data() {
		return {
			techbook,
			id
		}
	}
}
</script>

<template>
	<section>
		<div v-if="techbook === undefined">
			<p>Sorry, no tech book found with id {{id}}.</p>
		</div>
		<div v-if="techbook">
			<p>Showing {{ techbook.title }} as a single techbook</p>
		</div>
	</section>
</template>
