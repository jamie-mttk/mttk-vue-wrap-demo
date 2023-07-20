<script setup lang="ts">
import { ref, } from 'vue'
import { tableValue, tableConfig1,tableConfig2 } from './data.ts'
import {codeConfig} from './code.ts'
import  CodeView from '@/components/CodeView/index.vue'
//

// const tableConfig2 = useMyTable(tableValue, configTableSimple)
//
function clearData(){
	tableValue.value=[]
}
//
const mainRef1=ref()
//
function clearSelection(){
	//mainRef1.value.getRef() returns the vue component instance
	mainRef1.value.getRef().clearSelection()
}
</script>

<template>
	<div style="margin:10px;">

		<h3>Table can be considered as a container: One el-table with multiple el-table-column.</h3>
		This is the table data:<br>{{ tableValue }}<br>
		<el-button type="danger" @click="clearData">Clear data to see the content of empty slot</el-button>
		<h3>Here a simple sample to call method to clear selection.</h3>
		<el-button type="primary" @click="clearSelection">Clear selection</el-button><br><br>
		<h3>The below table is rendered with tableConfig1 in 'data.ts'</h3>
		<CompWrap ref="mainRef1" :config="tableConfig1"></CompWrap>
		<el-divider></el-divider>
		<h3>If look into the configuration, it is powerful and flexible,but it look quite complex.<br />
		We could simplify the table configuration with customized configuration format ,
		and then write a piece of code (we call it transform)to translate to the standard format as the config in the above sample.Refer to "data2.ts".<br>
		Since the transform code could be reused any where, that mean we could config a table easily.<br>
		How to simplfy the config depends on the requrirement, here is just a sample, you can define your own config file and translate code as you like.<br>
		Normally in a real project multiple config can be defined for different use cases with one transform.<br>
		</h3>
		
		<el-divider></el-divider>
		<CompWrap ref="mainRef2" :config="tableConfig2"></CompWrap>
		<el-divider></el-divider>
		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>./data.js