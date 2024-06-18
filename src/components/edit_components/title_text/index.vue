<template>
  <div class="titleText" :style="data?.styles">
    {{ data.value }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['data']);
</script>
