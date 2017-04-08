<template>
	<div class="app-header">
		<nav class="navbar navbar-default">
	        <div class="container">
	            <div class="navbar-header">
	                <button type="button" class="navbar-toggle collapsed" @click="toggle">
	                <span class="sr-only">Toggle</span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	              </button>
									<router-link class="navbar-brand" to="/">一起赢</router-link>
	            </div>

	            <div class="navbar-collapse" :class="{collapse: isCollapse}">
	                <ul class="nav navbar-nav">
	                    <router-link tag="li" to="/index" active-class="active"><a>首页</a></router-link>
	                    <router-link tag="li" to="/projects" active-class="active"><a>活动专区</a></router-link>
	                    <router-link tag="li" to="/mall" active-class="active"><a>积分商城</a></router-link>
	                    <router-link tag="li" to="/user" active-class="active"><a>个人中心</a></router-link>
	                </ul>
	               <div class="navbar-right">
									 <router-link tag="button" to="/signup" class="btn btn-default navbar-btn">注册</router-link>
									 <router-link tag="button" to="/signin" class="btn btn-primary navbar-btn">登陆</router-link>
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
			isCollapse: true
    }
  },
	props: ['page'],
  methods: {
		toggle(){
			this.isCollapse=!this.isCollapse
		}
  }
}
</script>
