<script setup lang="ts">
import { ref } from 'vue'

const guess = ref('')

const handleGuessSubmit = () => {
	console.log(guess.value);
}
</script>

<template>
	<p class="mb-2">Type in a name and press ENTER:</p>
	<form @submit.prevent="handleGuessSubmit">
		<input v-model="guess" @keyup.enter="handleGuessSubmit" />
	</form>
</template>
