const envConfig = require('./config')
//const merge = require('webpack-merge')
console.log('进入到nuxt配置项并打印环境变量', process.env.NODE_ENV, envConfig)
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '婚芭莎',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: ' width = device-width，initial-scale = 1，maximum-scale = 1，minimum-scale = 1，user-scalable = no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/mint-ui@1.0.2/lib/style.css'},
      { rel: 'stylesheet', href: '/fonts/iconfont.css'}

    ]
  },
  env: envConfig,
  /*
  ** Global CSS
  */
  plugins: [
  //{src: '~/plugins/element-ui', ssr: true}, 
  { src:  '~/plugins/mint-ui', ssr: true }],
  /*
  ** Add axios globally
  */
  build: {
    loaders: [{
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"    
    }],
    postcss: [ require('postcss-px2rem')({remUnit: 75})],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}

//console.log('合并后的配置',merge(defConfig, envConfig))