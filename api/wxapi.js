import axios from 'axios'

const host = 'https://api.weixin.qq.com/cgi-bin'
export const getAccessToken = params => {
  return axios.get(`${host}'/token'`, {params: params})
}

