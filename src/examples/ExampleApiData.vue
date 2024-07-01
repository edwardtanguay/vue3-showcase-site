<script setup lang="ts">
import { reactive, onMounted } from 'vue'

type Employee = {
	firstName: string
	lastName: string
}

let employees: Employee[] = reactive([])

const fetchData = async () => {
	try {
		const response = await fetch('https://edwardtanguay.vercel.app/share/employees.json')
		if (!response.ok) {
			throw new Error('Network error')
		}
		employees = await response.json()
		console.log(employees)
	} catch (err: any) {
		throw new Error(err.message)
	}
}

onMounted(() => {
	fetchData()
})
</script>

<template>
	<div>
		<p>There are {{ employees.length }} employees:</p>
		{{ employees.map((m) => `${m.firstName} ${m.lastName}`).join(', ') }}
	</div>
</template>
