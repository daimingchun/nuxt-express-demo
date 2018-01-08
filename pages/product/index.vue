<template>
    <div class="prolist">
        <shai-xuan></shai-xuan>
        <!--方图长图-->
        <product-list :listData ="listData1"></product-list>
        <!--喜宴酒店-->
        <hotel-hall></hotel-hall>
        <!--裸钻-->
        <luozuan-list></luozuan-list>
    </div>
</template>

<script>
import shaiXuan from '~/components/common/shaiXuan'
import productList from '~/components/index/productList'
import hotelHall from '~/components/mall/hotelHall'
import luozuanList from '~/components/mall/luozuanList'
export default {
    components: {
        shaiXuan,
        productList,
        hotelHall,
        luozuanList
    },
    data (){
        return {
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
            ]
        }
    },
    methods: {
       
    }
}
</script>
