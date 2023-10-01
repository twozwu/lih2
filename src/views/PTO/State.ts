import { ref, watch } from 'vue'
//從config 拿功能狀態定義物件
import { programStatus } from '@/configs'
import { defaultTabObject } from '@/services/CommonService'

/**
 * 其他
 */
//選擇的物件
const selectedItem = ref({})
const search = ref({})
const unselectedItems = ref({
  filterEnrEnrollType: []
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
const baseAppPath = '/src/views/PTO/'
const originTab = () => [
  defaultTabObject('CRU', baseAppPath + 'CRU.vue'),
  defaultTabObject('abc', baseAppPath + 'PtoSearchMenu.vue')
]
const mainTab = ref()
// const mainTab = ref(originTab())

export { selectedItem, search, unselectedItems, programState, mainTab, changeProgramStatus }
