import { Router } from 'express'
import axios from 'axios'
import { getGoodsData } from '~/api'
const router = Router()


router.get('/goods', 
  getGoodsData({
    storeId: '10049',
    productStatus: '4',
    pageNum: '1',
    pageSize: '2'
  }), 
  function (req, res, next) {
    console.log('这是周node接口', res)
    res.json(res)
})


export default router
