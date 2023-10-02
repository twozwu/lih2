<template>
    <n-modal v-model:show="showModal" preset="card" title="Dialog" class="w-11/12">
        <template #header>
            <div>{{ programState.statusName }}</div>
        </template>
        <!-- <CRU /> -->

        <n-tabs v-model:value="activeTab" type="line" animated default-value="CRU">
            <n-tab-pane v-for="item in mainTab" :key="item.tabName" :name="item.tabName" :tab="item.tabName">
                <component :is="item.component" />
            </n-tab-pane>
            <!-- <n-tab-pane name="CRU" tab="Oasis">
                <CRU />
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="the Beatles">
                asfd
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="周杰伦">
                七里香
            </n-tab-pane> -->
        </n-tabs>
    </n-modal>
</template>
    
<script lang="jsx" setup>
import { ref, shallowRef } from 'vue'
import { programState, mainTab } from './State'
import CRU from './PtoSearchMenu.vue'

const showModal = ref(false)
const activeTab = ref('CRU')
defineExpose({ showModal })
</script>
  
<style></style>