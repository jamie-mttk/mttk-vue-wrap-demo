<script setup lang="ts">

import { layoutwConfig } from './data.ts'
import  CodeView from '@/components/CodeView/index.vue'
import {codeConfig} from './code.ts'



</script>

<template>
	<h3>Layout is another container component. This implementation is based on element plus el-row/el-col.<br>
	Absolutely we could simplify the configuration(Not implemented here).</h3>
	<CompWrap ref="mainRef1" :config="layoutwConfig"></CompWrap>
		
	<CodeView :config="codeConfig"></CodeView>
</template>
<style>

</style>