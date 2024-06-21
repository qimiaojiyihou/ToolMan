<template>
    <div class="titleText" :style="data?.styles">
        <!-- <div class="titleContent">
            {{ data.config.titleContent.value || "" }}
        </div>
        <div class="descriptionContent" style="white-space: pre-wrap">
            {{ data.config.descriptionContent.value }}
        </div>

        <div>
            {{ data.styles.color }}
        </div> -->
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);

console.log(props.data);
</script>
