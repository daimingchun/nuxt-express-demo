<template>
  <div class="dlg-wrap" v-if="isshow">
      <div class="dlg-mask"></div>
      <div class="dlg">
        <slot name="dlgContent">12312</slot>
      </div>
      
  </div>

</template>

<style lang="scss">
    .dlg-wrap{
      // position: absolute;
      top:0;
      .dlg{
        position: absolute;
        top:50%;
        left:50%;
        margin-left:-255px;
        margin-top:-258px;
        width:510px;
        height: 566px;
        background:rgba(255,99,99,1);
        border-radius: 18px ;    
        z-index: 4;    
      }
      .dlg-mask{
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        background:#333;
        opacity: .68;
        z-index: 3;
      }
    }
</style>
<script>
export default {
  data () {
    return{
      isshow :true
    }
  },
  props:{
    word:[String]
  },
  methods:{
    // dlgclose () {
    //   console.log(this.isshow)
    //   this.$set(this,'isshow',false)
    // }
  }
}
</script>


