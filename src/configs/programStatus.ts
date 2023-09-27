function statusObject(code = '', name = '') {
  return { code: code, name: name }
}

const status = {
  view: { ...statusObject('view', '檢視') },
  create: { ...statusObject('create', '新增') },
  edit: { ...statusObject('edit', '編輯') },
  delete: { ...statusObject('delete', '刪除') }
}

const getTargetStatusObject = (code: String) => {
  const outPut = statusObject()
  Object.keys(status).forEach((e) => {
    if (status[e as keyof typeof status].code === code) {
      Object.assign(outPut, status[e as keyof typeof status])
    }
  })
  return outPut
}

export default {
  ...status,
  getTargetStatusObject
}
