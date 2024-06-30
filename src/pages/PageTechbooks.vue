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
		<div v-for="techbook in techbooks" :key="techbook.id" class="bg-gray-200 p-3 rounded mb-3 min-h-[8rem]">
			<!-- <img src="images/bashCookbook.jpg" alt="book" /> -->
			
			<div class="font-semibold"><img :src="`images/${techbook.idCode}.jpg`" alt="book" class="w-[4rem] float-right m-2" />{{ techbook.title }}</div>
			<div class="italic">{{ techbook.description }}</div>
		</div>
	</section>
</template>
