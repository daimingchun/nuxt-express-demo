<template>
  <div class="dplist">
    <div class="tophead">
      <h3>
        店铺评价
        <span class="score">4.6</span>
        <span class="icon-star float-right"><b style="width:80%;"></b></span>
      </h3>
      <div class="tag">
        <span class="on"><b>全部评价</b> 999</span>
        <span><b>有图</b> 999</span>
        <span><b>追加</b> 999</span>
        <span><b>1星</b> 999</span>
      </div>
    </div>
    <ul class="detail"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
      <li v-for="item in list">
        <a href="/dp/detail">
          <dp-detail></dp-detail>      
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import dpDetail from '~/components/dp/_detail'

export default {
  components:{
    dpDetail
  },
  data(){
      return {
        list:[1,2,3]
      }
  },
  methods:{
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.dplist{
  background-color: #F5F8FA;
  .tophead{
    background-color: #fff;
    height: 750px;
    height:202px;
    padding:40px 30px;
    margin-bottom: 20px;
    h3 {
      font-size: 30px;
      color: #333;
    }
    .score{
      margin-left: 30px;
      font-size: 40px;
      color:#FFAD26;
    }
    .float-right{
      margin-top: 14px;
      float:right;
    }
    .tag{
      font-size:0;
      margin-top: 30px;
      span{
        font-size: 24px;
        font-weight: normal;
        color:#666;
        border-radius:30px;
        padding: 8px 20px;
        margin-right: 20px;
        border:1px solid #666;
        &.on{
          color:#ff6363;
          border:1px solid #ff6363;
          
        }
      }
    }
  }
}
  
</style>

