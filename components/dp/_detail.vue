<template>
<div class="detail-item">
     <div class="box f-clear">
        <img class="uimg" :src="imgurl" alt="">
        <div class="content">
          <div class="chuping">
            <h3 class="user"> <span class="uname">用户名</span><span class="dptime">2017/05/09 12:20</span></h3>
            <p class="score"><span  class="status">已到店</span> <span class="icon-star"><b></b></span>  </p>
            <p class="props">
              <span>服务态度：超赞</span>
              <span>服务态度：超赞</span>
              <span>服务态度：超赞</span>
            </p>
            <img-swiper :list="list" :show="isShow" :current="index"></img-swiper>
            
            <div class="text">
              <p>
              婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付                
              </p>
            </div>
            <p class="prdimg" @click="showSwiper">
              <img :src="imgurl" alt="">
              <img :src="imgurl" alt="">
              <img :src="imgurl" alt="">
            </p>
          </div>
          <div class="zhuiping">
            <h3 class="user"> <span class="title">追加评论</span>     <span class="dptime">2017/05/09 12:20</span></h3>
            <p class="score"><span  class="status">已到店</span> <span class="icon-star"><b></b></span>  </p>
            <p class="props">
              <span>服务态度：超赞</span>
              <span>服务态度：超赞</span>
              <span>服务态度：超赞</span>
            </p>
            <div class="text">
              <p>
              婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付婚纱摄影全部定级拉三等奖开发商交付                
              </p>
            </div>
            <p class="prdimg" >
                <img :src="imgurl" alt="">
                <img :src="imgurl" alt="">
                <img :src="imgurl" alt="">
            </p>
            <img-swiper :list="list" :show="isShow" :current="index"></img-swiper>
          </div>
        </div>
    </div>
</div>
 
</template>
<script>
import { MessageBox } from 'mint-ui';
import ImgSwiper from '~/components/ImgSwiper';
export default {
  components:{
    ImgSwiper
  },
  data() {
    let arr = [
      {url:"http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg"},
      {url:"http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg"},
      {url:"http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg"}
      ];
    return {
      list:arr,
      index:1,
      isShow:false,
      imgurl: "http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg"
    };
  },
  methods:{
    showSwiper(){
      this.isShow = true;
    },
    dianzan(){
      MessageBox({
          title: '提示',
          message: '请下载app',
          showCancelButton: true
        }).then(action => {
      });
    }
  }
};
</script>

<style scoped lang="scss" >

.detail-item {
  background-color: #f5f8fa;
  font-size: 28px;
  .box {
    padding: 40px 30px;
    background-color: #fff;
  }
  .user {
    margin-bottom: 10px;
  }
  .uimg {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    // margin-right: 20px;
  }
  .content {
    float: right;
    width: 590px;
    .score {
      .status {
        display: inline-block;
        vertical-align: middle;
        height: 24px;
        line-height: 24px;
        border-right:2px solid #666;
        color:#666;          
        font-size: 24px;
        padding-right: 24px;
        margin-right: 20px;
      }
    }
    .star {
      margin-left: 20px;
    }
    .dptime {
      color: #999;
      font-weight: normal;
      float: right;
    }
    .props {
      color: #999;
      margin: 21px auto 18px;
    }
    .text {
      font-size: 28px;
    }
    .uname {
      color: #333;
      font-size: 26px;
      font-weight: bold;
    }
    .title{
      color:#FF6363;
      font-size: 26px;
      font-weight: bold;
    }
    .chuping{
      padding-bottom: 40px;
    }
    .zhuiping{
      padding-top:42px;
      border-top:1px solid #eee;
    }
    .prdimg {
      font-size: 0;
      img {
        margin-top: 20px;
        width: 180px;
        height: 180px;
        margin-right: 20px;
      }
      img:last-child {
        margin-right: 0px;
      }
    }
  }
}
</style>


