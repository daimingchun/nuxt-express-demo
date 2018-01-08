<template>
    <section class="banner mt20">
        <a :href="moduledata.link">
            <img :src="moduledata.img_url" alt="">
        </a>
    </section>
</template>
<script>
    export default {
        props:['moduledata'],
        data(){
            return {

            }
        }
    }
</script>
<style lang= "scss" scoped>
    .banner{
        background-color: #fff;
        width: 100%;
        img{
            width: 100%;
            height: 172px;
            display: block;
        }
    }
</style>

