import axios from '~/plugins/axios'

export const getExpogiftData = params => {
  return axios.get('/sign/activity/2?_of=json', {params: params})
}

export const getName = params => {
  return '老左'
}