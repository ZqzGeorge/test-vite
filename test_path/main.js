/**
 * 一定会去读文件，我们如果写的相对路径那么会尝试去拼成绝对路径
 */
const fs = require('fs')
const path = require('path') // 本质上就是一个字符串处理模块
require('./src')
console.log(process.cwd())
// __dirname 返回当前文件所在目录
console.log(path.resolve(__dirname, './variable.css'))
const result = fs.readFileSync(path.resolve(__dirname, './variable.css'))
console.log('result', result.toString())

// node端发现使用的是相对路径则会使用precess.cwd()来进行拼接， precess.cwd()返回当前node命令运行的目录