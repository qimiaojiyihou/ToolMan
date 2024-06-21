<template>
    <div class="custom-radio-container">
        <template v-if="radioButton">
            <div v-for="(radio, index) in options" :key="index" :title="radio.title" class="inline-block cursor-pointer radio-item" :class="modelValue == radio.value ?  'active' : ''" @click="handleClick(radio)">
                <svg-icon v-if="radio.icon" :icon="radio.icon" class="mx-4"></svg-icon>
                <span v-else class="text-sm mx-2">{{ radio.title }}</span>
            </div>
        </template>

        <template v-else>
            <div v-for="(radio, index) in options" :key="index" class="inline-block cursor-pointer mr-3 radio-item__default" :class="modelValue == radio.value ?  'active' : ''" @click="handleClick(radio)">
                <span class="radio-input mr-1"></span>
                <span class="radio-title">{{ radio.title }}</span>
            </div>
        </template>

    </div>
</template>

<script setup name="CustomRadio">
import { defineProps, defineModel, defineEmits } from 'vue';
const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    radioButton: {
        type: Boolean,
        default: true
    }
})
const model = defineModel()
const emit = defineEmits(['update:modelValue'])

const handleClick = (radio) => {
    emit('change', emit('update:modelValue', radio.value))
}
</script>

<style lang="scss" scoped>
.custom-radio-container {
    .radio-item {
        // width: 40px;
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

    .radio-item__default {
        .radio-input {
            user-select: none;
            display: inline-block;
            vertical-align: middle;
            width: 16px;
            height: 16px;
            border: 1px solid;
            border-color: initial;
            border-radius: 8px;
            // padding: 2px;
        }
        .radio-title {
            vertical-align: middle;
        }

        &.active {
            .radio-input {
                position: relative;
                &::before {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    content: '';
                    width: 10px;
                    height: 10px;
                    background-color: #155bd4;
                    border-radius: 5px;
                }
            }

        }
    }
}

</style>