import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueComponents from 'unplugin-vue-components/vite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    return defineConfig({
        root: './client',
        server: {
            port: process.env.VITE_PORT,
            host: '0.0.0.0',
            proxy: {
                '/api': {
                    target: process.env.VITE_API_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        build: {
            outDir: `${process.cwd()}/dist`,
        },
        resolve: {
            alias: [
                { find: '@', replacement: '/src' },
            ],
        },
        plugins: [
            vue(),
            vueComponents(),
            viteSvgIcons({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: '[name]',
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./client/src/style/mixins/mixin";',
                },
            },
            postcss: {
                plugins: [
                    postcssPresetEnv,
                ],
            },
        },
    })
}
