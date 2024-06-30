<template>
	<fieldset class="border border-gray-400 mb-4 pb-4 px-4 rounded-lg">
		<legend class="text-sm text-gray-500 px-2 smallcaps">
			<slot name="title"></slot>
		</legend>
		<div class="mt-1">
			<slot></slot>
		</div>
	</fieldset>
</template>
