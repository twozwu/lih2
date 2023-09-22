<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/TheNavbar.vue'
import { generate } from '@ant-design/colors'
import { type GlobalThemeOverrides } from 'naive-ui'

// 定义一个主色
const primaryColor = ref('#1677ff')
// theme-overrides
const themeOverrides = ref<GlobalThemeOverrides>({})
// generate生成的颜色
const generateColors = ref<string[]>([])

setThemeOverrides()

// 设置theme-overrides
function setThemeOverrides() {
  generateColors.value = generate(primaryColor.value)
  const commonColors = {
    primaryColor: generateColors.value[5],
    primaryColorHover: generateColors.value[4],
    primaryColorSuppl: generateColors.value[4],
    primaryColorPressed: generateColors.value[6]
  }
  themeOverrides.value.common = commonColors
}

// 监听主色变化
watch(primaryColor, () => {
  setThemeOverrides()
})
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <header>
        <div class="wrapper">
          <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
          <Navbar />

          <!-- <n-row gutter="12">
          <n-form inline>
            <n-col :span="4">
              <n-form-item label="Primary Color">
                <n-color-picker v-model:value="primaryColor" :show-alpha="false" />
              </n-form-item>
            </n-col>
          </n-form>
        </n-row> -->
        </div>
      </header>

      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
