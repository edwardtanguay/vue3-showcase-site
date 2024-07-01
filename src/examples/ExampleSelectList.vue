<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

const _colors = [
	{
		id: 1,
		text: 'green',
		htmlCode: '#008000'
	},
	{
		id: 2,
		text: 'red',
		htmlCode: '#FF0000'
	},
	{
		id: 3,
		text: 'blue',
		htmlCode: '#0000FF'
	}
]

export default defineComponent({
	setup() {
		const colors = ref(_colors)
		const selectedColor = reactive(structuredClone(_colors[0]))

		const handleColorSelect = (id: number) => {
			if (id) {
				const color = colors.value.find((m) => m.id === id)
				if (color) {
					selectedColor.id = color.id;
					selectedColor.text = color.text;
					selectedColor.htmlCode = color.htmlCode;
				}
			}
		}

		return { colors, handleColorSelect, selectedColor }
	}
})
</script>

<template>
	<section class="flex gap-2 mt-2 flex-col">
		<div class="flex gap-2">
			<button
				class="btn2"
				@click="handleColorSelect(color.id)"
				v-for="color in colors"
				:key="color.id"
			>
				{{ color.text }}
			</button>
		</div>
		<div v-if="selectedColor">
			selected color:
			<span :style="`color: ${selectedColor.htmlCode}; font-weight: bold`">{{ selectedColor.text }}</span>
		</div>
	</section>
</template>
