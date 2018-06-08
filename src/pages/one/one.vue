<template>
	<div id="one">
		<div :click="goBack">返回</div>
		<div>我是页面one</div>
		<router-view/>
	</div>
</template>

<script>
export default{
    name:'One',
    methods:{
    	goBack:()=>{
    		window.history.length > 1? this.$router.go(-1): this.$router.push('/')
    	}
    }
}
</script>

<style>
</style>