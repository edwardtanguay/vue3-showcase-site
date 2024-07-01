<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

type Color = {
	id: number
	text: string
	htmlCode: string
}

const _colors: Color[] = [
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
		const colors: Color[] = reactive(_colors)
		const selectedColor = reactive(structuredClone(_colors[0]))
		const selectedColors: Color[] = reactive([])

		const handleColorSelect = (id: number) => {
			if (id) {
				const color = colors.find((m) => m.id === id)
				if (color) {
					selectedColor.id = color.id
					selectedColor.text = color.text
					selectedColor.htmlCode = color.htmlCode
					selectedColors.push(color)
				}
			}
		}

		return { colors, handleColorSelect, selectedColor, selectedColors }
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
			<span :style="`color: ${selectedColor.htmlCode}; font-weight: bold`">{{
				selectedColor.text
			}}</span>
		</div>
		<div v-if="selectedColors.length > 0">
			You clicked on: <span v-html="selectedColors.map((m) => `<span style='color: ${m.htmlCode}'>${m.text}</span>`).join(', ')"></span>
		</div>
	</section>
</template>
