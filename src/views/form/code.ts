export const codeConfig=[
    {key:'index.vue',caption:'index.vue',content:`<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, computed, isRef, isReactive, onBeforeUpdate } from 'vue'
import { formValue, formConfig1 } from './data1.ts'
import { configFormSimple } from './data2.ts'
import { useMyForm } from './formTranslator.ts'
import  CodeView from '@/components/CodeView/index.vue'

//
const formConfig2 = useMyForm(formValue, configFormSimple)

</script>

<template>
	<div style="margin:10px;">

		<h3>This is a sample to configure form</h3>
		{{ formValue }}
		<CompWrap ref="mainRef1" :config="formConfig1"></CompWrap>
		<el-divider></el-divider>
		<h3>Same as the previous samples, here we define a simple form config format to simplify the configuration<br />
			In a real project, the useMyForm may have a third paramter to project specific specification.<br />
			Anyway only the possibility of simplify is demoed here,it is NOT a suggestion or specification.</h3>

		<CompWrap ref="mainRef2" :config="formConfig2"></CompWrap>
		
		<CodeView :config="codeConfig"></CodeView>
	</div>
</template>
<style>

</style>`},
    {key:'data1.ts',caption:'data1.ts',content:`import { ref, reactive, isRef, computed } from "vue";

export const formValue = reactive({ name: "o", address: "1" });
export const formConfig1 = reactive({
  sys: {
    //
    component: "ElForm",
  },
  props: {
    // inline:true,
    labelPosition: "right",
    labelWidth: 60,
    size: "default",
    disabled: false,
    model: formValue,
    inline: true,
  },
  //
  slots: {
    default: {
      type: "wrap",
      value: [
        {
          sys: {
            //
            component: "el-form-item",
          },
          props: {
            //
            label: "Name",
            prop: "name",
            labelWidth: "50px",
            required: true,
          },
          slots: {
            default: {
              type: "wrap",
              value: {
                sys: {
                  component: "ElInput",
                  //Use a computed to config modelValue
                  modelValue: computed({
                    get() {
                      return formValue.name;
                    },
                    set(valueNew) {
                      formValue.name=valueNew
                    },
                  }),
                },
                props: {
                  //
                  placeholder: "Please input name to filter",
                  clearable: false,
                },
              },
            },
          },
        },
        {
          sys: {
            //
            component: "el-form-item",
          },
          props: {
            label: "Address",
            prop: "address",
          },
          slots: {
            default: {
              type: "wrap",
              value: {
                sys: {
                  component: "ElInput",
                   //Use modelValuePath config modelValue
                  modelValue: formValue,
                  modelValuePath:'address',
                },
                props: {
                  placeholder: "Input address to filter",
                },
              },
            },
          },
        },
      ],
    },
  },
  events: {
    validate: { type: "inherit", value: "validate" },
  },
});
`},
	 {key:'data2.ts',caption:'data2.ts',content:`//
export const configFormSimple = {
  items: [
    {
      props: {
        label: "Name",
        prop: "name",
        labelWidth: "50px",
      },
      component: "ElInput",
      componentProp: {
        placeholder: "Please input name to filter",
        clearable: true,
      },
    },
    {
      props: {
        prop: "address",
      },
      component: "ElInput",
      componentProp: {
        placeholder: "Please input addrss to filter",
        clearable: true,
      },
    },
  ],
};
`},
    {key:'formTranslator.ts',caption:'formTranslator.ts',content:`import { ref, reactive } from "vue";

//
export function useMyForm(formValue: any, config: any) {
  return reactive({
    sys: {
      //
      component: "ElForm",
    },
    props: {
      // inline:true,
      labelPosition: "right",
      labelWidth: 60,
      size: "default",
      disabled: false,
      model: formValue,
      inline: true,
    },
    //
    slots: {
      default: {
        type: "wrap",
        value: buildItems(formValue, config),
      },
    },
  });
}

function buildItems(formValue: any, config: any) {
  let items = [];
  //
  for (let childConfig of config.items) {
    items.push(buildItem(formValue, childConfig));
  }
  //
  return items;
}
function buildItem(formValue: any, c: any) {
	if(!c.props?.prop){
		throw 'prop is missing in config:'+JSON.stringify(c)
	}
	//If label is not set, use prop instead  
	//This is a simple demo to optimize the configuration by using default value
	if (!c.props?.label){
		c.props.label=c.props.prop
	}
	//component(such as input/select,etc.) config
	let v= {
		sys: {
		  component: c.component,
		   //Use modelValuePath config modelValue
		  modelValue: formValue,
		  modelValuePath:c.props.prop,
		},
		props: c.componentProp||{},
	  }
	//
  let item = {
    sys: {
      //
      component: "el-form-item",
    },
    props:c.props,
    slots: {
      default: {
        type: "wrap",
        value: v,
      },
    },
  };
  //
  return item;
}
`},
  ]