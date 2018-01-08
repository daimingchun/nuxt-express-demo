<template>
    <div class="gonglv-wrap whitebg mt20">
        <div class="subplate-tit">
            <h4>{{moduledata.block_name}}</h4>
            <a :href="moduledata.more_link" class="more">{{moduledata.more_title || '更多'}}</a>
        </div>
        <div class="swiper-wrap">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(items,index) in moduledata.data" :key="index">
                        <a :href="items.link" class="block">
                            <img :src="items.img_url">
                            <p class="word">{{items.title}}</p>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['moduledata'],
    data () {
        return {
            swiperOption: {
                    slidesPerView: 'auto'
                    
                }
        }
    },
    mounted() {
      
    }
  }
</script>
<style lang="scss">
    .gonglv-wrap{
      .swiper-wrap{
        padding:0 0 40px 30px;
      }
      .swiper-slide{
          position: relative;
          width:400px !important;
          height:225px;
          margin-right:30px;
          img{
            display: block;
            width:400px;
            height:225px;
            border-radius:10px;
          }
          .word{
            position: absolute;
            width:340px;
            height: 40px;
            font-size:28px;
            color:rgba(51,51,51,1);
            margin: auto;
            top:0;left:0;bottom:0;right: 0;
            text-align: center;
          }
      }
    }
</style>


