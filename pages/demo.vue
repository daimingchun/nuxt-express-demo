<template>
    <div>
          <section class="container">
            <!--app下载条开始-->
            <download-bar ></download-bar>
            <!--app下载条结束-->

            <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
              <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
              </router-link>
              <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <br />
            <h1 class="title" >
              <a href="/vuex">点击我跳转到vuex页面，在返回可以看到header标题的改变</a>
            </h1>
            <br />
            <ul class="users">
              <li>
                <nuxt-link :to="{ name: 'cate'}">
                  使用axios直接获取测试服接口数据
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{ name: 'goods'}">
                  先使用node提供的接口，再获取测试服接口数据
                </nuxt-link>
              </li>
            </ul>
           <mt-button type="primary"  @click='downloadBar'>点击唤起app</mt-button>
            <share :options="shareData" > <mt-button type="primary" slot="target" @click='goShare'>点击分享</mt-button></share>
          </section>
          <!-- <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css"> -->
                <img :src="host+'/n/00805MZo00n70W6T8gto5k8.jpg'" alt="">

    </div>

</template>
<script>
import Vue from 'vue'
import '~/util/cookie'
import DownloadBar from '~/components/common/DownloadBar'
import appCall from '~/plugins/appCall.js';
import { Button } from 'mint-ui';
import aaa from '~/api/test';
import Share from '~/components/common/share';
import { MessageBox } from 'mint-ui';
import BannerSwiper from '~/components/common/BannerSwiper'

Vue.component(Button.name, Button);
export default {
  components: {
    DownloadBar,
    Share,
    BannerSwiper
  },
  head () {
    return {
      title: 'Users',
    }
  },
  mounted(){
    console.log('这是一个赞测试的懂你', 'aaa')
    this.$store.commit('changeHeaderTitle', this.title)
  },
  data(){
      return {
          host:this.$store.state.statichost,
          title: '婚芭莎首页',
          shareData: {
              title: '这是title',
              content: '这是描述',
              shareImg: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3001304778,4021565056&fm=96'
          },
          img: 'http://2.tthunbohui.cn/n/00805AHd00mk0S_RtwKU2w8.jpg',
          banners1: [
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg'
          ],
          banners2: [
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg',
              'http://1.tthunbohui.cn/n/00405M7000n704GbmgKU5Y8.jpg'
          ],
          bannerTabs: [
            '1', '2'
          ],
          navOption: {
              slidesPerView: 'auto',
              pagination: {
                  el: '.swiper-pagination',
              }
          }
      }
  },
  methods:{
      goShare(){
         alert('这是我自定义的事件')
      },
    downloadBar(){
      appCall.active({isdownload:true});
    },
    sub(){
      this.$cookie.set('ZWQ','123')
    }

  }
}

</script>
