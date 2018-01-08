<template>
   <div class="twolifu whitebg mt20">
        <ul class="row" data-columns="2">
            <li v-for="(items,index) in moduledata" :key="index">
                <a :href="items.link" class="block">
                    <div class="img">
                        <img :src="items.img_url" alt="">
                        <div class="masklayerbg">
                            <div class="masklayer one-text-line">{{items.title}}</div>
                        </div>
                    </div>
                    <span class="one-text-line">{{items.desc}}</span>
                </a>
            </li>
        </ul>
   </div>
</template>
<script>
export default {
    props: ['moduledata']
}
</script>

<style lang="scss">
.twolifu{
    ul{
        font-size: 0;
        li{
            height:500px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;
            .block{
                display: block; width: 285px; height: 380px; margin:30px 45px 0;
                .img{
                    position: relative;
                    img{
                        display: block; width: 285px; height: 380px;
                    }
                    .masklayerbg{
                        position: absolute; left: 27px; bottom: 30px; width: 231px; text-align: center; height: 70px; padding:5px; background: rgba(255,255,255,0.6); 
                        .masklayer{
                            width: 221px; text-align: center; height: 60px; line-height: 60px; background: rgba(255,255,255,0.9); color: #ff6363; font-size: 24px; font-weight:bold;
                        }
                    }
                }
                span{
                    display: block; width: 285px; height: 90px; line-height: 80px; font-size: 28px; color: #333;
                }
            }
        }
    }
}
</style>

