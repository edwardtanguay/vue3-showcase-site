<script setup lang="ts">
import InfoItem from '../components/InfoItem.vue';
</script>

<template>
	<main>
		<p>Welcome to this site.</p>

		<InfoItem>
			<template #icon>1</template>
			<template #heading>Vue.js</template>
			<div>
				This is a template site that runs on Vue 3 created with Vite.
			</div>
		</InfoItem>

		<InfoItem>
			<template #icon>2</template>
			<template #heading>Slot Components</template>
			<div>
				These boxes are examples of slots.
			</div>
		</InfoItem>

		<InfoItem>
			<template #icon>3</template>
			<template #heading>Other Features</template>
			<section class="flex gap-3 mt-1">
				<div class="featureBox">TypeScript</div>
				<div class="featureBox">Tailwind</div>
				<div class="featureBox">Testing</div>
			</section>
		</InfoItem>
	</main>
</template>

<style scoped lang="scss">
	.featureBox {
		border: 1px solid #888;
		background-color: #eee;
		border-radius: .3rem;
		padding: .1rem .4rem .2rem .4rem;
	}
</style>
