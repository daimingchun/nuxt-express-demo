import express from 'express'
import { Nuxt, Builder } from 'nuxt'
//import api from './api'
const app = express()

let config = require('../nuxt.config.js')

const host = '127.0.0.1'
const port = 9999

console.log('进入server目录并打印环境变量', host, port)

app.set('port', port)

// Import API Routes
//app.use('/api', api)

// Import and Set Nuxt.js options

config.dev = !(config.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port)

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
