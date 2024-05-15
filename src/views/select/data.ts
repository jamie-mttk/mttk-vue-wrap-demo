import { ref, reactive } from "vue";
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
