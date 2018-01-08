<template>
    <section  class="main-content">
        <div v-if="IndexData.length" v-for="(item,key) in IndexData" :key="key">
            <!--轮播图-->
            <banner-swiper  v-if="item.block_tmpl == 'banner'" :list="item.data"></banner-swiper>
            <!--导航条-->
            <nav-bar v-if="item.block_tmpl == 'home_nav'" :moduledata="item.data"></nav-bar>
            <!--广告栏一-->
            <div class="banner-wrap"  v-if="item.block_ename == 'home_ad_1'">
                <banner :moduledata="item.data"></banner>
            </div>
            <!--本周精选-->
            <home-week v-if="item.block_tmpl == 'home_week'" :moduledata="item"></home-week>
            <!--广告栏二-->
            <div class="banner-wrap" v-if="item.block_ename == 'home_ad_2'">
             <banner :moduledata="item.data"></banner>
            </div>
            <!--热门订购-->
            <home-order v-if="item.block_tmpl == 'home_order'" :moduledata="item"></home-order>
            <!--活动-->
            <home-activity v-if="item.block_tmpl == 'home_activity'" :moduledata="item"></home-activity>
            <!--套系-->
            <guess v-if="item.block_tmpl == 'guess'" :moduledata="item"></guess>
            <!--免费索票-->
            <ticket v-if="item.block_tmpl == 'ticket'" :moduledata="item"></ticket>
        </div>
            <bottom-nav></bottom-nav>
    </section>
</template>
<script>
import { getIndexData } from '~/api/data/index'
import BannerSwiper from '~/components/common/bannerSwiper'
import Banner from '~/components/index/banner'
import ProList from '~/components/index/productlist'
import NavBar from '~/components/index/navBar'
import HomeWeek from '~/components/index/homeWeek'
import HomeOrder from '~/components/index/homeOrder'
import HomeActivity from '~/components/index/homeActivity'
import Guess from '~/components/index/guess'
import Ticket from '~/components/index/ticket'
import BottomNav from '~/components/index/bottomNav'

export default {
  components: {
      BannerSwiper,
      Banner,
      ProList,
      NavBar,
      HomeWeek,
      HomeOrder,
      HomeActivity,
      Guess,
      Ticket,
      BottomNav
  },
    async asyncData () {
        let { data } = await getIndexData()
        return { IndexData : data.data }
    },
  data(){
      return {
          title: '婚芭莎首页',
          gussList: [ '全部' ],
          shareData: {
              title: '这是title',
              content: '这是描述',
              shareImg: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3001304778,4021565056&fm=96'
          }
      }
  },
  methods:{
      indexHeader(){
          this.$store.commit('indexHeader', true)
      }
  },
  mounted: function () {
      this.indexHeader();
  }
}

</script>

<style lang="scss">
.main-content{
    padding-bottom: 100px;
}
.banner-wrap{
    background-color: #fff;
    padding: 0 30px;
}
h2.title{
    padding: 50px 0 40px 0;
    text-align: center;
    color: #333;
    font-size: 30px;
}
.cover{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

</style>
