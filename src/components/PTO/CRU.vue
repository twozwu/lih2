<template>
  <n-modal v-model:show="showModal" preset="card" title="Dialog" class="w-11/12">
    <template #header>
      <div>{{ programState.statusName }}</div>
    </template>
    <n-divider class="!mt-0" />
    <n-form ref="formRef" label-placement="left" :item-responsive="true">
      <!-- <n-form-item label="學年度學期：" path="inputValue">
        <span class="">108 第二學期</span>
      </n-form-item> -->
      <n-grid cols="1 l:2" x-gap="24" responsive="screen">
        <n-form-item-gi label="學年度學期：" path="inputValue">
          <span class="">108 第二學期</span>
        </n-form-item-gi>
        <n-form-item-gi label="申請日期：" path="inputValue">
          <span class="">2023-09-27 15:44:17</span>
        </n-form-item-gi>
        <n-form-item-gi label="假由" path="textareaValue">
          <n-input
            placeholder="假由"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
          />
        </n-form-item-gi>
        <n-form-item-gi label="Select" path="selectValue">
          <n-select placeholder="Select" />
        </n-form-item-gi>
        <n-form-item-gi label="Multiple Select" path="multipleSelectValue">
          <n-select placeholder="Select" multiple />
        </n-form-item-gi>
        <n-form-item-gi label="Datetime" path="datetimeValue">
          <n-date-picker type="datetime" />
        </n-form-item-gi>
        <n-form-item-gi label="Switch" path="switchValue">
          <n-switch />
        </n-form-item-gi>
        <n-form-item-gi label="Checkbox Group" path="checkboxGroupValue">
          <n-checkbox-group>
            <n-space>
              <n-checkbox value="Option 1"> Option 1 </n-checkbox>
              <n-checkbox value="Option 2"> Option 2 </n-checkbox>
              <n-checkbox value="Option 3"> Option 3 </n-checkbox>
            </n-space>
          </n-checkbox-group>
        </n-form-item-gi>
        <n-form-item-gi label="Radio Group" path="radioGroupValue">
          <n-radio-group name="radiogroup1">
            <n-space>
              <n-radio value="Radio 1"> Radio 1 </n-radio>
              <n-radio value="Radio 2"> Radio 2 </n-radio>
              <n-radio value="Radio 3"> Radio 3 </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item-gi>
        <n-form-item-gi label="Radio Button Group" path="radioGroupValue">
          <n-radio-group name="radiogroup2">
            <n-radio-button value="Radio 1"> Radio 1 </n-radio-button>
            <n-radio-button value="Radio 2"> Radio 2 </n-radio-button>
            <n-radio-button value="Radio 3"> Radio 3 </n-radio-button>
          </n-radio-group>
        </n-form-item-gi>
        <n-form-item-gi label="Input Number" path="inputNumberValue">
          <n-input-number />
        </n-form-item-gi>
        <n-form-item-gi label="Time Picker" path="timePickerValue">
          <n-time-picker />
        </n-form-item-gi>
        <n-form-item-gi label="Slider" path="sliderValue">
          <n-slider :step="5" />
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