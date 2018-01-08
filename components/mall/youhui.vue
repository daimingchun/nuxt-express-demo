<template>
    <div class="youhui mallattr-part">
        <div class="showpart" @click="youhuiDlg">
            <div class="tit">优惠</div>
            <ul class="specific">
                <li>
                    <b>商家到店礼</b>
                    <span class="one-text-line">到店即送精美餐具一套到店即送精美餐具一套</span>
                </li>
                <li>
                    <b>商家到店礼</b>
                    <span class="one-text-line">到店即送精美餐具一套到店即送精美餐具一套</span>
                </li>
            </ul>
            <i class="arrow">icon</i>
        </div>
        <!--优惠弹窗-->
        <mt-popup v-model="youhuiVis" position="bottom">
            <div class="dlgtit">商家优惠</div>
            <div class="dlgcon dlgyouhui">
                <ul>
                    <li>
                        <a href="" class="block">
                            <div class="tit"><b>订单返现</b></div>
                            <div class="text">
                                <h5 class="one-text-line">2017年终狂欢季！婚纱摄影每单订就返500元！</h5>
                                <p>预约并成单最高即返现300元预约并成单最高即返现300元预约并成单最高即返现300元</p>
                            </div>
                            <i class="icon">箭头</i>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </mt-popup>
    </div>
</template>
<script>
export default {
    data (){
        return {
            youhuiVis: false
        }
    },
    methods: {
        youhuiDlg(){
            this.youhuiVis = !this.youhuiVis;
        }
    }
}
</script>
<style lang="scss">
.youhui{
    padding: 30px 0 !important;
    .specific{
        li{
            height: 37px; margin-bottom: 13px; font-size: 0;
            b{
                display: inline-block; width: 112px; vertical-align: top; margin-right: 20px; text-align: center; height: 32px; line-height: 32px; font-size: 16px; font-weight: normal; letter-spacing: -3px; color: #ff6363; border: 2px solid #ff6363; border-radius: 4px;
            }
            span{
                display: inline-block; width: 415px; vertical-align: top; height: 37px; line-height: 37px; font-size: 26px; color: #666;
            }
        }
        :last-child{
            margin-bottom: 0;
        }
    }
    .mint-popup-bottom{
        width: 750px; height: auto; max-height: 787px;  overflow-y: scroll;
        .dlgtit{
            width: 750px; text-align: center; height: 120px; line-height: 120px; padding:0 30px; font-size: 30px; color: #333; border-bottom: 1px solid #eee;
        }
        .dlgyouhui{
            ul{
                li{
                    position: relative; padding: 30px; border-bottom: 1px solid #eee;
                    .block{
                        width: 100%; height: 100%; font-size: 0;
                        .tit{
                            display: inline-block; width: 120px; vertical-align: top;
                            b{
                                display: block; width: 100px; text-align: center; height: 40px; line-height: 40px; color:#ff6363; font-weight: normal; border: 2px solid #ff6363; border-radius: 4px;
                            }
                        }
                        .text{
                            display: inline-block; width: 450px; vertical-align: top;
                            h5{
                                line-height: 37px; font-size: 26px; font-weight: normal; color: #ff6363; margin-bototm: 10px;
                            }
                            p{
                                line-height: 30px; font-size: 22px; color: #999;
                            }
                        }
                        .icon{
                            position: absolute; right: 30px; top: 10%;
                        }
                    }
                }
            }
        }
    }
}
</style>


