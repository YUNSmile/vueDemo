<template>
  <div id="app">
  	<a class="btn" href="./one.html">Go to one</a>
  	<router-link to="/test" class="btn">Go to Test</router-link>
    <img src="../../assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
