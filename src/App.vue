<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteTitle from './components/SiteTitle.vue'
import SiteNav from './components/SiteNav.vue';
</script>

<template>
	<SiteTitle title="Info Site" />
	<SiteNav />
	<header>
		<div class="wrapper">
			<HelloWorld msg="You created it!" subtitle="A great site" />
		</div>
	</header>

	<RouterView />
</template>
