<script lang="ts">
import { defineComponent } from 'vue'
import ExampleBox from '@/components/ExampleBox.vue'
import ExampleCounter from '@/examples/ExampleCounter.vue'

export default defineComponent({
	setup() {
		const message = 'this is it'
		const colors = [
			'red',
			'blue',
			'green',
			'yellow',
			'purple',
			'orange',
			'pink',
			'brown',
			'gray',
			'black'
		]

		return {
			message,
			colors
		}
	},
	components: {
		ExampleBox,
		ExampleCounter
	}
})
</script>
<template>
	<ExampleBox>
		<template #title>Simple Message</template>
		<p>Message: [{{ message }}]</p>
	</ExampleBox>
	<ExampleBox>
		<template #title>Display Simple Array</template>
		<p>{{ colors.join(', ') }}</p>
	</ExampleBox>
	<ExampleBox>
		<template #title>Interactive Counter</template>
		<ExampleCounter/>
	</ExampleBox>
</template>
