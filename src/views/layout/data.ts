import { ref, reactive } from "vue";
import { tableConfig1 } from "@/views/table/data";

const myColor = ref("#ffff00");
export const layoutwConfig = {
  "~": "el-row",
  //
  gutter: 10,
  justify: "start",
  align: "top",
  //
  "#": [
    {
      "~": "el-col",
      span: 8,
      "#": "First row first column",
      style: {
        borderRadius: "4px",
        backgroundColor: "#f00",
        border: "2px solid blue",
        minHeight: "48px",
      },
    },
    {
      "~": "el-col",
      //
      span: 8,
      //
      "#": "First row second column",
      style: {
        borderRadius: "4px",
        backgroundColor: "#0f0",
        border: "2px solid blue",
        minHeight: "48px",
      },
    },
    {
      "~": "el-col",
      //
      span: 8,
      "#": "First row third column",
      style: {
        borderRadius: "4px",
        backgroundColor: "#00f",
        border: "2px solid blue",
        minHeight: "48px",
      },
    },
    {
      "~": "el-col",
      span: 12,
      "#": "Second row first column",
    },
    {
      "~": "el-col",
      span: 12,
      "#": [
        "You can change background here",
        {
          "~": "el-color-picker",
          "~modelValue": myColor,
          //
          showAlpha: true,
          style: {
            borderRadius: "1px",
            backgroundColor: "#0000ff",
            border: "2px solid purple",
            minHeight: "64px",
          },
        },
      ],
    },
    {
      "~": "el-col",
      "#": tableConfig1,
      class: ["testClass2"],
    },
  ],
  //Set styles or classes
  style: {
    backgroundColor: myColor,
    border: "5px solid red",
  },
  class: ["testClass1"],
};
