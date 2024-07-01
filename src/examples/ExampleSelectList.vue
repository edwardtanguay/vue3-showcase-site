<script lang="ts">
import { defineComponent, ref } from 'vue'

const _colors = [
	{
		id: 1,
		text: 'green'
	},
	{
		id: 2,
		text: 'red'
	},
	{
		id: 3,
		text: 'blue'
	}
]

export default defineComponent({
	setup() {
		const colors = ref(_colors)

		return { colors }
	}
})
</script>

<template>
	<div class="flex gap-2 mt-2">
		<button class="btn2" v-for="color in colors" :key="color.id">
			{{ color.text }}
		</button>
	</div>
</template>
