import axios from 'axios'

export const getAccessToken = params => {
  return axios.get('https://api.weixin.qq.com/cgi-bin/token', {params: params})
}
