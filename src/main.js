// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import zh from 'vee-validate/dist/locale/zh_CN'
import VeeValidate, { Validator } from 'vee-validate'
import VueLazyload from 'vue-lazyload'
import Toasted from 'vue-toasted'
import App from './App'
import router from './router'
import loading from './assets/loading.png'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: loading,
    attempt: 1
})

Vue.use(Toasted, {
  position: 'top-center',
  duration: 3000
})

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
