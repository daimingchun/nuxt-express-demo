<template>
    <div class="baractive whitebg mt20">
        <a :href="items.link" class="block" v-for="(items,index) in moduledata" :key="index">
            <dl class="text">
                <dt>
                    <b></b>
                    <span class="one-text-line">{{items.title}}</span>
                </dt>
                <dd>
                    <p class="one-text-line">{{items.desc}}</p>
                </dd>
            </dl>
            <img :src="items.img_url" alt="">
        </a>
    </div>
</template>

<script>
export default {
    props: ['moduledata']
}
</script>

<style lang="scss">
.baractive{
    .block{
        overflow: hidden; width: 750px; height: 230px; padding: 40px 30px; font-size: 0; border-bottom: 1px solid #eee;
        .text{
            float: left; width: 500px; margin-right: 40px; margin-top: 25px;
            dt{
                height: 42px; 
                b{
                    display: inline-block; width: 40px; height: 40px; margin-right: 20px; vertical-align: top; background: url('/static/images/common/shandian.png') no-repeat; background-size: 100%;
                }
                span{
                    overflow: hidden; display: inline-block; width: 440px; color:#333; font-size: 30px; 
                }
            }
            dd{
                padding-top: 20px;
                p{
                    color: #999; font-size: 26px;
                }
            }
        }
        img{float:left; width: 150px; height: 150px; border-radius: 10px;}
    }
    :last-child{
        border:none;
    }
}
</style>

