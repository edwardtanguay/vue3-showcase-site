<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '@/data/techbooks.json'
import SingleTechbook from '@/components/SingleTechbook.vue'

const techbooks: Techbook[] = structuredClone(_techbooks)
techbooks.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))

export default {
	data() {
		return {
			techbooks
		}
	},
	components: {
		SingleTechbook
	}
}
</script>

<template>
	<section>
		<p class="mb-3 mt-4 text-xs">There are {{ techbooks.length }} tech books:</p>
		<template v-for="techbook in techbooks" :key="techbook.id">
			<SingleTechbook :techbook="techbook" />
		</template>
	</section>
</template>
