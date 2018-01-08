<template>
    <div class="prodetail">
        <div class="bannerwrap whitebg">
            <div class="img">
                <vr-icon></vr-icon>
                <img class="vertical" src="http://1.tthunbohui.cn/n/00805Nso00n71n1dzgKU5Y8.jpg" alt="">
            </div>
            <div class="bt">
                <h5>全新《MOON》系列限量预售全新《MOON》系列限量预售全新《MOON》系列限量预售全新《MOON》系列限量预售全新《MOON》系列限量预售全新《MOON》系列限量预售</h5>
                <p class="subtit several-text-line">核心团队制作，全程视觉监管，2017全新婚纱礼服全新体验，moon系列！核心团队制作，全程视觉监管，2017全新婚纱礼服全新体验，moon系列！核心团队制作，全程视觉监管，2017全新婚纱礼服全新体验，moon系列！</p>
                <p class="price"><span>￥</span>30008</p>
                <p class="description">
                    <span>运费:10元</span>
                    <span>有效期:2017年12月25日</span>
                </p>
            </div>
        </div>
        <div class="mallattr whitebg">
            <tehui-yuanjie></tehui-yuanjie>
            <bang-dan></bang-dan>
            <gui-ge></gui-ge>
            <you-hui></you-hui>
            <ling-quan></ling-quan>
            <bao-zhang></bao-zhang>
        </div>
       
        <div class="intostore whitebg mt20">
            <div class="img">
                <img src="http://1.tthunbohui.cn/n/00805Nso00n71n1dzgKU5Y8.jpg" alt="">
            </div>
            <div class="info">
                <h5 class="one-text-line">聚焦摄影工作室聚焦摄影工作室</h5>
                <p class="specific"><span>131个商品</span><span>224个相册</span></p>
                <p class="stars">
                    <span class="icon-star float-right"><b style="width:70%;"></b></span>
                </p>
            </div>
            <a href="" class="btn">进入店铺</a>
        </div>

        <div id="target" class="subnav whitebg row" data-columns="2">
            <a href="#taoxi" class="active"><span>套系参数</span><b></b></a>
            <a href="#tuwen"><span>图文详情</span><b></b></a>
        </div>
        <div id="maodian">
            <div id="taoxi" class="params whitebg mt20">
                <span class="occu"></span>
                <div class="paramtit">套系参数</div>
                <ul class="paramcon">
                    <li><p>属性名称：属性内容 属性名称：属性内容 属性名称：属性内容 属性名称：属性内容</p></li>
                    <li><p>属性名称：属性内容 属性名称：属性内容 属性名称：属性内容 属性名称：属性内容</p></li>
                </ul>
            </div>
            <div id="tuwen" class="params whitebg mt20">
                <span class="occu"></span>
                <div class="paramtit">图文详情</div>
                <ul class="paramcon">
                    <li><p>属性名称：属性内容 属性名称：属性内容 属性名称：属性内容 属性名称：属性内容</p><img src="http://1.tthunbohui.cn/n/00805Nso00n71n1dzgKU5Y8.jpg" alt=""></li>
                    <li><p>属性名称：属性内容 属性名称：属性内容 属性名称：属性内容 属性名称：属性内容</p><img src="http://1.tthunbohui.cn/n/00805Nso00n71n1dzgKU5Y8.jpg" alt=""></li>
                </ul>
                <div class="seeall"><a href="">查看全部</a></div>
            </div>
        </div>

        <div class="params more-recommend whitebg mt20">
            <div class="paramtit">更多推荐</div>
            <product-list :listData ="listData1"></product-list>
        </div>
        <mall-btbtn></mall-btbtn>
    </div>
</template>

<script>
import vrIcon from '~/components/common/vrIcon.vue'
import tehuiYuanjie from '~/components/mall/tehuiYuanjie.vue'
import bangDan from '~/components/mall/bangDan.vue'
import guiGe from '~/components/mall/guiGe.vue'
import lingQuan from '~/components/mall/lingQuan.vue'
import baoZhang from '~/components/mall/baoZhang.vue'
import youHui from '~/components/mall/youHui.vue'
import productList from '~/components/index/productlist'
import mallBtbtn from '~/components/mall/mallBtbtn'

