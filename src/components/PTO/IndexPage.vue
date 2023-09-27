<template>
  <CRU ref="refCRU" />
  <n-card title="B1310 請假作業">
    <div class="lg:p-1px overflow-auto">
      <pto-search-menu />
    </div>
  </n-card>
  <a-card title="查詢結果" class="overflow-auto mt-13" :bodyStyle="{ padding: '0' }">
    <n-row class="gap-3 p-4">
      <n-button class="" type="primary" @click="useItemAction('create')"> 新增 </n-button>
    </n-row>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :row-selection="rowSelection"
      @resizeColumn="handleResizeColumn"
    >
      <template #bodyCell="{ index, column }">
        <template v-if="column.key == 'action'">
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <n-button circle tertiary type="primary">
                <template #icon>
                  <n-icon><Pencil /></n-icon>
                </template>
              </n-button>
            </template>
            <span>編輯</span>
          </n-tooltip>
        </template>
        <template v-if="column.key == 'signature'">
          <span class="text-green-600">{{ data[index].signature }}</span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>
  
<script setup>
import { ref } from 'vue'
import PtoSearchMenu from './PtoSearchMenu.vue'
// import { theme } from 'ant-design-vue'
// const { useToken } = theme
// const { token } = useToken()
// console.log(token);
import { programState, changeProgramStatus } from './State'
import CRU from './CRU.vue'
import { Pencil } from '@vicons/ionicons5'
const refCRU = ref(null)

const columns = ref([
  { title: '維護', key: 'action', resizable: true, width: 100 },
  { title: '學號', dataIndex: 'stuNo', key: 'stuNo', resizable: true, width: 100 },
  { title: '姓名', dataIndex: 'stuName', key: 'stuName', resizable: true, width: 100 },
  { title: '班級名稱', dataIndex: 'className', key: 'className', resizable: true, width: 100 },
  { title: '假別', dataIndex: 'holidayType', key: 'holidayType', resizable: true, width: 100 },
  { title: '假由', dataIndex: 'holidayReason', key: 'holidayReason', resizable: true, width: 100 },
  { title: '請假日期', dataIndex: 'holidayDate', key: 'holidayDate', resizable: true, width: 100 },
  { title: '節數', dataIndex: 'classOrdinal', key: 'classOrdinal', resizable: true, width: 100 },
  { title: '簽核狀態', dataIndex: 'signature', key: 'signature', width: 100 }
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
//定義CUD的方法集合
const useItemAction = (code, item) => {
  changeProgramStatus(code)
  refCRU.value.showModal = true
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name
  })
}
function handleResizeColumn(w, col) {
  col.width = w
}
</script>
  
  <style scoped>
@media screen and (max-width: 375px) {
}
</style>
  