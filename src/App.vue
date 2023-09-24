<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/TheNavbar.vue'
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { theme, themeConfig, themeOverrides, modeState } =
  storeToRefs(themeStore)
// console.log(theme);
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <header>
        <div class="wrapper">
          <Navbar />
        </div>
      </header>

      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
