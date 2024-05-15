<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, computed, isRef, isReactive, onBeforeUpdate } from 'vue'
import {tabsConfig} from './data.ts'
import  CodeView from '@/components/CodeView/index.vue'
import {codeConfig} from './code.ts'

</script>

<template>
	<div style="margin:10px;">

		<h3>Tabs is a pure container component. This demo reuse the configs of the previous demos.</h3>
		<MttkWrapComp ref="mainRef" :config="tabsConfig"></MttkWrapComp>
		
		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>