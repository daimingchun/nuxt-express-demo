<template>
    <section class="guess-like">
        <h2 class="title">
            {{moduledata.block_name}}
        </h2>
        <div class="nav">
            <div class="swiper-container">
                <div v-swiper:gussSwiper="gussOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,key) in gussList" :key="key">
                            <a href="" class="cur">{{item}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pro-list :listData = 'moduledata.data'></pro-list>
    </section>
</template>
<script>
    import ProList from '~/components/index/productlist'
    export default {
        components: {
            ProList
        },
        props:['moduledata'],
        data(){
            return {
                gussList: [ '全部' ],
                gussOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 0
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .guess-like{
        margin-top: 20px;
        background-color: #fff;
    .title{
        padding-bottom: 20px;
    }
    .nav{
        position: relative;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        background-color: #fff;
        height: 80px;
    a{
        background-color: #fff;
        text-align: center;
        color: #FF6363 ;
        display: inline-block;
        font-size: 26px;
        height: 50px;
        margin: 10px 22.5px 0 22.5px;
        border-bottom: 4px solid #ff6363;
        border-radius: 2px;

    }
    .swiper-slide {
        font-size: 0;
        width: auto!important;
    }
    }
    }
</style>