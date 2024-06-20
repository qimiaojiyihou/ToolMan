<template>
    <div class="flex">
        <div
            v-for="tool in toolsList"
            :key="tool.name"
            class="
                w-20
                h-20
                flex flex-col
                justify-center
                items-center
                hover:text-blue-600
                cursor-move
            "
            @click="createComponent(tool)"
        >
            <img
                class="w8 h-8"
                :src="`/src/assets/images/${tool.icon}`"
                alt=""
            />
            <span>{{ tool.name }}</span>
            <span
                >{{ state.componentsCount[tool.componentName] || 0 }}/{{
                    tool.limit
                }}</span
            >
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import state from "@/stores/editor.js";
const toolsList = reactive([
    {
        name: "标题文本",
        icon: "标题.svg",
        type: "TitleText",
        limit: 50,
        componentName: "TitleText",
        schema: {
            name: "标题文本",
            componentName: "TitleText",
            configComponent: "TitleTextConfig",
            // config: 'TitleTextConfig',
            // value: '标题文本',
            config: {
                titleContent: {
                    required: false,
                    type: String,
                    value: "",
                },
                titleFontSize: {
                    required: false,
                    type: String,
                    value: "14",
                },
                titleFontWeight: {
                    required: false,
                    type: String,
                    value: "bold",
                },
                descriptionContent: {
                    required: false,
                    type: String,
                    value: "",
                },
                descriptionFontSize: {
                    required: false,
                    type: String,
                    value: "12",
                },
                descriptionFontWeight: {
                    required: false,
                    type: String,
                    value: "normal",
                },
                align: {
                    required: true,
                    type: String,
                    value: "left",
                },
            },
            styles: {
                width: "100%",
                minHeight: "50px",
                background: "",
                border: "",
                borderRadius: "",
                boxShadow: "",
                position: "",
                zIndex: "",
                transform: "",
                transformOrigin: "",
                transition: "",
                animation: "",
                opacity: "",
                overflow: "",
                display: "",
                color: "#323233",
            },
            settings: {
                is_see_more: false,
                more_mode: {
                    mode: "",
                },
            },
        },
    },
    {
        icon: "/assets/editor_tools_title_text.svg",
        name: "图文",
        limit: 20,
        componentName: "Image",
        schema: {
            name: "图文",
            componentName: "Image",
            configComponent: "ImageConfig",
            configComponent: "ImageConfig",
            value: "",
            styles: {
                margin: 0,
            },
            settings: {
                mode: 0, // 1-文字环绕 2-文字重叠（图在上） 3-图片居中，文字上下分列
            },
        },
    },
]);
const createComponent = (tool) => {
    if (
        state.componentsCount[tool.componentName] &&
        state.componentsCount[tool.componentName] >= tool.limit
    )
        return alert("超出最大限制");

    _EE_.emit("createComponent", tool);
};
</script>
