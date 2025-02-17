<template>
<div>
    <h5>THIS IS HEADER</h5>
    <!-- <slot></slot> -->
    <template v-for="(row, index) in getRows()" :key="index">
            <DemoItem :content="row.props.content" />
          </template>
</div>
 </template>
 
 <script setup lang="ts">
 import { isVNode,useSlots} from 'vue'
 import DemoItem from "./DemoItem.vue";
 const slots = useSlots()

 const flattedChildren = ( children:any) => {
  const vNodes = Array.isArray(children) ? children : [children]
  const result = [] as any[]

  vNodes.forEach((child) => {
    if ( Array.isArray(child)) {
      result.push(...flattedChildren(child))
    } else if (isVNode(child) &&  Array.isArray(child.children)) {
      result.push(...flattedChildren(child.children))
    } else {
      result.push(child)
      if (isVNode(child) && child.component?.subTree) {
        result.push(...flattedChildren(child.component.subTree))
      }
    }
  })
  return result
}


 const getRows = () => {
  const children = flattedChildren(slots.default?.()).filter(
    (node) => {
      console.log('check node',node?.type?.name,node)
        //return node?.type?.name === 'DemoItem'
        return true
      }
  )
  const rows = []
//   let temp = []
//   let count = props.column
 // let totalSpan = 0 // all spans number of item

  children.forEach((node, index) => {
    // const span = node.props?.span || 1

    // if (index < children.length - 1) {
    //   totalSpan += span > count ? count : span
    // }

    // if (index === children.length - 1) {
    //   // calculate the last item span
    //   const lastSpan = props.column - (totalSpan % props.column)
    //   temp.push(filledNode(node, lastSpan, count, true))
    //   rows.push(temp)
    //   return
    // }

    // if (span < count) {
    //   count -= span
    //   temp.push(node)
    // } else {
    //   temp.push(filledNode(node, span, count))
    //   rows.push(temp)
    //   count = props.column
    //   temp = []
    // }
    rows.push(node)
  })

  console.log('~~~~~~~~~~~~~~~',rows)
  return rows
 }
//  getRows();



 </script>