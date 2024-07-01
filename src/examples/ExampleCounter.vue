<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const count = ref(0)
		const changeAmount = ref(2)

		const increment = () => {
			count.value += Number(changeAmount.value)
		}

		const decrement = () => {
			count.value -= Number(changeAmount.value)
		}

		return { count, increment, decrement, changeAmount }
	}
})
</script>

<template>
	<div class="flex gap-2">
		<button class="btn w-[2rem]" @click="decrement">-</button>
		<p class="text-2xl w-[2rem] text-center">{{ count }}</p>
		<button class="btn w-[2rem]" @click="increment">+</button>
		<div>
		change by <input v-model="changeAmount" class="w-[2rem] text-center"/>
		</div>
	</div>
</template>
