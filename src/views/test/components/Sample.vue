<template>
    <div>
    <h5>{{ label }}</h5>
    <el-input v-model="model"></el-input>
    </div>
  </template>
  
<script lang="ts" setup>
const props=defineProps(['label'])
const model=defineModel()
//
function applyValue(val:string){
    model.value=val
}
defineExpose({applyValue})
</script>