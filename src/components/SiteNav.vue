<template>
	<nav class="bg-gray-400 flex gap-4 px-2 pb-1 pt-1 md:pt-0 rounded mb-3">
		<router-link to="/">Home</router-link>
		<router-link to="/techbooks">Books</router-link>
		<router-link to="/examples001">Examples</router-link>
		<router-link to="/about">About</router-link>
	</nav>
</template>

<style scoped lang="scss">
nav {
	a.router-link-active {
		font-weight: bold;
	}
}
</style>


