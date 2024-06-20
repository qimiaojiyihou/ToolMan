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
    <input
        class="w-full border outline-offset-2"
        type="text"
        :spellcheck="false"
        v-model="data.config.titleContent.value"
        @input="
            onchange(
                data.id,
                'config.titleContent.value',
                data.config.titleContent.value
            )
        "
    />

    <div>描述内容</div>
    <textarea
        class="w-full border outline-offset-2"
        type="text"
        :spellcheck="false"
        :rows="3"
        v-model="data.config.descriptionContent.value"
        @input="
            onchange(
                data.id,
                'config.descriptionContent.value',
                data.config.descriptionContent.value
            )
        "
    />

    <div class="flex justify-between mb-2">
        <div>
            <label for="" class="mr-5">对齐方式</label>
            <span class="text-gray-300">{{
                alignMap[data.config.align.value]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.align.value"
            :options="alignOptions"
            class="float-right"
            @change="
                onchange(data.id, 'config.align.value', data.config.align.value)
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between mb-2">
        <div>
            <label for="" class="mr-5">标题大小</label>
            <span class="text-gray-300">{{
                fontSizeMap[data.config.titleFontSize.value]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.titleFontSize.value"
            :options="fontSizeOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.titleFontSize.value',
                    data.config.titleFontSize.value
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between mb-2">
        <div>
            <label for="" class="mr-5">描述大小</label>
            <span class="text-gray-300">{{
                fontSizeMap[data.config.descriptionFontSize.value]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.descriptionFontSize.value"
            :options="fontSizeOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.descriptionFontSize.value',
                    data.config.descriptionFontSize.value
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between mb-2">
        <div>
            <label for="" class="mr-5">标题粗细</label>
            <span class="text-gray-300">{{
                fontWeightMap[data.config.titleFontWeight.value]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.titleFontWeight.value"
            :options="fontWeightOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.titleFontWeight.value',
                    data.config.titleFontWeight.value
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between mb-2">
        <div>
            <label for="" class="mr-5">描述粗细</label>
            <span class="text-gray-300">{{
                fontWeightMap[data.config.descriptionFontWeight.value]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.descriptionFontWeight.value"
            :options="fontWeightOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.descriptionFontWeight.value',
                    data.config.descriptionFontWeight.value
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between mb-2">
        <div>
            <label for="" class="mr-5">标题颜色</label>
            <span class="text-gray-300">{{ data.styles.color }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'styles.color', titleColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.styles.color"
                @change="onchange(data.id, 'styles.color', data.styles.color)"
            />
        </div>
    </div>
</template>

<script setup>
import CustomRadio from "@/ui/CustomRadio/index.vue";
import { defineProps, reactive, ref } from "vue";
const props = defineProps(["data", "onchange"]);
const alignOptions = reactive([
    {
        icon: "alignLeft",
        value: "left",
        title: "左对齐",
    },
    {
        icon: "alignCenter",
        value: "center",
        title: "居中对齐",
    },
    {
        icon: "alignRight",
        value: "right",
        title: "居右对齐",
    },
]);
const alignMap = reactive(
    alignOptions.reduce((obj, item) => {
        obj[item.value] = item.title;
        return obj;
    }, {})
);

const fontSizeOptions = reactive([
    {
        icon: "fontSizeLarge",
        value: "16",
        title: "大(16号)",
    },
    {
        icon: "fontSizeMedium",
        value: "14",
        title: "中(14号)",
    },
    {
        icon: "fontSizeMini",
        value: "12",
        title: "小(12号)",
    },
]);
const fontSizeMap = reactive(
    fontSizeOptions.reduce((obj, item) => {
        obj[item.value] = item.title;
        return obj;
    }, {})
);

const fontWeightOptions = reactive([
    {
        icon: "fontWeightNormal",
        value: "normal",
        title: "常规体",
    },
    {
        icon: "fontWeightBold",
        value: "bold",
        title: "加粗体",
    },
]);
const fontWeightMap = reactive(
    fontWeightOptions.reduce((obj, item) => {
        obj[item.value] = item.title;
        return obj;
    }, {})
);

const titleColor_default = ref(props.data.styles.color);
</script>
