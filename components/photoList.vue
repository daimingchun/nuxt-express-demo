<template>
    <div class="photo-list">
        <div class="nav">
            <div class="swiper-container">
                <div v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-if="filter.length" v-for="item in filter">
                            <a href="" class="cur">{{item}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="photo-list-one-col">
            <li class="item">
                <a href="" class="cover"></a>
                <div class="face">
                    <div class="img">
                        <img :src="imgurl" alt="">
                        <div class="num"><b class="pic-icon"></b>18</div>
                        <div class="vr-icon"></div>
                    </div>
                    <div class="info">
                        <h4 class="photo-name one-text-line">相册名称相册名称相啊啊啊啊啊啊相册名称相册名称相啊啊啊啊啊啊</h4>
                        <p class="store-name one-text-line">商家名称</p>
                        <ul class="tag-list">
                            <li>不满意重拍</li>
                            <li>不满意重拍</li>
                            <li>不满意重拍</li>
                            <li>不满意重拍</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="photo-list-two-col">
            <li class="item">
                <a href="" class="cover"></a>
                <div class="face">
                    <div class="img">
                        <img :src="imgurl" alt="" class="shu">
                        <div class="num"><b class="pic-icon"></b>18</div>
                    </div>
                    <div class="info">
                        <h4 class="photo-name one-text-line">圣托里尼</h4>
                        <p class="store-name one-text-line">水晶之恋婚纱摄影全球旅拍</p>
                        <ul class="tag-list">
                            <li>不满意重拍</li>
                            <li>不满意重拍</li>
                            <li>不满意重拍</li>
                            <li>不满意重拍</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>
//    import { getPhotoData } from '~/api/data/photo.js'
    export default{
//        <!--mounted(){-->
//            <!--getPhotoData({}).then( res =>{-->
//                <!--this.list = res.data.data.list;-->
//                <!--this.filter= res.data.data.filter;-->
//                <!--console.log(this.filter);-->
//                <!--console.log(this.list);-->
//
//            <!--})-->
//        <!--},-->
        data(){
            return {
                list:[],
                imgurl: "http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg",
                filter: ['全部'],
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 0
                }
            }
        },
        methods:{

        },

    }
</script>
<style lang="scss" scoped>
    .cover{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .photo-list{
        background-color: #fff;
    }
    .nav{
        position: relative;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        background-color: #fff;
        border-bottom: 1px solid #e8e8e8;
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
    }
    .swiper-slide {
        font-size: 0;
        width: auto!important;
    }

    .pic-icon{
        display: inline-block;
        width: 18px;
        height: 18px;
        margin: 0 10px 0 15px;
        background: url('/static/images/photo/pic-icon.png') no-repeat;
        background-size: cover;
    }
    .photo-list-two-col{
        overflow: hidden;
        padding: 20px 30px;
    .item{
        position: relative;
        width:330px;
        box-shadow: 0 2px 4px #eee;
        border-radius: 8px;
        float: left;
        margin: 0 30px 20px 0;
        &:nth-child(even){
             margin-right: 0;
         }
    .face{
    .img{
            position: relative;
        .num{
            padding-right: 10px;
            height: 36px;
            line-height: 36px;
            background-color: #000;
            color: #fff;
            font-size: 20px;
            opacity: .6;
            border-radius: 18px;
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
        img{
            width: 330px;
            height: 330px;
            display: block;
            border-radius: 8px 8px 0 0;
        }
        img.shu{
            height: 426px;
        }
    }
    .info{
        text-align: center;
        overflow: hidden;
        background-color: #fff;
        height: 255px;
        padding: 20px 20px 30px 20px;
        .photo-name{
            color: #333;
            font-size: 26px;
        }
        .store-name{
            margin-top: 10px;
            color: #999;
            font-size: 20px;
        }
        .tag-list{
            padding-top: 30px;
            overflow: hidden;
            li{
                color: #666;
                font-size: 18px;
                text-align: center;
                float: left;
                width:140px;
                height:40px;
                margin: 0 10px 10px 0;
                line-height: 40px;
                background-color: #F6F6F6;
                border-radius: 20px;
                &:nth-child(even){
                    margin-right: 0;
                 }
            }
        }

    }
    }
    }
    }
    .photo-list-one-col{
        overflow: hidden;
        padding: 20px 30px;
    .item{
        position: relative;
        width:690px;
        background-color: #F5F8FA ;
        border-radius: 8px;
        margin: 0 auto;
        margin-bottom: 20px;
    .face{
    .img{
        position: relative;
    .num{
        padding-right: 10px;
        height: 36px;
        line-height: 36px;
        background-color: #000;
        color: #fff;
        font-size: 20px;
        opacity: .6;
        border-radius: 18px;
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
    .vr-icon{
        width: 140px;
        height: 71px;
        background: url('/static/images/common/vr-icon.png') no-repeat;
        background-size: cover;
        position: absolute;
        top: 195px;
        left: 275px;
    }
    }
    img{
        width: 690px;
        height: 460px;
        display: block;
        border-radius: 8px 8px 0 0;
    }
    .info{
        overflow: hidden;
        padding: 30px 40px 40px 40px;
        color: #999;
        .photo-name{
            color: #333;
            font-size: 32px;
        }
        .store-name{
            margin: 16px 0 20px 0;
            font-size: 26px;
        }
        .tag-list{
            overflow: hidden;
            li{
                color: #666;
                float: left;
                width: 140px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                border: 1.2px solid #eee;
                border-radius: 20px;
                margin-right: 10px;
                &:last-child{
                    margin-right: 0;
                 }
            }
        }
    }
    }
    }
    }
</style>