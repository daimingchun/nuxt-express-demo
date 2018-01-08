// import axios from 'axios'

// let options = {}
// // The server-side needs a full url to works
// options.baseURL = `//${process.env.HOST}:${process.env.PORT}`

// console.log('axios配置项', options)

// export default axios.create(options)


import * as axios from 'axios'

let options = {}
// 需要全路径才能工作
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 9999}/api`
}

export default axios.create(options)
