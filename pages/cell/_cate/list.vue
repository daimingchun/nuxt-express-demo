<template>
  <section class="container">
    dasdsa  
  </section>
</template>

<script>

export default {
  name: 'id',
  asyncData ({ params, error }) {
    console.log('请求拿到的参数', params, error)

    if(params.cate != 111) {
      error({statusCode: 404, message: '你访问的页面不存在'})
    }
    // return axios.get('/api/users/' + params.id)
    //   .then((res) => {
    //     return { user: res.data }
    //   })
    //   .catch((e) => {
    //     error({ statusCode: 404, message: 'User not found' })
    //   })
  },
  head () {
    return {
      // title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
