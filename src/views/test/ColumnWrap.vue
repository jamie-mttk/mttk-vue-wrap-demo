<template>
  <el-table-column :min-width="colWidth" :align="colAlign">
    <template #default="sp" v-if="hasChildren">
      <slot v-bind="sp"></slot>
    </template>
  </el-table-column>
</template>

<script lang="ts" setup>
import { useSlots, unref, computed, useAttrs, getCurrentInstance } from "vue";
import {obtainTableData,} from './ElTableUtil'
//Whether there is child slot
const hasChildren = computed(() => !!useSlots().default);
//
const attrs = useAttrs();
//table data
const tableData = obtainTableData()

//Calculate column width automatically
const colWidth = computed(() => {
  //
  let maxLength = (attrs.label || "").length;
  //
  const data = unref(tableData);
  if (Array.isArray(data) && data.length > 0 && attrs.prop) {
    //
    for (const row of data) {
      const v = row[attrs.prop];
      if (v != undefined) {
        //
        maxLength = Math.max(maxLength, (v.toString() || v).length);
      }
    }
  }

  //
  return 8 * maxLength + 42 + "px";
});
//
//whether data is number
const isNumberCol = computed(() => {
  //Table data
  const data =  unref(tableData);
  if (Array.isArray(data) && data.length > 0 && attrs.prop) {
    return typeof data[0][attrs.prop] === 'number'
  }
  //
  return false
})
//
const colAlign = computed(() => (isNumberCol.value ? 'right' : 'left'))
</script>
