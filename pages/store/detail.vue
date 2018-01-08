<template>
    <div class="store-detail">
        <div class="head-img">
            <img :src="imgurl" alt="" class="head-bg">
            <img :src="logo" alt="" class="logo">
        </div>
        <div class="store-info">
            <h3 class="store-name one-text-line">花嫁丽舍一站式婚礼会所（朝阳店）</h3>
            <div class="desk-count">
                <vf-icons></vf-icons> <span>10-36桌</span>
            </div>
            <p class="desk-price">¥2000-5000/桌</p>
            <div class="address">
                <p>北京市丰台区马家楼东区19号楼</p>
                <a href="tel:10010" class="icon" ></a>
            </div>
        </div>
        <div class="mallattr whitebg">
            <te-hui></te-hui>
            <bang-dan></bang-dan>
            <you-hui></you-hui>
            <lingquan></lingquan>
        </div>
        <div class="menu">
            <p class="title">菜单</p>
            <ul class="list">
                <li>
                    <router-link to="/store/menu" class="cover"></router-link>
                    <p class="name">缘定一生</p>
                    <h6 class="desk">
                        <span class="price">¥3999/桌</span>
                        <b class="icon"></b>
                    </h6>
                </li>
            </ul>
        </div>
        <div class="product-list">
            <p class="title">套系</p>
            <product-list :listData="listData1"></product-list>
            <a href="" class="all">全部套系 35</a>
        </div>
        <div class="photo">
            <p class="title">相册</p>
            <photo-two></photo-two>
            <a href="" class="all">全部相册 9</a>
        </div>
        <div class="hunli-pro">
            <p class="title">婚礼案例</p>
            <photo-one></photo-one>
            <a href="" class="all">全部案例 35</a>
        </div>
        <div class="store-msg">
            <p class="title">商家介绍</p>
            <dl class="info-list">
                <dd>商家介绍，巡回所得中国传统建筑构架，甲乙设计师多年藏品的装饰，与院内挂牌保护的顾书记安，形成了视觉和文化思想层面的反差</dd>
                <dt><span class="action">活动</span>展后3周，全部套系88折!</dt>
                <dt><span class="action">活动</span>展后3周，全部套系88折!</dt>
            </dl>
        </div>
    </div>
</template>
<script>
    import VfIcons from '~/components/common/vficons'
    import PhotoOne from '~/components/photo/oneCol'
    import PhotoTwo from '~/components/photo/twoCol'
    import ProductList from '~/components/index/productlist'
    import TeHui from '~/components/mall/tehuiyuanjie'
    import BangDan from '~/components/mall/bangdan'
    import YouHui from '~/components/mall/youhui'
    import LingQuan from '~/components/mall/lingquan'
    export default{
        components: {
            VfIcons,
            PhotoOne,
            PhotoTwo,
            ProductList,
            TeHui,
            BangDan,
            YouHui,
            LingQuan
        },
        data(){
            return {
                imgurl: "http://2.tthunbohui.cn/n/00405MoJ00n40t9490to5l8-c750x462-1d684a.jpg",
                logo:'http://3.tthunbohui.cn/n/00401TZ2007p16xdlwtM7kc-c160x160-111723.png',
                listData1 : [
                    {
                        title: "推荐",
                        list: [
                            {
                                title: "套系名称",
                                link: "http://admin.jinzhiqiang.hapn.cc:",
                                desc: "商家名城名称",
                                img_url: "http://1.tthunbohui.cn/n/00405zHw00mf2jWB10cw5O8.jpg",
                                price: "价格面议"
                            },
                            {
                                title: "套系名称",
                                link: "http://admin.jinzhiqiang.hapn.cc:",
                                desc: "套系名称套系名称",
                                img_url: "http://1.tthunbohui.cn/n/00405zHw00mf2jWB10cw5O8.jpg",
                                price: "¥188"
                            }
                        ]
                    }
                ]
            }
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
.vficons{
    font-size: 0;
}
.all{
    display: block;
    margin: 28px auto;
    padding: 0 20px;
    width: 200px;
    height: 44px;
    line-height: 44px;
    color: #666;
    font-size: 22px;
    text-align: center;
    border: 1.2px solid #666;
    border-radius: 30px;
}
.title{
    background-color: #fff;
    padding: 30px;
    color: #333;
    font-size: 32px;
}
.head-img{
    width: 100%;
    height: 330px;
    position: relative;
    img{
        display: block;
    }
    .head-bg{
        width: 100%;
        height: 330px;
    }
    .logo{
        width: 130px;
        height: 130px;
        position: absolute;
        left: 30px;
        bottom: -40px;
        box-shadow: 0 0 0.3rem #333;
    }
}
.store-info{
    background-color: #fff;
    padding: 70px 30px 0 30px;
    .store-name{
        color: #333;
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    .desk-count{
        color: #999;
        font-size: 24px;
        span{
            vertical-align: 3px;
        }
    }
    .desk-price{
        color: #262626;
        font-size: 28px;
        padding: 20px 0 40px 0;
    }
    .address{
        padding: 30px 0;
        border-top: 1px solid #eee;
        position: relative;
        color: #666;
        font-size: 28px;
        .icon{
            width: 40px;
            height: 40px;
            background: url('/static/images/store/icon_phone.png') no-repeat;
            background-size: 100%;
            position: absolute;
            top: 30px;
            right: 30px;
        }
    }
}
.menu{
    background-color: #fff;
    margin-top: 20px;
    .list{
        padding: 0 30px;
        li{
            position: relative;
            overflow: hidden;
            padding: 40px 0;
            border-bottom: 1px solid #eee;
            .cover{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            &:last-child{
                border-bottom: none;
             }
             .name{
                 float: left;
                 color: #666;
                 font-size: 28px;
             }
             .desk{
                 float: right;
                 color: #FC4A51;
                 font-size: 30px;
                 font-weight: normal;
                 .icon{
                     display: inline-block;
                     width: 20px;
                     height: 20px;
                     margin: 0 10px;
                     overflow: hidden;
                     zoom: 1;
                     border-left: 2px solid #999;
                     border-top: 2px solid #999;
                     transform: rotate(135deg);
                     -o-transform: rotate(135deg);
                     -moz-transform: rotate(135deg);
                     -webkit-transform: rotate(135deg);
                 }
             }
        }
    }
}
.photo,.hunli-pro,.store-msg,.product-list{
    overflow: hidden;
    margin-top: 20px;
    background-color: #fff;
}
.store-msg dl{
    padding: 0 30px 40px 30px;
    color: #666;
    dd{
        font-size: 28px;
    }
    dt{
        font-size: 24px;
        margin-top: 20px;
        .action{
            background-color: #FF6363;
            display: inline-block;
            width:64px;
            height:40px;
            margin-right: 20px;
            line-height: 40px;
            text-align: center;
            border-radius: 4px ;
            color: #fff;
            font-size: 22px;
        }
    }
}
</style>