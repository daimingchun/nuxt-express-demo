<template>
    <div class="banner-swiper">
        <div v-swiper:bannerSwiper="bannerOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(banner,key) in list" :key="key">
                    <a :href="banner.link">
                        <img :src="banner.img_url">
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            list:[Array]
        },
        data(){
            return {
                bannerOption: {
                    autoplay: {
                        delay: 2000
                    },
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                    }
                }
            }
        },
        methods: {

        }
    }
</script>
<style lang= "scss">

    .banner-swiper{
        .swiper-pagination-bullet{
            width: 12px;
            height: 12px;
            background: #fff;
            opacity: 1;
        }
        .swiper-pagination-bullet-active{
            background-color: #FF6363;
        }
        img{
            width: 750px;
            height: 375px;
            display: block;
        }
    }
    .nav-bar{
        .swiper-pagination-bullet{
            width: 8px;
            height: 8px;
            background: #eee;
            opacity: 1;
        }
        .swiper-pagination-bullet-active{
            background-color: #FF6363;
        }
    }
</style>

