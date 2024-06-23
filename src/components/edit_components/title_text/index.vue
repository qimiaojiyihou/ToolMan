<template>
    <div 
        class="titleText p-2"
        :style="{
            ...data.styles,
            backgroundColor: data.config.general.value.backgroundColor,
            textAlign: data.config.general.value.align
        }"
    >
        <div
            v-if="data.config.link.value.show"
            class="link float-right ml-4 flex items-center cursor-pointer" 
            :style="{
                fontSize: data.config.link.value.fontSize + 'px',
                fontWeight: data.config.link.value.fontWeight,
                color: data.config.link.value.color
            }"
            @click="handleGoLink"
        >
            <span v-if="data.config.link.value.styleTyle != '3'">
                {{
                    data.config.link.value.text
                }}
            </span>

            <svg-icon v-if="data.config.link.value.styleTyle != '1'" icon="right"></svg-icon>
        </div>
        <div 
            v-if="data.config.title.value.text"
            class="title break-all"
            :style="{
                fontSize: data.config.title.value.fontSize + 'px',
                fontWeight: data.config.title.value.fontWeight,
                color: data.config.title.value.color
            }"
        >
            {{ data.config.title.value.text }}
        </div>
        <div 
            v-if="data.config.description.value.text"
            class="description break-all"
            :style="{
                fontSize: data.config.description.value.fontSize + 'px',
                fontWeight: data.config.description.value.fontWeight,
                color: data.config.description.value.color
            }"
        >
            {{ data.config.description.value.text }}
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);

const handleGoLink = () => {
    console.log(props.data.config.link.value.url);
}
</script>
