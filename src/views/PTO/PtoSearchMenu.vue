<template>
  <n-grid cols="2 m:7" :collapsed-rows="2" x-gap="12 l:24" responsive="screen">
    <n-form-item-gi path="age" label="學年度">
      <n-select
        placeholder="學年度"
        :options="[
          {
            label: '111',
            value: 0
          },
          {
            label: '112',
            value: 1
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="password" label="學期">
      <n-select
        placeholder="學期"
        :options="[
          {
            label: '第一學期',
            value: 0
          },
          {
            label: '第二學期',
            value: 1
          },
          {
            label: '第三學期',
            value: 2
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="abc" label="部別">
      <n-select placeholder="部別" :options="options" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path1" label="學制">
      <n-select
        placeholder="學制"
        :options="[
          {
            label: '四年制技術系(春季班)',
            value: 0
          },
          {
            label: '四年制技術系(秋季班)',
            value: 1
          },
          {
            label: '五年制專科',
            value: 2
          },
          {
            label: '二年制技術系',
            value: 3
          },
          {
            label: '四年制技術系',
            value: 4
          },
          {
            label: '二年制技術系學分班',
            value: 5
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="學院">
      <n-select
        placeholder="學院"
        :options="[
          {
            label: '工程學群',
            value: 0
          },
          {
            label: '時尚與創意學群',
            value: 1
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="系所/科別">
      <n-select
        placeholder="系所/科別"
        :options="[
          {
            label: '數位多媒體系',
            value: 0
          },
          {
            label: '電機工程系',
            value: 1
          },
          {
            label: '資訊科技系',
            value: 2
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="簽核狀態">
      <n-select
        placeholder="簽核狀態"
        :options="[
          {
            label: '全部',
            value: 0
          },
          {
            label: '未送出',
            value: 1
          },
          {
            label: '流程中',
            value: 2
          },
          {
            label: '退回',
            value: 3
          },
          {
            label: '不通過',
            value: 4
          },
          {
            label: '已通過',
            value: 5
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="年級">
      <n-select
        placeholder="年級"
        :options="[
          {
            label: '1',
            value: 0
          },
          {
            label: '2',
            value: 1
          },
          {
            label: '3',
            value: 2
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="班級">
      <n-select
        placeholder="班級"
        :options="[
          {
            label: '日四技(春)數媒三戊',
            value: 0
          },
          {
            label: '日四技(春)電機三己',
            value: 1
          },
          {
            label: '日四技(春)資科三己',
            value: 2
          }
        ]"
      />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="學號" class="lg:!col-span-2">
      <n-input placeholder="學號" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="姓名" class="lg:!col-span-2">
      <n-input placeholder="姓名" />
    </n-form-item-gi>
  </n-grid>
  <n-row class="gap-3">
    <n-button class="ms-auto" type="primary"> 搜尋 </n-button>
    <n-button class="" type="primary" secondary> 清除 </n-button>
  </n-row>
</template>

<script setup>
import { ref } from 'vue'
const model = ref({
  age: null,
  password: null,
  reenteredPassword: null
})

const options = [
  {
    label: '日間部',
    value: 0
  },
  {
    label: '夜間部',
    value: 1
  }
]
const columns = [
  { title: '學年度學期', dataIndex: 'name', key: 'name' },
  { title: '部別', dataIndex: 'age', key: 'age' },
  { title: '學制', dataIndex: 'address', key: 'address' },
  { title: '學院', dataIndex: 'school', key: 'college' },
  { title: '系所/科別', dataIndex: 'division', key: 'department' },
  { title: '簽核狀態', dataIndex: 'signOff', key: 'signature' },
  { title: 'Action', key: 'action' }
]
const columns2 = [
  { title: '年級', dataIndex: 'name', key: 'name' },
  { title: '班級', dataIndex: 'age', key: 'age' },
  { title: '學號', dataIndex: 'stuNo', key: 'stuNo' },
  { title: '姓名', dataIndex: 'stuName', key: 'stuName' },
  { title: '', dataIndex: 'school', key: 'empty', width: 250 }
]

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Parkabc',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  }
]
</script>

<style scoped></style>