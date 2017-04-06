<template>
	<div class="app-header">
		<nav class="navbar navbar-default">
	        <div class="container">
	            <div class="navbar-header">
	                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-header-collapse" aria-expanded="false">
	                <span class="sr-only">Toggle navigation</span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	              </button>
	                <a class="navbar-brand" href="#">一起赢</a>
	            </div>

	            <div class="collapse navbar-collapse" id="navbar-header-collapse">
	                <ul class="nav navbar-nav">
	                    <li><router-link to="/index" >首页</router-link></li>
	                    <li><router-link to="/projects" >活动专区</router-link></li>
	                    <li><router-link to="/mall" >积分商城</router-link></li>
	                    <li><router-link to="/user" >个人中心</router-link></li>
	                </ul>
	               <div class="navbar-right">
	                 <button type="button" class="btn btn-default navbar-btn">注册</button>
	                 <button type="button" class="btn btn-primary navbar-btn">登陆</button>
	               </div>
	            </div>
	        </div>
	    </nav>
	</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
	props: ['page'],	
  methods: {
   
  }
}
</script>