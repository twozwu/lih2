<template>
  <Main ref="refMain" />
  <n-card>
    <div class="lg:p-1px">
      <pto-search-menu />
    </div>
  </n-card>
  <n-card title="查詢結果" class="mt-13">
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
import { Checkmark } from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'
import { dialogs as b13Dialogs, sharedItem as b13SharedItem } from '@/views/B13/State'

const message = useMessage()
const refMain = ref(null)

const columns = ref([
  {
    title: '維護',
    key: 'action',
    resizable: true,
    width: 100,
    render(row) {
      return (
        <div class="flex gap-1">
          <Tooltips label="選擇">
            <n-button circle tertiary type="primary" size="large" onClick={ () => choose(row)}>
              <n-icon size="25"><Checkmark /></n-icon>
            </n-button>
          </Tooltips>
        </div>
      )
    }
  },
  {
    title: "學號",
    dataIndex: "stuNo",
    key: "stuNo",
    resizable: true,
    width: 100,
  },
  {
    title: "姓名",
    dataIndex: "stuName",
    key: "stuName",
    resizable: true,
    width: 100,
  },
  {
    title: "學制",
    dataIndex: "schoolType",
    key: "schoolType",
    resizable: true,
    width: 100,
  },
  {
    title: "系所/科別",
    dataIndex: "department",
    key: "department",
    resizable: true,
    width: 100,
  },
  {
    title: "班級",
    dataIndex: "className",
    key: "className",
    resizable: true,
    width: 100,
  },
])

const data = [
  {
    key: "B21067134",
    stuNo: "B21067134",
    stuName: "杜高強",
    schoolType: "四年制技術系",
    department: "數位多媒體系",
    className: "日四技(春)資科三己",
  },
  {
    key: "B21067134",
    stuNo: "B21067134",
    stuName: "杜高強",
    schoolType: "四年制技術系",
    department: "數位多媒體系",
    className: "日四技(春)資科三己",
  },
]
function rowClassName(row) {
  if (row.signature != null) {
    return 'success'
  }
  return ''
}

//定義CUD的方法集合
const choose = (row) => {
  b13SharedItem.value.studentInfo = { ...row };
  b13Dialogs.value.studentInfo = false
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
  @/views/B13/State