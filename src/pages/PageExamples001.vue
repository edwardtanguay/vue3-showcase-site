<script lang="ts">
import { defineComponent } from 'vue'
import ExampleBox from '@/components/ExampleBox.vue'
import ExampleCounter from '@/examples/ExampleCounter.vue'
import ExampleSelectList from '@/examples/ExampleSelectList.vue'

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
		ExampleCounter,
		ExampleSelectList
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
		<ExampleCounter class="mt-2" />
	</ExampleBox>
	<ExampleBox>
		<template #title>Select List</template>
		<ExampleSelectList />
	</ExampleBox>
</template>
