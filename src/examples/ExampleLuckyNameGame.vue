<script setup lang="ts">
import { ref } from 'vue'

type UserState = 'guessing' | 'guessed'

const guess = ref('')
let userState = ref<UserState>('guessing')

const handleGuessSubmit = () => {
	userState.value = 'guessed'
}
</script>

<template>
	<p class="mb-2">Type in a name and press ENTER:</p>
	<form @submit.prevent="handleGuessSubmit" class="mb-2">
		<input v-model="guess" @keyup.enter="handleGuessSubmit" />
	</form>
	<div v-if="userState === 'guessed'">Your guess was "{{ guess }}".</div>
</template>
