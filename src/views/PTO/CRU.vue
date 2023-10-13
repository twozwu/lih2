<template>
  <n-form ref="formRef" label-placement="left">
    <n-grid cols="1 m:2" x-gap="24" responsive="screen">
      <n-form-item-gi label="學年度學期：" path="inputValue">
        <span class="">108 第二學期</span>
      </n-form-item-gi>
      <n-form-item-gi label="申請日期：" path="inputValue">
        <span class="">2023-09-27 15:44:17</span>
      </n-form-item-gi></n-grid></n-form>
  <n-form ref="formRef" :label-placement="breakpoint.md ? 'left' : ''">
    <n-grid cols="1 m:2" x-gap="24" responsive="screen">
      <n-form-item-gi label="學生資訊：" path="selectValue">
        <n-auto-complete placeholder="學生資訊" />
        <n-button class="" type="primary">...</n-button>
      </n-form-item-gi>
      <n-form-item-gi label="假別：" path="selectValue">
        <n-select placeholder="假別" :options="[
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
        ]" />
      </n-form-item-gi>
      <n-form-item-gi>
        <div class="flex flex-wrap gap-3">
          <n-form-item-gi label="請假日期：" path="selectValue">
            <n-date-picker type="datetime" clearable />
          </n-form-item-gi>
          <n-form-item-gi label="至" path="selectValue" class="">
            <n-date-picker type="datetime" clearable />
          </n-form-item-gi>
        </div>
        <!-- <n-form-item-gi label="請假日期-起：" path="selectValue">
          <n-date-picker type="datetime" clearable />
        </n-form-item-gi>
        <n-form-item-gi label="請假日期-迄：" path="selectValue">
          <n-date-picker type="datetime" clearable />
        </n-form-item-gi> -->
      </n-form-item-gi>
      <n-form-item-gi label="假由：" path="textareaValue" span="24">
        <n-input placeholder="假由" type="textarea" :autosize="{
          minRows: 3,
          maxRows: 5
        }" />
      </n-form-item-gi>
      <n-form-item-gi>
        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :default-file-list="fileList"
          list-type="image">
          <n-button>上传文件</n-button>
        </n-upload>
      </n-form-item-gi>

    </n-grid>
    <div class="flex">
      <n-button class="ms-auto" type="primary"> 儲存 </n-button>
    </div>
  </n-form>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { programState } from './State'
import { breakpoint } from '@/utils/breakpoint'

const showModal = ref(false)
const fileList = ref([])
defineExpose({ showModal })
</script>

<style>
/* .v-binder-follower-content {
  position: relative;
} */
</style>