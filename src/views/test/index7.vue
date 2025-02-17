<template>
    <el-descriptions title="User Info" size="small">
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
  <el-button @click="test1">TEST 1</el-button>
  <el-button @click="test2">TEST 2</el-button>
  <MttkWrapComp :config="config"></MttkWrapComp>
 </template>
 
 <script setup lang="ts">
 import {ref,provide,inject} from 'vue'
 
 const config={
  '~':'el-descriptions',
  title:'USER INFO',
  size:"small",
  '#':[
    {'~':'el-descriptions-item',label:'项目1','#':'项目值1'},
    {'~':'el-descriptions-item',label:'项目2','#':'项目值2'}
  ]

 }

 function test1(){
   
 }
 function test2(){

 }
 </script>