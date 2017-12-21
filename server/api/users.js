import { Router } from 'express'
import axios from 'axios'
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})
let getGoods = function(params){
  return axios.get('http://shop.dmp.hzjiehun.bid/product/list', {params: params})
}

router.get('/goods', function (req, res, next) {

    let ddd = getGoods({
      storeId: '10049',
      productStatus: '4',
      pageNum: '1',
      pageSize: '2'
    }).then(respons => {
      res.json(respons.data.data.list)   
    })    
})


export default router
