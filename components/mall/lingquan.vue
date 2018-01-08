<template>
    <div class="lingquan mallattr-part">
        <div class="showpart" @click="lingquanDlg">
            <a href="" class="block"></a>
            <div class="tit">领券</div>
            <p class="specific one-text-line">
                <span class="quan"><b></b><em>满1500减200</em><b></b></span>
                <span class="quan"><b></b><em>满100减20</em><b></b></span>
                <span class="quan"><b></b><em>满12300减2000</em><b></b></span>
            </p>
            <i class="arrow">icon</i>
        </div>
        <!--领券弹窗-->
        <mt-popup v-model="lingquanVis" position="bottom">
            <div class="dlgtit">领券</div>
            <div class="dlgcon dlgquan">
                <ul>
                    <li>
                        <h5>婚博会狂欢购</h5>
                        <div class="quancon pink">
                            <div class="left">
                                <p><b>300</b>元</p>
                                <span>金卡会员专享</span>
                            </div>
                            <div class="center">
                                <h5>订单满20000元可用</h5>
                                <p>兑换之日起20天有效</p>
                            </div>
                            <div class="right">
                                <a href="" class="lingqu">免费领取</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h5>婚博会狂欢购</h5>
                        <div class="quancon orange">
                            <div class="left">
                                <p><b>300</b>元</p>
                            </div>
                            <div class="center">
                                <h5>订单满20000元可用</h5>
                                <p>兑换之日起20天有效</p>
                            </div>
                            <div class="right">
                                <a href="" class="lingqu">免费领取</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h5>婚博会狂欢购</h5>
                        <div class="quancon gray">
                            <div class="left">
                                <p><b>300</b>元</p>
                                <span>金卡会员专享</span>
                            </div>
                            <div class="center">
                                <h5>订单满20000元可用</h5>
                                <p>兑换之日起20天有效</p>
                            </div>
                            <div class="right">
                                <a href="" class="lingqu">免费领取</a>
                            </div>
                        </div>
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
            lingquanVis: false
        }
    },
    methods: {
        lingquanDlg(){
            this.lingquanVis = !this.lingquanVis;
        }
    }
}
</script>
<style lang="scss">
.lingquan{
    .specific{
        .quan{
            display: inline-block; overflow: hidden; height: 40px; line-height: 40px; margin-right:10px; font-size:0;
            b{
                display: inline-block; width: 10px; height: 40px; font-weight: normal; background: url('/static/images/common/quanbgl.png') no-repeat; background-size: 100%; 
            }
            :last-child{
                transform:rotate(180deg);
            }
            em{
                display: inline-block; padding:0 2px; vertical-align: top; height: 40px; line-height: 40px; font-size: 26px; font-style:normal; color: #fff; background-color: #ff6363;
            }
        }
    }
    .mint-popup-bottom{
        width: 750px; height: auto; max-height: 787px;  overflow-y: scroll;
        .dlgtit{
            width: 750px; text-align: center; height: 120px; line-height: 120px; padding:0 30px; font-size: 30px; color: #333; border-bottom: 1px solid #eee;
        }
        .dlgquan{
            ul{
                padding: 0 30px;
                li{
                    h5{
                        height:80px; line-height: 80px; text-align: center; font-size: 28px; color: #666;
                    }
                    .quancon{
                        width: 690px; height: 180px; padding: 30px 30px 30px 40px; color: #fff; font-size: 0; border-radius: 8px;
                        .left{
                            display: inline-block; width: 160px; height: 100%; margin-right: 40px; vertical-align: middle;
                            p{
                                height: 71px; line-height: 71px; margin-bottom: 10px; font-size: 36px;
                                b{
                                    font-size: 60px; margin-right: 6px;
                                }
                            }
                            span{
                                display: block; width: 148px; text-align: center; height: 37px; line-height: 37px; font-size: 20px; letter-spacing:-3px; border: 2px solid #fff; border-radius:17px;
                            }
                        }
                        .center{
                            display: inline-block; width: 270px; margin-right: 20px; vertical-align: middle;
                            h5{
                                height: 40px; line-height: 40px; font-size: 28px; margin-bottom: 10px; color: #fff; font-weight: normal;
                            }
                            p{
                                height: 28px; line-height: 28px; font-size: 20px; 
                            }
                        }
                        .right{
                            display: inline-block; width: 130px; text-align: center; height: 40px; line-height: 42px; vertical-align: middle; background:rgba(255,255,255,0.7); border-radius: 4px; 
                            a{
                                font-size: 20px; color: #ff6363; 
                            }
                        }
                    }
                    .pink{
                        background-image: -webkit-linear-gradient(270deg, #FFA1A1, #FF8282);
                        background-image: -o-linear-gradient(270deg, #FFA1A1, #FF8282);
                        background-image: -moz-linear-gradient(270deg, #FFA1A1, #FF8282);
                        background-image: -ms-linear-gradient(270deg, #FFA1A1, #FF8282);
                        background-image: linear-gradient(270deg, #FFA1A1, #FF8282);
                    }
                    .orange{
                        background-image: -webkit-linear-gradient(270deg, #FFDC93, #FF9376);
                        background-image: -o-linear-gradient(270deg, #FFDC93, #FF9376);
                        background-image: -moz-linear-gradient(270deg, #FFDC93, #FF9376);
                        background-image: -ms-linear-gradient(270deg, #FFDC93, #FF9376);
                        background-image: linear-gradient(270deg, #FFDC93, #FF9376);
                    }
                    .gray{
                        background-image: -webkit-linear-gradient(270deg, #D4D4D4, #DDD);
                        background-image: -o-linear-gradient(270deg, #D4D4D4, #DDD);
                        background-image: -moz-linear-gradient(270deg, #D4D4D4, #DDD);
                        background-image: -ms-linear-gradient(270deg, #D4D4D4, #DDD);
                        background-image: linear-gradient(270deg, #D4D4D4, #DDD);
                        .right a{color:#ccc;}
                    }
                }
            }
        }
    }
}
</style>

