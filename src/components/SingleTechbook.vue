<script lang="ts">
import { RouterLink } from 'vue-router'
import type { Techbook } from '@/types'
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		techbook: {
			type: {} as () => Techbook,
			required: true
		}
	}
})
</script>

<template>
	<div class="bg-gray-200 p-3 rounded mb-3 min-h-[8rem] flex gap-3">
		<img :src="`images/${techbook.idCode}.jpg`" alt="book" class="w-[6rem] mdBook" />
		<section>
			<div class="bookTitle font-semibold md:text-xl">
				<img
					:src="`images/${techbook.idCode}.jpg`"
					alt="book"
					class="w-[4rem] float-right m-2 md:hidden"
				/><RouterLink :to="`techbooks/${techbook.id}`" class="underline">{{
					techbook.title
				}}</RouterLink>
			</div>
			<div class="bookDescription italic">{{ techbook.description }}</div>
		</section>
	</div>
</template>
