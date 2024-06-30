<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '../data/techbooks.json'
import SingleTechbook from '../components/SingleTechBook.vue'

const techbooks: Techbook[] = structuredClone(_techbooks)
techbooks.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))

export default {
	data() {
		return {
			techbooks
		}
	}
}
</script>

<template>
	<section>
		<p class="mb-3 mt-4 text-xs">There are {{ techbooks.length }} tech books:</p>
		<template v-for="techbook in techbooks" :key="techbook.id">
			<p>111</p>
			<SingleTechbook :techbook="techbook" />
			<p>222</p>
		</template>
	</section>
</template>

<style scoped lang="scss">
@media (max-width: 767px) {
	.mdBook {
		display: none;
	}
}
</style>
