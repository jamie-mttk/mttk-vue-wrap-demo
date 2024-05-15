import { ref, reactive } from "vue";

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
