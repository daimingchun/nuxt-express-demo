import axios from '~/plugins/axios'

/**
 * description 获取商品列表
 * @param  { Object } params 接口参数
 * @return { Object } promise
 */
export const getGoodsData = params => {
  return axios.get('/product/list', {params: params})
}