export default {
    components:{
        vrIcon,
        tehuiYuanjie,
        bangDan,
        guiGe,
        lingQuan,
        baoZhang,
        youHui,
        productList,
        mallBtbtn
    },
    data () {
        return {
            listData1 :[
                {
                img:'http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c220x220-163094.jpg',
                name:'的说法',
                storename:'3123',
                price:3213
                },
                {
                img:'http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c220x220-163094.jpg',
                name:'的说法',
                storename:'3123',
                price:3213
                },
                {
                img:'http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c220x220-163094.jpg',
                name:'的说法',
                storename:'3123',
                price:3213
                }
            ]
        }
    },
    methods:{
        detailHeader(){
            this.$store.commit('detailHeader', true)
        }
    },
    mounted: function () {
        this.detailHeader();
        /*套系内容和图文详情的锚点效果*/
        var target = document.getElementById('target'),
            targetA = target.getElementsByTagName('a'),
            maodian = document.getElementById('maodian'),
            maodianItem = maodian.children,
            offsetTop = maodian.offsetTop;
            window.onscroll = function(){
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if(scrollTop >= offsetTop){
                    target.style.display = "block";
                }else{
                    target.style.display = "none";
                }
            }
            for(var i=0; i<targetA.length; i++){
                targetA[i].onclick = function(){
                    for(var j=0; j<targetA.length; j++){
                        targetA[j].className = '';
                    }
            //         maodianItem[i-1].getElementsByTagName('span')[0].style.display = "block";
                    this.className = 'active';
                }
            } 
    }
}
</script>

<style lang="scss">
.prodetail{
    position: relative;
    .bannerwrap{
        margin-bottom:20px;
        .img{
            position: relative;
            img{
                display: block; width: 750px; height: 750px;
            }
            .vertical{
                height: 1000px;
            }
        }
        .bt{
            padding: 30px;
            h5{
                margin-bottom: 10px; line-height: 45px; font-size: 32px; color: #333;
            }
            .subtit{
                margin-bottom: 30px; line-height: 37px; font-size: 26px; color: #999;
            }
            .price{
                margin-bottom: 30px; line-height: 42px;  font-size: 40px; font-weight:bold; color: #FC4A51;
                span{
                    font-size: 30px; font-weight: normal;
                }
            }
            .description{
                margin-bottom: 20px; font-size: 22px; color: #999;
                span{
                    margin-right: 30px;
                }
            }
        }
    }
    .intostore{
        width: 750px; height: 180px; padding: 40px 30px; font-size:0;
        .img{
            display: inline-block; width: 100px; height: 100px; margin-right: 30px;
            img{
                display: block; width: 100px; height: 100px;
            }
        }
        .info{
            display: inline-block; width: 350px; vertical-align: top; margin-right: 72px;
            h5{
                height: 38px; line-height: 38px; color: #333; font-size: 28px;
            }
            .specific{
                margin-top: 5px; line-height: 28px; font-size: 20px; color: #999;
                span{
                    margin-right: 20px;
                }
            }
            .icon-star{
                margin-top: 3px; vertical-align: top !important;
            }
        }
        .btn{
            display: inline-block; width: 138px; text-align: center; height: 60px; line-height: 60px; margin-top: 20px; vertical-align: top; font-size: 26px; color: #666; border: 2px solid #666; border-radius: 40px;
        }
    }
    .subnav{
        display: none; position: fixed; top: 0; width: 750px; height: 80px; border-bottom: 1px solid #eee;
        a{
            position: relative; display: block; height: 80px; text-align: center;
            span{
                display: inline-block; height: 80px; line-height: 80px; font-size: 26px; color: #666;
            }
            b{
                position: absolute; bottom: 10px; left: 50%; margin-left: -20px; width: 40px; height: 4px; border-radius: 2px;
            }
        }
        .active{
            span{
                color: #ff6363;
            }
            b{
                background-color: #ff6363;
            }
            
        }
    }
    .params{
        padding-bottom: 30px;
        .occu{display: none; width: 750px; height: 80px;}
        .paramtit{
            width: 750px; height: 100px; line-height: 100px; padding: 0 30px; font-size: 28px; color: #333;
        }
        .paramcon{
            padding: 0 30px;
            li{
                line-height: 50px; 
                p{
                    font-size: 26px; color: #999;
                }
                img{
                    display: block; width: 690px; height: 290px; margin: 30px 0;
                }
            }
        }
        .seeall{
            text-align: center;
            a{
                display: inline-block; width: 163px; text-align: center; height: 44px; line-height: 44px; font-size: 22px; color: #666; border: 2px solid #666; border-radius: 40px;
            }
        }
    }
    .more-recommend{
        margin-bottom: 98px;
        .pro-list{
            padding-top: 0;
        }
    }
}
</style>

