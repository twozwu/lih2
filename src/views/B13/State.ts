import { ref, shallowRef } from 'vue'
//從config 拿功能狀態定義物件
import { programStatus } from '@/configs'
import CRU from './CRU.vue'
import Test from './Test.vue'

/**
 * 其他
 */
//選擇的物件
const sharedItem = ref({})
const selectedItem = ref({})
const search = ref({})
const unselectedItems = ref({
  filterEnrEnrollType: []
})
const dialogs = ref({
  create: false,
  edit: false,
  delete: false,
  studentInfo: false
})

/**
 * 資料操作狀態管理
 */
const defaultProgramState = () => {
  return {
    status: programStatus.create.code,
    statusName: programStatus.create.name
  }
}
const programState = ref(defaultProgramState())

//變更程式資料操作狀態
const changeProgramStatus = (statusCode = '') => {
  const statusObject = programStatus.getTargetStatusObject(statusCode)
  programState.value.status = statusObject.code
  programState.value.statusName = statusObject.name
}

/**
 * CRUD UI畫面狀態管理
 */
/*功能頁簽設定*/
//自定義頁簽物件
const originTab = () => [
  {
    tabName: '主單',
    visible: true,
    component: shallowRef(CRU)
  },
  {
    tabName: '簽核',
    visible: true,
    component: shallowRef(Test)
  }
]
const mainTab = ref(originTab())

export {
  sharedItem,
  selectedItem,
  search,
  unselectedItems,
  programState,
  mainTab,
  dialogs,
  changeProgramStatus
}
