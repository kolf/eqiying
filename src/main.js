// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import zh from 'vee-validate/dist/locale/zh_CN'
import VeeValidate, { Validator } from 'vee-validate'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Validator.addLocale(zh)
Vue.use(VeeValidate, {
  locale: 'zh_CN'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
