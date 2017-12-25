<template>
  <section class="container">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1 class="title">
      
      这是iconfont图标<i class="iconfont icon-tag"></i>
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
import browsers from '~/static/js/browsers'
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
    console.log(browsers())
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
