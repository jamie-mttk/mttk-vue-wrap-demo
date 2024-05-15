export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<script setup lang="ts">

    import { value, config1,config2} from './data.ts'
    import {codeConfig} from './code.ts'
    import  CodeView from '@/components/CodeView/index.vue'
    
    //
    
    
    </script>
    
    <template>
      <div>
        <h3>This sample try to show how to enhance the functionalities of the base component.<br>
          The el-select can set options by el-option in template.<br>
          Here we try to config options from a  JSON or from a funciton. In real project can also config options by a String which is a URL to load options from remote.
        </h3>
        select value:{{ value }}
        <h3>In this sample options are configured in slot directly.Refer to config1 in "data.ts".</h3>
        <MttkWrapComp :config="config1"></MttkWrapComp>	
        <el-divider></el-divider>
        <h3>In this sample options are configured by JSON array and then translated into standard format.Refer to config2 in "data.ts".</h3>
        <MttkWrapComp :config="config2"></MttkWrapComp>	
        <el-divider></el-divider>
    
        <CodeView :config="codeConfig"></CodeView>
      </div>
    </template>
    <style>
    
    </style>`},
    {key:'data.ts',caption:'data.ts',content:`import { ref, reactive } from "vue";
    import { selectFunc } from "./selectFunc";
    
    //The value of the input which are share in this sample
    export const value = ref("003");
    
    //
    export const config1 = {
      "~": "ElSelect",
      "~modelValue": value,
      //
      placeholder: "Please select manager",
      clearable: true,
      filterable: true,
      //
      "#": [
        {
          "~": "ElOption",
          label: "Tom",
          value: "001",
        },
    
        {
          "~": "ElOption",
          label: "Jack",
          value: "002",
        },
        {
          "~": "ElOption",
          label: "Peter",
          value: "003",
        },
        {
          "~": "ElOption",
          label: "Alice",
          value: "004",
        },
      ],
    };
    
    //
    export const config2 = {
      "~": selectFunc,
      "~modelValue": value,
      //
      placeholder: "Please select manager",
      clearable: true,
      filterable: true,
      //
      _options: [
        { value: "001", label: "Tom" },
        { value: "002", label: "Jack" },
        { value: "003", label: "Peter" },
        { value: "004", label: "Alice" },
      ],
    };    
    `},
    {key:'selectFunc.ts',caption:'selectFunc.ts',content:`import { ref, reactive } from "vue";

    export function selectFunc(config: any, context: any) {
      const result = {
        "~": "ElSelect",
        "#": translateOptions(config._options || [], context),
      };
      //
      for (const k of Object.keys(config)) {
        if (k == "~" || k == "~component" || k.startsWith("_")) {
          continue;
        }
        result[k] = config[k];
      }

      //
      return result;
    }
    
    //t
    function translateOptions(options, context) {
      if (typeof options == "function") {
        return translateOptions(options(context), context);
      } else if (Array.isArray(options)) {
        //build wrap array
        return parseOptionsArray(options);
      } else if (typeof options == "object") {
        //build wrap array
        return parseOptionsArray(
          options.value || [],
          options.labelField,
          options.valueField
        );
      } else {
        throw "Unsupported value option type:" + typeof options;
      }
    }
    //parse options array
    function parseOptionsArray(
      options,
      labelField = "label",
      valueField = "value"
    ) {
      //
      let result = [];
      //
      for (let o of options) {
        result.push({
          "~": "el-option",
          //
          label: o[labelField],
          value: o[valueField],
        });
      }
      //
      return result;
    }
    
    `}
  ]