<template>
    <nav class="nav-bar">
        <div v-swiper:navSwiper="navOption">
            <div class="swiper-wrapper" v-if="moduledata.length > 8">
                <div class="swiper-slide">
                    <ul class="nav-list">
                        <li class="five-col" v-if="key <= 4" v-for="(nav,key) in moduledata" :key="key">
                            <a :href="nav.link">
                                <p>
                                    <img :src="nav.img_url" alt="">
                                </p>
                                <h2>{{nav.title}}</h2>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav-list">
                        <li class="five-col" v-if="key > 4 && key <= 9" v-for="(nav,key) in moduledata" :key="key">
                            <a :href="nav.link">
                                <p>
                                    <img :src="nav.img_url" alt="">
                                </p>
                                <h2>{{nav.title}}</h2>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul class="nav-list">
                        <li class="five-col" v-if="key > 9" v-for="(nav,key) in moduledata" :key="key">
                            <a :href="nav.link">
                                <p>
                                    <img :src="nav.img_url" alt="">
                                </p>
                                <h2>{{nav.title}}</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-wrapper" v-else>
                <div class="swiper-slide">
                    <ul class="nav-list">
                        <li class="five-col" v-if="key <= 4" v-for="(nav,key) in moduledata" :key="key">
                            <a :href="nav.link">
                                <p>
                                    <img :src="nav.img_url" alt="">
                                </p>
                                <h2>{{nav.title}}</h2>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav-list">
                        <li class="five-col" v-if="key > 4 && key <= 9" v-for="(nav,key) in moduledata" :key="key">
                            <a :href="nav.link">
                                <p>
                                    <img :src="nav.img_url" alt="">
                                </p>
                                <h2>{{nav.title}}</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-pagination" v-if="moduledata.length > 8"></div>
        </div>
    </nav>
</template>
<script>
    export default {
        props:['moduledata'],
        data(){
            return {
                navOption: {
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .nav-bar{
        background-color: #fff;
        padding: 40px 25px 0 25px;
    .nav-list{
        background-color: #fff;
        width: 100%;
        overflow: hidden;
        margin-bottom: 15px;
    li{
        float: left;
        text-align: center;
        background-color: #fff;
    a{
        display: block;
        overflow: hidden;
        color: #666;
    h2{
        font-size: 22px;
    }
    }
    img{
        width: 90px;
        height: 90px;
    }
    }
    .five-col{
        width: 20%;
    }
    &:nth-child(1){
         margin-bottom: 40px;
     }
    }
    .swiper-container{
        padding-bottom: 50px;
    }

    }
</style>