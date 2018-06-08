<template>
	<div>
		<el-menu
	      :default-active="active"
	      class="el-menu-vertical-demo"
	      :router="isRouter"
	      :unique-opened='true'
	      @open="handleOpen"
	      @close="handleClose">
	      
	  <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/basic/trade">我要发货</el-menu-item>
          <el-menu-item index="/basic/orderList">我的货单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/basic/kh">合作客户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
	</div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
  	return{
  		isRouter:true,
  		active:'/'
  	}
  },
  created: function () {
    // `this` 指向 vm 实例
    this.active=this.$route.path;
  },
  methods:{
  	handleOpen(key, keyPath) {
		console.log(key, keyPath);
	},
	handleClose(key, keyPath) {
	    console.log(key, keyPath);
	}
  }
}
</script>

<style>
</style>