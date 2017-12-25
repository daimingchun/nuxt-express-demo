<template>
<div>
	<div class="">
		<div>我是子组件cell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button @click="updateData">点我</button></div>
		
		<div>我的名字叫{{value}}</div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default {
	  name: 'cell',
	  props: {
	  	value: [String]
	  },
	  head: {
	    title: '这是自定义title',
	  },
  	data(){
  		return {

  		}
  	},
  	methods: {
  		updateData(){
  			this.$emit('onClick', '我是被点击触发的😯')
  		}
  	}
	}
</script>

