<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'

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

const initialColor: Color = {
	id: 0,
	text: '',
	htmlCode: ''
}

const message = ref('')
const colors: Color[] = reactive(_colors)
const selectedColor = reactive(structuredClone(initialColor))
const selectedColors: Color[] = reactive([])

watch(message, (newMessage: string, oldMessage: string) => {
	console.log(`message changed from "${oldMessage}" to "${newMessage}"`)
})

const message2 = computed(() => {
	if (selectedColors.length === 0) {
		return ''
	} else {
		return `Colors have been selected ${selectedColors.length} times, and blue was selected ${selectedColors.filter((m) => m.text === 'blue').length} times. `
	}
})

const handleColorSelect = (id: number) => {
	if (id) {
		const color = colors.find((m) => m.id === id)
		if (color) {
			Object.assign(selectedColor, color)
			selectedColors.push(color)
			message.value = `You have selected ${selectedColors.length} colors.`
		}
	}
}
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
		<div v-if="selectedColor.id !== 0">
			selected color:
			<span :style="`color: ${selectedColor.htmlCode}; font-weight: bold`">{{
				selectedColor.text
			}}</span>
		</div>
		<div v-if="selectedColors.length > 0">
			colors you have clicked on:
			<span
				v-html="
					selectedColors
						.map((m) => `<span style='color: ${m.htmlCode}'>${m.text}</span>`)
						.join(', ')
				"
			></span>
		</div>
		<div v-if="message !== ''">
			{{ message }}
		</div>
		<div v-if="message2 !== ''">
			{{ message2 }}
		</div>
	</section>
</template>
