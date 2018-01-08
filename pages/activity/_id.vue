<template>
    <div class="detail">

        <template v-if="detail.zhuanti_url" >
            <hbh-iframe :name="iframe.name" :id="iframe.id" :src="detail.zhuanti_url" ></hbh-iframe>
        </template>
        
        <template v-else>
            <div class="detail-top">
                <!-- <img src="detail.pic_url" width="750px" height="375px"/> -->
                <img src="http://2.tthunbohui.cn/n/00805Jcd00mQ1naV8wKU5Y8-c750x360-1f5b3e.jpg" width="750px" height="375px"/>
                <div class="countarea">
                    <h2>
                        <em class="line"></em>
                        <template v-if="detail.time_status=='started'">
                            <span>活动还剩</span><countdown :date="detail.date"></countdown>
                        </template>
                        <template v-if="detail.time_status=='not_start'">
                            <span>活动未开始</span>
                        </template>
                        <template v-if="detail.time_status=='end'">
                            <span>活动已结束<countdown :date="0"></countdown></span>
                        </template>
                        <em class="line"></em>
                    </h2>
                </div>             
            </div>

            <div class="line"></div>

            <div class="detail-bottom">
                <h2><span>/</span>活动规则<span>/</span></h2>
                <div class="content">
                    {{detail.explain}}
                </div>             
            </div>
         </template>

        <p class="beizhu" v-if="isIos">本活动与苹果公司无关，最终解释权归婚博会</p>

        <div class="winners" v-if="isWinners" v-on:click="show()">
            <b class="laba"></b>获奖名单：
            <span>李某某获得霸王餐一次</span>
        </div>

        <div v-if="detail.category == 1" class="bottom-btn">
             <span class="left"><b :class="detail.iscollect?'fav':'faved'"></b>收藏</span>
             <template v-if="detail.button.url">
                <a class="right" :href="detail.button.url">
                    {{detail.button.words}}
                </a>
             </template>            
             <span v-else class="right" @click="submit()">
                 {{detail.button.words}}
             </span>
        </div>

        <div class="fixed-more" v-if="detail.more_activity">
            <a href="detail.more_activity">
                更多活动
            </a>
        </div>

        <div  v-if="detail.category == 2" class="bottom-btn bottom-btn-3">
             <span class="left" @click="favorite()" v-if="!detail.is_collect"><b class="fav"></b>收藏</span>
             <span class="left" @click="favorite()" v-else><b class="faved"></b>已收藏</span>
             <a class="middle" href=""><b class="list"></b>{{detail.topic_num}} 帖子</a>
             <template v-if="detail.button.status == 4">
                <a v-if="is_fatie" class="right" :href="detail.button.url">
                    {{detail.button.words}}
                </a>
                <span v-else class="right gray">
                    {{detail.button.words}}
                </span>
             </template>            
             <span v-else-if="detail.button.status == 2" class="right" @click="submit()">
                 {{detail.button.words}}
             </span>
             <span v-else class="right gray">
                 {{detail.button.words}}
             </span>
        </div>

        <div class="winners-pop" v-show="showWinPop">
            <div class="mask" v-on:click="show()"></div>
            <div class="ctn">
               <div class="title">
                   获奖名单
               </div>
               <div class="list">
                <ul v-if="detail.win_list && detail.win_list.length">                    
                    <li v-for="(item,index) in detail.win_list" :key="index">{{item.name}}{{item.desc}}</li>
                </ul>
               </div>
               <span class="xiaocha" v-on:click="show()"></span>
            </div> 
        </div>

        <div class="winners-pop" v-show="showWinSuc">
            <div class="mask" v-on:click="show2()"></div>
            <div class="bingding">
               <span class="xiaocha" v-on:click="show2()"></span>
               <div class="title">提示</div>
               <div class="tishi">请先绑定您的手机号</div>
               <a class="go-btn" href="">现在去绑定</a>
            </div> 
        </div>

        <div class="winners-pop" v-if="showWinNot">
            <div class="mask" v-on:click="show3()"></div>
            <div class="bingding">
               <span class="xiaocha" v-on:click="show3()"></span>
               <div class="title">提示</div>
               <div class="not-list">
                   <p>抱歉，您未满足全部报名条件，如下：</p>
                   <ul v-if="!stagevue.signup_id">
                       <li v-for="(item,index) in stagevue.stage" :key="index"><b :class="item.pass?'yes':'not'"></b><span>{{index+1}}. {{item.text}}</span></li>
                   </ul>
               </div>
               <span class="go-btn" v-on:click="show3()">好的，知道了</span>
            </div> 
        </div>

    </div>   
</template>

