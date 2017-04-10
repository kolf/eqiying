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
								 <button type="button" class="btn btn-primary navbar-btn" @click='showLogin = true'>登陆</button>
	             </div>
	          </div>
	      </div>
	  </nav>
		<modal :show.sync="showLogin" effect="fade" small title="登陆">
			<div slot="modal-body" class="modal-body">
				<form>
				  <div class="form-group">
				    <label>用户名</label>
				    <input type="text" class="form-control" placeholder="请输入您的用户名">
				  </div>
				  <div class="form-group">
				    <label>密码</label>
				    <input type="password" class="form-control" placeholder="请输入您的密码">
				  </div>
				  <div class="form-group">
					  <label>验证码</label>
					  <div class="input-group">
						  <input class="form-control" type="text" placeholder="请输入验证码" />
						  <span class="input-group-btn">
							  <button class="btn btn-primary btn-add" type="button">
								  <span class="glyphicon glyphicon-plus"></span>
							  </button>
						  </span>
					  </div>
                </div>
				  <div class="checkbox">
				    <label>
				      <input type="checkbox"> 记住我
				    </label>
				  </div>
				  <div class="form-group"><button type="submit" class="btn btn-primary btn-block btn-lg">确定</button></div>
				</form>
				<p><a href="">忘记密码？</a></p>
			</div>
			<div slot="modal-footer" class="modal-footer">
							<p>没有账号？ <a href="javascript:;" @click="goSignup">马上注册</a></p>
			</div>
		</modal>
	</div>
</template>

<script>
import { modal } from 'vue-strap'

export default {
	components: {
		modal
	},
  data() {
    return {
			isCollapse: true,
			showLogin: false
    }
  },
	props: ['page'],
  methods: {
		toggle(){
			this.isCollapse=!this.isCollapse
		},
		goSignup(){
			this.showLogin = false;
		}
  }
}
</script>
