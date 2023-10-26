<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import { zhTW, dateZhTW } from 'naive-ui'
import { onMounted } from 'vue'

const router = useRouter()
const themeStore = useThemeStore()
const { theme, themeOverrides } = storeToRefs(themeStore)

onMounted(() => {
  // 接收訊息
  window.addEventListener('message', handleMessage)
})

function handleMessage(event: any) {
  // console.log(event);
  const path = event.data?.goto
  if (path) {
    router.push(path)
  }
}
</script>

<template>
  <n-config-provider
    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="zhTW"
    :date-locale="dateZhTW"
  >
    <n-message-provider>
      <n-dialog-provider>
        <header>
          <Navbar />
        </header>

        <RouterView />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