<script>
import { getActiveDetailData } from '~/api/data/activity.js';
import { getActiveSignUp } from '~/api/data/activity.js';
import Brows from '~/plugins/browser.js';
import countDown from '~/components/common/countDown.vue';
import hbhIframe from '~/components/common/hbhIframe.vue';
import { Toast } from 'mint-ui';

    export default {
        components: {
            countDown,
            hbhIframe
        },
        head () {
            return {
                meta:[{ hid:'description',name:'description',content:this.title,id:'hapj-wap-title'}]
            }
        },
        head: {
            title: "title标签"
        },       
        async asyncData ({ params, env, error }) {
            try {
                const {data} = await getActiveDetailData({});
                return {detail:data.data.detail,activity_id:params.id} 
            } catch (err) {
                console.error(err)
            }
        },
        data() {
            return {
                activity_id:'',
                detail:{},
                title: '活动详情页',
                isIos: false,
                showWinPop:false,
                showWinSuc:false,
                showWinNot:false,
                isWinners:false,
                is_fatie:false,
                stagevue:{},
                lock:true,
                date:'2018/3/2 18:41:00',
                iframe:{
                    name:'right',
                    id:'iframe',
                    url:'https://bj.jiehun.com.cn/zhuanti/jhmall_xiyanjiudian_wap/zt_tdingxiyan1221_wap_17365/'
                }
            }
        },
        mounted () {
            var _this = this;

            var browser = Brows();
            _this.isIos = browser;

            _this.$store.commit('changeHeaderTitle', _this.detail.title);
            
            if(_this.detail.win_list){
                if(_this.detail.win_list.length>0){
                    _this.isWinners = true;
                }else{
                    _this.isWinners = false;
                }  
            }
            
            let now = new Date().getTime();
            if(_this.detail.topic_start_time < now && now < toppic_end_time){
                _this.is_fatie = false;
            }                      
            
        },
        methods: {
            favorite() {
                //收藏或取消收藏
                console.log('TODO');
            },
            submit() { 
                let _this = this;
                if(_this.lock){
                    _this.lock = false;
                    getActiveSignUp({'activity_id':'5'}).then(res => {                        

                        setTimeout(function(){ _this.lock = true; },3000)
                        if(res.data.err != 'hapn.ok'){
                            if(res.data.err == 'hapn.not_bind_phone'){
                                _this.showWinSuc = true;                              
                            }else{
                                Toast(res.data.message);  
                            }                                            
                        return;   
                        } 

                        var stages = res.data.data;
                        if(stages.signup_id>0){
                            Toast('恭喜报名成功');
                        }else{
                            _this.showWinNot = true;   
                            _this.stagevue = stages;
                        }
                    })
                }
            },
            iframeLoad() {  
                document.getElementById("iframe").height=0;  
                document.getElementById("iframe").height=document.getElementById("iframe").contentWindow.document.body.scrollHeight;  
            },
            show(){
                this.showWinPop = !this.showWinPop;
            },
            show2(){
                this.showWinSuc = !this.showWinSuc;
            },
            show3(){
                this.showWinNot = !this.showWinNot;
            }
        }
    }
</script>

