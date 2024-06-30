<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const count = ref(0)

		const increment = () => {
			count.value++
		}
		return { count, increment }
	}
})
</script>

<template>
	<div class="flex gap-2">
		<button class="btn" @click="increment">+</button>
		<p class="text-2xl">{{ count }}</p>
	</div>
</template>
