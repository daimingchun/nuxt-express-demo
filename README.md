# nuxt-demo

* 基于Vue的SSR技术方案，需要部署在Node服务环境下

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
