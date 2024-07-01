<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { getAll } from '@/data/peopleApi'

// const people = [{ name: 'Joseph' }, { name: 'Ava' }, { name: 'Olivia' }]

type AppState = 'guessing' | 'nameNotInList' | 'nameInList'

const guessedName = ref('')
let appState = ref<AppState>('guessing')
const winners: string[] = reactive([])
let people = reactive<any[]>([])

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

const handleOther = (e: KeyboardEvent): void => {
	if (e.key !== 'Enter') {
		appState.value = 'guessing'
	}
}

const handleAccept = (): void => {
	winners.push(guessedName.value)
	guessedName.value = ''
	appState.value = 'guessing'
}

const handleReject = (): void => {
	appState.value = 'guessing'
}

const handleOk = (): void => {
	appState.value = 'guessing'
}

const fetchData = async () => {
	try {
		people = await getAll()
	} catch (err: any) {
		throw new Error(err.message)
	}
}

onMounted(() => {
	fetchData()
})
</script>

<template>
	<p class="mb-2">Type in a name and press ENTER:</p>
	<form @submit.prevent="handleGuessSubmit" class="mb-2">
		<input v-model="guessedName" @keyup.enter="handleGuessSubmit" @keyup="handleOther" />
	</form>
	<div v-if="appState === 'nameInList'">
		<div class="mb-1">
			Congratulations, "{{ guessedName }}" is a lucky name! You've won a prize. Will you accept it?
		</div>
		<div class="flex gap-2">
			<button class="btn3" @click="handleAccept">Accept</button>
			<button class="btn3" @click="handleReject">Reject</button>
		</div>
	</div>
	<div v-if="appState === 'nameNotInList'">
		I'm sorry, "{{ guessedName }}" is not in today's list of lucky names.
		<div class="flex gap-2">
			<button class="btn3" @click="handleOk">Ok</button>
		</div>
	</div>
	<div v-if="winners.length > 0">Winners: {{ winners.join(', ') }}</div>
</template>
