<template>
  <section class="container">
    <input v-model="inputVal" />
    <div>
      <cell v-model="name" @onClick="clickHandle"></cell>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>子组件点击事件返回的值是：《{{childValue}}》</div>
  </section>
</template>

<script>
import { getAccessToken } from '~/api/wxapi'
import Cell from '~/components/Cell'
export default {
  components: {
    Cell
  },
  async asyncData ({ store }) {
    // console.log('state:',store.state)
    // let { data } = await getAccessToken({
    //   grant_type: 'client_credential',
    //   appid: 'wxc252e153edeb5339',
    //   secret: 'aab36736486406b3db8c1ef3d155acb4'
    // })
    // console.log('微信客户端', data)
    // return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  data(){
    return {
      inputVal: '',
      name: '老左',
      childValue: '',
      header: {
        title: 'vuex主页'
      }
    }
  },
  watch: {
    inputVal(newVal, oldVal){
      this.name = newVal
    }
  },
  mounted(){
    this.$store.commit('changeHeaderTitle', this.header.title)
    console.log('这里有个',this.$store.state)

  },
  methods: {
    clickHandle(value){
      this.childValue = value
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
