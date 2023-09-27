import packageJsonObj from '../../package.json'
import programStatus from './programStatus'
const product = {
    name: '元培醫事科技大學',
    version: packageJsonObj.version
}

export {
    // 產品資訊
    product,
    //功能頁面狀態定義檔
    programStatus
}
