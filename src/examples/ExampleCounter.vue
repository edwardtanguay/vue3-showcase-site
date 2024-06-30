<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		const message = 'nnn';
		return {message}
	}
})
</script>

<template>
	<p>the counter: {{message}}</p>
</template>
