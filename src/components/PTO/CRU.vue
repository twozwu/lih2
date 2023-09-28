<template>
  <n-modal v-model:show="showModal" preset="card" title="Dialog" class="w-11/12">
    <template #header>
      <div>{{ programState.statusName }}</div>
    </template>
    <n-divider class="!mt-0" />
    <n-form ref="formRef" label-placement="left">
      <n-grid cols="1 l:2" x-gap="24" responsive="screen">
        <n-form-item-gi label="學年度學期：" path="inputValue">
          <span class="">108 第二學期</span>
        </n-form-item-gi>
        <n-form-item-gi label="申請日期：" path="inputValue">
          <span class="">2023-09-27 15:44:17</span>
        </n-form-item-gi>
        <n-form-item-gi label="學生資訊：" path="selectValue">
          <n-auto-complete placeholder="學生資訊" />
        </n-form-item-gi>
        <n-form-item-gi label="假別：" path="selectValue">
          <n-select
            placeholder="假別"
            :options="[
              {
                label: '事假',
                value: 0
              },
              {
                label: '病假',
                value: 1
              },
              {
                label: '公假',
                value: 2
              }
            ]"
          />
        </n-form-item-gi>
        <n-form-item-gi label="請假日期：" path="selectValue">
          <n-date-picker type="datetimerange" clearable />
          <!-- <a-range-picker
            show-time
            format="YYYY/MM/DD HH:mm:ss"
          /> -->
        </n-form-item-gi>
        <n-form-item-gi label="假由：" path="textareaValue" span="24">
          <n-input
            placeholder="假由"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
          />
        </n-form-item-gi>
      </n-grid>
    </n-form>
    <template #action>
      <n-row class="gap-3">
        <n-button class="ms-auto" type="primary"> 儲存 </n-button>
      </n-row>
    </template>
  </n-modal>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { programState } from './State'

const showModal = ref(false)
defineExpose({ showModal })
</script>

<style>
.v-binder-follower-content {
  position: relative;
}
</style>