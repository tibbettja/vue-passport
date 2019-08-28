import Vue from 'vue'
import Router from 'vue-router'
import checkLoggedIn from '../common/route-auth'
import landing from '@/components/landing'
import signup from '@/components/signup'
import login from '@/components/login'
import logout from '@/components/logout'
import account from '@/components/account'
import home from '@/components/home'
import forohfor from '@/components/forohfor'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '*',
      name: 'forohfor',
      component: forohfor
    }
  ]
})

router.beforeEach(checkLoggedIn)

export default router
