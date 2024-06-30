<template>
	<fieldset class="border border-gray-400 mb-4 pt-1 pb-4 px-4 rounded-lg">
		<legend class="text-sm text-gray-500 px-2 smallcaps">
			<slot name="title"></slot>
		</legend>
		<slot></slot>
	</fieldset>
</template>
