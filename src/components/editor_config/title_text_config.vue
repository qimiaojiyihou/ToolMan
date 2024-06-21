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

    <div class="flex justify-between my-4">
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

    <div class="flex justify-between my-4">
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

    <div class="flex justify-between my-4">
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

    <div class="flex justify-between my-4">
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

    <div class="flex justify-between my-4">
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

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">标题颜色</label>
            <span class="text-gray-300">{{ data.config.titleColor.value }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'config.titleColor.value', titleColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.config.titleColor.value"
                @change="onchange(data.id, 'config.titleColor.value', data.config.titleColor.value)"
            />
        </div>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">描述颜色</label>
            <span class="text-gray-300">{{ data.config.descriptionColor.value }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'config.descriptionColor.value', descriptionColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.config.descriptionColor.value"
                @change="onchange(data.id, 'config.descriptionColor.value', data.config.descriptionColor.value)"
            />
        </div>
    </div>

    <div class="flex justify-between my-4">
        <div>
            <label for="" class="mr-5">背景颜色</label>
            <span class="text-gray-300">{{ data.config.backgroundColor.value }}</span>
        </div>

        <div class="flex">
            <button
                class="mr-5 text-[#155bd4]"
                @click="onchange(data.id, 'config.backgroundColor.value', backgroundColor_default)"
            >
                重置
            </button>
            <input
                type="color"
                v-model="data.config.backgroundColor.value"
                @change="onchange(data.id, 'config.backgroundColor.value', data.config.backgroundColor.value)"
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

    <div v-if="data.config.link.value.show" class="p-4 my-4">
        <custom-radio v-model="data.config.link.value.styleTyle" :options="linkStyleOptions" :radioButton="false"></custom-radio>

        <input
          class="w-20 border my-4 outline-offset-2"
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

const titleColor_default = ref(props.data.config.titleColor.value);
const descriptionColor_default = ref(props.data.config.descriptionColor.value)
const backgroundColor_default = ref(props.data.config.backgroundColor.value)

const linkStyleOptions = reactive([
  { title: '样式一', value: '1' },
  { title: '样式二', value: '2' },
  { title: '样式三', value: '3' }
])
</script>
