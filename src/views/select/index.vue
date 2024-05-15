<script setup lang="ts">

import { value, config1,config2} from './data.ts'
import {codeConfig} from './code.ts'
import  CodeView from '@/components/CodeView/index.vue'

//


</script>

<template>
	<div>
		<h3>This sample try to show how to enhance the functionalities of the base component.<br>
			The el-select can set options by el-option in template.<br>
			Here we try to config options from a  JSON or from a funciton. In real project can also config options by a String which is a URL to load options from remote.
		</h3>
		select value:{{ value }}
		<h3>In this sample options are configured in slot directly.Refer to config1 in "data.ts".</h3>
		<MttkWrapComp :config="config1"></MttkWrapComp>	
		<el-divider></el-divider>
		<h3>In this sample options are configured by JSON array and then translated into standard format.Refer to config2 in "data.ts".</h3>
		<MttkWrapComp :config="config2"></MttkWrapComp>	
		<el-divider></el-divider>

		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>