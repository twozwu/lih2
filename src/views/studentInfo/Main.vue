<template>
    <n-modal v-model:show="dialogs.edit" preset="card" class="w-full md:w-[98%]">
        <template #header>
            <div>{{ programState.statusName }}</div>
        </template>

        <n-tabs v-model:value="activeTab" type="line" animated default-value="CRU">
            <n-tab-pane v-for="item in mainTab" :key="item.tabName" :name="item.tabName" :tab="item.tabName">
                <component :is="item.component" />
            </n-tab-pane>
            <!-- <n-tab-pane name="CRUasdf" tab="Oasis">
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
import { ref } from 'vue'
import { programState, mainTab, dialogs } from './State'
// import CRU from './CRU.vue'

const activeTab = ref('主單')
</script>
  
<style></style>