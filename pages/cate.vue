<template>
  <section class="container">
    eqweweq
<!--     <ul>
      <li v-if="goods.length" v-for="item in goods">{{item.productTitle}}</li>
    </ul>
 -->  </section>
</template>
<script>
import { getGoodsData } from '~/api'
export default {
  name: 'cate',
  head: {
    title: '这是自定义title'
  },
  asyncData(context){
    // return getGoodsData({
    //   storeId: '10049',
    //   productStatus: '4',
    //   pageNum: '1',
    //   pageSize: '2'
    // }).then(res => {
    //   //console.log(res)
    //   return {goods:res.data.data.list}
    // })
  },
  data(){
    return {
      clientData: []
    }
  },
  mounted () {
    //console.log('这是数据', this.goods)
    getGoodsData({
      storeId: '10049',
      productStatus: '4',
      pageNum: '1',
      pageSize: '2'
    }).then(res => {
      console.log('异步接口测试',res)
      //return {goods:res.data.data.list}
    })
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
