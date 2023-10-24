import dayjs from 'dayjs';
import 'dayjs/locale/zh-tw' // 导入本地化语言
// import relativeTime from 'dayjs/plugin/relativeTime'

// dayjs.extend(relativeTime) // 使用插件
dayjs.locale('zh-tw') // 使用本地化语言

export default dayjs