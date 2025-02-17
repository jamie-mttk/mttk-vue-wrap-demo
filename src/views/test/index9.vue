<template>
  <el-button @click="func1">TEST1</el-button> <el-button @click="func2">TEST2</el-button>
  <MttkWrapComp ref="refA" :config="config1"></MttkWrapComp>
  <MttkWrapComp ref="refB" :config="config2"></MttkWrapComp>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ColumnWrap from "./ColumnWrap.vue";
import {genUniqueStr} from 'mttk-vue-wrap'
import Sample from './components/Sample.vue'

const model1=ref('1111')
const model2=ref('2222')
const refA=ref(null)
const refB=ref(null)

function func1(){
  console.log(refA.value)
  console.log(refA.value.getRef('sample1').applyValue('SET BY AABBCC'))
}
function func2(){
  console.log(refB.value.getRef('sample2').applyValue('SET BY XXYYZZ'))
}

const config1 = {
  '~':'el-row',
  '#':[
    {'~':'el-col',
      'span':12,
      '#':[
          {'~':import ('./components/Sample.vue'),
          '~instanceKey':'sample1',
          label:'Test1',
        '~modelValue':model1}
      ]
    }
  ]
};

const config2 = {
  '~':'el-row',
  '#':[
    {'~':'el-col',
      'span':12,
      '#':[
          {'~':Sample,
          '~instanceKey':'sample2',
          label:'Test2',
        '~modelValue':model2}
      ]
    }
  ]
};
</script>
