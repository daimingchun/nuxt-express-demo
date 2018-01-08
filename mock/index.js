import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Goods } from './data/goods'
import { Tpl } from './data/expogift'
let _Goods = Goods
let _Tpl = Tpl
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
import  testData  from './data/test'
let _testData = testData;
mock.onGet('/test').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        data: _testData,
        message: 'success'
      }]);
    }, 100);
  })
})

mock.onGet('/mock/expogift').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        data: _Tpl,
        message: 'success'
      }]);
    }, 100);
  })
})

mock.onGet('/mock/getSms').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        data: _Tpl,
        message: 'success'
      }]);
    }, 100);
  })
})


