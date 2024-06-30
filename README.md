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
- unit testing with Vitest
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

## Prettier

```
npm run format
```

- see `.prettierrc.json` for rules

## unit testing with Vitest

```
npm run:unit
```
![grafik](https://github.com/edwardtanguay/vue3-showcase-site/assets/446574/476bc544-eec3-47e8-8533-550f60fdfb04)

## testing (Playwrite)

```
npm run:e2e
```

TODO-IMAGE
