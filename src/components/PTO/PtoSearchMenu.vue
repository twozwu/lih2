<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template #bodyCell="{ index, column }">
      <template v-if="column.key == 'name'">
        <a-select
          class=""
          placeholder="學年度"
          show-search
          :dropdown-match-select-width="false"
        >
          <a-select-option value="">111</a-select-option>
          <a-select-option value="Http://">112</a-select-option>
          <a-select-option value="Https://">113</a-select-option>
        </a-select>
        <a-select class="" placeholder="學期" show-search :dropdown-match-select-width="false">
          <a-select-option value="">第一學期</a-select-option>
          <a-select-option value="Http://">第二學期</a-select-option>
          <a-select-option value="Https://">第三學期</a-select-option>
        </a-select>
      </template>
      <template v-if="column.key == 'age'">
        <a-select placeholder="部別" show-search :dropdown-match-select-width="false">
          <a-select-option value="HangZhou">日間部</a-select-option>
          <a-select-option value="NingBo">進修部</a-select-option>
        </a-select>
      </template>
      <template v-if="column.key == 'address'">
        <a-select placeholder="學制" show-search :dropdown-match-select-width="false">
          <a-select-option value=""></a-select-option>
          <a-select-option value="5A429C57-3FC7-4B91-996A-5E216B537DE0"
            >四年制技術系(春季班)</a-select-option
          >
          <a-select-option value="7146A61D-7459-4C8D-A9F5-85509C11045C"
            >四年制技術系(秋季班)</a-select-option
          >
          <a-select-option value="8DFFCFA4-35BB-4FC4-A688-2302D4836EF6">五年制專科</a-select-option>
          <a-select-option value="BB150DEF-2089-467A-90B8-962744669D33"
            >二年制技術系</a-select-option
          >
          <a-select-option value="001BDDFE-6F2E-468C-9086-9CCFE130C381"
            >四年制技術系</a-select-option
          >
          <a-select-option value="754004E3-1E86-4F3C-A4C2-865B7D011E6C"
            >二年制技術系學分班</a-select-option
          >
        </a-select>
      </template>
      <template v-if="column.key == 'college'">
        <a-select placeholder="學院" show-search :dropdown-match-select-width="false">
          <a-select-option value="495567B1-223D-4523-8E3A-9D35FEB1530C">工程學群</a-select-option>
          <a-select-option value="429E266E-FDB0-4CC8-AF96-0BCEBD05F856"
            >時尚與創意學群</a-select-option
          >
        </a-select>
      </template>
      <template v-if="column.key == 'department'">
        <a-select placeholder="系所/科別" show-search :dropdown-match-select-width="false">
          <a-select-option value="8F65C808-B4FA-420E-A272-FEB79F6A5386"
            >數位多媒體系</a-select-option
          >
          <a-select-option value="BB02B97F-0859-4B42-8695-8C4967F57ED6">電機工程系</a-select-option>
          <a-select-option value="A536BA0D-9656-4B28-9C91-F3897580B540">資訊科技系</a-select-option>
        </a-select>
      </template>
      <template v-if="column.key == 'signature'">
        <a-select placeholder="簽核狀態" show-search :dropdown-match-select-width="false">
          <a-select-option selected="" value="">全部</a-select-option>
          <a-select-option value="0">未送出</a-select-option>
          <a-select-option value="1">流程中</a-select-option>
          <a-select-option value="2">退回</a-select-option>
          <a-select-option value="3">不通過</a-select-option>
          <a-select-option value="4">已通過</a-select-option>
        </a-select>
      </template>
      <template v-if="index == 0 && column.key == 'action'">
        <a-button type="primary">搜尋</a-button>
        <a-button>清除</a-button>
      </template>
    </template>
    <template #expandedRowRender>
      <a-table :columns="columns2" :data-source="data" :pagination="false">
        <template #bodyCell="{ column }">
          <template v-if="column.key == 'name'">
            <a-select placeholder="年級" show-search :dropdown-match-select-width="false">
              <a-select-option value="">1</a-select-option>
              <a-select-option value="Http://">2</a-select-option>
              <a-select-option value="Https://">3</a-select-option>
            </a-select>
          </template>
          <template v-if="column.key == 'age'">
            <a-select placeholder="班級" show-search :dropdown-match-select-width="false">
              <a-select-option selected="" value=""></a-select-option>
              <a-select-option value="669F19E1-4D14-4AEF-9A53-663BD68207B1">日四技(春)數媒三戊</a-select-option>
              <a-select-option value="625887B8-347F-4530-8312-9EB2B59783B7">日四技(春)電機三己</a-select-option>
              <a-select-option value="BE9DB353-0EC7-4EFE-91C9-3F34AE8EFE67">日四技(春)資科三己</a-select-option>
            </a-select>
          </template>
          <template v-if="column.key == 'stuNo'">
            <a-input v-model:value="value" placeholder="學號" />
          </template>
          <template v-if="column.key == 'stuName'">
            <a-input v-model:value="value" placeholder="姓名" />
          </template>
        </template>
      </a-table>
    </template>
    <template #expandColumnTitle>
      <span style="color: red">More</span>
    </template>
  </a-table>
</template>

<script setup>
const columns = [
  { title: '學年度學期', dataIndex: 'name', key: 'name' },
  { title: '部別', dataIndex: 'age', key: 'age' },
  { title: '學制', dataIndex: 'address', key: 'address' },
  { title: '學院', dataIndex: 'school', key: 'college' },
  { title: '系所/科別', dataIndex: 'division', key: 'department' },
  { title: '簽核狀態', dataIndex: 'signOff', key: 'signature' },
  { title: 'Action', key: 'action' }
]
const columns2 = [
  { title: '年級', dataIndex: 'name', key: 'name' },
  { title: '班級', dataIndex: 'age', key: 'age' },
  { title: '學號', dataIndex: 'stuNo', key: 'stuNo' },
  { title: '姓名', dataIndex: 'stuName', key: 'stuName' },
  { title: '', dataIndex: 'school', key: 'empty', width: 250 }
]

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Parkabc',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  }
]
</script>

<style scoped>

</style>