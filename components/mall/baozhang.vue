<template>
    <div class="baozhang mallattr-part">
        <div class="showpart" @click="baozhangDlg">
            <div class="tit">保障</div>
            <p class="specific one-text-line">
                <span><b></b>消费保障</span>
                <span><b></b>如实描述</span>
                <span><b></b>差价返还</span>
            </p>
            <i class="arrow">icon</i>
        </div>
        <!--婚博会保障弹窗-->
        <mt-popup v-model="baozhangVis" position="bottom">
            <div class="dlgtit">婚博会保障</div>
            <div class="dlgcon">
                <dl>
                    <dt><b></b>消费保障</dt>
                    <dd>用户按其选的的服务对象和购买商家和购买，可参加相应的消费者保障服务</dd>
                </dl>
                <dl>
                    <dt><b></b>如实描述</dt>
                    <dd>商家承诺其对商品本身有关信息描述属实，由于商家违反该项承诺而导致利益受损的买家，中国婚博会将会进行先行赔付</dd>
                </dl>
                <dl>
                    <dt><b></b>差价返还</dt>
                    <dd>若会员在中国婚博会官网购买的价格高于其他途径（促销活动除外），中国婚博会将会把差价返还给消费者</dd>
                </dl>
            </div>
        </mt-popup>
    </div>
</template>
<script>
export default {
    data (){
        return {
            baozhangVis: false
        }
    },
    methods: {
        baozhangDlg(){
            this.baozhangVis = !this.baozhangVis;
        }
    }
}
</script>
<style lang="scss">
.baozhang{
    .specific{
        span{
            margin-right: 20px;
            b{
                display: inline-block; width: 8px; height: 8px; vertical-align: top; margin-top:15px; margin-right:12px; background-color: #ff6363; border-radius: 50%;
            }
        }
    }
    .mint-popup-bottom{
        width: 750px; height: auto; max-height: 787px;  overflow-y: scroll;
        .dlgtit{
            width: 750px; text-align: center; height: 120px; line-height: 120px; padding:0 30px; font-size: 30px; color: #333; border-bottom: 1px solid #eee;
        }
        .dlgcon{
            dl{
                margin-top: 30px; padding: 0 30px;
                dt{
                    font-size: 30px; color: #333;
                    b{
                        display: inline-block; width: 10px; height: 10px; background-color: #ff6363; border-radius: 50%; margin-right: 20px;
                    }
                }
                dd{
                    padding: 10px 0 0 30px; line-height: 37px; font-size: 26px; color: #999;
                }
            }
            :last-child{
                margin-bottom: 30px;
            }
        }
    }
}
</style>
