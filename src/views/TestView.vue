<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card title="模态框" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <template #header-extra>
        噢！
      </template>
      <CRU />
      <template #footer>
        尾部
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import CRU from "./AboutView.vue";

const showModal = ref(false)
</script>