<style lang="scss">
    body{
        background:#fff;
    }

    .detail{
        padding-bottom:150px;
    }

    .winners-pop{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;

        .mask{
            background:rgba(0,0,0,0.4);
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            z-index: 0;
        }

        .not-list{
            margin-top:30px;
            text-align: left;
            padding: 0 45px;

            p{
                height:40px; 
                font-size:28px;
                color:rgba(51,51,51,1);
                line-height:40px;
            }

            ul{
                margin-top:30px;
            }
            li{
                font-size:26px;
                font-family:PingFang-SC-Regular;
                color:rgba(102,102,102,1);
                line-height:50px;   
                
                b{
                    width:26px;
                    height: 26px;
                    float: right; 
                    background:url("/static/images/common/duigou.png") no-repeat;
                    background-size:100%;      
                    margin-top: 16px;              

                    &.yes {
                        background-image:url("/static/images/common/duigou.png");
                        background-size:100%;                             
                    }
                    &.not {
                        background-image:url("/static/images/common/cha3.png");  
                        background-size:100%;                           
                    }                    
                }                            
            }
        }

        .bingding{
            width:600px;
            padding-bottom:40px;
            background:rgba(255,255,255,1);
            border-radius: 20px ; 
            margin:300px auto;
            position: relative;
            text-align: center;

            .xiaocha{
                width:30px;
                height:30px; 
                position: absolute;
                top:20px;
                right:20px;
                z-index: 3;
                background:url("/static/images/common/cha2.png") no-repeat;
                background-size:100%;
            }

            .tishi{
               font-size:28px;
               color:rgba(51,51,51,1); 
               margin-top: 30px;
               color: #333;
            }

            .title{
                font-size: 32px;
                color: #333;
                padding-top: 40px;
            }

            .go-btn{
                width:400px;
                height:80px; 
                line-height: 80px;
                background:rgba(255,99,99,1);
                border-radius: 40px ;  
                display: block;
                color:#fff;
                font-size:30px;
                margin:50px auto 0 auto;
            }
        }

        .ctn{
            width: 600px;
            margin:150px auto;
            border-radius:20px;
            background: #fff;
            position: relative;

            .xiaocha{
                width:60px;
                height:60px; 
                background:url("/static/images/common/cha.png") no-repeat;
                background-size:100%;
                position: absolute;
                bottom:-120px;
                left:270px;
                z-index: 3
            }

            .title{
                background: linear-gradient(to right,  #FF9B84, #E85252);
                font-size:32px;
                height: 120px;
                line-height: 120px;
                color: #fff;
                text-align: center;
                border-radius:20px 20px 0 0;
            }

            ul{
                height: 580px;
                overflow-y: auto;
                padding: 20px 40px 0 40px;

                li{
                    line-height: 70px;
                    height: 70px;
                    font-size: 26px;
                    color: #666;
                    border-bottom:1px dashed #ccc;
                }
            }
        }       
    }

    iframe{
        width:100%;
        height: 100%;      
    }

    .line{
        background:#F5F8FA;
        height: 20px;
    }

    .detail-top {
        img {
            display: block;
        }

        .countarea {
            text-align: center;
            background:#fff;
            padding:31px 0 32px 0;

            h2{
                line-height: 44px;
                font-size: 26px;
                color: #666;
                font-weight: normal;

                span {
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
                
                .line {
                    background-color: #EEEEEE;
                    display: inline-block;
                    width: 149px;
                    height: 2px;
                    vertical-align: middle;
                    margin:0 10px;
                }
            }

            .countdown{
                vertical-align:middle;

                span{
                    font-size:26px;
                }
            }
             
        }
    }   

    .detail-bottom {
        background: #fff;
        margin-top: 20px;
        padding: 0 30px;
        min-height: 150px;

        h2 {
           padding-top: 40px;
           text-align: center;
           color:#262626;
           font-size:32px; 
           margin-bottom: 20px;          

           span {
              color:#C1C1C1;
              font-size:36px;
              font-weight:normal;
              margin: 0 5px;
           }
        }

        img {
            max-width: 690px;
        }
    }

    .beizhu {
        text-align:center;
        font-size:28px;
        color:rgba(51,51,51,1);
        line-height:40px;
        padding:20px 0;
        background: #fff;
    }

    .winners {
        width:470px;
        height:50px;
        line-height:50px;
        background:rgba(0,0,0,0.6);
        color:#fff;
        text-align:center;
        opacity:60;
        position:fixed;
        left:50%;
        margin-left:-235px;
        bottom:120px;
        border-radius: 29px;
        box-shadow:1px 1px 2px rgba(0,0,0,0.4);

        .laba{
             width:26px;
             height:30px; 
             display: inline-block;
             vertical-align:middle;
             margin-right:10px;
             background:url("/static/images/common/laba.png") no-repeat;
             background-size:100%;
        }
    }

    .fixed-more{
        position: fixed;
        bottom: 200px;
        right:0;
        width:175px;
        height:60px; 
        font-size: 26px;
        line-height:60px;
        text-align:center;        
        background: linear-gradient(to right,  #F7971E, #FFD200);
        border-radius: 62px 0px 0px 62px ; 

        a{
            color:#fff;
        }
    }

    .bottom-btn {        
        position: fixed;
        bottom:0;
        width:750px;
        height:98px;
        line-height:98px;
        background:#fff;        
        border-top: 1px solid rgba(238,238,238,1);

        span{
            text-align:center;
        }

        .left { 
           width: 250px;
           font-size:28px;
           display:inline-block;

           b{
                width:36px;
                height:34px; 
                display: inline-block;
                vertical-align:middle;
                margin-right:10px;
                background:url("/static/images/common/favorite.png") no-repeat;
                background-size:100%;

                &.faved{
                    background-image:url("/static/images/common/faved.png");
                }
           }
         
        }

        .right {
            width: 500px;
            display:inline-block;
            font-size:30px;
            color:#fff;
            background:rgba(255,99,99,1);

            &.gray{
                background:#ccc;
            }
        }
    }

    .bottom-btn-3{
        .left { 
            width: 250px;
        }

        .middle {
            width: 200px;
            font-size:28px;
            display:inline-block;
            color: #333;
            text-align: center;

             .list {
               width:36px;
               height:34px; 
               display: inline-block;
               vertical-align:middle;
               margin-right:10px;
               background:url("/static/images/common/list.png") no-repeat;
               background-size:100%;
           }
        }

        .right {
            width: 250px;
            display:inline-block;
            font-size:30px;
            color:#fff;
            margin-left:50px;
            background:rgba(255,99,99,1);
        }
    }
</style>