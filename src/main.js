/**
 * 第一个router的例子
 */

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App'
// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes:[
//     { path: '/', component: resolve => require(['./components/hello.vue'], resolve) },
//   ]
// })
// const app = new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
