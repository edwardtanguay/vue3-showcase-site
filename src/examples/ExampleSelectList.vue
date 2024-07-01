<script lang="ts">
import { defineComponent, ref } from 'vue'

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
		const selectedColor = ref(colors.value[0])

		const handleColorSelect = (id: number) => {
			if (id) {
				const color = colors.value.find((m) => m.id === id)
				if (color) {
					alert(color.text)
				}
			}
		}

		return { colors, handleColorSelect, selectedColor }
	}
})
</script>

<template>
	<section class="flex gap-2 mt-2">
		<button
			class="btn2"
			@click="handleColorSelect(color.id)"
			v-for="color in colors"
			:key="color.id"
		>
			{{ color.text }}
		</button>
		<div>
			selected color: {{selectedColor.text}}	
		</div>
	</section>
</template>
