/**
 * @注意：该接口与dev.config里的Host对应
 */
import axios from '~/plugins/axios'

/**
 * description 活动列表
 * @param { object} params  接口参数
 * @return { object } promise
 */
  const getActiveListData = params => {
    return axios.get('http://api.zhangchao.hapn.cc/commact/list?_of=json', {params: params})
  }
  
  /**
   * description 活动详情页
   * @param { object} params  接口参数
   * @return { object } promise
   */
  const getActiveDetailData = params => {
    return axios.get('http://api.zhangchao.hapn.cc/commact/detail?activity_id=5&_of=json', {params: params})
  }
  
  /**
   * description 活动报名接口
   * @param { object} params  接口参数
   * @return { object } promise
   */
  const getActiveSignUp = params => {
    return axios.post('/api/commact/signup?_of=json', {params: params})
  }

  export {
    getActiveListData,
    getActiveDetailData,
    getActiveSignUp
  }