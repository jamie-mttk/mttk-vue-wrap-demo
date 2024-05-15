import { ref, reactive, isRef, computed } from "vue";
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
