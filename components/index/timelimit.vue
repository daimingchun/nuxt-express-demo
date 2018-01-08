<template>
    <div class="timelimit whitebg mt20" v-if="moduledata">
        <a :href="moduledata[0].link" class="block">
            <dl class="text">
                <dt>
                    <b></b>
                    <span class="one-text-line">{{moduledata[0].title}}</span>
                </dt>
                <dd>
                    <!-- <p>{{moduledata[0].start_time}}</p>
                    <p>{{moduledata[0].end_time}}</p> -->
                    <p class="one-text-line">{{moduledata[0].desc}}</p>
                    <count-down :date="moduledata[0].end_time"></count-down>
                </dd>
            </dl>
            <img :src="moduledata[0].img_url" alt="">
        </a>
    </div>
</template>

<script>
import countDown from '~/components/common/countDown'
export default {
    props: [
        'moduledata',
        'date: [String]'
    ],
    components: {
        countDown
    }
}
</script>

<style lang="scss">
.timelimit{
    overflow: hidden; width: 750px; height: 280px; padding: 40px 30px; font-size: 0;
    .text{
        float: left; width: 460px; margin-right: 30px;
        dt{
            height: 42px; 
            b{
                display: inline-block; width: 40px; height: 40px; margin-right: 20px; vertical-align: top; background: url('/static/images/common/shandian.png') no-repeat; background-size: 100%;
            }
            span{
                overflow: hidden; display: inline-block; width: 400px; color:#333; font-size: 30px; 
            }
        }
        dd{
            padding-top: 20px;
            p{
                color: #999; font-size: 26px;
            }
            .countdown{
                overflow: hidden; padding-top:30px; color: #333;
                span{
                    display: inline-block; width: 44px; text-align: center; height: 44px; line-height: 44px; margin:0 8px; color:#fff; background-color: #333; border-radius: 50%;
                }
                :first-child{
                    margin-left: 0;
                }
                em{
                    font-style: normal; font-size: 18px;
                }
            }
        }
    }
    img{float:left; width: 200px; height: 200px; border-radius: 10px;}
    
}  
</style>

