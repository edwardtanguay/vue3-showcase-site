<script lang="ts">
import { defineComponent } from 'vue'

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
	}
})
</script>
<template>
	<p>Message: [{{ message }}]</p>
	<p>{{ colors.join(', ') }}</p>
</template>
