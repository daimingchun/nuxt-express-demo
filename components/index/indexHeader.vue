<template>
    <div>
        <download-bar></download-bar>
        <mt-header>
            <span class="city" slot="left" @click="handleClick">
               <b class="icon"></b><span>北京</span>
            </span>
            <a href="" class="search" slot="left">
                <b class="icon"></b><span>输入商家或商品名称</span>
            </a>
        </mt-header>
        <mt-popup v-model="popupVisible" @click="handleClick">
            <div class="city-select">
                <b class="close-icon" @click="handleClick"></b>
                <h3 class="title">选择你的城市</h3>
                <p class="tip">中国婚博会已进入六个城市</p>
                <ul class="city-list">
                    <li v-for="(item,index) in city_data" :key="index">
                        <a href="">{{item.city}}</a>
                    </li>
                </ul>
                <div class="bottom-tip">更多城市敬请期待</div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    import DownloadBar from '~/components/common/DownloadBar'
    import appCall from '~/plugins/appCall.js';
    export default {
        components: {
            DownloadBar,
        },
        data(){
            return{
                value: '',
                popupVisible:false,
                city_data: [
                    {
                        city: '北京'
                    }, {
                        city: '上海'
                    }, {
                        city: '杭州'
                    }
                ]
            }
        },
        methods: {
            handleClick: function() {
                if(this.popupVisible){
                    this.popupVisible = false;
                }else{
                    this.popupVisible = true;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .mint-header{
        height: 88px;
    }
    .city{
        display: inline-block;
        color: #333;
        font-size: 24px;
        .icon{
            display: inline-block;
            width: 36px;
            height: 36px;
            margin-right: 4px;
            vertical-align: middle;
            background: url('/static/images/index/icon_point.png') no-repeat;
            background-size: cover;
        }
        span{
            vertical-align: middle;
        }
    }
    .search{
        vertical-align: middle;
        display: inline-block;
        width: 572px;
        height: 56px;
        line-height: 56px;
        color: #999;
        font-size: 24px;
        background-color: #F5F8FA;
        border-radius: 28px;
        padding-left: 30px;
        margin-left: 30px;
        .icon{
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            background: url('/static/images/index/icon_search.png') no-repeat;
            background-size: cover;
        }
        span{
            vertical-align: middle;
        }
    }
    .mint-popup{
        transform: none;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .city-select{
        padding: 80px;
        .close-icon{
            display: inline-block;
            width: 40px;
            height: 40px;
            background: url('/static/images/index/icon_x.png') no-repeat;
            background-size: cover;
            position: absolute;
            right: 40px;
            top: 40px;
        }
        .title{
            color: #333;
            font-weight: normal;
            font-size: 36px;
        }
        .tip{
            color: #666;
            font-size: 24px;
            margin: 20px 0 30px 0;
        }
        .city-list{
            li{
                height: 120px;
                line-height: 120px;
                border-bottom: 1px solid #eee;
                a{
                    display: inline-block;
                    color: #333;
                    font-size: 28px;
                    width: 100%;
                    height: 100%;
                }
            }
            li.on{
                a{
                    color: #FF6363;
                }
            }
        }
        .bottom-tip{
            color: #999;
            font-size: 28px;
            position: absolute;
            bottom: 40px;
            left: 263px;
        }
    }
</style>