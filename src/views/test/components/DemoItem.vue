<template>
  <div>
    <h5>THIS IS Item - {{ props.content }}</h5>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DemoItem',
})

const props = defineProps(["content"]);
</script>
