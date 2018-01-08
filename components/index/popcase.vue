<template>
   <div class="popcase whitebg mt20">
        <div class="subplate-tit">
            <h4>{{moduledata.block_name}}</h4>
            <a :href="moduledata.more_link" class="more">{{moduledata.more_title || '更多'}}</a>
        </div>
       <ul>
            <li v-for="(item,index) in moduledata.data" :key="index">
                <a :href="item.link" class="block">
                    <div class="img">
                        <vr-icon v-if="index=='0'"></vr-icon>
                        <img :src="item.img_url" alt="">
                        <span class="count">
                           <b></b><em>{{item.total}}</em>
                       </span>
                    </div>
                    <div class="text">
                        <h6 class="one-text-line">{{item.title}}</h6>
                        <p>
                            <span class="one-text-line">{{item.desc}}</span>
                            <i><b></b><em>{{item.views}}</em></i>
                        </p>
                    </div>
                </a>
            </li>
       </ul>
   </div>
</template>
<script>
import vrIcon from '~/components/common/vrIcon'
export default {
    props:['moduledata'],
    components: {
        vrIcon
    }
}
</script>

<style lang="scss">
.popcase{
    ul{
        width: 750px; padding: 0 30px 18px;
        li{
            margin-bottom: 20px;
            .block{
                display: block;
                .img{
                    position: relative; width: 690px; height: 460px;
                    img{
                        display: block; width: 690px; height: 460px;
                    }
                    .count{
                        position: absolute; right: 20px; bottom: 20px; width: 80px; text-align: center; height: 36px; line-height: 36px; color: #fff; background:rgba(0,0,0,0.6); color: #fff; border-radius: 20px;
                        b{
                            display: inline-block; width: 20px; height: 20px; margin-right: 5px; vertical-align: text-top; margin-top:1px; background:url('/static/images/common/icon_albumcount.png') no-repeat; background-size: 100%;
                        }
                        em{
                            font-size: 20px; font-style: normal;
                        }
                    }

                }
                
                .text{
                    width: 690px; height: 168px; padding:30px 40px; background-color: #f5f8fa;
                    h6{
                        font-size: 32px; color: #333;
                    }
                    p{
                       margin-top: 16px; font-size: 26px; color: #999;
                        span{
                            display: inline-block; width: 500px;
                        }
                        i{
                            float: right;
                            b{
                                display:inline-block; width: 28px; height: 28px; vertical-align: text-top; margin:0 5px 0 0; background:url('/static/images/common/icon_liulan.png') no-repeat; background-size: 100%; font-weight: normal;
                            }
                            em{
                                font-style: normal; font-size: 20px; color: #999;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

