
import axios from '~/plugins/axios'


const getIndexData = params => {
    return axios.post('http://api.jinzhiqiang.hapn.cc/mobile/get-channel?_of=json&client=wap', {params: params})
}

export {
    getIndexData
}
