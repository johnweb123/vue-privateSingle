import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['@/page/home.vue'], resolve)
const personalCenter = resolve => require(['@/page/personalCenter/personalCenter.vue'], resolve)
const message = resolve => require(['@/page/message/message.vue'], resolve)
const share = resolve => require(['@/page/share/share.vue'], resolve)
const notFound = resolve => require(['@/page/not-found.vue'], resolve)

// Abner
const showRecords = resolve => require(['@/page/personalCenter/showRecords.vue'], resolve)
const incomeDetails = resolve => require(['@/page/personalCenter/incomeDetails.vue'], resolve)
const login = resolve => require(['@/page/login.vue'], resolve)
const loanIncomeDetails = resolve => require(['@/page/personalCenter/loanIncomeDetails.vue'], resolve)
const promotionIncomeDetails = resolve => require(['@/page/personalCenter/promotionIncomeDetails.vue'], resolve)
const listFriends = resolve => require(['@/page/personalCenter/listFriends.vue'], resolve)
const myData = resolve => require(['@/page/personalCenter/myData.vue'], resolve)
const myWallet = resolve => require(['@/page/personalCenter/myWallet.vue'], resolve)
const article = resolve => require(['@/page/components/article.vue'], resolve)

// Adair
const generalize = resolve => require(['@/page/personalCenter/generalize.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'name',
      component: home,
      meta: {
        requireAuth: true  //  添加该字段,表示进入这个路由是需要登录权限的
      }
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '*',
      component: notFound
    },
    {
      path: '/showRecords',
      name: 'showRecords',
      component: showRecords
    },
    {
      path: '/incomeDetails',
      name: 'incomeDetails',
      component: incomeDetails
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/generalize',
      name: 'generalize',
      component: generalize
    },
    {
      path: '/loanIncomeDetails',
      name: 'loanIncomeDetails',
      component: loanIncomeDetails
    },
    {
      path: '/promotionIncomeDetails',
      name: 'promotionIncomeDetails',
      component: promotionIncomeDetails
    },
    {
      path: '/listFriends',
      name: 'listFriends',
      component: listFriends
    },
    {
      path: '/myData',
      name: 'myData',
      component: myData
    },
    {
      path: '/myWallet',
      name: 'myWallet',
      component: myWallet
    },
    {
      path: '/article',
      component: article
    }
  ]
})
