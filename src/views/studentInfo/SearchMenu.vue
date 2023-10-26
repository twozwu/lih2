<template>
  <n-grid cols="2 m:5" :collapsed-rows="2" x-gap="12 l:24" responsive="screen">
    <n-form-item-gi path="age" label="學年度學期">
      <n-select placeholder="學年度" v-model:value="search.enrollYear" :options="[
        {
          label: '全部',
          value: null
        },
        {
          label: '111',
          value: 0
        },
        {
          label: '112',
          value: 1
        }
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="abc" label="部別">
      <n-select placeholder="部別" :options="[
        {
          label: '全部',
          value: null
        },
        {
          label: '日間部',
          value: 0
        },
        {
          label: '夜間部',
          value: 1
        }
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path1" label="學制">
      <n-select placeholder="學制" :options="[
        {
          label: '全部',
          value: null
        },
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
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="學院">
      <n-select placeholder="學院" :options="[
        {
          label: '全部',
          value: null
        },
        {
          label: '工程學群',
          value: 0
        },
        {
          label: '時尚與創意學群',
          value: 1
        }
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="系所/科別">
      <n-select placeholder="系所/科別" :options="[
        {
          label: '全部',
          value: null
        },
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
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="年級">
      <n-select placeholder="年級" :options="[
        {
          label: '全部',
          value: null
        },
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
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="班級">
      <n-select placeholder="班級" :options="[
        {
          label: '全部',
          value: null
        },
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
      ]" />
    </n-form-item-gi>
    <n-form-item-gi path="nestedValue.path2" label="學號/姓名" class="lg:!col-span-2">
      <n-input placeholder="學號" />
    </n-form-item-gi>
  </n-grid>
  <n-row class="gap-3">
    <n-button class="ms-auto" type="primary"> 搜尋 </n-button>
    <!-- <n-button class="" type="primary" secondary> 清除 </n-button> -->
  </n-row>
</template>

<script setup>
import { ref } from 'vue'
const search = ref({
  enrollYear: 0,
  semester: 0,
  reenteredPassword: null
})
</script>

<style scoped></style>