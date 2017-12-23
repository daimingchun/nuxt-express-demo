// console.log('进入api文件==============')
// console.log('是否需要使用Mock：', process.env.MOCK)
// console.log('============== End')
//import '~/mock'	
import axios from '~/plugins/axios'
/**
 * description 获取商品列表
 * @param  { Object } params 接口参数
 * @return { Object } promise
 */
export const getGoodsData = params => {
  return axios.get('/product/list', {params: params})
}


