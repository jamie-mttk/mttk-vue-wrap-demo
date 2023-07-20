<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, computed, isRef, isReactive, onBeforeUpdate } from 'vue'
import { formValue, formConfig1,formConfig2,formConfig3 } from './data.ts'
import  CodeView from '@/components/CodeView/index.vue'
import {codeConfig} from './code.ts'


</script>

<template>
	<div style="margin:10px;">

		
		{{ formValue }}
		<h3>This is a sample to configure form.Refer to formConfig1 in "data1.ts".
			And reacive property disabled and v-show is also demoed here.
		</h3>
		<CompWrap ref="mainRef1" :config="formConfig1"></CompWrap>
		<el-divider></el-divider>
		Here is a sample to config form with flat format. Refer to formConfig2 in "data1.ts". 
		<CompWrap ref="mainRef2" :config="formConfig2"></CompWrap>

		<el-divider></el-divider>
		<h3>Same as the previous samples, here we define a simple form config format to simplify the configuration<br />
			Anyway here only demo hwo to simplify the configuration, you could design your simplify method as you like.<br/>
			Refer to formConfig3 in "data.ts".</h3>

		<CompWrap ref="mainRef3" :config="formConfig3"></CompWrap>
		
		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>./data.js