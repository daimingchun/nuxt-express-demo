import { Router } from 'express'
import axios from 'axios'
const router = Router()

let getGoods = function(params){
  return axios.get('http://shop.dmp.hzjiehun.bid/product/list', {params: params})
}

router.get('/goods', function(req, res, next){

  let data = getGoods({
    storeId: '10049',
    productStatus: '4',
    pageNum: '1',
    pageSize: '2'
  })
  req.goods = data
  next()
}, function (req, res, next) {
    console.log(req.goods)
    //res.json(respons.data.data.list)      
})


export default router
