import { shallowRef } from 'vue'
const modules = import.meta.glob('@/views/*/*.vue', { eager: true })
/**
 *
 * @param {String} tabName 頁簽名稱
 * @param {String} component 對應頁簽的vue檔 src/為路徑起始點，例：pages/xxxx/xxxx
 * @param {Object} options 其他設定
 * @returns
 */
export default function (tabName = '', component = '', options = {}) {
  const tab = {
    tabName: tabName, //頁簽名稱
    tooltip: '', //提示若為空，預設就會顯示TABNAME
    visible: true, //是否顯示頁簽
    component: shallowRef(modules[component].default) //src/為路徑起始點
  }
  Object.assign(tab, options)
  return tab
}
