<template>
    <section id="app" class="container">
        <div class="leader-banner" v-if="data.master_img">
            <img :src="data.master_img" alt="">
        </div>

        <div class="leader-main">
            <mt-navbar id="navbar" v-model="selected">
                <template v-if="data.data.length" v-for="(items,index) in data.data">
                    <mt-tab-item  :id="index" v-if="data.data.length >1 && items.child_top_title">
                        <span>{{items.child_top_title}}</span><b></b>
                    </mt-tab-item>
                </template>
            </mt-navbar>
            <div id="occupy" class="occupy"></div>

            <mt-tab-container v-model="selected">
                <mt-tab-container-item v-if="data.data.length" v-for="(items,index) in data.data" :id="index">
                    <div class="stlist">
                        <template v-if="items.top_type == '1'">
                            <div class="oneitem" v-if="items.list.length" v-for="(item,index) in items.list"> 
                                <b class="jiaobiao">TOP&nbsp;{{index+1}}</b>
                                <div class="storeinfo">
                                    <img class="storelogo" v-if="item.img_id" :src="item.img_id" alt="">
                                    <dl>
                                        <dt class="one-text-line" v-if="item.store_name">{{item.store_name}}</dt>
                                        <dd class="one-text-line">
                                            <span class="vf-icons">
                                                <ins v-if="item.auth.length" v-for="(k,index) in item.auth" :class="stlab(index)"></ins>
                                            </span>
                                        </dd>
                                    </dl>
                                    <a href="" class="intosee">进店逛逛</a>
                                </div>
                                <div class="storeinfobt">
                                    <div class="img">
                                        <img :src="item.img_id" alt="">
                                        <span class="lab">会员：{{item.price}}元起</span>
                                    </div>
                                    <div class="comments">
                                        <p class="several-text-line">
                                            <b>顾问点评：</b>
                                            <span>{{JSON.stringify(item.reviews,4)}}</span>
                                        </p>
                                        <em @click="showToggle($event.target)">展开</em>
                                    </div>
                                </div>
                            </div>
                        </template>
                        
                        <template v-else>
                            <div class="oneitem" v-if="items.list.length" v-for="(item,index) in items.list"> 
                                <b class="jiaobiao">TOP&nbsp;{{index+1}}</b>
                                <div class="storeinfo">
                                    <img class="storelogo" v-if="item.img_id" :src="item.img_id" alt="">
                                    <dl>
                                        <dt class="one-text-line" v-if="item.product_name">{{item.product_name}}</dt>
                                        <dd class="one-text-line">
                                            <span class="storename" v-if="item.store_name">所在{{item.store_name}}</span>
                                        </dd>
                                    </dl>
                                    <a href="" class="intosee">进去看看</a>
                                </div>
                                <div class="storeinfobt">
                                    <div class="img">
                                        <img v-if="item.img_id" :src="item.img_id" alt="">
                                        <span class="lab" v-if="item.price">会员：{{item.price}}元起</span>
                                    </div>
                                    <div class="comments">
                                        <p class="several-text-line">
                                            <b>顾问点评：</b>
                                            <span v-if="item.reviews">{{JSON.stringify(item.reviews,4)}}</span>
                                        </p>
                                        <em @click="showToggle($event.target)">展开</em>
                                    </div>
                                </div>
                            </div>
                        </template>
                    
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="leader-bt">
            <p>根据该分类下的人气排名，榜单内容动态每周更新</p>
            <p>同品牌商家展示人气最高的商品或品牌</p>
        </div>
    </section>
