// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueJsonp from 'vue-jsonp'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueJsonp);
Vue.use(Vuex);
console.log('store',store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
