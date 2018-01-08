<template>
  <div>
        <ul class="pro-list"  v-for="(item,key) in listData" :key="key">
            <li v-for="(pro,index) in item.list" :key="index">
                <a :href="item.link" class="cover"></a>
                <!--如果需要竖图，则要给.img加class为vertical-->
                <div class="img">
                    <img :src="pro.img_url" alt="">
                </div>
                <h3 class="pro-name">{{pro.title}}</h3>
                <p class="store-name">{{pro.desc}}</p>
                <span class="price">{{pro.price}}</span>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    props:['listData']
}
</script>

<style lang="scss">
    .cover{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .pro-list{
        padding: 0 30px;
        overflow: hidden;
        li{
            position: relative;
            float: left;
            width: 330px;
            height: 507px;
            margin-right: 30px;
            .img{
                width: 330px;
                height: 330px;
                img{
                    width: 330px;
                    height: 330px;
                }
            }
            .vertical{
                height: 440px;
                img{
                    height: 440px;
                }
            }
            &:nth-child(2n){
                margin-right: 0;
             }
             .pro-name{
                 color: #333;
                 font-size: 28px;
                 padding: 12px 0 4px 0;
             }
             .store-name{
                 color: #999;
                 font-size: 24px;
                 margin-bottom: 11px;
             }
             .price{
                 color: #ff6363;
                 font-size: 26px;
             }
        }
    }
</style>