</template>
<script src="/assets/js/jquery3.2.1.min.js"></script>
<script>
    import { getLeaderData } from '~/api'
    export default {
        name: 'page-tab-container',  
        data() {  
            return {
                data:'',
                selected: 0
            };  
        },  
        async asyncData () {
            let { data } = await getLeaderData({})
            return {data: data.data.data}
        },
        head () {
            return {
            }
        },
        methods: {
            stlab: function(index){
                switch(index){
                    case 0:
                        return 'vf-zheng';
                    case 1:
                        return 'vf-quan';
                    case 2:
                        return 'vf-fan';
                    case 3:
                        return 'vf-zhan';
                    case 4:
                        return 'vf-shi';
                    case 5:
                        return 'vf-teyue';
                    case 6:
                        return 'vf-dingzhi';
                }
            },
            showToggle: function(ev){
                if(ev.innerHTML=='收起'){
                    ev.innerHTML = '展开';
                    ev.parentNode.getElementsByTagName('p')[0].className = '';
                }else{
                    ev.innerHTML = "收起";
                    ev.parentNode.getElementsByTagName('p')[0].className = 'zhankai';
                }
            }
        },
        mounted () {
            // ”展开“按钮根据点评内容多少来决定显示隐藏
            function showno(){
                var comments = document.querySelectorAll('.comments');
                for(var i =0; i<comments.length; i++){
                    var comp = comments[i].getElementsByTagName('p')[0],
                        comspan = comments[i].getElementsByTagName('span')[0],
                        comem = comments[i].getElementsByTagName('em')[0];
                    if(comspan.offsetHeight>comp.offsetHeight){
                        comem.style.display="block";
                    }else{
                        comem.style.display="none";
                    }
                }
            }
            // var _this = this;
            // getLeaderData({}).then(res => {
            //     // console.log(res.data.data.data);
            //     _this.data = res.data.data.data;
            // }).then(res=>{
            //     showno()
            // })
            
            var navbar = document.getElementById('navbar'),
                occupy = document.getElementById('occupy'),
                offsetTop = navbar.offsetTop;
                
            window.onscroll = function(){
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if(scrollTop>=offsetTop){
                    navbar.style.position = 'fixed';
                    navbar.style.zIndex = '99';
                    navbar.style.top = '0px';
                    occupy.style.display = 'block';
                }else{
                    navbar.style.position = 'static';
                    occupy.style.display = 'none';
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.leader-banner {
    width: 750px; height: 400px;
    img {
        width: 750px; height: 400px;
    }
}
.leader-main {
    width: 750px;
    overflow: hidden;
    background-color: #f5f8fa;
    .occupy{display: none; width: 750px; height: 80px;}
    .mint-navbar {
        width: 750px !important;
        height: 79px;
        border-bottom: 1px solid #eee;
        .mint-tab-item {
            position: relative;
            padding:0;
            color: #666;
            border:none;
            margin-bottom:0;
            .mint-tab-item-label{
                height: 79px;
                font-size:26px;
                span{
                    display: block;
                    height: 79px;
                    line-height: 79px;
                }
            }
        }
        .is-selected{
            color: #FF6363;
            b{
                position: absolute;
                bottom:10px;
                left: 50%;
                margin-left: -20px;
                width: 40px;
                height: 4px;
                background-color: #ff6363;
                border-radius:2px;
            }
        }
    }
    .mint-tab-container{
        .mint-tab-container-item{
            padding: 0 30px 30px;
            .stlist{
                margin-top: 47px; width: 690px;
                .oneitem{
                    position: relative; margin-top:47px; padding:47px 30px 30px; background-color: #fff;
                    .jiaobiao{
                        position: absolute; top:-25px; left: -10px; width: 154px; text-align: center; height: 50px; line-height: 50px; background:url('/static/images/common/topbang_bg.png') no-repeat; background-size: 100%; font-size: 26px; color: #fff;
                    }
                    .storeinfo{
                        overflow: hidden; height: 74px; margin-bottom: 30px;
                        .storelogo{
                            float: left; width: 74px; height: 74px; margin-right:20px;
                        }
                        dl{
                            float: left; width: 370px; text-align: left;
                            dt{ font-size:28px; color:#333;}
                            dd{
                                line-height: 28px;
                                .storename{
                                    font-size: 22px; color: #999;
                                }         
                            }
                        }
                        .intosee{
                            float: right; margin-top: 6px; width: 155px; height: 64px; line-height: 64px; border:1.5px solid #757575; border-radius: 32px; color: #333; font-size: 26px;
                        }
                    }
                    .storeinfobt{
                        width: 630px; font-size:0;
                        .img{
                            position: relative; font-size: 0; width: 630px; height: 315px;
                            img{
                                display: block; width: 630px; height: 315px;
                            }
                            .lab{
                                position: absolute; left: 0; bottom: 20px; width: 220px; height: 60px; line-height: 60px; font-size: 24px; color: #fff; background-color:rgba(0,0,0,0.5);
                            }
                        }
                        .comments{
                             overflow: hidden; width: 630px; padding: 20px; background-color: #f5f8fa; text-align: left;
                            p{
                                overflow: hidden; height: 96px; line-height: 32px; -webkit-line-clamp: 3;
                                b{
                                    color:#333;
                                }
                                span{
                                    overflow: hidden; margin-bottom: 10px; text-align: left; font-size:24px; color:#666;
                                }
                            }
                            .zhankai{
                                height: auto; -webkit-line-clamp: inherit;
                            }
                            em{
                                display: block; text-align: right; font-weight: normal; font-style: normal; color: #4FA1FF;
                            }
                            .ishide{
                                display: none;
                            }
                        }
                    }
                }
                
            }
        }
    }
}
.leader-bt{
    width: 750px; text-align: center; padding-bottom: 30px; line-height: 32px; font-size:22px; color:#999; background-color: #f5f8fa;
}
</style>
