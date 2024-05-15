<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, computed, isRef, isReactive, onBeforeUpdate } from 'vue'
import { formValue, formConfig1,formConfig2 } from './data.ts'
import  CodeView from '@/components/CodeView/index.vue'
import {codeConfig} from './code.ts'


</script>

<template>
	<div style="margin:10px;">

		
		{{ formValue }}
		<h3>This is a sample to configure form.Refer to formConfig1 in "data1.ts".
			And reacive property disabled and v-show(~show) is also demostrated here.
		</h3>
		<MttkWrapComp ref="mainRef1" :config="formConfig1"></MttkWrapComp>
		<el-divider></el-divider>

		<h3>Same as the previous samples, here we define a simple form config format to simplify the configuration<br />
			Anyway here only demo hwo to simplify the configuration, you could design your simplify method as you like.<br/>
			Refer to formConfig2 in "data.ts".</h3>

		<MttkWrapComp ref="mainRef3" :config="formConfig2"></MttkWrapComp>
		
		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>