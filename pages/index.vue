<template>
  <section class="container">
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
<!--       <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li> -->
      <li>
        <nuxt-link :to="{ name: 'cate'}">
          使用axios直接获取测试服接口数据
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'goods'}">
          先使用node提供的接口，再获取测试服接口数据
        </nuxt-link>
      </li>
    </ul>
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
