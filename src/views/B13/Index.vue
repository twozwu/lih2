<template>
  <Main ref="refMain" />
  <n-card title="B1310 請假作業">
    <div class="lg:p-1px">
      <pto-search-menu />
    </div>
  </n-card>
  <n-card title="查詢結果" class="mt-13">
    <n-space class="gap-3 pb-3">
      <n-button class="" type="primary" @click="useItemAction(programStatus.create.code)"> 新增 </n-button>
      <n-button class="" type="error" @click="deleteSelected"> 刪除 </n-button>
    </n-space>
    <n-data-table :columns="columns" :data="data" :pagination="true" :row-key="columns.key" :row-class-name="rowClassName"
      @update:checked-row-keys="handleCheck">
    </n-data-table>
  </n-card>
</template>
  
<script setup lang="jsx">
import { ref } from 'vue'
import PtoSearchMenu from './PtoSearchMenu.vue'
import { changeProgramStatus, dialogs, sharedItem } from './State'
import { programStatus } from '@/configs'
import Main from './Main.vue'
import { Pencil, Trash } from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'

const dialog = useDialog()
const message = useMessage()
const refMain = ref(null)

const columns = ref([
  {
    type: 'selection'
  },
  {
    title: '維護',
    key: 'action',
    resizable: true,
    width: 100,
    render(row) {
      return (
        <div class="flex gap-1">
          <Tooltips label="編輯">
            <n-button circle tertiary type="primary" size="large" onClick={() => useItemAction(programStatus.edit.code, row)}>
              <n-icon size="25"><Pencil /></n-icon>
            </n-button>
          </Tooltips>
          <Tooltips label="刪除">
            <n-button circle tertiary type="error" size="large" onClick={() => dialog.warning({
              title: '警告',
              content: '請確認是否刪除？',
              positiveText: '確定',
              negativeText: '取消',
              onPositiveClick: () => {
                message.success('确定')
              },
              onNegativeClick: () => {
                message.error('不确定')
              }
            })}>
              <n-icon size="25"><Trash /></n-icon>
            </n-button>
          </Tooltips>
        </div>
      )
    }
  },
  { title: '學號', dataIndex: 'stuNo', key: 'stuNo', resizable: true, width: 100 },
  { title: '姓名', dataIndex: 'stuName', key: 'stuName', resizable: true, width: 100 },
  { title: '班級名稱', dataIndex: 'className', key: 'className', resizable: true, width: 100 },
  { title: '假別', dataIndex: 'holidayType', key: 'holidayType', resizable: true, width: 100 },
  { title: '假由', dataIndex: 'holidayReason', key: 'holidayReason', resizable: true, width: 100 },
  { title: '請假日期', dataIndex: 'holidayDate', key: 'holidayDate', resizable: true, width: 100 },
  { title: '節數', dataIndex: 'classOrdinal', key: 'classOrdinal', resizable: true, width: 100 },
  { title: '簽核狀態', dataIndex: 'signature', key: 'signature', width: 100, className: 'success' }
])

const data = [
  {
    key: 'B21067134',
    stuNo: 'B21067134',
    stuName: '杜高強',
    className: '日四技(春)資科三己',
    holidayType: '病假',
    holidayReason: '肚子痛，去醫院檢查結果是胰臟發炎。',
    holidayDate: ' 2020-06-12 (五)',
    classOrdinal: 3,
    signature: '已審核通過'
  },
  {
    key: 'B21067135',
    stuNo: 'B21067135',
    stuName: '杜高強',
    className: '日四技(春)資科三己',
    holidayType: '病假',
    holidayReason: '肚子痛，去醫院檢查結果是胰臟發炎。',
    holidayDate: ' 2020-06-12 (五)',
    classOrdinal: 3,
    signature: '已審核通過'
  },
  {
    key: 'B21067136',
    stuNo: 'B21067136',
    stuName: '杜高強',
    className: '日四技(春)資科三己',
    holidayType: '病假',
    holidayReason: '肚子痛，去醫院檢查結果是胰臟發炎。',
    holidayDate: ' 2020-06-12 (五)',
    classOrdinal: 3,
    signature: '已審核通過'
  }
]
function rowClassName(row) {
  if (row.signature != null) {
    return 'success'
  }
  return ''
}

//定義CUD的方法集合
const useItemAction = (code = "", item = {}) => {
  changeProgramStatus(code);
  if (code === programStatus.create.code) code = programStatus.edit.code;
  sharedItem.value = { ...item };
  dialogs.value[code] = true;
};

const deleteSelected = () => {
  if (Object.keys(checkedRowKeysRef.value).length === 0) {
    message.error("請先選擇要刪除的項目"),
    {
      keepAliveOnHover: true
    }
  }
};

// checkBox
const checkedRowKeysRef = ref([]);
function handleCheck(rowKeys) {
  checkedRowKeysRef.value = rowKeys;
  console.log(checkedRowKeysRef.value);
}
</script>
  
<style scoped>
:deep(.success) {
  color: green !important;
}
</style>
  