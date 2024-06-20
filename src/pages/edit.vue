<template>
  <div class="editor h-screen w-screen">
    <div class="h-12 border-b border-solid border-stone-300">head</div>
    <div class="editor_body flex justify-between">
      <div class="w-[200px] h-full p-[15px]">
        <ToolsBar />
      </div>
      <div class="flex-1 h-full bg-slate-100 overflow-y-auto overflow-x-hidden">
        <iframe
          ref="contentIframe"
          src="/preview"
          frameborder="0"
          class="w-full h-full"
        ></iframe>
      </div>
      <div class="w-[376px] h-full p-2">
        <EditorConfig :component_item="current_component" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ToolsBar from '@/components/toolsBar/index.vue';
import EditorConfig from '../components/editor_config/index.vue';
import state from '@/stores/editor.js';
import _findIndex from 'lodash/findIndex';

const contentIframe = ref(null);
const current_id = ref('');
const current_component = ref({});

// 生成uuid
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

onMounted(() => {
  const contentWindow = contentIframe.value.contentWindow;
  if (contentWindow) {
    setTimeout(() => {
      contentWindow.postMessage({ message: 'init', data: {} });
    }, 2000);
  }

  window.addEventListener('message', (event) => {
    const { message, data } = event.data;
    switch (message) {
      case 'selectComponent':
        current_id.value = JSON.parse(data).id;
        current_component.value =
          state.components[
            _findIndex(state.components, function (o) {
              return o.id == JSON.parse(data).id;
            })
          ];
        console.log(state.components);
        console.log(JSON.parse(data));
        break;
    }
  });
  _EE_.on('createComponent', (tool) => {
    const temp = Object.assign({ id: s4() }, tool.schema);
    if (!state.componentsCount[temp.componentName]) {
      state.componentsCount[temp.componentName] = 0;
    }
    state.components.push(temp);
    state.componentsCount[temp.componentName]++;
    contentWindow.postMessage({
      message: 'createComponent',
      data: JSON.stringify(temp),
    });
  });
  _EE_.on('updateComponent', (changeData) => {
    state.components[
      _findIndex(state.components, function (o) {
        return o.id == changeData.id;
      })
    ][changeData.key] = changeData.value;
    contentWindow.postMessage({ message: 'updateComponent', data: changeData });
  });
  _EE_.on('deleteComponent', (item) => {});
});
</script>

<style lang="scss">
.editor {
}
.editor_body {
  height: calc(100vh - 48px);
}
</style>
