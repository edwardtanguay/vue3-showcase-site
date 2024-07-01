<script lang="ts" setup>
import ExampleBox from '@/components/ExampleBox.vue'
import ExampleCounter from '@/examples/ExampleCounter.vue'
import ExampleSelectList from '@/examples/ExampleSelectList.vue'
import ExampleLuckyNameGame from '@/examples/ExampleLuckyNameGame.vue'
import ExampleApiData from '@/examples/ExampleApiData.vue'
</script>
<template>
	<ExampleBox>
		<template #title>Interactive Counter (defineComponent)</template>
		<ExampleCounter class="mt-2" />
	</ExampleBox>
	<ExampleBox>
		<template #title>Select List</template>
		<ExampleSelectList />
	</ExampleBox>
	<ExampleBox>
		<template #title>Lucky Name Game</template>
		<ExampleLuckyNameGame />
	</ExampleBox>
	<ExampleBox>
		<template #title>API Data</template>
		<ExampleApiData/>
	</ExampleBox>
</template>
