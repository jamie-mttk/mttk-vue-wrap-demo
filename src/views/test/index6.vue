<template>
  <el-button @click="test1">TEST 1</el-button>
  <el-button @click="test2">TEST 2</el-button>
 </template>
 
 <script setup lang="ts">
 import {ref,provide,inject} from 'vue'
 import { dynamicRender } from 'mttk-vue-wrap'
 import { app } from '@/main'
 import MessageDialog from './MessageDialog.vue'
 
 
 function test1(){
   const v = ref(true)
   const c=ref('WWWWWWWWWWWWWWWWWWWWWWWWW')
   //
   const dialogConfig={
      title:"Test Dynamic Render"
   }
   //
   const config = {
     '~': MessageDialog,
     '~mvs':[
      {'~modelValue': v},
      {'~modelValue': c,'~modelValueName':'content'},
     ],
     dialogConfig,
     '@saved': function (_: any, dataNew: any) {
       console.log('DATA SAVED',dataNew)
     },
    
   }
   
  const {contextWrap}= dynamicRender(config, app._context, {
     removeEvent: 'close'
   })
   //
 
   //
  v.value=true
 //
//  console.log(contextWrap)
//  contextWrap.getRef().show('~~~~~~~~~~~~~~~~~')
 }
 function test2(){
   console.log('inject 2 ....', inject('contextWrap'))
 }
 </script>