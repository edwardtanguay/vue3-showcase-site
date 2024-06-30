# template-vue3-typescript-tailwind-router

This is a Vue3 template site created 2024-06-29.

TODO-GIF

## tech features

- Vue 3 with Vite
- TypeScript
- Tailwind/Sass
- Router
- Prettier
- ESLint
- Vitest unit testing
- Playwright e2e testing - TODO
- component props

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

## code formatting

```
npm run format
```

- see `.prettier.json` for rules

## testing (Vitest)

```
npm run:unit
```

TODO-IMAGE

## testing (Playwrite)

```
npm run:e2e
```

TODO-IMAGE
