<template>
  <a-card title="B1310 請假作業" :bodyStyle="{ padding: '0' }">
    <div class="lg:p-1px overflow-auto">
      <pto-search-menu />
    </div>
  </a-card>

  <a-card title="查詢結果" class="overflow-auto mt-13" :bodyStyle="{ padding: '0' }">
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :row-selection="rowSelection"
      @resizeColumn="handleResizeColumn"
    >
      <template #bodyCell="{ index, column }">
        <template v-if="column.key == 'signature'">
          <span class="text-green-600">{{ data[index].signature }}</span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'
import PtoSearchMenu from '../components/PTO/PtoSearchMenu.vue'
// import { theme } from 'ant-design-vue'
// const { useToken } = theme
// const { token } = useToken()
import { useThemeVars } from 'naive-ui'
const theme = useThemeVars()

const columns = ref([
  { title: '維護', key: 'action', resizable: true },
  { title: '學號', dataIndex: 'stuNo', key: 'stuNo', resizable: true },
  { title: '姓名', dataIndex: 'stuName', key: 'stuName', resizable: true },
  { title: '班級名稱', dataIndex: 'className', key: 'className', resizable: true },
  { title: '假別', dataIndex: 'holidayType', key: 'holidayType', resizable: true },
  { title: '假由', dataIndex: 'holidayReason', key: 'holidayReason', resizable: true },
  { title: '請假日期', dataIndex: 'holidayDate', key: 'holidayDate', resizable: true },
  { title: '節數', dataIndex: 'classOrdinal', key: 'classOrdinal', resizable: true },
  { title: '簽核狀態', dataIndex: 'signature', key: 'signature' }
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
