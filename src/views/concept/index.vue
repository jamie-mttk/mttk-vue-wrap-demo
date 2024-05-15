<script setup lang="ts">
import { valueInput, configInput1, configInput2 } from "./data.ts";
import { codeConfig } from "./code.ts";
import CodeView from "@/components/CodeView/index.vue";
</script>

<template>
  <div>
    <h3>
      This page show the basic usage of vueWrapper.<br />
      To learn how it works ,press the "Show Code" link at the bottom of the
      page.
    </h3>
    <h3>
      This is a simple sample. The below input is rendered with traditional
      mode.<br />
      Simplely to say, the el-input is configured with v-model and properties
      one by one.
    </h3>
    <el-input
      v-model="valueInput"
      placeholder="Please input value"
      :clearable="true"
    ></el-input>
    <el-divider></el-divider>
    <h3>
      Here the input is configured with a JS with same funcionalities as above.
      Refer to configInput1 of "data.ts".
    </h3>
    <MttkWrapComp :config="configInput1"></MttkWrapComp>
    <el-divider></el-divider>
    <h3>
      It is also configured with JS to demostrate props,slots,events,lifecycle.
      And setting modelValue with computed is also demostrated. Refer to
      configInput2 of "data.ts".
    </h3>
    <MttkWrapComp :config="configInput2">
      <template #mysuffix>Suffix to demostrate inherit</template>
    </MttkWrapComp>
    <el-divider></el-divider>

    <CodeView :config="codeConfig"></CodeView>
  </div>
</template>
<style></style>
