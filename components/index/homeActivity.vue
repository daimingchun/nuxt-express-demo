<template>
    <section class="activity">
        <h2 class="title">{{moduledata.block_name}}</h2>
        <ul class="act-list">
            <li v-for="(activity,key) in moduledata.data" :key="key">
                <img :src="activity.img_url" alt="">
                <h5 class="act-name">{{activity.title}}</h5>
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
    .activity{
        margin-top: 20px;
        background-color: #fff;
    .act-list{
        padding: 0 30px;
    img{
        width: 100%;
        height: 345px;
    }
    .act-name{
        color: #333;
        font-size: 30px;
        padding: 30px 0 40px 0;
    }
    }
    }
</style>