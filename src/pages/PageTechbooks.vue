<script lang="ts">
import type { Techbook } from '@/types'
import _techbooks from '../data/techbooks.json'

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
			<div class="bg-gray-200 p-3 rounded mb-3 min-h-[8rem] flex gap-3">
				<img :src="`images/${techbook.idCode}.jpg`" alt="book" class="w-[6rem] mdBook" />
				<section>
					<div class="bookTitle font-semibold md:text-xl">
						<img
							:src="`images/${techbook.idCode}.jpg`"
							alt="book"
							class="w-[4rem] float-right m-2 md:hidden"
						/><a :href="`techbooks/${techbook.id}`" class="underline">{{ techbook.title }}</a>
					</div>
					<div class="bookDescription italic">{{ techbook.description }}</div>
				</section>
			</div>
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
