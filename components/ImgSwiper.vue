<template>
    <div class="img-swipe" v-if="show" >
        <mt-header fixed :title="index+'/'+list.length">
            <mt-button icon="back" slot="left" @click="hide"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
</mt-header>
        <mt-swipe @change="handleChange" :auto="0">
            <mt-swipe-item v-for="item in list">
                <img class="images" :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:{
        list:[Array],
        show:[Boolean],
        current:[Number]
    },
    data(){
        return {
            index:this.current
        }
    },
    methods: {
        handleChange(index) {
            this.index = index+1;
        },
        hide(){
            console.log(this.$parent)
            this.$parent.isShow = false;
        }
    }
}
</script>
<style lang= "scss" scoped> 
    .img-swipe{
        position: fixed;
        z-index: 1001;
        top:0;
        left:0;
        height: 100%;
        width:100%;
        background-color: #fff;
        .images{
            position: absolute;
            top:50%;
            left: 0;
            transform: translate(0,-50%);
            width:100%;
        }
    }
</style>

