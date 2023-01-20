export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<script setup lang="ts">

    import { value, config1,config2,config3} from './data.ts'
    import {useMySelect} from './selectTranslator.ts'
    import {codeConfig} from './code.ts'
    import  CodeView from '@/components/CodeView/index.vue'
    
    //
    const config2Translated=useMySelect(config2)
    const config3Translated=useMySelect(config3)
    </script>
    
    <template>
      <div>
        <h3>This sample try to show how to enhance the functionalities of the base component.<br>
          The el-select can set options by el-option in template.<br>
          Here we try to config options by JSON or by funciton. In real project can also config options by a String which is a URL to remottely load options.
        </h3>
        {{ value }}
        <h3>In this sample options are configured in slot directly</h3>
        <CompWrap :config="config1"></CompWrap>	
        <el-divider></el-divider>
        <h3>In this sample options are configured by JSON array</h3>
        <CompWrap :config="config2Translated"></CompWrap>	
        <el-divider></el-divider>
        <h3>In this sample options are configured by function</h3>
        <CompWrap :config="config3Translated"></CompWrap>	
        <el-divider></el-divider>
        <CodeView :config="codeConfig"></CodeView>
      </div>
    </template>
    <style>
    
    </style>`},
    {key:'data.ts',caption:'data.ts',content:`import { ref, reactive } from "vue";
    import { tableConfig1 } from "@/views/table/data1.ts";
    
    
    
    const myColor = ref("#ffff00");
    export const layoutwConfig = reactive({
      sys: {
        component: "el-row",
      },
      props: {
        gutter: 10,
        justify: "start",
        align: "top",
      },
      //
      slots: {
        default: [
          {
            sys: {
              component: "el-col",
            },
            props: {
              span: 8,
            },
            slots: {
              default: "First row first column",
            },
            styles: {
              borderRadius: "4px",
              backgroundColor: "#f00",
              border: "2px solid blue",
              minHeight: "48px",
            },
          },
        {
            sys: {
              component: "el-col",
            },
            props: {
              span: 8,
            },
            slots: {
          default: "First row second column",
            },
            styles: {
              borderRadius: "4px",
              backgroundColor: "#0f0",
              border: "2px solid blue",
              minHeight: "48px",
            },
          },
        {
            sys: {
              component: "el-col",
            },
            props: {
              span: 8,
            },
            slots: {
          default: "First row third column",
            },
            styles: {
              borderRadius: "4px",
              backgroundColor: "#00f",
              border: "2px solid blue",
              minHeight: "48px",
            },
          },
        {
            sys: {
              component: "el-col",
            },
            props: {
              span: 12,
            },
            slots: {
          default: "Second row first column",
            },
          },
          {
            sys: {
              component: "el-col",
            },
            props: {
              span: 12,
            },
            slots: {
              //empty:{type:'component',value:Search},
              default: ["You can change background here",{
                type: "wrap",
                value: {
                  sys: {
                    component: "el-color-picker",
                    modelValue: myColor,
                  },
                  props: {
                    //
                    showAlpha: true,
                  },
                  styles: {
                    borderRadius: "1px",
                    backgroundColor: "#0000ff",
                    border: "2px solid purple",
                    minHeight: "64px",
                  },
                },
              }],
            },
          },
          {
            props: {
              //子元素配置,具体含义由组件决定,这里不以_开头的会设置到Form Item上
              span: 24,
              //_开头的说明是特殊含义,这里是指字段宽度,可以覆盖上层的设置
              _key: "4", //唯一标识
            },
            slots: {
              //empty:{type:'component',value:Search},
              default: { type: "wrap", value: tableConfig1 },
            },
            classes: ["testClass2"],
          },
        ],
      },
    
      //Set styles or classes
      styles: {
        backgroundColor: myColor,
        border: "5px solid red",
      },
      classes: ["testClass1"],
    });
    `},
    {key:'selectTranslator.ts',caption:'selectTranslator.ts',content:`import { ref, reactive } from "vue";


    export function useMySelect(config: any) {
      //Clone may cause the value to be evaluted?So no clone here so far
    let configNew=config
      //extra
      let extra = configNew.extra;
      delete configNew.extra;
      //
      if (extra?.options) {
        translateOptions(extra.options, configNew);
      }
      //
      return reactive(configNew);
    }
    
    //translate options from config to slot
    function translateOptions(options, configNew) {
      //
      if (!configNew.slots) {
        configNew.slots = {};
      }
      //
      let valueOptions = options.value;
      if (!valueOptions) {
        return;
      }
      if (Array.isArray(valueOptions)) {
        //build wrap array
        configNew.slots.default =parseOptionsArray(options, valueOptions)
      } else if (typeof valueOptions == "function") {
        configNew.slots.default=  parseOptionsFunction(options,valueOptions)
      } else {
        throw "Unsupported value option type:" + typeof valueOptions;
      }
    }
    //parse options array to wrap options
    function parseOptionsArray(options, value) {
      let labelField = options.labelField || "id";
      let valueField = options.valueField || "name";
      //
      let result ={
        type: "wrap",
        value:[]}
      //
      for (let v of value) {
        result.value.push({
            sys: { component: "el-option" },
            props: {
              label: v[labelField],
              value: v[valueField],
            }
          }
       );
      }
      //
      return result;
    }
    //
    function parseOptionsFunction(options, value) {
      //Evaluate function 
      let result=value()
      //
      return parseOptionsArray(options,result)
    
    }`},
  ]