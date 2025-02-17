<template>
  <div>
  <!-- <Demo>
    <componment :is=DemoItem content="aaaaa"/>
    <componment :is=DemoItem content="bbbb"/>
  </Demo> -->
  <el-button @click="test1">TEST 1</el-button>
  <el-button @click="test2">TEST 2</el-button>
  <MttkWrapComp :config="config"></MttkWrapComp>
</div>
</template>

<script setup lang="ts">
import { ref, provide, inject } from "vue";
import Demo from "./components/Demo.vue";
import DemoItem from "./components/DemoItem.vue";
const config={
  '~':Demo,
  title:'USER INFO',
  size:"small",
  '#':[
    {'~':DemoItem,content:'项目1','#':'项目值1'},
    {'~':DemoItem,content:'项目2','#':'项目值2'}
  ]

 }

</script>
