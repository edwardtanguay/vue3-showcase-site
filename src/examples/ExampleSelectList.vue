<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const message = ref('hello')

		return {message}
	}
})
</script>

<template>
	<div>
		message: {{message}}
	</div>
</template>
