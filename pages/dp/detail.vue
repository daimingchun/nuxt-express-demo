<template>
  <div class="dpdetail">
    <dp-detail></dp-detail>
    <div class="box comment">
      <h3>评论&nbsp;0</h3>
      <ul>
        <li class="f-clear first">
          <img class="cuser-img" :src="imgurl" alt="">
          <input type="text" class="text" placeholder="谢谢你哦，长得这么好看还来给我评论">
        </li>
        <li class="f-clear">
          <img class="cuser-img" :src="imgurl" alt="">
          <div class="cuser-info">
            <h4><span class="cuser-name">用户名</span> <span class="cuser-time float-right">12:20</span></h4>
            <p class="text">
              谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论
            </p>
          </div>
        </li>
        <li class="f-clear">
          <img class="cuser-img" :src="imgurl" alt="">
          <div class="cuser-info">
            <h4><span class="cuser-name">用户名</span> <span class="cuser-time float-right">12:20</span></h4>
            <p class="text">
              谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论谢谢你哦，长得这么好看还来给我评论
            </p>
          </div>
        </li>
      </ul>
    </div>
    <img-swiper :list="list" :show="isShow" :current='index'></img-swiper>
    <div class="bottom-btn">
        <div class="left" @click="dianzan"><span class="hand" ></span>224</div><div class="right" @click="dianzan"><span></span> 评论</div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import dpDetail from '~/components/dp/_detail'
import ImgSwiper from '~/components/ImgSwiper';
export default {
  components:{
    ImgSwiper,
    dpDetail
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
      alert(1)
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
.dp-icons {
    display: inline-block;
    background-image: url('~/static/images/common/dp-icons.png');
    background-size:cover;
    background-repeat: no-repeat;
}

.dpdetail {
  background-color: #f5f8fa;
  font-size: 28px;
  padding-bottom:98px;
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
  .comment {
    margin-top: 20px;
    h3 {
      font-size: 36px;
      margin-bottom: 40px;
      font-weight: normal;
    }
    .cuser-img {
      vertical-align: middle;
      margin-right: 20px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
    li.first{
      .text {
            font-size: 24px;
            color: #999;
            display: inline-block;
            width: 610px;
            height: 60px;
            line-height: 60px;
            background-color: #f5f8fa;
            border-radius: 30px;
            text-indent: 20px;
      }
    }
    li {
      margin-top: 40px;
      .cuser-info {
        float:right;
        width:610px;
        h4 {
          font-weight: normal;
          font-size: 24px;
          color: #666;
          margin-bottom:10px;
          .float-right{
            float: right;
          }
        }
        .text{
          font-size: 26px;
          color:#333;
          padding-bottom: 40px;
          border-bottom: 1px solid #f5f5f5;
        }
      }
    }
  }
  .bottom-btn{
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width:750px;
    height: 98px;
    text-align: center;
    font-size: 0;
    padding:30px 0;
    border-top:1px solid #f5f5f5;
    background-color: #fff;
    div{
      display: inline-block;
      font-size: 28px;
      width:50%;
      height:38px;
      span{
        vertical-align: text-bottom;
        margin-right: 21px; 
        width:38px;
        height:38px;   
        @extend .dp-icons;
      }
    }
    .right{
      span{
        background-position-x: 31%;
      }
      border-left:1px solid #ccc;
    }
    .left{
      span{
        background-position-x: 0;
      }
      border-right:1px solid #ccc;
    }
  }
}
</style>


