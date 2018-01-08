<template>
    <div class="threelifu whitebg mt20">
        <div class="subplate-tit">
            <h4 class="one-text-line" :v-model="moduledata.block_name">{{moduledata.block_name}}</h4>
            <a :href="moduledata.more_link" class="more">{{moduledata.more_title || '更多'}}</a>
        </div>
        <ul>
            <li v-for="(items,index) in moduledata.data" :key="index">
                <a :href="items.link" class="block">
                    <div class="img">
                        <img :src="items.img_url" alt="">
                    </div>
                    <span class="one-text-line">{{items.title}}</span>
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
.threelifu{
    ul{
        font-size:0;
        li{
            display: inline-block; margin:0 0 20px 31px;
            .block{
                display: block; width: 208px; color: #666;
                img{
                    display: block; width: 208px; height: 280px; margin-bottom: 20px;
                }
                span{
                     display: block; margin:20px 0; font-size: 28px; color: #666;
                }
            }
        }
    }
}
</style>
