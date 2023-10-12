<template>
  <n-tooltip placement="top" trigger="hover" class="max-w-fit" v-bind="$attrs">
    <template #trigger>
      <slot />
    </template>
    <span>{{ label }}</span>
  </n-tooltip>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
  }>(),
  {
    label: '提示'
  }
)
</script>

<style>
</style>