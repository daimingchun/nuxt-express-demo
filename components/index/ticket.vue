<template>
    <section class="free-ticket" >
        <div class="title">
            <h3>{{moduledata.block_name}}</h3>
            <p>{{moduledata.data.time.title}}</p>
        </div>
        <ul class="nav-ticket">
            <li>
                <a :href="moduledata.data.main.link">
                    <img :src="moduledata.data.main.img_url" alt="">
                    <p>{{moduledata.data.main.title}}</p>
                </a>
            </li>
            <li v-for="(item,key) in moduledata.data.list" :key="key">
                <a :href="item.link">
                    <img :src="item.img_url" alt="">
                    <p>{{item.title}}</p>
                </a>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        props:['moduledata']
    }
</script>
<style lang="scss">
    .free-ticket{
        margin-top: 20px;
        background-color: #fff;
    .title{
        text-align: center;
        padding: 29px 0;
        border-bottom: 1px solid #eee;
    h3{
        color: #333;
        font-size: 30px;
        margin-bottom: 10px;
    }
    p{
        color: #999;
        font-size: 24px;
    }
    }
    .nav-ticket{
        overflow: hidden;
        padding: 40px 0 9px 0;
    li{
        float: left;
        width: 150px;
        margin: 0 0 31px 24px;
        text-align: center;
    a{
        display: block;
        color: #666;
        font-size:18px;
    }
    img{
        width: 40px;
        height: 38px;
    }
    p{
        margin-top: 10px;
    }
    &:nth-child(1){
         margin: 34px 37px 0 30px;
         height: 116px;
    img{
        width: 66px;
        height: 66px;
    }
    p{
        font-size: 22px;
    }
    }
    }
    }
    }
</style>