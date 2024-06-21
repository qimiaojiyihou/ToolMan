<template>
    <div class="font-black text-lg">{{ data.name }}</div>

    <div>标题内容</div>
    <input
        class="w-full border outline-offset-2"
        type="text"
        :spellcheck="false"
        v-model="data.config.title.value.text"
        @input="
            onchange(
                data.id,
                'config.title.value.text',
                data.config.title.value.text
            )
        "
    />

    <div>描述内容</div>
    <textarea
        class="w-full border outline-offset-2"
        type="text"
        :spellcheck="false"
        :rows="3"
        v-model="data.config.description.value.text"
        @input="
            onchange(
                data.id,
                'config.description.value.text',
                data.config.description.value.text
            )
        "
    />

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">对齐方式</label>
            <span class="text-gray-300">{{
                alignMap[data.config.general.value.align]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.general.value.align"
            :options="alignOptions"
            class="float-right"
            @change="
                onchange(data.id, 'config.general.value.align', data.config.general.value.align)
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">标题大小</label>
            <span class="text-gray-300">{{
                fontSizeMap[data.config.title.value.fontSize]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.title.value.fontSize"
            :options="fontSizeOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.title.value.fontSize',
                    data.config.title.value.fontSize
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">描述大小</label>
            <span class="text-gray-300">{{
                fontSizeMap[data.config.description.value.fontSize]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.description.value.fontSize"
            :options="fontSizeOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.description.value.fontSize',
                    data.config.description.value.fontSize
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">标题粗细</label>
            <span class="text-gray-300">{{
                fontWeightMap[data.config.title.value.fontWeight]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.title.value.fontWeight"
            :options="fontWeightOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.title.value.fontWeight',
                    data.config.title.value.fontWeight
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">描述粗细</label>
            <span class="text-gray-300">{{
                fontWeightMap[data.config.description.value.fontWeight]
            }}</span>
        </div>
        <custom-radio
            v-model="data.config.description.value.fontWeight"
            :options="fontWeightOptions"
            class="float-right"
            @change="
                onchange(
                    data.id,
                    'config.description.value.fontWeight',
                    data.config.description.value.fontWeight
                )
            "
        ></custom-radio>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">标题颜色</label>
            <span class="text-gray-300">{{ data.config.title.value.color }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'config.title.value.color', titleColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.config.title.value.color"
                @change="onchange(data.id, 'config.title.value.color', data.config.title.value.color)"
            />
        </div>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">描述颜色</label>
            <span class="text-gray-300">{{ data.config.description.value.color }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'config.description.value.color', descriptionColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.config.description.value.color"
                @change="onchange(data.id, 'config.description.value.color', data.config.description.value.color)"
            />
        </div>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">背景颜色</label>
            <span class="text-gray-300">{{ data.config.general.value.backgroundColor }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'config.general.value.backgroundColor', backgroundColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.config.general.value.backgroundColor"
                @change="onchange(data.id, 'config.general.value.backgroundColor', data.config.general.value.backgroundColor)"
            />
        </div>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">跳转链接</label>
            <span class="text-gray-300">{{ data.config.link.value.show ? '显示' : '不显示' }}</span>
        </div>

        <input
            type="checkbox"
            v-model="data.config.link.value.show"
            @change="onchange(data.id, 'config.link.value.show', data.config.link.value.show)"
        />
    </div>

    <div v-if="data.config.link.value.show" class="p-4 my-4 bg-neutral-100">
        <custom-radio v-model="data.config.link.value.styleTyle" :options="linkStyleOptions" :radioButton="false"></custom-radio>

        <div class="flex my-4">
            <label class="mr-5">跳转文本</label>
            <input
                class="flex-1 border outline-offset-2"
                type="text"
                :spellcheck="false"
                v-model="data.config.link.value.text"
                :title="data.config.link.value.text"
                @input="
                    onchange(
                        data.id,
                        'config.link.value.text',
                        data.config.link.value.text
                    )
                "
            />
        </div>

        <div class="flex my-4">
            <label class="mr-5">跳转地址</label>
            <input
                class="flex-1 border outline-offset-2"
                type="text"
                :spellcheck="false"
                v-model="data.config.link.value.url"
                :title="data.config.link.value.url"
                @input="
                    onchange(
                        data.id,
                        'config.link.value.url',
                        data.config.link.value.url
                    )
                "
                />
        </div>

        <div class="flex justify-between my-4">
            <div>
                <label for="" class="mr-5">文本大小</label>
                <span class="text-gray-300">{{
                    fontSizeMap[data.config.link.value.fontSize]
                }}</span>
            </div>
            <custom-radio
                v-model="data.config.link.value.fontSize"
                :options="fontSizeOptions"
                class="float-right"
                @change="
                    onchange(
                        data.id,
                        'config.link.value.fontSize',
                        data.config.link.value.fontSize
                    )
                "
            ></custom-radio>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <label for="" class="mr-5">文本粗细</label>
                <span class="text-gray-300">{{
                    fontWeightMap[data.config.link.value.fontWeight]
                }}</span>
            </div>
            <custom-radio
                v-model="data.config.link.value.fontWeight"
                :options="fontWeightOptions"
                class="float-right"
                @change="
                    onchange(
                        data.id,
                        'config.link.value.fontWeight',
                        data.config.link.value.fontWeight
                    )
                "
            ></custom-radio>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <label for="" class="mr-5">文本颜色</label>
                <span class="text-gray-300">{{ data.config.link.value.color }}</span>
            </div>

            <div class="flex">
                <button
                    class="mr-5 text-[#155bd4]"
                    @click="onchange(data.id, 'config.link.value.color', linkColor_default)"
                >
                    重置
                </button>
                <input
                    type="color"
                    v-model="data.config.link.value.color"
                    @change="onchange(data.id, 'config.link.value.color', data.config.link.value.color)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomRadio from "@/ui/CustomRadio/index.vue";
import { reactive, ref } from "vue";
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

const titleColor_default = ref(props.data.config.title.value.color);
const descriptionColor_default = ref(props.data.config.description.value.color)
const backgroundColor_default = ref(props.data.config.general.value.backgroundColor)
const linkColor_default = ref(props.data.config.link.value.color)

const linkStyleOptions = reactive([
  { title: '样式一', value: '1' },
  { title: '样式二', value: '2' },
  { title: '样式三', value: '3' }
])
</script>
