<template>
	<div class="headerWrapper">
		<div>
			logo
		</div>
		<div class="link">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-menu-item index="1">消息中心</el-menu-item>
			  <el-menu-item index="2">退出</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
export default {
  name: 'comhead',
  data(){
  	return{
  		activeIndex:'1'
  	}
  },
  methods:{
  	handleSelect(index){
  		alert(index)
  	}
  }
}
</script>

<style>
	.headerWrapper{
		display: flex;
		text-align: left;
	}
	.headerWrapper div{
		flex: 3;
	}
	.headerWrapper div.link{
		text-align: right;
		flex: 1;
	}
	.el-menu-demo{
		background: none;
	}
</style>