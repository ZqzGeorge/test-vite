// vite配置文件处理细节

import { defineConfig, loadEnv } from "vite"; // 引入方便提示
import viteBaseConfig from "./vite.base.config"
import viteDevConfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"

/**@type import("vite").UserConfig */
// const viteConfig = {
// }

// 策略模式

const envResolver = {
    "build": () =>  {
        console.log(`output->生产环境`)
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    },
    "serve": () => {
        console.log('开发环境')
        return Object.assign({}, viteBaseConfig, viteDevConfig)
    }
}
export default defineConfig(({command, mode}) => {
    // console.log(`output->process`,process.cwd())
    // console.log(`output->command`,command)
    const env = loadEnv(mode, process.cwd(), '')
    console.log('env///', env)
    return envResolver[command]()
})