<script setup lang="ts">
import { ref } from 'vue'

const people = [{ name: 'Joseph' }, { name: 'Ava' }, { name: 'Olivia' }]

type AppState = 'guessing' | 'nameNotInList' | 'nameInList'

const guessedName = ref('')
let appState = ref<AppState>('guessing')

const nameIsInList = (name: string): boolean => {
	return people.find((m) => m.name === name) !== undefined
}

const handleGuessSubmit = () => {
	if (nameIsInList(guessedName.value)) {
		appState.value = 'nameInList'
	} else {
		appState.value = 'nameNotInList'
	}
}

const handleOther = (e: KeyboardEvent) => {
	if (e.key !== 'Enter') {
		appState.value = 'guessing'
	}
}

</script>

<template>
	<p class="mb-2">Type in a name and press ENTER:</p>
	<form @submit.prevent="handleGuessSubmit" class="mb-2">
		<input v-model="guessedName" @keyup.enter="handleGuessSubmit" @keyup="handleOther" />
	</form>
	<div v-if="appState === 'nameInList'">
		<div class="mb-1">
			Congratulations, {{ guessedName }} is a lucky name! You've won a prize. Will you accept it?
		</div>
		<div class="flex gap-2">
			<button class="btn3">Accept</button>
			<button class="btn3">Reject</button>
		</div>
	</div>
	<div v-if="appState === 'nameNotInList'">
		I'm sorry, {{ guessedName }} is not in today's list of lucky names.
	</div>
</template>
