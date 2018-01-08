<template>
    <div class="navwap whitebg">
        <ul class="nav row" v-if="moduledata.data" :data-columns="moduledata.data.length">
            <li v-for="(item,index) in moduledata.data" :key="index">
                <a :href="item.link" class="block">
                    <img :src="item.img_url" alt="">
                    <span>{{item.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['moduledata']
}
</script>

<style lang="scss">
.mb20{
    margin-bottom: 20px;
}
.navwap{
    width: 750px; height: 187px; padding-top: 40px;
    .nav{
        width: 750px; height: 90px;
        li{
            text-align: center; color:#666;
            .block{
                display: block;
                img{
                    width: 90px; height: 90px;
                }
                span{
                    display: block; text-align: center; color: #666; font-size:26px; line-height: 37px;
                }
            }
        }
    }
}
</style>