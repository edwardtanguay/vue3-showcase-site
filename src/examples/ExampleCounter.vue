<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const count = ref(10)
		const changeAmount = ref(2)

		const increment = () => {
			count.value += Number(changeAmount.value)
			if(count.value > 20) {
				count.value = 20;
			}
		}

		const decrement = () => {
			count.value -= Number(changeAmount.value)
			if(count.value < 0) {
				count.value = 0;
			}
		}

		return { count, increment, decrement, changeAmount }
	}
})
</script>

<template>
	<div class="flex gap-2">
		<button :class="`btn w-[2rem] ${count <= 0 ? 'opacity-50' : ''}`" @click="decrement" :disabled="changeAmount <= 0">-</button>
		<p class="text-2xl w-[2rem] text-center">{{ count }}</p>
		<button :class="`btn w-[2rem] ${count >= 20 ? 'opacity-50' : ''}`" @click="increment" :disabled="changeAmount >= 20">+</button>
		<div>
		change by <input v-model="changeAmount" class="w-[2rem] text-center"/>
		</div>
	</div>
</template>
