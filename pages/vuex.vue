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
import axios from '~/plugins/axios'
import Cell from '~/components/Cell'
export default {
  components: {
    Cell
  },
  async asyncData () {
    // let { data } = await axios.get('/api/users')
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
      childValue: ''
    }
  },
  watch: {
    inputVal(newVal, oldVal){
      console.log(newVal)
      this.name = newVal
    }
  },
  mounted(){
    console.log(this.users)
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
