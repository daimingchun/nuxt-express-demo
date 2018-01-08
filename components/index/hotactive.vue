<template>
    <div class="hotactive whitebg mb20">
        <div class="hotac" v-if="moduledata" v-for="(items,index) in moduledata" :key="index">
            <a :href="items.link" class="block">
                <div class="text">
                    <h4 class="one-text-line">{{items.title}}</h4>
                    <p class="several-text-line">{{items.desc}}</p>
                </div>
                <img :src="items.img_url" alt="">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:['moduledata']
}
</script>

<style lang="scss">
.hotactive{
    overflow: hidden; border-top:1px solid #eee;
    .hotac{
        float:left; width: 374px; height: 179px; padding: 30px; border-bottom:1px solid #eee; border-right:1px solid #eee;
        .text{
            display: inline-block; width: 174px;
            h4{
                font-size: 30px; color: #333; margin-bottom: 10px;
            }
            p{
                font-size: 24px; color: #999; line-height: 33px;
            }
        }
        img{
            width: 100px; height: 100px; margin-left: 38px; border-radius:10px;
        }
    }
    :nth-child(even){
        border-right: none;
    }
}

</style>

