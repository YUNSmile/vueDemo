<template>
	<div>
		<a class="btn" :onClick="goBack">返回首页</a>
		<div>我是一个测试页面</div>
		<router-view></router-view>
	</div>
	
</template>

<script>
export default {
  name: 'Test',
  methods:{
	goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>
</style>