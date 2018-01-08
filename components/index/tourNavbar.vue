<template>
  <div class="tour-wrap whitebg mt20">
      <mt-navbar id="navbar" v-model="selected">
          <mt-tab-item id="1">旅拍婚纱照</mt-tab-item>
          <mt-tab-item id="2">旅行结婚</mt-tab-item>
          <mt-tab-item id="3">度假&蜜月</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" class="">
              <product-list :listData ="listData1"></product-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <product-list :listData ="listData2"></product-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <product-list :listData ="listData1"></product-list>
          </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>

<script>
import productList from '~/components/index/productlist'
export default {
    components : {
      productList
    },
    data () {
      return {
        selected: '1',
        /* listData 传 列表的数据 */ 
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
          ],
        listData2 :[
            {
              img:'http://2.tthunbohui.cn/n/00804zTx00i81YNQDwcE268-c220x220-14e993.jpg',
              name:'的说法',
              storename:'3123',
              price:3213
            },
            {
              img:'http://2.tthunbohui.cn/n/00804zTx00i81YNQDwcE268-c220x220-14e993.jpg',
              name:'的说法',
              storename:'3123',
              price:3213
            },
            {
              img:'http://2.tthunbohui.cn/n/00804zTx00i81YNQDwcE268-c220x220-14e993.jpg',
              name:'的说法',
              storename:'3123',
              price:3213
            }
        ] 
      }
    }
}
</script>
<style lang="scss">
.tour-wrap{
    .mint-navbar{
        height:80px;
        .mint-tab-item{
          font-size:26px;
          color:rgba(102,102,102,1);
          &.is-selected{
            position: relative;
            color:rgba(255,99,99,1);
            &:after{
              position: absolute;
              left:40%;
              bottom:9px;
              display: block;
              content: '';
              width:50px;height: 4px;
              background:rgba(255,99,99,1);
            }
          }
        }
        .is-selected{
          border-bottom: none;
        }
    }
    .pro-list{
        padding: 30px 30px 0 30px;
        overflow: hidden;
        li{
            position: relative;
            float: left;
            width: 330px;
            height: 507px;
            margin-right: 30px;
            img{
                width: 330px;
                height: 330px;
            }
            &:nth-child(2n){
                margin-right: 0;
             }
             .pro-name{
                 color: #333;
                 font-size: 28px;
                 padding: 12px 0 4px 0;
             }
             .store-name{
                 color: #999;
                 font-size: 24px;
                 margin-bottom: 11px;
             }
             .price{
                 color: #ff6363;
                 font-size: 26px;
             }
        }
    }
}

</style>


