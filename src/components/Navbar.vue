<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script setup>
import { h, ref, watch } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";
import { useRouter } from "vue-router";

const router = useRouter();

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    key: "/",
    label: "請假作業",
    icon: renderIcon(BookIcon)
  },
  // {
  //   label: "關於",
  //   // key: "/about",
  //   icon: renderIcon(BookIcon),
  // },
  // {
  //   label: "theme",
  //   key: "/theme",
  //   icon: renderIcon(BookIcon),
  // },
  {
    label: "價單管理",
    key: "/test",
    icon: renderIcon(BookIcon),
  }
];

const activeKey = ref(null);
watch(activeKey, () => {
  router.push(activeKey.value)
})
</script>