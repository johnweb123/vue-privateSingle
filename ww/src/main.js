// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/download/font_522855_f4x391iu0yagiudi/iconfont.css'
import axios from 'axios'
import qs from 'qs'
import store from './store'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

// axios.defaults.headers.post['Content-type'] = 'application/x-form-urlencoded'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.use(YDUI)

// 创建一个axios实例
// const instance = axios.create()
// // request拦截器
// // debugger
// axios.interceptors.request.use(config => {
//   //在发送请求之前做某事
//   console.log(config.headers)
//   let token = localStorage.getItem('token')
//   if (token) {
//     config.headers.common.Authorization = token
//   }
//   return config
//  }, err => {
//   //请求错误时做些事
//   return Promise.reject(err);
//  })
// // response拦截器
// axios.interceptors.response.use(res => {
//   if (res.headers.token) {
//     localStorage.setItem('token', res.headers.token)
//   }
//   return res
// }, err => {
//   return err
// })


//  路由导航
router.beforeEach((to, form, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requiresAuth) {  //  判断该路由是否需要登录权限
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 判断该路由是否需要登录权限
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
