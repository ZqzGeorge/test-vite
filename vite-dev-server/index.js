const Koa = require('koa') // 写node服务必须使用commonJS
const fs = require('fs')
const path = require('path')

const app = new Koa()

// 当请求来临以后直接进入use注册的回调函数中
app.use(async(ctx) => { // context 上下文 request ---> 请求信息 响应信息  get请求
  console.log('ctx', ctx.request, ctx.response)
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html')) // 在服务端一般不会这么用
    ctx.response.body = indexContent // 做为响应体发给对应请求的人
    // 响应体以什么形式回给对方，希望对方拿到后以什么方式去解析
    ctx.response.set('Content-Type', 'text/html')
  }
  // if (ctx.request.url = '/api/getUserInfo') {
  //   // 去数据库找到用户信息然后返回给前端
  // }
  if (ctx.request.url === '/src/main.js') {
    const mainJsContent = await fs.promises.readFile(path.resolve(__dirname, './src/main.js'))
    ctx.response.body = mainJsContent
    ctx.response.set('Content-Type', 'text/javascript')
  }

  if (ctx.request.url === '/src/App.vue') {
    const mainVueContent = await fs.promises.readFile(path.resolve(__dirname, './src/App.vue'))
    // 如果是vue文件会做一个字符串替换
    // mainVueContent.toString().find('<template>'),如果匹配到了就全部进行替换
    // AST语法分析
    ctx.response.body = mainVueContent
    // .vue文件也用js的方式去解析
    ctx.response.set('Content-Type', 'text/javascript')
  }
})
app.listen(5173, () => {
  console.log('vite dev serve listen on 5173')
})