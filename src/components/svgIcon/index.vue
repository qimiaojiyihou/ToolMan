<template>
    <svg 
        class="svg-icon"
        :class="className"
        aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"/>
    </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  // SVG 图标名称或在线URL
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
}
</style>