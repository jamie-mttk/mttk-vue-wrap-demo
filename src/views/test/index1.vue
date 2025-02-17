<template>
  <MttkWrapComp :config="config"></MttkWrapComp>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import ColumnWrap from "./ColumnWrap.vue";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    age:123,
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    age:123,
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    age:123,
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    age:123,
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    age:123,
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California222222222222222222222222222222222222222222222222",
    city: "Los Angele222222222222222222222222222222222222222222222s",
    address: "No. 189, Grove St, Los Angeles222222222222222222222222222222222222222222222222222222222222222222222",
    zip: "CA 90036",
    age:123,
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    age:123,
  },
];

const config = {
  "~": "el-table",
  data: tableData,
  'show-summary':true,
  style: { width: "100%" },
  "#": [
    { "~": ColumnWrap, prop: "date", label: "Date" },
    {
      "~": ColumnWrap,
      label: "Delivery Info",
      "#": [
        { "~": ColumnWrap, prop: "name", label: "Name111111111111111111111111111111111" },
        {
          "~": ColumnWrap,
          label: "Address Info",
          "#": [
            { "~": ColumnWrap, prop: "state", label: "State11111111111111111111111111111" },
            { "~": ColumnWrap, prop: "city", label: "City" },
            { "~": ColumnWrap, prop: "address", label: "Address" },
            { "~": ColumnWrap, prop: "zip", label: "Zip",'#':(sp,context)=>{
              // console.log(sp.row,sp,context)
              return '<b>'+sp.row.zip+'</b>'
            } }, 
            { "~": ColumnWrap, prop: "age", label: "Age11111111111111111111" },
          ],
        },
      ],
    },
  ],
};
</script>
