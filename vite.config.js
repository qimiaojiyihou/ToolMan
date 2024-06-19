import { defineConfig } from "vite"
import path from "path"

import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // 要缓存的图标文件夹
            iconDirs: [path.resolve(__dirname, 'src/assets/icons/svg')],
            // 执行 icon name 的格式
            symbolId: 'icon-[name]'
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@components": resolve(__dirname, "src/components/edit_components"),
        }
    }
})