# template-vue3-typescript-tailwind-router

This is a Vue3 template site created 2024-06-29.

TODO-GIF

## tech features

- Vue 3 with Vite
- TypeScript
- Tailwind/Sass
- router
- component props
- slot components
- unit testing with Vitest
- e2e testing with Playwright - TODO
- Prettier
- ESLint

## component props

**SiteTitle.vue**

```ts
<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>

<template>
	<h1 class="text-4xl">{{ title }}</h1>
</template>
```

**App.vue**

```ts
<SiteTitle title="Info Site" />
```

## slot components

**InfoItem.vue**

```ts
<template>
	<div class="flex gap-4 mt-3 bg-gray-200 p-5 rounded w-fit">
		<div class="text-4xl text-gray-700">
			<slot name="icon"></slot>
		</div>
		<div class="flex flex-col">
			<h3 class="font-semibold text-xl mb-1">
				<slot name="heading"></slot>
			</h3>
			<slot></slot>
		</div>
	</div>
</template>
```

**HomeView.vue**

```ts
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
```

## unit testing with Vitest

```
npm run:unit
```

![grafik](https://github.com/edwardtanguay/vue3-showcase-site/assets/446574/476bc544-eec3-47e8-8533-550f60fdfb04)

## e2e testing with Playwright

```
npm run:e2e
```

TODO-IMAGE


## Prettier

```
npm run format
```

- see `.prettierrc.json` for rules
