<template>
    <div class="custom-radio-container">
        <div v-for="(radio, index) in options" :key="index" :title="radio.title" class="inline-block cursor-pointer radio-item" :class="modelValue == radio.value ?  'active' : ''" @click="handleClick(radio)">
            <svg-icon :icon="radio.icon"></svg-icon>
        </div>
    </div>
</template>

<script setup name="CustomRadio">
import { defineProps, defineModel, defineEmits } from 'vue';
const props = defineProps(['options'])
const model = defineModel()
const emit = defineEmits(['update:modelValue'])

const handleClick = (radio) => {
    emit('change', emit('update:modelValue', radio.value))
}
</script>

<style lang="scss" scoped>
.custom-radio-container {
    .radio-item {
        width: 40px;
        height: 25px;
        text-align: center;
        border: 1px solid #ebedf0;
        border-right: none;
        &:last-child {
            border-right: 1px solid #ebedf0;
        }
        &.active {
            color: #155bd4;
            border: 1px solid #155bd4;
        }
    }
}

</style>