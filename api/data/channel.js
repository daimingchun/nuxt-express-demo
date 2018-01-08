import axios from '~/plugins/axios'

/*频道页接口*/ 
const getChannelData = params => {
  return axios.post('http://api.jinzhiqiang.hapn.cc:20080/mobile/get-channel?_of=json&client=wap&channel=hunshasheying', {params: params})
}

export {
    getChannelData
}
