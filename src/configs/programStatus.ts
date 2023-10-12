function statusObject(code = '', name = '') {
  return { code: code, name: name }
}

const status = {
  view: { ...statusObject('view', '檢視') },
  create: { ...statusObject('create', '新增') },
  edit: { ...statusObject('edit', '編輯') },
  delete: { ...statusObject('delete', '刪除') }
}

const getTargetStatusObject = (code: string) => {
  return status[code as keyof typeof status]
}

export default {
  ...status,
  getTargetStatusObject
}
