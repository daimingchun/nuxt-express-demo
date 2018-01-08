// console.log('进入api文件222==============')
// console.log('是否需要使用Mock：', process.env.MOCK)
// console.log('============== End')
/**
 * @注意：该接口与dev.config里的Host对应
 */
import axios from '~/plugins/axios'
/**
 * description 获取商品列表
 * @param  { Object } params 接口参数
 * @return { Object } promise
 */
// export const getGoodsData = params => {
//   return axios.get('/product/list', {params: params})
// }
const getGoodsData = params => {
  return axios.get('/mall/top/top-list/1?_of=json', {params: params})
}

/**
 * description 获取排行榜列表
 * @param { object} params  接口参数
 * @return { object } promise
 */
const getLeaderData = params => {
  return axios.get('http://api.luojianglai.hapn.cc/mall/top/top-list?id=2&_of=json', {params: params})    // 服务端渲染用这个
  // return axios.get('/api/mall/top/top-list?id=2&_of=json', {params: params})    // 客户端渲染用这个
}

const getSms = params => {
  return axios.get('http://bj.jinghuanhuan.hapn.cc/api/accounts/n2016/_sendsmsvcode', {params: params})
}


/*签到接口 稍候整理*/ 
const getExpogiftData = params => {
  return axios.get('/api/sign/activity/2?_of=json', {params: params})
}
const getExpogiftSign = params => {
  return axios.post('/api/sign/sign/2?_of=json', {params: params})
}
const getExpogiftLottery = params => {
  return axios.post('/api/sign/lottery/2?_of=json', {params: params})
}
const getkeziForm = params => {
  return axios.post('/api/mall/template/detail/?_d=3', {params: params})
}
const getExpogiftRewards = params => {
  return axios.get('/api/sign/rewards/2?_of=json', {params: params})
}

export {
  getSms,
  getGoodsData,
  getLeaderData,
  getExpogiftData,
  getExpogiftSign,
  getExpogiftLottery,
  getExpogiftRewards,
  getkeziForm
}
