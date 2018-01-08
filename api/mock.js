/**
 * @注意：该接口使用本地localhost地址
 */
import '~/mock'	
import axios from 'axios'
/**
 * description 获取商品列表
 * @param  { Object } params 接口参数
 * @return { Object } promise
 */
const getMockGoodsData = params => {
  return axios.get('/product/list', {params: params})
}
const getExpogift = params => {
  return axios.get('/mock/expogift', {params: params})
}
const getMocktestData =  params => {
  return axios.get('/test', {params: params})
}
const getSms =  params => {
  return axios.get('/test', {params: params})
}
export  {
  getMockGoodsData,
  getMocktestData,
  getExpogift,
  getSms
};
