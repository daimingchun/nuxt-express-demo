console.log('进入config目录',process.env.NODE_ENV)

const merge = require('webpack-merge')
//开发环境
const devConfig = require('./dev.config')
//测试环境
const testConfig = require('./test.config')
//预发环境
const preConfig = require('./pre.config')
//生产环境
const prodConfig = require('./prod.config')

let config = devConfig

switch(process.env.NODE_ENV){
	case 'test':
		config = testConfig
		break
	case 'present':
		config = preConfig
		break
	case 'production':
		config = prodConfig
		break
}
module.exports = config
