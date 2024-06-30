# vue3-showcase-site

This is a Vue 3 site with numerous common features. It can be used as a starter site or a site to learn Vue. 

TODO-GIF

## tech features

- Vue 3 with Vite
- TypeScript
- Tailwind/Sass
- router
- component props
- slot components
- unit testing with Vitest
- Prettier
- ESLint

## app features

- navigation: `SiteNav.vue`
- list/single pages: `PageTechbooks.vue`
- 404 page: `PageError404.vue`

## setup

- clone repository
- `npm i`
- `npm run dev`

## change port

**package.json**

```ts
"dev": "vite --port 3010 --open",
```


## unit testing with Vitest

```
npm t
```

![grafik](https://github.com/edwardtanguay/vue3-showcase-site/assets/446574/476bc544-eec3-47e8-8533-550f60fdfb04)

## Prettier

- formats on save
- see `.prettierrc.json` for rules
- to format all files after rule change

```
npm run format
```
