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
      <n-form-item-gi label="學生資訊：" path="selectValue" :validation-status="inputValidationStatus"
        :feedback="inputFeedback">
        <n-input placeholder="請選擇學生" v-model:value="editedItem.studentNo" disabled />
        <n-button class="" type="primary" @click="dialogs.studentInfo = true">...</n-button>
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
            <n-date-picker type="date" v-model:value="editedItem.ptoDateStart" clearable />
          </n-form-item-gi>
          <n-form-item-gi label="至" path="selectValue" class="">
            <n-date-picker type="date" v-model:value="editedItem.ptoDateEnd" clearable />
          </n-form-item-gi>
        </div>
      </n-form-item-gi>
      <n-form-item-gi label="請假節數：" path="textareaValue" span="24">
        <n-data-table :columns="columns" :data="tableData"> </n-data-table>
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
          <n-button>上傳文件</n-button>
        </n-upload>
      </n-form-item-gi>
    </n-grid>
    <div class="flex">
      <n-button class="ms-auto" type="primary" @click="formRef.validate()"> 儲存 </n-button>
    </div>
  </n-form>
</template>

<script setup lang="jsx">
import { ref, watch, computed } from 'vue'
import { dialogs, sharedItem } from './State'
import { breakpoint, dayjs } from '@/utils'

//預設項目 需要設定使用欄位 防呆驗證才會作用
const defaultItem = () => {
  return {
    semester: '108 第二學期', // 學期
    applyDate: '2023-10-02 08:11:16', // 申請日期
    studentNo: '', // 學生資訊
    ptoType: '', // 請假類別
    ptoDateStart: Date.now(), // 請假日期起
    ptoDateEnd: Date.now(), // 請假日期迄
    reason: '' // 理由
  }
}
const editedItem = ref(defaultItem())
const fileList = ref([])
const formRef = ref(null)
const columns = ref([
  { title: '日期', key: 'date', resizable: true, width: 50 },
  {
    title: '節次',
    key: 'dayOffs',
    resizable: true,
    width: 100,
    render(row, index) {
      return (
        <n-select
          v-model={[tableData.value[index].dayOffs, 'value']}
          placeholder="Select"
          options={generalOptions}
          multiple
          clearable
          onChange={sortTable(tableData.value[index].dayOffs)}
        />
      )
    }
  },
  {
    title: '節數', key: 'dayOffsLength', resizable: true, width: 20,
    render(row, index) {
      return (
        <span>{tableData.value[index].dayOffs.length}</span>
      )
    }
  }
])

// 下拉選項
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const generalOptions = numsArray.map((item) => {
  return {
    label: `第${item}節`,
    value: item
  }
})
const tableData = ref([
  {
    key: 0,
    date: dayjs(Date.now()).format('YYYY/MM/DD (dddd)'),
    dayOffs: [],
  }
])
function sortTable(data) {
  data.sort((a, b) => a - b)
}

function createStatus(value) {
  if (value) return undefined
  else return 'error'
}

function createFeedback(value) {
  if (value)
    return `班級：${sharedItem.value.studentInfo?.className}、學號：${editedItem.value.studentNo}、姓名：${sharedItem.value.studentInfo?.stuName}`
  else return `請選擇學生`
}
const inputValidationStatus = computed(() => {
  return createStatus(editedItem.value.studentNo)
})
const inputFeedback = computed(() => {
  return createFeedback(editedItem.value.studentNo)
})

const daysLength = computed(() => {
  let diff = dayjs(editedItem.value.ptoDateEnd).diff(editedItem.value.ptoDateStart, 'day', true) + 1
  return Math.ceil(diff)
})

watch(
  () => sharedItem.value.studentInfo,
  () => {
    editedItem.value.studentNo = sharedItem.value.studentInfo.stuNo
  }
)
watch(
  () => daysLength.value,
  () => {
    let result = [];
    let date = editedItem.value.ptoDateStart
    for (let i = 0; i < daysLength.value; i++) {
      result.push({
        key: i,
        date: dayjs(date).format('YYYY/MM/DD (dddd)'),
        dayOffs: [],
      })
      date = date + 86400000
    }
    tableData.value = result
  }
)
</script>

<style>
/* .v-binder-follower-content {
  position: relative;
} */
</style>
