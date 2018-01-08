<template>
   <div class="fourblock whitebg mt20">
       <div class="subplate-tit">
            <h4 class="one-text-line">{{moduledata.block_name}}</h4>
            <a :href="moduledata.more_link" class="more">{{moduledata.more_title}}</a>
        </div>
        <ul>
            <li v-for="(items,index) in moduledata.data" :key="index">
                <a :href="items.link" class="block">
                    <img :src="items.img_url" alt="" :class="moduledata.block_tmpl == 'channel_four_row_title' ? '' : 'shadow'">
                    <span class="one-text-line mt20" v-if="moduledata.block_tmpl !== 'channel_four_row_shadow'">{{items.title}}</span>
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
.fourblock{
    ul{
        font-size:0; padding:0 0 10px 30px;
        li{
            display: inline-block; margin:0 38px 30px 0;
            .block{
                display: block; 
                img{
                    display: block; width: 142px; height: 142px; border-radius: 10px;
                }
                .shadow{
                    box-shadow: 0px 0px 25px rgba(82, 81, 81, 0.74) ;
                }
                span{
                    display: block; width: 142px; font-size: 28px; color: #666;
                }
            }
        }
    }
}
</style>

