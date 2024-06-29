<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>

<template>
	<h1 class="text-4xl">{{ title }}</h1>
</template>
