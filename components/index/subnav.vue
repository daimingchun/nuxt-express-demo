<template>
    <div class="subnav whitebg mt20">
        <div class="subplate-tit">
            <h4 class="one-text-line">{{moduledata.block_name}}</h4>
            <a :href="moduledata.more_link" class="more">{{moduledata.more_title || '更多'}}</a>
        </div>
        <ul>
            <li v-for="(items,index) in moduledata.data" :key="index">
                <a :href="items.link" class="block">
                    <div class="img">
                        <img :src="items.img_url" alt="" :class="moduledata.block_tmpl == 'channel_three_row_arc' ? '' : 'shadow' ">
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
.subnav{
    ul{
        overflow: hidden;
        li{
            display: inline-block; width: 210px; margin: 0 0 40px 30px;
            .img{
                width: 210px; height: 210px; border-radius: 10px;
                img{
                    display: block; width: 210px; height: 210px; border-radius: 10px; margin-bottom: 20px;
                }
                .shadow{
                    box-shadow: 0px 0px 25px rgba(82, 81, 81, 0.74) ;
                }
            }
            span{
                display: block; width: 210px; text-align: center; font-size: 28px; color: #666;
            }
        }
    }
}
</style>
