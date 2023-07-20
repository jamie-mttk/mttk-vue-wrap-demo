export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<<script setup lang="ts">

    import { layoutwConfig } from './data.ts'
    import  CodeView from '@/components/CodeView/index.vue'
    import {codeConfig} from './code.ts'
    
    
    
    </script>
    
    <template>
      <h3>Layout is another container component. This implementation is based on element plus el-row/el-col.<br>
      Absolutely we could simplify the configuration(Not implemented here).</h3>
      <CompWrap ref="mainRef1" :config="layoutwConfig"></CompWrap>
        
      <CodeView :config="codeConfig"></CodeView>
    </template>
    <style>
    
    </style>`},
    {key:'data.ts',caption:'data.ts',content:`import { ref, reactive } from "vue";
    import { tableConfig1 } from "@/views/table/data";
    
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
              default: [
                "You can change background here",
                {
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
                },
              ],
            },
          },
          {
            sys: {
              component: "el-col",
            },
            props: {
              span: 24,
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
    
    `}
  ]