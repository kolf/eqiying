import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import User from '@/page/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/user',
      component: User
    }
  ]
})
