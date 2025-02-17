<template>
  <el-table
    :data="tableDataR" :border="true"
    style="width: 100%"
    :span-method="handleSpanMethod"
  >
    <ColumnWrap
      prop="name1"
      label="Name1"
    ></ColumnWrap>
    <ColumnWrap
      prop="age"
      label="Age" align="left"
    ></ColumnWrap>
    <ColumnWrap
      prop="length"
      label="Length"
    ></ColumnWrap>
  </el-table>
</template>

<script setup>
import { ref,computed,getCurrentInstance, } from 'vue';
import {obtainTableData,obtainSpanMethod} from './ElTableUtil'
import ColumnWrap from "./ColumnWrap.vue";
// const tableData = ref([
//   { name1: 'AA', age: 11 },
//   { name1: 'BB', age: 22 },
//   { name1: 'BB', age: 33 },
//   { name1: 'DD', age: 33 },
//   { name1: 'EE', age: 55 },
// ]);

const tableDataR = ref([
  { name1: 'AA', age: 11,length:100 },
  { name1: 'AA', age: 22 ,length:200},
  { name1: 'CC', age: 22 ,length:300},

]);



const encoder = new TextEncoder();
console.log(1,encoder.encode("2108061026090747").length)
console.log(1,encoder.encode("2021-08-06 10:26:36").length)
console.log(1,encoder.encode("嘉兴市友邦食品贸易有限公司").length)


//table data
const tableData1 = obtainTableData()
const handleSpanMethod=obtainSpanMethod(tableData1)
// const tableData1 = computed(() => {
//   //
//   let temp = getCurrentInstance();
//   while (temp && temp.parent) {
//     temp = temp.parent;
//     if (temp?.props?.data && Array.isArray(temp.props.data)) {
//       return temp.props.data;
//     }
//   }
//   //
//   return []
// });
// const handleSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
//     //
//     const colProp=column.property
//     if(!colProp){
//         return {
//         rowspan: 1,
//         colspan: 1
//       }
//     }
// //   if (columnIndex === 0) { 
//     if (rowIndex > 0 && row[colProp] === tableData1.value[rowIndex - 1][colProp]) {
//       console.log(rowIndex,columnIndex,0,0,colProp,row[colProp])
//       return {
//         rowspan: 0,
//         colspan: 0
//       };
//     } else {
//       let rowspan = 1;
//       for (let i = rowIndex + 1; i < tableData1.value.length; i++) {
//         if (tableData1.value[i][colProp] === row[colProp]) {
//           rowspan++;
//         } else {
//           break;
//         }
//       }
//       console.log(rowIndex,columnIndex,rowspan,1,colProp,row[colProp])
//       return {
//         rowspan,
//         colspan: 1
//       };
//     }
// //   }
// };
</script>