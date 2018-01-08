<template>
	<div class="hd">
		<mt-header :title="title">
			<!-- <router-link to="/" slot="left"> -->
				<mt-button icon="back" @click="goback" slot="left">返回</mt-button>
			<!-- </router-link> -->
			<mt-button icon="more" slot="right"></mt-button>
    	</mt-header>
	</div>
</template>
<style lang="scss">
	.mint-header{
		background:#fff;color:#333;
	}
</style>
<script>
export default {
	 head () {
		return {
			meta: [
				{ hid: 'description', name: 'description', content: this.title,id:'hapj-wap-title' }
			]
		}
  	},
   	props: {
	  title: [String]
	},
	methods:{
		goback(){
			history.go(-1)
		}
	}
}
</script>

