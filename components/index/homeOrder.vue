<template>
    <section class="hot-order">
        <h2 class="title">{{moduledata.block_name}}</h2>
        <div class="hot-swiper">
            <div class="swiper-container">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(hot,key) in moduledata.data" :key="key">
                            <div class="order-item">
                                <a :href="hot.link" class="cover"></a>
                                <img :src="hot.img_url" alt="">
                                <h6>{{hot.title}}</h6>
                                <p>{{hot.desc}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props:['moduledata'],
        data(){
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 0
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .hot-order{
        margin-top: 20px;
        background-color: #fff;
        padding-bottom: 50px;
    .swiper-slide {
        width: auto!important;
        box-shadow: 0 4px 4px #eee;
    &:nth-child(1){
         margin-left: 10px;
     }
    }
    .order-item{
        position: relative;
        width: 280px;
        height: 417px;
        border-radius: 8px;
        margin-left: 20px;
    img{
        width: 280px;
        height: 280px;
        border-radius: 8px;
    }
    h6{
        padding: 20px 0 10px 20px;
        color: #333;
        font-size: 26px;
    }
    p{
        padding: 0 20px;
        color: #999;
        font-size: 22px;
    }
    }
    }
</style>