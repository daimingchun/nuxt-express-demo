<template>
    <div class="storebank whitebg mt20">
        <div class="subplate-tit">
            <h4>了抗日山赫尔二甲基O__O "…好</h4>
            <a href="" class="more">更多</a>
        </div>
        <ul>
            <li>
                <a href="" class="block">
                    <div class="img">
                        <img src="http://1.tthunbohui.cn/n/00805Nso00n71n1dzgKU5Y8.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="tit">
                            <h5 class="one-text-line">香格里拉酒店香格里拉酒店香格里拉酒店香格里拉酒店</h5>
                            <div class="right">
                                <vf-icons></vf-icons>  
                            </div>
                        </div>
                        <div class="specific">
                            <div class="left">
                                <p>朝阳区</p>
                                <p>23236点评</p>
                            </div>
                            <div class="right">
                                ￥<span>3000</span>/桌<b>起</b>
                            </div>
                        </div>
                        <ul class="activities">
                            <li>
                                <b>会员节</b>
                                <span class="one-text-line">展后3周，全部套系88折！展后3周，全部套系88折！</span>
                            </li>
                            <li>
                                <b>会员节</b>
                                <span class="one-text-line">展后3周，全部套系88折！展后3周，全部套系88折！</span>
                            </li>
                        </ul>
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="block">
                    <div class="img">
                        <img src="http://1.tthunbohui.cn/n/00805Nso00n71n1dzgKU5Y8.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="tit">
                            <h5 class="one-text-line">香格里拉酒店香格里拉酒店香格里拉酒店香格里拉酒店</h5>
                            <div class="right">
                                <vf-icons></vf-icons>  
                            </div>
                        </div>
                        <div class="specific">
                            <div class="left">
                                <p>朝阳区</p>
                                <p>23236点评</p>
                            </div>
                            <div class="right">
                                ￥<span>3000</span>/桌<b>起</b>
                            </div>
                        </div>
                        <ul class="activities">
                            <li>
                                <b>会员节</b>
                                <span class="one-text-line">展后3周，全部套系88折！展后3周，全部套系88折！</span>
                            </li>
                            <li>
                                <b>会员节</b>
                                <span class="one-text-line">展后3周，全部套系88折！展后3周，全部套系88折！</span>
                            </li>
                        </ul>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import vfIcons from '~/components/common/vficons'
export default {
    components: {
        vfIcons
    }
}
</script>


<style lang="scss">
.storebank{
    ul{
        li{
            width: 750px; padding: 40px 30px; border-bottom: 1px solid #eee;
            .block{
                display: block; font-size: 0; 
                .img{
                    display: inline-block; width: 200px; margin-right: 30px;
                    img{
                        display: block; width: 200px; height: 200px;
                    }
                }
                .text{
                    display: inline-block; width: 460px; vertical-align: top;
                    .tit{
                         overflow: hidden; font-size: 0; height: 45px; line-height: 45px;
                        h5{
                            display: inline-block; width: 200px; vertical-align: top; font-size: 32px; color: #333; 
                        }
                        .right{
                            float: right; margin-top: 5px; width: 252px;
                        }
                    }
                    .specific{
                        overflow: hidden; font-size: 0;
                        .left{
                            float: left; width: 255px; font-size: 24px; color: #999;
                            p{
                                margin-top: 10px;
                            }
                        }
                        .right{
                            float: right; margin-top: 30px; width: 200px; text-align: right; font-size: 26px; color: #ff484d;
                            span{
                                font-size: 36px; margin-left: 5px;
                            }
                            b{
                                color: #878787;
                            }
                        }
                    }
                    .activities{
                        li{
                            height: 40px; line-height: 40px; margin-top: 20px; padding:0; font-size: 0; border: none;
                            b{
                                display: inline-block; width: 86px; margin-right: 20px; text-align: center; height: 40px; line-height: 40px; vertical-align: top; font-size: 22px; font-weight: normal; color:#ff6363; border: 2px solid #FF6363; border-radius: 4px;
                            }
                            span{
                                display: inline-block; width: 350px; color: #666; font-size:26px;
                            }
                        }
                    }
                }
            }
            
        }
    }
}
</style>
