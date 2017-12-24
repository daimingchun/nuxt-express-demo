# nuxt-demo

* 基于Vue的SSR技术方案，需要部署在Node服务环境下
* 该方案采用了nuxtjs框架 官方 https://nuxtjs.org/ 来做服务端渲染

### 2017-12-24
 * 增加vuex用于管理组件之间的状态（数据）
  * 由于是ssr方案，感觉vuex的用处不会太大
 * 增加gulp
  * 使用gulp是用来对一些静态资源进行处理，例如图片压缩、样式添加前缀等等

### 2017-12-22
 * 增加第三方mint-ui 官方 http://mint-ui.github.io/#!/zh-cn
  * 由于vux不能很好的集成到nuxtjs里来，改选mint-ui

### 2017-12-21
* 增加Mockjs 官方 http://mockjs.com/
 * 本地开发模式下，使用mockjs来模拟数据
* 增加环境变量
 * 增加dev(开发)、test(测试)、pre(预发)、prod(生产)
 * 说明：项目打包时根据环境变量加载对应的构建配置, 构建配置放在根目录`/config`
 * 对应的构建命令 `bdev`、`btest`、`bpre`、`bprod` 统一使用 npm run * 运行


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
本地服务端环境命令，运行命令前需要关闭开发环境进程，并构建一次
```
npm run start
```



### 样式处理
Q: 如何引入外部样式?  

A: 公共样式在根目录nuxt.config.js里去配置  

A: 私有样式在模板里使用head对象或import方式加入  


### JS

### 数据

* 本地数据模拟使用了`mockjs` 具体用法请查看DEMO里的实例

* 跨域问题
