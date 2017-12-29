import axios from '~/plugins/axios'
import MockAdapter from 'axios-mock-adapter'
import { Goods } from './data/goods'

console.log('进入mockjs')

let _Goods = Goods

let mock = new MockAdapter(axios)

mock.onGet('/product/list').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        data: _Goods,
        message: 'success'
      }]);
    }, 100);
  })
})



