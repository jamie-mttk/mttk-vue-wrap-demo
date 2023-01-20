<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, computed, isRef, isReactive, onBeforeUpdate } from 'vue'
import {tabsConfig} from './data.ts'
import  CodeView from '@/components/CodeView/index.vue'
import {codeConfig} from './code.ts'

</script>

<template>
	<div style="margin:10px;">

		<h3>Tabs is a pure container component. This demo reuse the compoents of the previous demos.</h3>
		<CompWrap ref="mainRef" :config="tabsConfig"></CompWrap>
		
		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>