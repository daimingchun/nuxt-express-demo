import axios from '~/plugins/axios'

/*签到接口*/ 
const getExpogiftData = params => {
  return axios.get('/api/sign/activity?_of=json&activity_id=2', {params: params})
}
const getExpogiftSign = params => {
  return axios.post('/api/sign/sign?_of=json&activity_id=2', {params: params})
}
const getExpogiftLottery = params => {
  return axios.post('/api/sign/lottery?_of=json&activity_id=2', {params: params})
}
const getExpogiftRewards = params => {
  return axios.get('/api/sign/rewards?_of=json', {params: params})
}
const getExpogiftPush = params => {
  return axios.put('/api/sign/activity-push?_of=json&activity_id=2&status=', {params: params})
}
export {
  getExpogiftData,
  getExpogiftSign,
  getExpogiftLottery,
  getExpogiftRewards,
  getExpogiftPush
}
