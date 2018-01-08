<template>
  <section class="container">
    <h1>以下内容来Mock接口</h1>
    <ul>
      <li v-if="goods.length" v-for="item in goods">{{item.nickName}}</li>
    </ul>
    
    <h1>以下内容来自测试服接口</h1>
    <ul>
      <!-- {{goods2}} -->
      <!-- <li v-if="prodcut.length" v-for="item in goods2">
        {{item.productTitle}}
      </li> -->
    </ul>
    <h1>这是我写的测试数据</h1>
    <p>
      {{test}}
    </p>
  </section>
</template>
<script>
//调用接口，注意区分
import { getGoodsData } from '~/api'
// import { getExpogiftData } from '~/api'
import { getMockGoodsData, getExpogift,getMocktestData } from '~/api/mock'
export default {
  name: 'cate',
  head: {
    title: '这是自定义title'
  },
  //  async asyncData () {
  //   // return await getExpogiftData({}).then(res=>{
  //   //  return  {goods2 :res.data.data} 
  //   // })
  //   const {data} = await  getExpogiftData({});
  //    return {goods2 :data} 
  // },
  // asyncData(context){
    // return getGoodsData({
    //   storeId: '10049',
    //   goods2Status: '4',
    //   pageNum: '1',
    //   pageSize: '2'
    // }).then(res => {
    //   console.log(res)
    //   return {goods: res.data.data}
    // })
  // },
  //  async asyncData () {
  //   let { data } = await axios.get('/mall/top/top-list/1?_of=json')
  //   console.log(data)
  //   return { users: data.data }
  // },
  data(){
    // var goods2=[1,2,3],self = this;
    //   getExpogiftData().then(res => {
    //   console.log('测试服接口',res)
    //   self.goods2 = res.data.data;
    // })
    return {
      clientData: [],
      goods: [],
      // goods2: goods2,
      test:''
    }
  },
  mounted () {
    var self = this;
    getMockGoodsData({
      storeId: '10049',
      goods2Status: '4',
      pageNum: '1',
      pageSize: '2'
    }).then(res => {
      console.log('Mock接口',res.data.data)
      self.goods = res.data.data
    })
    getExpogift({}).then(res => {
      console.log('如果未定义',res)
    })
      getMocktestData({
    }).then(res => {
      console.log('test接口',res.data.data)
      self.test = res.data.data
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
