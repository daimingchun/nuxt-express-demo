<template>
    <div class="signin-wrap">
        <div class="banner">
            <!-- <mt-switch v-if="userData.user_sign"  v-model="userData.user_sign.is_push == '0' ? false : true" ></mt-switch> -->
            <!-- <div v-if="userData.user_sign.is_push == '1' ? false : true">12346</div> -->
            <div class="ban-bot"></div>
        </div>
        <div v-if = "userData.user_sign">
            <h5 class="tit" v-if=" userData.user_sign.is_sign  && userData.subtitle">{{userData.subtitle.signed}}</h5>
            <h5 class="tit" v-if=" !userData.user_sign.is_sign ">{{userData.subtitle.not_sign}}</h5>
        </div>
        
        <!-- 展会信息 -->
        <div class="expo" v-if="userData.is_show_expo">
            <ul class="timeline">
                <li v-if="userData.expos" v-for="item in userData.expos">
                    <p class="date">{{item.expo_time}}</p>
                    <p class="point" :class="item.status == 2 ? 'on' :'' "><span></span></p>
                    <p class="site">{{item.city}}</p>
                </li>
            </ul> 
            <div class="box">
                <div class="left">
                <a class="lottery-btn" :class="userData.is_expo_day && !this.userData.user_sign.is_lottery ? 'on' : ''  " @click="lotteryBegin">开奖</a>
                <p class="word">今日签到可抽奖</p>
                </div>
                <div class="right">
                    <a :href="userData.ticket_url" class="ticket-btn">索票</a>
                    <p class="word">北京展会即将展开</p>
                </div>
            </div>
        </div>
        <!-- 签到信息 -->
        <section class="cont">
            <ul>
                <li :class="userData.user_sign.continuity_days >= index ? 'on' : ''" v-for="(item ,index) in userData.sign_integral">
                    <p class="day">第{{item.day}}天</p>
                    <div class="metal">
                        <p class="num">{{item.integral}}</p>
                        <p class="ch">积分</p>
                    </div>
                    <p class="icon" v-if="item.word">{{item.word}}</p>
                </li>
            </ul>
            <p  class="sign-btn" v-if="userData.user_sign" :class=" userData.user_sign.is_sign == true ? 'off' :'' "  @click=" !userData.user_sign.is_sign && sign()">签到</p>
            <!-- <p  class="sign-btn" v-if="userData.user_sign" :class=" userData.user_sign.is_sign == 'true' ?'off':''"  @click=" !userData.user_sign.is_sign && sign()">{{userData.user_sign.is_sign}}签到</p> -->
        </section>
        <!-- 签到注意事项 -->
        <div class="notice">
            <h5><b></b><b></b><b></b><b></b><span>签到好礼</span> <b></b><b></b><b></b><b></b></h5>
            <div class="content" v-if="userData.activity">
                <pre>{{userData.activity.description}}</pre>
            </div>
            <a class="rule" v-if="userData.activity" :href="userData.activity.rule">活动规则</a>
        </div>

        <!-- 开奖弹窗 -->
        <div v-if="userData.user_sign">
            <dlg class="dlgType5" v-if="isshow && dlgType5 ">
                <div slot="dlgContent">
                    <p class="pic"></p>
                    <p class="word">{{dlgMsg}}</p>
                    <a class="dlg-btn" @click="dlgclose">我知道了</a>
                    <p class="dlgclose" @click="dlgclose"></p>
                </div>
            </dlg>
        </div>


        <!-- 签到中断弹窗 -->
        <div v-if="userData.user_sign">
            <dlg class="dlgType4" v-if="isshow && userData.user_sign.remind">
                <div slot=dlgContent>
                    <p class="pic"></p>
                    <p class="word">签到中断了，连续签到有惊喜哦</p>
                    <a @click="dlgclose" class="dlg-btn">马上签到</a>
                    <p class="dlgclose" @click="dlgclose"></p>
                </div>
            </dlg>
        </div>
        
        <!-- 签到未中奖弹窗 -->
        <dlg class="dlgType" v-if="isshow&&dlgType">
            <div slot="dlgContent">
                <p class="yellow-tit">连续签到第{{userData.user_sign.continuity_days}}天</p>
                <p class="memeber" v-if="userData.user_info">亲爱的{{userData.user_info.ulevel}}</p>
                <p class="guss">猜你喜欢</p>
                <dl class="card-bg">
                    <dt><img  class="img" src="http://3.tthunbohui.cn/n/00405GSe00mJ0THwSM9o2m8.jpg" alt=""></dt>
                    <dd>
                        <h5>{{signData.store.store_name}}</h5>
                        <p>{{signData.store.description}}</p>
                    </dd>
                </dl>
                <a href="" class="dlg-btn">开始逛</a>
                <p class="dlgclose" @click="dlgclose"></p>
            </div>
        </dlg>
        <!-- 签到中奖弹窗 -->
        <dlg class="dlgType dlgType2" v-if="isshow&&dlgType2">
            <div slot="dlgContent">
                <p class="yellow-tit" v-if="userData.user_sign">连续签到第{{userData.user_sign.continuity_days}}天</p>
                <p class="memeber" v-if="userData.user_info">亲爱的{{userData.user_info.ulevel}}</p>
                <p class="guss">恭喜您获得</p>
                <dl class="card-bg">
                    <dt>
                        <img v-if="signData.reward.type == 'market'" class="img" src="~/static/images/expogift/icon_redbag.png" alt="">
                        <img v-if="signData.reward.type == 'integral'" class="img" src="~/static/images/expogift/icon_babi.png" alt="">
                    </dt>
                    <dd v-if="signData.reward">
                        <h5>{{signData.reward.value}}</h5>
                        <p>{{signData.reward.name}}</p>
                    </dd>
                </dl>
                <a :href="signData.href" class="dlg-btn">开始逛</a>
                <p>可在个人中心—现金券查看</p>
                <p class="dlgclose" @click="dlgclose"></p>
            </div>
        </dlg>
        <!-- 签到抽奖弹窗 -->
        <dlg class="dlgType dlgType3" v-if="isshow&&dlgType3">
            <div slot="dlgContent">
                
                <h5 >{{userData.lottery_title}}</h5>
                <ul class="lottery" v-if="userData.activity">
                    
                    <li v-if="userData.activity" v-for="(item ,index ) in userData.activity.lottery_reward" :class="{act : index == actIndex}">
                        <img v-if="userData.activity.lottery_reward[index].type == 'market'" class="redbag" src="~/static/images/expogift/icon_redbag2.png" alt="">
                        <img v-if="userData.activity.lottery_reward[index].type == 'integral'" class="babi" src="~/static/images/expogift/icon_babi2.png" alt="">
                        <span>{{userData.activity.lottery_reward[index].short_name}}</span>
                    </li>
                    <li class="game-btn" v-on:click.once="gameBegin">
                        <p>点击抽奖</p>
                    </li>
                </ul>
                <p class="dlgclose" @click="dlgclose"></p>
            </div>
        </dlg>
        <!-- 展会未中奖弹窗 -->
        <dlg class="dlgType" v-if="isshow&&dlgType6">
            <div slot="dlgContent">
                <p class="yellow-tit">此次未中奖哦</p>
                <p class="memeber">猜你喜欢</p>
                <dl class="card-bg">
                    <dt><img  class="img" src="http://3.tthunbohui.cn/n/00405GSe00mJ0THwSM9o2m8.jpg" alt=""></dt>
                    <dd>
                        <h5 v-if="rewardData.store">{{rewardData.store.store_name}}</h5>
                        <p>{{rewardData.store.description}}</p>
                    </dd>
                </dl>
                <a href="" class="dlg-btn">去看看</a>
                <p class="dlgclose" @click="dlgclose"></p>
            </div>
        </dlg>
        <!-- 展会中奖弹窗 -->
        <dlg class="dlgType dlgType2" v-if="isshow&&dlgType7">
            <div slot="dlgContent">
                <p class="yellow-tit" v-if="userData.user_info">亲爱的{{userData.user_info.ulevel}}</p>
                <p class="memeber" v-if="userData.user_info">亲爱的{{userData.user_info.ulevel}}</p>
                <p class="guss">恭喜您获得</p>
                <dl class="card-bg">
                    <dt><img  class="img" src="http://3.tthunbohui.cn/n/00405GSe00mJ0THwSM9o2m8.jpg" alt=""></dt>
                    <dd>
                        <h5>{{rewardData.reward.name}}</h5>
                        <p>{{rewardData.reward.value}}</p>
                    </dd>
                </dl>
                <a href="" class="dlg-btn">开始逛</a>
                <p>可在个人中心—现金券查看</p>
                <p class="dlgclose" @click="dlgclose"></p>
            </div>
        </dlg>
    </div>
