<template>
  <div class="dest-wrap whitebg mt20">
        <div class="subplate-tit">
          <h4>{{moduledata.block_name}}</h4>
          <a :href="moduledata.more_link" class="more">{{moduledata.more_title||'更多'}}</a>
        </div>
        <ul class="dest" >
            <li v-for="(item,index) in moduledata.data" :key="index">
                <a :href="item.link" class="block">
                    <img :src="item.img_url" alt="">
                    <p class="city">{{item.title}}</p>
                    <div class="city-mask"></div>
                </a>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
    props:['moduledata']

}
</script>
<style lang="scss">
    .dest-wrap{
        .dest{
            display: flex;
            padding: 0 30px 10px;
            flex-flow:row wrap;
            justify-content: space-between;
            li{
                position: relative;
                width:330px;
                height:220px; 
                margin-bottom:30px;
                img{
                    width:330px;
                    height:220px;  
                }
                .city{
                    position: absolute;
                    width:100%;
                    height:50px;
                    font-size:34px;
                    color:#fff;
                    text-align: center;
                    top:0;left:0;bottom:0;right:0;
                    margin: auto;
                    z-index: 2;
                }
                .city-mask{
                    position: absolute;
                    width:100%;height:100%;
                    top:0;
                    background:#333;
                    opacity: .4;
                }
            }
        }
    }
</style>


