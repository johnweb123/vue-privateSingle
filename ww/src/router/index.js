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
const commissionList = resolve => require(['@/page/personalCenter/commissionList.vue'], resolve)
const logout = resolve => require(['@/page/logout.vue'], resolve)
const register = resolve => require(['@/page/register.vue'], resolve)
const articleDetails = resolve => require(['@/page/components/articleDetails.vue'], resolve)
const upgradeUser = resolve => require(['@/page/personalCenter/upgradeUser.vue'], resolve)
const commissionDetails = resolve => require(['@/page/personalCenter/commissionDetails.vue'], resolve)
const eweima = resolve => require(['@/page/personalCenter/eweima.vue'], resolve)
const findPassword = resolve => require(['@/page/findPassword.vue'], resolve)
const QRCode = resolve => require(['@/page/share/QRCode.vue'], resolve)
const pay = resolve => require(['@/page/components/pay.vue'], resolve)
const success = resolve => require(['@/page/success.vue'], resolve)
const directMessagesList = resolve => require(['@/page/personalCenter/directMessagesList.vue'], resolve)
const directMessages = resolve => require(['@/page/personalCenter/directMessages.vue'], resolve)
const details = resolve => require(['@/page/personalCenter/details.vue'], resolve)

// Adair
const generalize = resolve => require(['@/page/personalCenter/generalize.vue'], resolve)
const container = resolve => require(['@/page/container.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/container',
      name: 'container',
      component: container,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home,
          meta: {
            requiresAuth: true  //  添加该字段,表示进入这个路由是需要登录权限的
          }
        },
        {
          path: 'share',
          name: 'share',
          component: share,
          meta: {
            requiresAuth: true  //  添加该字段,表示进入这个路由是需要登录权限的
          }
        },
        {
          path: 'message',
          name: 'message',
          component: message,
          meta: {
            requiresAuth: true  //  添加该字段,表示进入这个路由是需要登录权限的
          }
        },
        {
          path: 'personalCenter',
          name: 'personalCenter',
          component: personalCenter,
          meta: {
            requiresAuth: true  //  添加该字段,表示进入这个路由是需要登录权限的
          }
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
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
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
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
      name: 'article',
      component: article
    },
    {
      path: '/commissionList',
      name: 'commissionList',
      component: commissionList
    },
    {
      path: '/commissionDetails',
      name: 'commissionDetails',
      component: commissionDetails
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: articleDetails
    },
    {
      path: '/upgradeUser',
      name: 'upgradeUser',
      component: upgradeUser
    },
    {
      path: '/eweima',
      name: 'eweima',
      component: eweima
    },
    {
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/directMessagesList',
      name: 'directMessagesList',
      component: directMessagesList
    },
    {
      path: '/directMessages',
      name: 'directMessages',
      component: directMessages
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    //   二维码页面
    {
      path: '/QRCode',
      name: 'QRCode',
      component: QRCode
    }
  ]
})
