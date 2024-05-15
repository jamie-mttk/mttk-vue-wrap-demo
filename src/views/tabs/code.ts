export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<script setup lang="ts">
    import { ref, reactive, defineAsyncComponent, computed, isRef, isReactive, onBeforeUpdate } from 'vue'
    import {tabsConfig} from './data.ts'
    import  CodeView from '@/components/CodeView/index.vue'
    import {codeConfig} from './code.ts'
    
    </script>
    
    <template>
      <div style="margin:10px;">
    
        <h3>Tabs is a pure container component. This demo reuse the configs of the previous demos.</h3>
        <MttkWrapComp ref="mainRef" :config="tabsConfig"></MttkWrapComp>
        
        <CodeView :config="codeConfig"></CodeView>
      </div>
    </template>
    <style>
    
    </style>`},
    {key:'data.ts',caption:'data.ts',content:`import { ref, reactive } from "vue";

    import { tableConfig2 } from "@/views/table/data";
    import { formConfig2 } from "@/views/form/data";
    
    export const tabsSelect = ref("Basic");
    //
    export const tabsConfig = {
      "~": "el-tabs",
      "~modelValue": tabsSelect,
      //
      type: "card",
      tabPosition: "top",
      "#": [
        {
          "~": "el-tab-pane",
          disabled: false,
          name: "Basic",
          closable: false,
          "#label": "Basic <b>Information</b>",
          "#": "Demostrate tab,a piece of HTML, a FORM and a table",
        },
        {
          "~": "el-tab-pane",
          //
          label: "Advanced",
          disabled: false,
          name: "Advanced",
          closable: false,
          "#": tableConfig2,
        },
        {
          "~": "el-tab-pane",
          //
          label: "Extra",
          disabled: false,
          name: "Extra",
          closable: true,
          "#": formConfig2,
        },
      ],
    };
    
`}
  ]