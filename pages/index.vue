<template>
  <section class="container">
    <mt-header fixed title="老左"></mt-header>
    <div class="swipre"></div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  mounted(){
    console.log(this.users)
  }
}
</script>

<style scoped>
.swipre {
  width: 750px;
  background-color: #eee;
  height: 320px;
}
</style>
