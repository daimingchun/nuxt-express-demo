<template>
    <div class="tehuiyuanjie">
        <div class="showpart" @click="tehuiyuanjieDlg">
            <div class="tit">
                <!-- <b class="tehui"></b> -->
                <b class="hyj1"></b>
                <b class="hyj2"></b>
            </div>
            <p class="specific one-text-line">
                2017年中狂欢季婚纱摄影每单订就返500元2017年中狂欢季婚纱摄影每单订就返500元
            </p>
            <i class="arrow">icon</i>
        </div>
        <!--会员节-->
        <mt-popup v-model="tehuiyuanjieVis" position="bottom">
            <div class="dlgtit">会员节</div>
            <div class="dlgcon dlghuiyuan">
                <ul>
                    <li>
                        <a href="" class="block"><h5 class="one-text-line">2017年终狂欢季！婚纱摄影每单订就返500元！</h5>
                            <p>预约并成单最高即返现300元预约并成单最高即返现300元预约并成单最高即返现300元</p>
                            <i class="icon">箭头</i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="block"><h5 class="one-text-line">2017年终狂欢季！婚纱摄影每单订就返500元！</h5>
                            <p>预约并成单最高即返现300元预约并成单最高即返现300元预约并成单最高即返现300元</p>
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
            tehuiyuanjieVis: false
        }
    },
    methods: {
        tehuiyuanjieDlg(){
            this.tehuiyuanjieVis = !this.tehuiyuanjieVis;
        }
    }
}
</script>

<style lang="scss">
.tehuiyuanjie{
    .showpart{
        width: 750px; height: 80px; padding: 21px 30px; font-size: 0; background-color: #FFE6E5;
        .tit{
            display: inline-block;  vertical-align: top;
            b{
                display: inline-block; vertical-align: top;
            }
            .tehui{
                width: 50px; height: 24px; margin-top: 7px; background: url('/static/images/common/icon_tehui.png') no-repeat; background-size: 100%;
            }
            .hyj1{
                width: 40px; height: 40px; margin-right:14px; background: url('/static/images/common/icon_hyj1.png') no-repeat; background-size: 100%;
            }
            .hyj2{
                width: 71px; height: 27px; margin-top: 5px; background: url('/static/images/common/icon_hyj2.png') no-repeat; background-size: 100%;
            }
        }
        .specific{
            display: inline-block; vertical-align: top; width: 493px; margin-left: 20px; font-size: 26px; color: #ff6363;
        }
        .arrow{
            float: right;
        }
    }
    .mint-popup-bottom{
        width: 750px; height: auto; max-height: 787px;  overflow-y: scroll;
        .dlgtit{
            width: 750px; text-align: center; height: 120px; line-height: 120px; padding:0 30px; font-size: 30px; color: #333; border-bottom: 1px solid #eee;
        }
        .dlghuiyuan{
            ul{
                padding: 0 30px;
                li{
                    padding: 30px 0; border-bottom: 1px solid #eee;
                    .block{
                        position: relative; display: block; width: 100%; height: 100%;
                        h5{
                            width: 550px; line-height: 37px; margin-bottom: 10px; font-size: 26px; color:#ff6363;
                        }
                        p{
                            width: 550px; line-height: 30px; font-size: 22px; color: #999;
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

