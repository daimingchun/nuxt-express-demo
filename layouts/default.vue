<template>
    <div id="hd">
        <div v-if="index">
            <index-header></index-header>
        </div>
        <div v-else-if="channels">
            <channels-header></channels-header>
        </div>
        <div v-else-if="detail">
            <detail-header></detail-header>
        </div>
        <div v-else>
            <my-header :title ="title"  />
        </div>
        <nuxt/>
        <!-- <my-footer/> -->
      
    </div>
</template>

<script>
import axios from '~/plugins/axios'
import '~/assets/css/reset.scss'
import '~/assets/css/grid.scss'
import '~/assets/css/common.scss'
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'
import ChannelsHeader from '~/components/common/channelsHeader.vue'
import IndexHeader from '~/components/index/indexHeader.vue'
import DetailHeader from '~/components/common/detailHeader.vue'

export default {
  props: ['store'],
  components: {
      MyFooter,
      MyHeader,
      IndexHeader,
      ChannelsHeader,
      DetailHeader
  },
  data () {
    return {
      // Headertitle: ''
    }
  },
  watch: {  
      $route(to, from) {  
          console.log('路由to',to, this.title);  
          console.log('路由from',from, this.title);  
      }  
  },  
  computed: {
      title: function(context){
          // console.log(context)
          return this.$store.state.title
      },
      index:function () {
          return this.$store.state.index
      },
      channels: function(){
        return this.$store.state.channels
      },
      detail: function(){
          return this.$store.state.detail
      }
  },

  mounted() {
    // console.log('路由切换后', this.title)
  }
}
</script>

<style lang='scss'>
.container
{
  margin: 0;
  width: 100%;
  padding:  0;
  text-align: center;
}

</style>
