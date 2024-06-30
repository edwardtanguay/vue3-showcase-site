<script lang="ts">
import type { Techbook } from '@/types'
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		techbook: {
			type: {} as () => Techbook,
			required: true
		},
		context: {
			type: String as () => string,
			default: 'list'
		}
	}
})
</script>

<template>
	<div class="bg-gray-200 p-3 rounded mb-3 min-h-[8rem] flex gap-3">
		<template v-if="context === 'list'">
			<router-link :to="`/techbooks/${techbook.id}`" class="underline">
				<img :src="`/images/${techbook.idCode}.jpg`" alt="book" class="w-[6rem] mdBook" />
			</router-link>
		</template>
		<template v-if="context === 'single'">
			<img :src="`/images/${techbook.idCode}.jpg`" alt="book" class="w-[6rem] mdBook h-fit" />
		</template>
		<section class="w-full">
			<div class="bookTitle font-semibold md:text-xl">
				<template v-if="context === 'list'">
					<router-link :to="`/techbooks/${techbook.id}`" class="underline">
						<img
							:src="`/images/${techbook.idCode}.jpg`"
							alt="book"
							class="w-[4rem] float-right m-2 md:hidden"
						/>
					</router-link>
				</template>
				<template v-if="context === 'single'">
					<img
						:src="`/images/${techbook.idCode}.jpg`"
						alt="book"
						class="w-[4rem] float-right m-2 md:hidden"
					/>
				</template>
				<template v-if="context === 'list'">
					<router-link :to="`/techbooks/${techbook.id}`" class="underline">{{
						techbook.title
					}}</router-link>
				</template>
				<template v-if="context === 'single'">
					{{ techbook.title }}
				</template>
			</div>
			<div class="bookDescription italic w-full">{{ techbook.description }}</div>
			<template v-if="context === 'single'">
				<div class="bg-gray-100 w-fit mt-2 py-2 px-3 rounded shadow font-mono text-xs">
					<div>Published: {{ techbook.yearMonth }}</div>
					<div>Rank: {{ techbook.rank }}</div>
				</div>
			</template>
		</section>
	</div>
</template>

<style scoped lang="scss">
@media (max-width: 767px) {
	.mdBook {
		display: none;
	}
}
</style>
