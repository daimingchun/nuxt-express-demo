<template>
  <div>
      <ul class="records">
            <li v-if="prizeData" v-for="item in prizeData">
                <p class="prize">{{item.reward_name}}</p>
                <p class="date">{{item.lottery_time}}</p>
            </li>
    
      </ul>
  </div>
</template>
<script>
import { getExpogiftRewards } from '~/api/data/qiandao.js'
export default {
    data () {
        return{
            prizeData:''
        }
    },
    mounted () {
        getExpogiftRewards({}).then( res =>{
            console.log(res)
            this.prizeData = res.data.data.data
            console.log(this.prizeData)
        })
    },
}
</script>

<style lang="scss">
    .records{
        padding:0 30px;
        li{
            display: flex;
            flex-flow:row nowrap;
            justify-content: space-between;
            align-items: center;
            height:108px;
            border-bottom:1px solid #ccc;
            &:last-of-type{
                border-bottom:none;
            }
            .prize{
                font-size:30px;
                color:rgba(51,51,51,1);
            }
            .date{
                width:127px;
                height:60px; 
                font-size:22px;
                text-align: center;
                color:rgba(153,153,153,1);
                line-height:30px;
            }
        }
        
    }
</style>

