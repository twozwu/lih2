<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
import { h, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons-vue'
import { type MenuProps } from 'ant-design-vue'

const current = ref<string[]>(['mail'])
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(MailOutlined),
    label: '請假系統',
    title: '請假系統'
  },
  {
    key: '/about',
    icon: () => h(AppstoreOutlined),
    label: 'about',
    title: 'about'
  },
  {
    key: '/theme',
    icon: () => h(AppstoreOutlined),
    label: 'theme',
    title: 'theme'
  }
])

const router = useRouter()
watch(current, () => {
  router.push(current.value[0])
})
</script>

