<template>
  <el-table :data="tableData" style="width: 100%">
    <ColumnWrap prop="date" label="Date" width="150" ></ColumnWrap>
    <ColumnWrap label="Delivery Info">
      <ColumnWrap prop="name" label="Name" width="120" />
      <ColumnWrap label="Address Info">
        <ColumnWrap prop="state" label="State" width="120" />
        <ColumnWrap prop="city" label="City" width="120" />
        <ColumnWrap prop="address" label="Address" />
        <ColumnWrap prop="zip" label="Zip" width="120" />
      </ColumnWrap>
    </ColumnWrap>
  </el-table>
</template>

<script lang="ts" setup>
import ColumnWrap from './ColumnWrap.vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>
