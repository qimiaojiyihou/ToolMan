<template>
  <div class="font-black text-lg">{{ data.name }}</div>
  <!-- <div>
    <input
      v-model="data.value"
      type="text"
      @input="onchange(data.id, 'value', data.value)"
    />
  </div> -->
  <div>标题内容</div>
  <input class="w-full border outline-offset-2" type="text" :spellcheck="false" v-model="data.config.titleContent.value"  @input="onchange(data.id, 'config.titleContent.value', data.config.titleContent.value)">

  <div>描述内容</div>
  <textarea class="w-full border outline-offset-2" type="text" :spellcheck="false" :rows="3" v-model="data.config.descriptionContent.value"  @input="onchange(data.id, 'config.descriptionContent.value', data.config.descriptionContent.value)" />

  <div class="flex justify-between mb-2">
    <div>
      <label for="" class="mr-5">对齐方式</label>
      <span class="text-gray-300">{{ alignMap[data.config.align.value] }}</span>
    </div>
    <custom-radio v-model="data.config.align.value" :options="alignOptions" class="float-right" @change="onchange(data.id, 'config.align.value', data.config.align.value)"></custom-radio>
  </div>

  <div class="flex justify-between mb-2">
    <div>
      <label for="" class="mr-5">标题大小</label>
      <span class="text-gray-300">{{ fontSizeMap[data.config.titleFontSize.value] }}</span>
    </div>
    <custom-radio v-model="data.config.titleFontSize.value" :options="fontSizeOptions" class="float-right" @change="onchange(data.id, 'config.titleFontSize.value', data.config.titleFontSize.value)"></custom-radio>
  </div>

</template>

<script setup>
import CustomRadio from '@/ui/CustomRadio/index.vue'
import { defineProps, reactive, ref } from 'vue'
const props = defineProps(['data', 'onchange'])

const alignMap = reactive({
  'left': '居左对齐',
  'center': '居中对齐',
  'right': '居右对齐',
})

const alignOptions = reactive([
  {
    icon: 'alignLeft',
    value: 'left',
    title: '左对齐'
  },
  {
    icon: 'alignCenter',
    value: 'center',
    title: '居中对齐'
  },
  {
    icon: 'alignRight',
    value: 'right',
    title: '居右对齐'
  }
])

const fontSizeMap = reactive({
  '16': '大(16号)',
  '14': '中(16号)',
  '12': '小(16号)',
})

const fontSizeOptions = reactive([
  {
    icon: 'fontSizeLarge',
    value: '16',
    title: '大(16号)'
  },
  {
    icon: 'fontSizeMedium',
    value: '14',
    title: '中(14号)'
  },
  {
    icon: 'fontSizeMini',
    value: '12',
    title: '小(12号)'
  }
])

</script>
