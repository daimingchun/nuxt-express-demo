<template>
    <div class="main-content">
       <div class="head-img">
           <img :src="imgurl" alt="">
           <vr-icon></vr-icon>
       </div>
        <div class="con">
            <div class="look-num">浏览 9583</div>
            <h2 class="title">梦幻婚礼</h2>
            <div class="info">
                <dl>
                    <dt>装修风格：<span>现代 简约</span></dt>
                    <dt>装修面积：90㎡</dt>
                    <dt>装修户型：三居室</dt>
                    <dd>拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄简介拍摄</dd>
                </dl>
            </div>
            <div class="con-box" :style="{ maxHeight : height }">
                <p>四十二年前，做了他生命中一个重要的决定，他离开了斯德哥尔摩的公寓，搬到哥特兰岛，在岛的东部，他建造了自己海边的房子</p>
                <img :src="imgurl" alt="">
                <p>四十二年前，做了他生命中一个重要的决定，他离开了斯德哥尔摩的公寓，搬到哥特兰岛，在岛的东部，他建造了自己海边的房子四十二年前，做了他生命中一个重要的决定，他离开了斯德哥尔摩的公寓，搬到哥特兰岛，在岛的东部，他建造了自己海边的房子</p>
                <img :src="imgurl" alt="">
            </div>
            <div class="look-more" :style ="{ display : show }" @click="more()">
                查看更多
            </div>
        </div>
        <div class="other">
            <p class="title">
                婚礼中相关
            </p>
            <ul class="list">
                <li>
                    <a href="" class="cover"></a>
                    <p class="desc">婚宴场地</p>
                    <h3 class="name">花嫁丽舍一还在那是婚礼 <b></b></h3>
                </li>
                <li>
                    <a href="" class="cover"></a>
                    <p class="desc">婚宴场地</p>
                    <h3 class="name">花嫁丽舍一还在那是婚礼 <b></b></h3>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
//    import { getDetailData } from '~/api/data/photo.js'
    import vrIcon from '~/components/common/vrIcon'
    export default{
        components:{
            vrIcon
        },
        mounted(){
//            getDetailData({}).then( res =>{
//                console.log(res);
//            })
            if(document.querySelectorAll('.con-box')[0].clientHeight < 499){
                this.show = 'none';
            }
        },
        data(){
            return {
                height: 500+'px',
                show: 'block',
                list: [],
                imgurl: "http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg",

            }
        },
        methods:{
            more(){
                this.height = 'none';
                this.show = 'none';
            }
        }
    }
</script>
<style lang="scss" scoped>
    .main-content{
        background-color: #F5F8FA;
    }
    .head-img{
        position: relative;
        img{
            width: 750px;
            height: 500px;
            display: block;
        }
    }
    .con{
        padding: 60px 40px 50px 40px;
        position: relative;
        background-color: #fff;
        .look-num{
            min-width:145px;
            height:44px;
            padding: 0 20px;
            line-height: 44px;
            font-size:22px;
            color: #666;
            background-color: #F6F6F6;
            border-radius: 22px;
            position: absolute;
            right: 30px;
            top: 30px;
        }
        .title{
            font-size: 36px;
            color: #333;
            text-align: center;
        }
        .info{
            background-color: #f8f8f8;
            margin: 60px 0 40px 0;
            padding: 0 40px 45px 40px;
            color: #535353;
            font-size: 26px;
            border: 1.2px solid #ccc;
            border-radius: 8px;
            dt{
                margin-top: 30px;
                span{
                    color: #262626;
                }
            }
            dd{
                margin-top: 30px;
                color: #999;
            }
        }
        .con-box{
            overflow: hidden;
            color: #666;
            font-size: 26px;
            img{
                width: 670px;
                height: 486px;
                margin: 30px 0;
            }
            }
        .look-more{
            width:180px;
            height:60px;
            text-align: center;
            line-height: 60px;
            font-size:24px;
            border: 1.2px solid #666;
            border-radius: 30px ;
            margin: 0 auto;
            margin-top: 50px;
        }
    }
    .other{
        background-color: #fff;
        margin-top: 20px;
        padding: 20px 30px 0 30px;
        .title{
            padding: 20px 0;
            color: #333;
            font-size: 30px;
            text-align: center;
        }
        .list{
            li{
                position: relative;
                padding: 30px 0;
                .cover{
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
            }
            .desc{
                color: #666;
                font-size: 26px;
                margin-bottom: 20px;
            }
            .name{
                color: #333;
                font-size: 28px;
                b{
                    float: right;
                    overflow: hidden;
                    zoom: 1;
                    width: 20px;
                    height: 20px;
                    text-indent: -99999px;
                    border-left: 2px solid #999;
                    border-top: 2px solid #999;
                    transform: rotate(135deg);
                    -o-transform: rotate(135deg);
                    -moz-transform: rotate(135deg);
                    -webkit-transform: rotate(135deg);
                }
            }
        }


    }

</style>