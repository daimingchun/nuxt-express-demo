<template>
    <div class="photo-list">
        <!--<ul class="photo-list-two-col">-->
            <!--<li v-if="list.length" v-for="(item,key) in list" :key="key">-->
                <!--<div class="face">-->
                    <!--<div class="img">-->
                        <!--<img :src="imgurl" alt="">-->
                        <!--<div class="num"><b class="pic-icon"></b>{{item.pic_count}}</div>-->
                    <!--</div>-->
                    <!--<p class="title one-text-line">{{item.album_name}}</p>-->
                    <!--<div class="info">-->
                        <!--<h4 class="store-name one-text-line">商家名称</h4>-->
                        <!--<span class="look-num">-->
                        <!--<b class="look-icon"></b>-->
                        <!--<span>{{item.view_times}}</span>-->
                    <!--</span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</li>-->
        <!--</ul>-->
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
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
//    import { getPhotoData } from '~/api/data/photo.js'
    export default{
        mounted(){
//            getPhotoData({}).then( res =>{
//                this.list = res.data.data.list;
//                this.filter= res.data.data.filter;
//            })
        },
        data(){
            return {
                list:[],
                imgurl: "http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg",
                filter: [],
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
        padding: 20px 20px 30px 20px;
        .photo-name{
            color: #333;
            font-size: 26px;
        }
    }
    }
    }
    }

</style>