</template>

<script>
import { getExpogiftData } from '~/api/data/qiandao.js'
import { getExpogiftSign } from '~/api/data/qiandao.js'
import { getExpogiftLottery } from '~/api/data/qiandao.js'
import { getExpogiftPush } from '~/api/data/qiandao.js'
import dlg from '~/components/qiandao/dlg'

export default {
    components : {
        dlg
    },
    async asyncData (context) {
    //   const  { data } =  await getExpogiftData({})
    //   console.log('这是数据',data)
    //   return {userData: data.data}
    },
    data () {
        return {
            signbtn:false,
            arr:[1,2,3,4,5,6,7],
            count:0,
            i:0,
            TimeI:0,
            value:true,
            actIndex:0,
            circleNum : [0, 1, 2, 5, 7, 4, 6, 3],//转动顺序
            isshow:true,
            dlgType:false,      //签到未中奖弹窗
            dlgType2:false,     //签到中奖弹窗
            dlgType3:false,     //抽奖弹窗
            dlgType5:false,     //展会开奖弹窗
            dlgType6:false,     //展会未中奖弹窗
            dlgType7:false,     //展会中奖弹窗
            dlgMsg:'',
            userData:'',
            signData:'',
            rewardData:''
           
        }
    },
    mounted () {
     
         getExpogiftData({}).then(res => {
           this.userData = res.data.data
           console.log(this.userData)
        })
        getExpogiftPush().then(res => {
            console.log(res)
        })
        console.log(this.rewardData)
        // console.log(_this.userData)
        // console.log(this.signbtn)
        // vue.set('data','signbtn','true');
    },
    methods : {
        /*签到*/ 
        sign () {
            this.$set(this,'isshow',true)
            // 请求签到接口 判断弹窗 是 推荐 or 奖励
            getExpogiftSign({}).then(res =>{
                var signdays = this.userData.user_sign.continuity_days + 1;
                this.signData = res.data.data
                console.log(this.signData )
                if(this.signData.is_reward){
                    this.$set(this,'dlgType2','true');
                    this.$set(this.userData.user_sign,'is_sign',true);
                    this.$set(this.userData.user_sign,'continuity_days',signdays);
                    
                }else{
                    this.$set(this,'dlgType','true')
                    this.$set(this.userData.user_sign,'is_sign',true)  //true 不能加引号
                    this.$set(this.userData.user_sign,'continuity_days',signdays)
                }
            })
          
            console.log(this.userData.user_sign.continuity_days)
                      
            this.$set(this,'signbtn','true')
        },
        /*关闭弹窗*/ 
        dlgclose () {
            // console.log(this.isshow)
            this.$set(this,'isshow',false);
            this.$set(this,'dlgType6',false);
            this.$set(this,'dlgType7',false);
            this.$set(this,'dlgType',false);
            this.$set(this,'dlgType2',false);
            this.$set(this,'dlgType3',false);
            this.$set(this,'dlgType5',false);
        },
        /*展会开奖*/
        lotteryBegin () {
            console.log(this.userData.user_sign);
            this.$set(this,'isshow',true)
            //抽奖弹窗
            if( this.userData.is_expo_day && !this.userData.user_sign.is_lottery ) {
                this.$set(this,'dlgType3',true)
                
            } 
            //不能抽奖弹窗
            if( !this.userData.is_expo_day ) {
                this.$set(this,'dlgMsg','展会日当天才可以抽奖哦！0')
                this.$set(this,'dlgType5',true)
            }
            if( this.userData.is_expo_day && this.userData.user_sign.is_lottery) {
                this.$set(this,'dlgMsg','今日已开过奖咯，下个展会日见~0')
                this.$set(this,'dlgType5',true)
            }
        },
        
        /*抽奖开始*/ 
        gameBegin () {
            this.$set(this.userData.user_sign,'is_sign',false)
            getExpogiftLottery().then( res => {
                this.rewardData = res.data.data;
                console.log(this.rewardData)
            })

            this.$set(this.userData.user_sign,'is_lottery',true)
            this.go();

        },
        go () {
            var EndCount = 1000;
            var HalfCount = 500;
            setTimeout(()=>{
                this.i++;
                if(this.i >=8 ) this.i = 0;
                this.actIndex = this.circleNum[this.i];
                //减速
                if(this.count < HalfCount) {
                    this.count += 50;
                }else{
                    this.TimeI += 30;
                    this.count += 40;
                }         
                if(this.count <= EndCount) {
                    this.go()
                }else{
                    if( this.rewardData.is_reward ) {
                        this.$set(this,'dlgType7','true')
                    }else{
                        this.$set(this,'dlgType6','true')
                        
                    }
                    this.$set(this,'dlgType3',false)
                    console.log(21321321)
                }
            },100)
        },
        aa () {
            alert(1)
        }

    } 

}
 
