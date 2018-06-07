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

// const FastClick = require('fastclick')

// document.addEventListener('DOMContentLoaded', function () {
//   FastClick.attach(document.body)
// }, false)
// 创建一个axios实例
const instance = axios.create()
axios.interceptors.request.use = instance.interceptors.request.use
// request拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
    if (localStorage.getItem('token')) {
      config.headers.Authorization = `token ${localStorage.getItem('token')}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// respone拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => { // 默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.setItem('token', '') // 可能是token过期，清除它
          router.replace({  // 跳转到登录页面
            path: '/login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
    }
    return Promise.reject(error.response)
  }
)

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
