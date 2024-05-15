export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<script setup lang="ts">
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
    
    </style>`},
    {key:'data.ts',caption:'data.ts',content:`import { ref, reactive, isRef, computed } from "vue";
    import { formFunc } from "./formFunc";
    export const formValue = reactive({ name: "o", address: "1", switch: true });
    export const formConfig1 = {
      "~": "ElForm",
      //
      labelPosition: "right",
      labelWidth: 60,
      size: "default",
      disabled: false,
      model: formValue,
      inline: true,
      //
      "#": [
        {
          "~": "el-form-item",
          //
          label: "Switch",
          prop: "switch",
          labelWidth: "50px",
          required: true,
          //
          "#": {
            "~": "ElSwitch",
            "~modelValue": formValue,
            "~modelValuePath": "switch",
          },
        },
        {
          "~": "el-form-item",
          //
          label: "Name",
          prop: "name",
          labelWidth: "50px",
          required: true,
    
          //
          "#": {
            "~": "ElInput",
            //Use a computed to config modelValue
            "~modelValue": computed({
              get() {
                return formValue.name;
              },
              set(valueNew) {
                formValue.name = valueNew;
              },
            }),
            //
            placeholder: "Please input name to filter",
            clearable: false,
            //Property can be computed
            disabled: computed(() => formValue.switch),
          },
        },
        {
          "~": "el-form-item",
          show: computed(() => formValue.switch),
          //
          label: "Address",
          prop: "address",
          //
          "#": {
            "~": "ElInput",
            //Use modelValuePath config modelValue
            "~modelValue": formValue,
            "~modelValuePath": "address",
            //
            placeholder: "Input address to filter",
          },
        },
      ],
      "@validate": { type: "inherit", value: "validate" },
    };
    
    export const formConfig2 = {
      "~": formFunc(formValue),
      items: [
        {
          _label: "Switch",
          _prop: "switch",
          _labelWidth: "50px",
    
          "~": "ElSwitch",
        },
        {
          _label: "Name",
          _prop: "name",
          _labelWidth: "50px",
    
          "~": "ElInput",
          placeholder: "Please input name to filter",
          clearable: true,
          disabled: computed(() => formValue.switch),
        },
        {
          _label: "Address",
          _prop: "address",
    
          "~": "ElInput",
          placeholder: "Please input addrss to filter",
          clearable: true,
        },
      ],
    };
    
    `},

    {key:'formFunc.ts',caption:'formFunc.ts',content:`//
    export function formFunc(formValue: any) {
      return function (config: any) {
        return {
          "~": "ElForm",
          //
          labelPosition: "right",
          labelWidth: 60,
          size: "default",
          disabled: false,
          model: formValue,
          inline: true,
          //
          "#": buildItems(formValue, config),
        };
      };
    }
    
    function buildItems(formValue: any, config: any) {
      let items = [];
      //
      for (let c of config.items || []) {
        items.push(buildItem(formValue, c));
      }
      //
      return items;
    }
    function buildItem(formValue: any, c: any) {
      if (!c._prop) {
        throw "_prop is missing in config:" + JSON.stringify(c);
      }
    
      //component(such as input/select,etc.) config
      let v = {
        "~": c["~"] || c["~component"] || "ElInput",
        //Use modelValuePath config modelValue
        '~modelValue': formValue,
        '~modelValuePath': c._prop,
        //
        ...componentProps(c),
      };
      //
      let item = {
        "~": "el-form-item",
        ...formItemProps(c),
        "#": v,
      };
    
      //
      return item;
    }
    
    //props of component(ElInput,ElSelect...)
    function componentProps(c) {
      const result = {};
      for (const key of Object.keys(c)) {
        if (key == "~" || key == "~component"){
          continue;
        }
        if(key.startsWith("~")||key.startsWith("_")||key.startsWith("@")||key.startsWith("^")||key.startsWith("#")) {
          continue;
        }
        result[key] = c[key];
      }
      return result;
    }
    
    function formItemProps(c) {
      const result = {};
      for (const key of Object.keys(c)) {
        if (key == "~" || key == "~component"){
          continue;
        }
        if(key.startsWith("~")||key.startsWith("_")||key.startsWith("@")||key.startsWith("^")||key.startsWith("#")) {
          result[key.substring(1)] = c[key];
        }
        
      }
      return result;
    }
    
`},
  ]