</script>

<style lang="scss">
// .expo li:last-of-type .point:before{display: none;}
    .signin-wrap .expo .timeline li .point.on:after,.signin-wrap .expo .timeline li .point.on:before{
        background:rgba(238,108,84,1);
        z-index: 2;
    }
    .signin-wrap .expo .timeline li:first-of-type .point:after{
        display: none;
    }
    .signin-wrap .expo .timeline li:last-of-type .point:before{
        display: none;
    }
    .signin-wrap{
        overflow: hidden;
        background:#EE6C54;
        .banner{
            position: relative;
            width:750px;
            height:350px;
            background:url('/static/images/expogift/sign-ban.png') no-repeat;
            background-size:100%;
            .ban-bot{
                position: absolute;
                bottom:0;
                width:750px;
                height: 92px;
                background:url('/static/images/expogift/ban-bot.png') no-repeat;
                background-size:100%;
            }
        }
        .expo{
            width:690px;
            height:309px;
            margin: 70px 30px 0; 
            background:rgba(255,255,255,1);
            border-radius: 20px 20px 0px 0px ; 
            overflow: hidden;
            .timeline{
                // overflow: hidden;
                margin-top:84px;
                display: flex;
                flex-flow:row nowrap;
                justify-content: space-between;
                li{
                    flex-grow: 2;
                    display: flex;
                    position: relative;
                    
                    .date{
                        position: absolute;
                        top:-45px;
                        left:27px;
                    }
                    .site{
                        position: absolute;
                        width:90px;
                        top:45px;
                        left:21px;
                    }
                    .point{
                        display: inline-block;
                        width:17px;
                        height: 17px;
                        margin:0 auto;
                        border-radius:50%;
                        background-color:#fff;
                        display: flex;
                        span{
                            display: block;
                            width:10px;
                            height:10px;
                            background-color:rgba(238,238,238,1);
                            border-radius: 50%;
                            margin:auto;
                        }
                        &.on{
                            width:17px;
                            height: 17px;
                            border:1px solid rgba(238,108,84,1);
                            background:#fff;
                            z-index: 3;
                            display: flex;
                            span{
                                display: block;
                                width:10px;
                                height: 10px;
                                margin-top:25px;
                                background-color:rgba(238,108,84,1);
                                margin:auto;
                                border-radius:50%;
                            }
                        }

                    }
                    
                   
                    .point:before{
                        position: absolute;
                        top:8px;
                        content: "";
                        display: block;
                        height: 1px;
                        background:rgba(238,238,238,1);
                        width:100%;
                    }
                    .point:after{
                        position: absolute;
                        content: "";
                        top:8px;
                        left:-50%;
                        display: block;
                        height: 1px;
                        background:rgba(238,238,238,1);
                        width:100%;
                    }
                }
            }
            .box{
                overflow: hidden;
                display: flex;
                flex-flow: row nowrap;
                margin-top:88px;
                .left,.right{
                    width:180px;
                    a{
                        display: block;
                        width:128px;
                        height:50px; 
                        text-align: center;
                        line-height: 50px;
                        font-size:28px;
                        color:#fff;
                        margin:auto;
                        background-color:rgba(238,108,84,1);
                        border-radius: 25px ;
                        &.lottery-btn{
                            background-color:#ccc;
                            
                        }
                        &.lottery-btn.on{
                            background-color:rgba(238,108,84,1);
                            
                        }

                    }
                    .word{
                        text-align: center;
                        height:30px; 
                        font-size:22px;
                        margin-top:12px;
                        color:rgba(102,102,102,1);
                        line-height:30px;
                    }

                }
                .left{
                    margin-left:132px;
                    margin-right:68px;
                }
            }
            
        }
        .tit{
            position: absolute;
            top:400px;
            left:115px;
            width:522px;
            height: 63px;
            padding:0 15px;
            font-size:26px;
            font-family:PingFangSC-Regular;
            color:rgba(238,108,84,1);
            line-height:63px;
            text-align: center;
            background:url('/static/images/expogift/biaoqian.png') no-repeat;
            background-size:100%;
        }
        .cont{
            width:700px;height: 621px;
            margin:-10px 30px 0 30px;
            background:url('/static/images/expogift/sign-rili.png') no-repeat;
            background-size:100%;
            overflow: hidden;
            ul{
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                margin:113px 35px 0 35px;
                li{
                    position: relative;
                    width:150px;height: 150px;
                    margin-bottom:5px;
                    text-align: center;
                    color:rgba(153,153,153,1);
                    background-color:#EEE;
                    &:first-of-type{
                        border-radius: 15px 0px 0px 0px ;
                    }
                    &:nth-of-type(4){
                        border-radius: 0px 15px 0px 0px ;
                    }
                    &:nth-of-type(5){
                        border-radius: 0px 0px 0px 15px ;
                    }
                    &:last-of-type{
                        width:310px;
                        border-radius: 0px 0px 15px 0px ;
                        .icon{
                            left:189px;
                        }
                    }
                    
                    &.on{
                        color:rgba(255,99,99,1);
                        background-color:rgba(248,195,189,1);
                        .metal{
                            color:rgba(108,76,66,1);
                            background:url('/static/images/expogift/metal-shiny.png') no-repeat;
                            background-size:100%;
                        }
                    }
                    
                    .day{
                        height:40px;
                        font-size:28px;
                        margin-top:12px;
                        line-height:40px;
                    }
                    .metal{
                        width:74px;height: 74px;
                        margin:10px auto;
                        color:#fff;
                        background:url('/static/images/expogift/metal-grey.png') no-repeat;
                        background-size:100%;
                        overflow: hidden;
                        .num{
                            margin-top:12px;
                            font-size:24px;
                            line-height:20px;
                        }
                        .ch{
                            
                            font-size:16px;
                        }
                    }
                    .icon{
                        position: absolute;
                        bottom:128px;
                        left:85px;
                        width:81px;
                        font-size:18px;
                        height:37px; 
                        color:#fff;
                        background:url('/static/images/expogift/icon_rec.png') no-repeat;
                        background-size:100%;
                        z-index: 2;
                        
                    }
                }
                
                
            }
            .sign-btn{
                width:420px;
                height:88px; 
                line-height: 88px;
                text-align: center;
                margin:48px auto;
                color:#fff;
                font-size:32px;
                background:rgba(238,108,84,1);
                border-radius: 43px ; 
                box-shadow: 0px 5px 0 rgba(238,108,84,0.5);
                &.off{
                    background:rgba(204,204,204,1);
                    box-shadow: 0 5px 0 rgba(204,204,204,0.5);
                }
            }
        }
        .notice{
            font-size:26px;
            color:#fff;
            margin:60px;
            h5{
                width:480px;height:40px;
                line-height: 40px;
                margin:0 auto 29px;
                font-size:28px;
                text-align: center;
                b{
                    display: inline-block;
                    width:14px;
                    height:14px; 
                    background:rgba(255,255,255,1);
                    border-radius: 50%;
                    margin: 0 12px;
                }
                span{
                    margin:0 12px;
                }
            }
            .content{
                pre{
                    white-space: pre-wrap;
                    word-break: break-all;
                    width:100%;
                }
            }
            .rule{
                display: block;
                width:129px;
                height:41px;
                text-align: center;
                line-height: 41px;
                font-size:26px;
                margin:50px auto;
                color:#fff;
                background:rgba(255,255,255,.5);
                border-radius: 22px ; 
            }
        }
    }
    .dlg-wrap{
        
        .dlgclose{
            position: absolute;
            top:108%;
            left:50%;
            margin-left:-28px;
            width:57px;
            height:57px; 
            border-radius: 50% ; 
            background:url('/static/images/expogift/dlg-close.png') no-repeat;
            background-size:100%;
        }
        .dlg-btn{
            display: block;
            width:362px;
            height:76px; 
            margin:40px auto 30px;
            text-align: center;
            font-size:30px;
            color:rgba(255,53,61,1);
            line-height: 76px;
            background:rgba(255,233,56,1);
            border-radius: 38px ; 
            box-shadow: 0 4px 0 rgba(254,231,76,0.5);
        }
        &.dlgType{
            color:#fff;
            text-align: center;
           .dlg{
                width:510px;
                height:600px;
                margin-top:-300px;
           }
           .yellow-tit{
                position:relative;
                top:25px;
                left:-35px;
                width:580px;
                height:88px; 
                line-height: 90px;
                font-size:32px;
                text-align: center;
                color:rgba(102,48,8,1);
                background:url('/static/images/expogift/title-yellow.png') no-repeat;
                background-size:100%;
               

           }
           .memeber{
               font-size:36px;
               margin-top:65px;
           }
           .guss{
               font-size:30px;
           }
           .card-bg{
                width:450px;
                height:155px; 
                margin:30px auto;
                background:url('/static/images/expogift/card-bg.png') no-repeat;
                background-size:100%;
                box-shadow: 0 10px 15px rgba(0,0,0,0.2);
                dt{
                    float:left;
                    width:155px;
                    height:155px;
                }
                dd{
                    float:left;
                    width:295px;
                    height:155px;
                    text-align: left;
                    padding-left:25px;
                    h5{
                        width:244px;
                        height:40px; 
                        margin-top:33px;
                        font-size:28px;
                        color:rgba(51,51,51,1);
                        line-height:40px;
                    }
                    p{
                        width:244px;
                        height:33px; 
                        font-size:24px;
                        margin-top:10px;
                        color:rgba(255,99,99,1);
                        line-height:33px;
                    }
                }
                .img{
                    width:110px;
                    height:110px;
                    margin:20px;
                }
           }
        }
        &.dlgType2{
            .dlg{
                height:640px;
                margin-top:-320px;
            }
        }
        &.dlgType3{
            .dlg{
                height: 670px;
                margin-top:-335px;
                h5{
                    height: 140px;
                    padding:33px 55px;
                    font-size:26px;
                    text-align: center;
                    font-weight: normal;
                }
                .lottery{
                    height:530px;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    padding:40px 30px;
                    background:#fff;
                    border-radius: 0 0 18px 18px;
                    li{
                        color:#333;
                        width:130px;
                        height: 130px;
                        border:1px solid rgba(204,204,204,1);
                        &:nth-of-type(5){
                            position: relative;
                            top:150px;
                        }
                        &:nth-of-type(8){
                            position: relative;
                            
                            left:160px;
                        }
                        span{
                            font-size:22px;
                            color:rgba(51,51,51,1);
                            line-height: 30px;
                        }
                        img{
                            display: block;
                            margin: 20px auto 10px;
                        }
                        
                        .redbag{
                            width:50px;
                        }
                        .babi{
                            width:45px;
                        }
                        
                    }
                    .game-btn{
                            position: relative;
                            top:-150px;
                            left:-160px;
                            background-color:rgba(255,99,99,1);
                            p{
                                width:110px;
                                height:110px; 
                                font-size:28px;
                                margin:10px auto;
                                padding:15px 25px;
                                color:rgba(255,255,255,1);
                                line-height:40px;
                                border:1px dashed #fff;
                                box-sizing: border-box;
                            }
                        }
                    li.act{
                        border:1px solid red;
                    }
                }
            }
        }
        &.dlgType5,&.dlgType4{
            .word{
                font-size:30px;
                text-align: center;
                color:#fff;
            }
        }
        &.dlgType4{
            .pic{
                width:290px;
                height:252px;
                margin: 50px auto 50px;
                background:url('/static/images/expogift/dlg-break.png') no-repeat;
                background-size:100%; 
            }
        }
        &.dlgType5{
            .pic{
                width:216px;
                height:223px;
                margin: 50px auto 80px;
                background:url('/static/images/expogift/dlg-zan.png') no-repeat;
                background-size:100%; 
                
            }
        }
    }
    
</style>
