<template>
    <div class="filter-wrap">
        <ul class="nav">
            <li @click="navCut(1)">全部分类</li>|
            <li @click="navCut(2)">默认排序</li>|
            <li @click="navCut(3)">筛选</li>
        </ul>
        <div class="f-body">
            <div class="choice city" v-if="hide">
                <ul class="f-l">
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                    <li>热门商圈</li>
                </ul>
                <ul class="f-r">
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>
                    <li>果园</li>

                </ul>
            </div>
            <div class="choice order" v-if="hide">
                <ul>
                    <li>默认排序</li>
                    <li>从高到低</li>
                    <li>从低到高</li>
                    <li>口碑最好</li>
                </ul>
            </div>
            <div class="choice filter" v-if="hide">
                <form action="" method="post">
                    <ul>
                        <li class="ys">
                            <h5>容纳桌数</h5>
                            <ul class="option">
                                <li :class="selected == 1 ?'on':''" @click="pick(1)"><label><input  type="radio" name="aa" value="">不限</label></li>
                                <li :class="selected == 2 ?'on':''" @click="pick(2)"><label><input checked type="radio" name="aa" value="">1-10桌</label></li>
                                <li :class="selected == 3 ?'on':''" @click="pick(3)"><label><input type="radio" name="aa" value="">10-20桌</label></li>
                                <li :class="selected == 4 ?'on':''" @click="pick(4)"><label><input type="radio" name="aa" value="">20-30桌</label></li>
                                <li @click="pick"><label><input type="radio" name="aa" value="">30-40桌</label></li>
                                <li @click="pick"><label><input type="radio" name="aa" value="">40-50桌</label></li>
                                <li><label><input type="radio" name="aa" value="">50-60桌</label></li>
                                <li><label><input type="radio" name="aa" value="">60-70桌</label></li>
                            </ul>
                        </li>
                        <li class="ys">
                            <h5>酒店特色</h5>
                            <ul class="option">
                                <li :class="selected == 1 ?'on':''" @click="pick(1)"><label><input type="radio" name="bb" value="">全部</label></li>
                                <li :class="selected == 2 ?'on':''" @click="pick(2)"><label><input type="radio" name="bb" value="">全部</label></li>
                                <li :class="selected == 3 ?'on':''" @click="pick(3)"><label><input type="radio" name="bb" value="">五星级</label></li>
                                <li :class="selected == 4 ?'on':''" @click="pick(4)"><label><input type="radio" name="bb" value="">优惠低价</label></li>
                                <li><label><input type="radio" name="bb" value="">水晶吊灯</label></li>
                                <li><label><input type="radio" name="bb" value="">无柱大厅</label></li>
                            </ul>
                        </li> 
                    </ul>
                    <div class="btn-wrap">
                        <a class="reset" href="javascript:void(0)">重置</a>
                        <a class="submit" href="javascript:void(0)">确定</a>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return { 
            hide : false,
            show : true,
            selected:''
        }
    },
    methods:{
        //传两个参数 一个参数是组下标，另一个是值下标，组内需要有个 selected 接收 选中 的 index 值
        pick (index) {
            this.$set(this,'selected',index)
        },
        navCut (index) {
            
        }
    }
}
</script>
<style lang="scss">
    .filter-wrap{
        background-color:#fff;
        .nav{
            height: 80px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            color:rgba(204,204,204,1);
            li{
                flex-grow: 1;
                text-align: center;
                height:33px; 
                font-size:24px;
                font-family:PingFang-SC-Regular;
                color:rgba(102,102,102,1);
                line-height:33px;
            }
        }
        .f-body{
            .city{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                .f-l{
                    width:250px;
                    background:rgba(246,246,246,1);
                    li{
                        height: 80px;
                        line-height: 80px;
                        text-align: center;
                        font-size:24px;
                        color:#666;
                    }
                }
                .f-r{
                    width:500px;
                    background:rgba(255,255,255,1);
                    li{
                        height: 80px;
                        line-height: 80px;
                        text-align: center;
                        font-size:24px;
                        color:#666;
                    }
                }
            }
            .order{
                ul{
                    li{
                        height:80px; 
                        line-height: 80px;
                        font-size:24px;
                        color:#666;
                        padding-left:30px;
                        border-bottom: 1px solid rgb(238, 235, 235);
                        &:last-of-type{
                            border-bottom:none;
                        }
                    }
                }
            }
            .filter{
                padding:0 30px;
                height: 90vh;
                .btn-wrap{
                    width:690px;
                    position: fixed;
                    bottom:50px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    a{
                        display: block;
                        width:300px;
                        height:100px; 
                        font-size:30px;
                        line-height: 100px;
                        text-align: center;
                        border-radius: 100px ; 
                        &.reset{
                            color:#666666;
                            border:1px solid rgba(151,151,151,1);
                        }
                        &.submit{
                            color:#fff;
                            background:rgba(255,99,99,1);
                        }
                    }
                }
                .ys{
                    h5{
                        height:33px;
                        margin:20px 0; 
                        font-size:24px;
                        color:#666;
                        line-height:33px;
                    }
                    .option{
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: flex-start;
                        li{
                            width:210px;
                            height:70px; 
                            margin-bottom:20px;
                            margin-right:29.5px;
                            font-size:24px;
                            color:#666;
                            line-height: 70px;
                            text-align: center;
                            background:rgba(245,248,250,1);
                            border-radius: 8px ; 
                            &:nth-of-type(3n){
                                margin-right:0;
                            }
                            &.on{
                                border:1px solid #FF6363;
                            }
                        }
                    }

                }
            }
        }
    }
</style>