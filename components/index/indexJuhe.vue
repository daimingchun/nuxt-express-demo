<template>
    <section class="channel">
       
        <div v-for ="(item,index) in pageData" :key="index">
            <!--轮播图-->
            <!-- <banner-swiper v-if="item.block_tmpl == 'banner'" :list="item.data"></banner-swiper> -->
            <!--导航-->
            <channel-nav v-if="item.block_tmpl == 'channel_nav'" :moduledata="item"></channel-nav>
            <!--限时活动-->
            <time-limit v-if="item.block_tmpl == 'count_down'" :moduledata="item.data"></time-limit>
            <!--行业热门活动-->
            <hot-active v-if="item.block_tmpl == 'channel_two_row'" :moduledata="item.data"></hot-active>
            <!--长条活动-->
            <bar-active v-if="item.block_tmpl == 'count_down_text'" :moduledata="item.data"></bar-active>
            <!--广告位-->
            <banner  v-if="item.block_tmpl == 'channel_adv'" :moduledata="item.data"></banner>

            <!--行业内子导航~1行3个无阴影-->
            <sub-nav v-if="item.block_tmpl == 'channel_three_row_arc'" :moduledata="item"></sub-nav>
            <!--行业内子导航~1行3个有阴影-->
             <sub-nav v-if="item.block_tmpl == 'channel_three_row_arc_shadow'" :moduledata="item"></sub-nav>

            <!--行业内子导航~1行4个无阴影-->
            <four-block v-if="item.block_tmpl == 'channel_four_row_title'" :moduledata="item"></four-block>
            <!--行业内子导航~1行4个只有阴影-->
            <four-block v-if="item.block_tmpl == 'channel_four_row_shadow'" :moduledata="item"></four-block>
            <!--行业内子导航~1行4个阴影+文字-->
            <four-block v-if="item.block_tmpl == 'channel_four_row_shadow_title'" :moduledata="item"></four-block>

            <!--1行2个礼服竖图-->
            <lifu-two v-if="item.block_tmpl == 'channel_two_row_long'" :moduledata="item.data"></lifu-two>
            <!--1行3个礼服竖图-->
            <lifu-three v-if="item.block_tmpl == 'channel_three_row_long'" :moduledata="item"></lifu-three>

            <!--流行婚礼案例-->
            <pop-case v-if="item.block_tmpl == 'channel_one_row'" :moduledata="item"></pop-case>
            <!--商家排名-->
            <!-- <store-bank></store-bank> -->
            <!-- 旅拍目的地 -->
            <lvpai-dest v-if="item.block_tmpl == 'channel_two_row_middle'" :moduledata="item"></lvpai-dest>
            <!-- 攻略分享 -->
            <gong-lve v-if="item.block_tmpl == 'channel_slide'" :moduledata="item"></gong-lve>
            <!-- 旅行选项卡 -->
            <!-- <tour-navbar></tour-navbar> -->
            <!--页面底部走到尽头-->
            <!-- <cometo-end></cometo-end> -->
        </div>
    </section>
</template>

<script>


import bannerSwiper from '~/components/common/bannerSwiper'   // 轮播图
import channelNav from '~/components/index/channelNav'    // 导航
import timeLimit from '~/components/index/timeLimit'  // 限时活动
import hotActive from '~/components/index/hotActive'  // 热门活动
import barActive from '~/components/index/barActive'  // 横条活动
import banner from '~/components/index/banner'    // 广告位
import subNav from '~/components/index/subNav'   // 子导航
import fourBlock from '~/components/index/fourBlock'  // 一行4块
import lifuTwo from '~/components/index/lifuTwo'  // 1行2个礼服
import lifuThree from '~/components/index/lifuThree'  // 1行3个礼服
import popCase from '~/components/index/popCase'   // 流行婚礼案例
import storeBank from '~/components/index/storeBank'   // 商家排名
import cometoEnd from '~/components/common/cometoEnd'   // 走到尽头
import lvpaiDest from '~/components/index/lvpaiDest'   //旅拍目的地    
import gongLve from '~/components/index/gongLve'   //攻略分享
import tourNavbar from '~/components/index/tourNavbar'    //商家案例

export default {
    props:['pageData'],
    components: {
        bannerSwiper, channelNav,timeLimit,hotActive,
        barActive, banner,subNav,fourBlock,lifuTwo,
        lifuThree,popCase,storeBank,cometoEnd,
        lvpaiDest,gongLve,tourNavbar
    },
    head () {
      return {

      }
    },
    data () {
        return {
        
        }
    },
    
    mounted () {
        // getChannelData().then( res => {
        //     console.log(res)
        // })  
    },
    methods:{
        channelsHeader(){
            this.$store.commit('channelsHeader', true)
        }
    }
}
</script>
