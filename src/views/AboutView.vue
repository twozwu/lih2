<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false">
  </n-data-table>
  {{ test }}
</template>

<script lang="jsx" setup>
import { h, defineComponent } from 'vue'
import { NButton, useMessage } from 'naive-ui'

const createColumns = ({ play, data }) => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return (data.indexOf(row) == 0 ?
          <div class="flex gap-1">
            <n-button type="primary" onClick={() => console.log(data.indexOf(row))}> Play </n-button>
            <n-button type="primary" onClick={() => play(row)}> bbb </n-button>
          </div> : ''
        )
      }
    }
  ]
}

const data = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const message = useMessage()
const columns = createColumns({
  play(row) {
    message.info(`Play ${row.title}`)
  }, data
})
const test = ref('asdf');
</script>