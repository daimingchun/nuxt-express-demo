<template>
    <div class="active-list">        
        <ul class="detail"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="item in list">                
                <a :href="item.url">
                    <div class="img">
                        <span class="countdown">{{item.date}}</span>
                        <span class="interest" v-if="item.look_times">{{item.look_times}}</span>
                        <img :src="item.picture" width="690" height="345" />
                    </div>
                    <h3>{{item.title}}</h3>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getActiveListData } from '~/api/data/activity.js'

    export default {
        head: {
            title: '这是自定义title'
        },
        async asyncData () {
             const {data} = await getActiveListData({});
             return {list :data.data.list} 
        },
        data() {
            return {
                list:{},
                title: '活动详情页'
            }
        },
        mounted () {     
            var _this = this;
            // getActiveListData({}).then(res => {
            //    _this.list = res.data.data.list
            //    console.log(_this.list)
            // })
        },
        methods: {
            loadMore() {
                this.loading = true;               
            }
        }
    }
</script>

<style lang="scss" scoped>
    .active-list {
        background-color: #F5F8FA;
        border-radius:8px;
        padding:0 30px;
        overflow: hidden;

        li {
            background-color: #FFFFFF;            
            margin-top:20px;
            border-radius: 8px ; 

            .img {
                position:relative;

                img {
                    display:block;
                    border-radius: 8px 8px 0 0 ;
                }

                .countdown {
                    position: absolute;
                    top:15px;
                    left:-15px;
                    padding:9px 18px 8px 18px;
                    color:#FFF;
                    font-size:24px;
                    background:rgba(255,99,99,1);
                    border-radius: 0px 56px 56px 0px ; 
                }

                .interest {
                    position: absolute;                
                    right:0;
                    bottom:0;
                    color:rgba(255,255,255,1);
                    font-size:24px;
                    padding:14px 20px 13px 30px;
                    background: linear-gradient(to right, rgba(0,0,0,0), rgba(102,102,102,1));
                }
            }         

            h3 {
                padding:20px 30px 30px;
                font-size:28px;
                color:rgba(51,51,51,1);
                line-height:40px;                
            }

        }
    }
</style>