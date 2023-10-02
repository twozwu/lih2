<template>
  <!-- <CRU ref="refMain" /> -->
  <Main ref="refMain" />
  <n-card title="B1310 請假作業">
    <div class="lg:p-1px">
      <pto-search-menu />
    </div>
  </n-card>
  <n-card title="查詢結果" class="mt-13">
    <n-space class="gap-3 pb-3">
      <n-button class="" type="primary" @click="useItemAction('create')"> 新增 </n-button>
    </n-space>
    <n-data-table :columns="columns" :data="data" :pagination="false" :row-key="columns.key"
      :row-class-name="rowClassName" @update:checked-row-keys="handleCheck">
    </n-data-table>
  </n-card>
</template>
  
<script setup lang="jsx">
import { ref } from 'vue'
import PtoSearchMenu from './PtoSearchMenu.vue'
// import { theme } from 'ant-design-vue'
// const { useToken } = theme
// const { token } = useToken()
// console.log(token);
import { programState, changeProgramStatus } from './State'
import Main from './Main.vue'
// import CRU from './CRU.vue'
import { Pencil } from '@vicons/ionicons5'
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
          <BaseTooltips label="編輯">
            <n-button circle tertiary type="primary" onClick={() => useItemAction('edit', row)}>
              <n-icon><Pencil /></n-icon>
            </n-button>
          </BaseTooltips>
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
const useItemAction = (code, item) => {
  changeProgramStatus(code)
  refMain.value.showModal = true
}

// checkBox
const checkedRowKeysRef = ref([]);
function handleCheck(rowKeys) {
  checkedRowKeysRef.value = rowKeys;
}
</script>
  
<style scoped>
:deep(.success) {
  color: green !important;
}
</style>
  