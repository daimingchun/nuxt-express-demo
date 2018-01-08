<template>
    <div class="photo-list">
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
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                imgurl: "http://4.tthunbohui.cn/n/00405nkb00lq1D_YyMi84I8.jpg",
            }
        }
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
        font-weight: 400;
    }
    }
    }
    }
    }
</style>