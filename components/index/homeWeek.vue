<template>
    <section class="special-week">
        <h2 class="title">{{moduledata.block_name}}</h2>
        <ul class="week-list row" data-columns="2" >
            <li v-for="(week,key) in moduledata.data" :key="key">
                <a :href="week.link" class="cover"></a>
                <h5 class="one-text-line">{{week.title}}</h5>
                <p>{{week.desc}}</p>
                <img :src="week.img_url" alt="">
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        props:['moduledata']
    }
</script>
<style lang="scss" scoped>
    .special-week{
        margin-top: 20px;
        padding-bottom: 50px;
        background-color: #fff;
    .week-list{
        border-top: 1px solid #eee;
        overflow: hidden;
    li{
        position: relative;
        padding: 26px 0 0 25px;
        height: 220px;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
    &:nth-child(2n){
         border-right: none;
     }
    h5{
        width: 100%;
        color: #333;
        font-size: 30px;
        margin-bottom: 10px;
    }
    p{
        color: #999;
        font-size: 24px;
        width: 175px;
    }
    img{
        width: 180px;
        height: 130px;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    }
    }
    }
</style>