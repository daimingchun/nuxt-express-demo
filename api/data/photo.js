import axios from '~/plugins/axios'
/**
 * description 获取相册列表
 * @param  { Object } params 接口参数
 * @return { Object } promise
 */
export const getPhotoData = params => {
    return axios.get('/albumapi/album//wap-list?_of=json', {params: params})
}

export const getDetailData = params => {
    return axios.get('/albumapi/album//wap-detail?_of=json', {params: params})
}
