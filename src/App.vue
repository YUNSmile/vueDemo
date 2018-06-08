<template>
  <div id="app">
  	<el-container>
		  <el-header>
		  	<com-head/>
		  </el-header>
		  <el-container>
		    <el-aside width="200px">
		    		<com-menu/>
		    </el-aside>
		    <el-main>
		    		<router-view/>
		    </el-main>
		  </el-container>
		</el-container>
  	<!--<router-link to="/test" class="btn">Go to Test</router-link>
    <img src="./assets/logo.png">
    <router-view/>-->
  </div>
</template>

<script>
import ComHead from '@/components/layout/header'
import ComMenu from '@/components/layout/menu'

export default {
  name: 'App',
  components:{
  	ComHead,
  	ComMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn{
	display: block;
	background: #42B983;
	color: white;
	width: 180px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	margin:20px auto;
	text-decoration: none;
	cursor: pointer;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
</style>
