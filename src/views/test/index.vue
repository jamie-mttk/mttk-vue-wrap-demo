<template>
  <el-button @click="func1">TEST1</el-button> <el-button @click="func2">TEST2</el-button>
  <MttkWrapComp ref="refA" :config="configFinal"></MttkWrapComp>
{{ formData }}
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ColumnWrap from "./ColumnWrap.vue";
import {genUniqueStr} from 'mttk-vue-wrap'
import Sample from './components/Sample.vue'
//
const formData=ref({})
//
const config={
    "label-position": "left",
    "label-width": "200px",
    "fields": [
        {
            "_label": "姓名",
            "_prop": "name",
            "_type": "input",
            "clearable": true,
            "placeholder": "你的姓名"
        },
 {
            "_label": "部门",
            "_prop": "department",
            "_type": "select",
            "clearable": true,
            "placeholder": "选择部门",
			      "options":"市场部,销售部,开发部,人事部"
        },
 {
            "_label": "职位",
            "_prop": "title",
            "_type": "select",
            "clearable": true,
            "placeholder": "职位",
			      "options":loadTitle
        }
    ]
}
//标准配置
const configFinal=formWrap(config)
//模拟获取职位列表
function  loadTitle(){
  return [{'label':'经理',value:'01'},{'label':'工程师',value:'02'},{'label':'助理',value:'03'}]
}
//转换函数
function formWrap(config:any){
  //
  const result:any={
    '~':'el-form',
    model:formData,
    '#':[]
  }
  //设置form属性,生产代码可以把除了fields外所有config key都设置到result里
  result["label-position"]=config["label-position"]
  result["label-width"]=config["label-width"]
  //逐个处理表单元素
  for(const field of config.fields||[]){
    const r:any={'~':'el-form-item','label':field._label,'prop':field._prop,'#':[]}
    const type=field._type||'input'
      if(type=='input'){
        //同样生产代码这里input属性也可以都设置而不是象下面这样写死
        r['#'].push({'~':'el-input','~modelValue':formData,'~modelValuePath':field._prop,'placeholder':field.placeholder,clearable:field.clearable})
      }else if (type=='select'){
        //parseOptions解析出所有的option选项
        r['#'].push({'~':'el-select','~modelValue':formData,'~modelValuePath':field._prop,'placeholder':field.placeholder,clearable:field.clearable,'#':parseOptions(field)})
      }else{
        //出错
        continue;
      }
      //
      result['#'].push(r)
  }

  //
  return result;
}

function parseOptions(field:any){
  const options=field.options

  if(typeof options=='string'){
    //字符串认为是逗号分割的
    const selOptions=[]
    const strs=options.split(',')
    for (const str of strs){
      selOptions.push({
        '~':'el-option',
        label:str,
        value:str
      })

    }
    //
    return selOptions
  }else if(typeof options=='function'){
    //options如果是promise或API从远程获取同样可以实现,此场景返回值是一个computed即可
    const titles=options()
    const selOptions=[]
    for (const title of titles){
      selOptions.push({
        '~':'el-option',
        label:title.label,
        value:title.value
      })
    }
    //
    return selOptions
  }
  //
  return []
}
</script>
