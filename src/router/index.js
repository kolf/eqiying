import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import User from '@/page/User'
import Projects from '@/page/Projects'
import Mall from '@/page/Mall'
import Signup from '@/page/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'home',
      component: Home
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/projects',
      name: 'projects',
      component: Projects
    },{
      path: '/mall',
      name: 'mall',
      component: Mall
    },{
      path: '/signup',
      name: 'signup',
      component: Signup
    },{
	    path: '*',
    	component: Home
    }
  ]
})
