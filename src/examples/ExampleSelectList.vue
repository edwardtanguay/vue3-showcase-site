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
		const message = ref('hello')
		const colors = ref(_colors)

		return { message, colors }
	}
})
</script>

<template>
	<div>message: {{ message }}</div>
	<ul class="list-disc ml-6">
		<li v-for="color in colors" :key="color.id">
			{{ color.text }}
		</li>
	</ul>
</template>
