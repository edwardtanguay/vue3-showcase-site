<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const count = ref(0)

		const increment = () => {
			count.value++
		}

		const decrement = () => {
			count.value--
		}

		return { count, increment, decrement }
	}
})
</script>

<template>
	<div class="flex gap-2">
		<button class="btn w-[2rem]" @click="decrement">-</button>
		<p class="text-2xl">{{ count }}</p>
		<button class="btn w-[2rem]" @click="increment">+</button>
	</div>
</template>
