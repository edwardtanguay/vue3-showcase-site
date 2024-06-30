<script setup lang="ts">
import InfoItem from '../components/InfoItem.vue';
</script>

<template>
	<main>
		<p>Welcome to this info site.</p>
		<InfoItem>
			<template #icon>icon</template>
			<template #heading>heading</template>
			<div>
				This is information about a header.
			</div>
		</InfoItem>
	</main>
</template>
