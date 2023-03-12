import { defineConfig } from "vite"
const postcssPresetEnv = require('postcss-preset-env')

export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  envPrefix: 'ENV_',
  css: {
    modules: {
      // 对css模块化的默认行为进行覆盖
      // modules配置最终会丢给postcss
      localsConventios: 'cameCase', // 修改生成的配置对象的key的展示形式
      scrollBehavior: 'local', // 配置当前的模块化行为是模块化还是全局化/有hash就是模块化
      generateScopedName: '', // 生成类名的规则
      hashPrefix: '', // 生成hash会根据你的类名进行生成，你可以配置的hashprefix，会参与到最终的hash生成中去
      globalModulePaths: [] // 代表你不想参与的css模块化的路径
    },
    preprocessorOption: {}, // key + config key代表预处理器名字
    devSourcemap: true,
    postcss: {
      Plugin: [postcssPresetEnv ()]
    }
  } // 对css的行为进行配置
})