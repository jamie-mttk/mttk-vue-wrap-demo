<template>
  <el-dialog
    v-model="visible"
    :append-to-body="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :draggable="true"
    v-bind="props.dialogConfig || {}"
  >
  <el-input type="textarea" :rows="10" v-model="content"></el-input>
    <template v-slot:footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, unref,inject } from 'vue'


defineOptions({
  inheritAttrs: false
})

const visible = defineModel({ type: Boolean })
const content = defineModel("content", { type: String, default:'DEFAULT VALUE' })



const props = defineProps(['dialogConfig', 'data'])
const emit = defineEmits(['saved'])
//
// const dialogFormRef = ref()
console.log('inject contextWrap inside dialog',inject('contextWrap'))

function show(c:string){
  content.value=c
  visible.value = true
}
// //
function handleSave() {
//   dialogFormRef.value.validate((valid: boolean) => {
//     if (!valid) {
//       return
//     }
//     //
     visible.value = false
//     //
    emit('saved', props.data)
//   })
}

defineExpose({show})
</script>
<style lang="scss"></style>
