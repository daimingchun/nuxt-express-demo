## nuxt-express-demo
  
  
* 基于Vue的SSR技术方案，需要部署在Node服务环境下
* 该方案采用了nuxtjs框架 官方 https://nuxtjs.org/ 来做服务端渲染
注意：`~`代表根目录

### 2017-12-26
 * 增加'amfe-flexible'布局方案，使用postcss-px2rem将px转化为rem；官方 https://github.com/amfe/lib-flexible
 
### 2017-12-25
 * 增加vue组件的例子（简易版）
  * 增加cell组件 `~/components/cell.vue`
  * 访问地址为localhost:9999/cell
 * 增加iconfont
  * 访问首页便可看到，使用方法如`<i class="iconfont icon-xxx"></i>`
  * 查看更多图标，请直接打开`~/assets/fonts/demo_fontclass.html`便可
 
### 2017-12-22
 * 增加第三方mint-ui 官方 http://mint-ui.github.io/#!/zh-cn
  * 由于vux不能很好的集成到nuxtjs里来，改选mint-ui

### 2017-12-21
* 增加Mockjs 官方 http://mockjs.com/
 * 本地开发模式下，使用mockjs来模拟数据
 * 注意:本地mockjs和测试接口如何切换？
  * 直接在`~/api/index.js` 文件里开启或注释 `import '~/mock'`便可，
  * 如果使用了`npm run start` 命令，将直接启动`production`环境，即调用`~/config/prod.config.js`文件的配置


### 首先clone本仓库到本地

执行项目依赖安装
```
npm(cnpm) install
```
如需还没有安装cnpm，查看`wiki:` http://wiki.hzjiehun.bid/pages/viewpage.action?pageId=1087602
本地开发环境命令
```
npm run dev
```
服务端集成命令
```
npm run build
```
启动生成环境服务，需要先使用`npm run build`命令；
```
npm run start

```
运行该命令后将启动`prodcution`运行环境，将会加载`~/config/prod.config.js`配置


### 目录结构
|--- api #管理异步接口  
|--- assets #放置未编译的静态资源  
|--- build #应用启动依赖，`npm run build`命令构建生成  
|--- components #组件目录，公共组件直接放在目录下，私有组件需新建目录再存放  
&nbsp;&nbsp;|--- home #home页面的私有组件目录  
&nbsp;&nbsp;&nbsp;&nbsp;|--- swiper.vue #swiper组件  
&nbsp;&nbsp;|cell.vue #公共cell组件  
|--- config #执行环境配置  
|--- controler #暂没使用  
|--- doc #一些文档  
|--- layouts #页面布局 详情查看：https://zh.nuxtjs.org/api/pages-layout  
|--- mock #数据模拟  
|--- pages #视图  
|--- plugins #第三方插件  
|--- server #express启动配置  
|--- static #静态资源目录（编译assets文件后生成），使用`gulp build`完成构建  
|--- vuex #组件状态管理  
|--- gulpfile.js #gulp构建配置  
|--- nuxt.config.js #nuxt配置  
|--- backpack.config.js #backpack配置  
|....  


### 样式处理
Q: 如何引入外部样式?  

A: 公共样式在根目录nuxt.config.js里去配置  

A: 私有样式在模板里使用head对象或import方式加入  


### JS

### 数据

* 本地数据模拟使用了`mockjs` 具体用法请查看DEMO里的实例

### 跨域问题
* 在服务端请求数据，不存在跨域问题；
* 如果是在渲染页面后再异步请求接口，会存在跨域，该问题正在解决