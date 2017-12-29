<template>
  <section class="container">
    {{title}}
    <ul>
      <li v-for="item in goods.data">{{item.nickName}}</li>
    </ul>
<!--     <ul>
      <li v-if="goods.length" v-for="item in goods">{{item.productTitle}}</li>
    </ul>
 -->  </section>
</template>
<script>
import { getGoodsData } from '~/api'
//import logger from '~/plugins/logs'
export default {
  name: 'cate',
  head: {
    title: '这是自定义title'
  },
  async asyncData(context){
    console.log(context)
    //logger.error('啊，这个地方错误了')    // return getGoodsData({
    //   storeId: '10049',
    //   productStatus: '4',
    //   pageNum: '1',
    //   pageSize: '2'
    // }).then(res => {
    //   //console.log(res)
    //   return {goods:res.data.data.list}
    // })
    const { data } = await getGoodsData({
      storeId: '10049',
      productStatus: '4',
      pageNum: '1',
      pageSize: '2'
    })
    return {goods: data}
  },
  data(){
    return {
      title: 'async',      
      clientData: []
    }
  },
  mounted () {
    //console.log('这是数据', this.goods)
    var goods = async function (){
      var { data } = await getGoodsData({
        storeId: '10049',
        productStatus: '4',
        pageNum: '1',
        pageSize: '2'
      })
      console.log(' 这是一个对象 ',data)
      return { data }
    }

    // var goodsData = goods().then(res=> {
    //   console.log('我在获取这个对象',res)
    //   return res.data
    // })
    // console.log('这是测试的', goodsData)
    
  }
}
</script>

<style lang="scss">
.goods-mod {
  .goods-item {
    padding: 5px;
  }
}
</style>
