<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import { zhTW, dateZhTW } from 'naive-ui'

const themeStore = useThemeStore()
const { theme, themeConfig, themeOverrides, modeState } = storeToRefs(themeStore)
// console.log(theme);
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" :locale="zhTW" :date-locale="dateZhTW">
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
