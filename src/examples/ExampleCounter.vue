<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const count = ref(5)
		const changeAmount = ref(1)
		const lowerLimit = 0
		const upperLimit = 10

		const increment = () => {
			count.value += Number(changeAmount.value)
			if (count.value > upperLimit) {
				count.value = upperLimit
			}
		}

		const decrement = () => {
			count.value -= Number(changeAmount.value)
			if (count.value < lowerLimit) {
				count.value = lowerLimit
			}
		}

		return { count, increment, decrement, changeAmount, lowerLimit, upperLimit }
	}
})
</script>

<template>
	<div class="flex gap-2 flex-col">
		<div>allowed range = {{ lowerLimit }}-{{ upperLimit }}</div>
		<div class="flex gap-2">
			<button
				:class="`btn w-[2rem] align-items flex ${count <= lowerLimit ? 'opacity-50' : ''}`"
				@click="decrement"
				:disabled="count <= lowerLimit"
			>
				-
			</button>
			<p class="text-2xl w-[2rem] text-center">{{ count }}</p>
			<button
				:class="`btn w-[2rem] align-items flex ${count >= upperLimit ? 'opacity-50' : ''}`"
				@click="increment"
				:disabled="count >= upperLimit"
			>
				+
			</button>
		</div>
		<div>change by <input v-model="changeAmount" class="w-[2rem] text-center" /></div>
	</div>
</template>
