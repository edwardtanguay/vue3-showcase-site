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

		const handleColorSelect = (id: number) => {
			if (id) {
				const color = colors.value.find((m) => m.id === id)
				alert(color?.text)
			}
		}

		return { colors, handleColorSelect }
	}
})
</script>

<template>
	<div class="flex gap-2 mt-2">
		<button
			class="btn2"
			@click="handleColorSelect(color.id)"
			v-for="color in colors"
			:key="color.id"
		>
			{{ color.text }}
		</button>
	</div>
</template>
