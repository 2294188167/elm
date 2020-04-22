import Vue from 'vue'
import Router from 'vue-router'
import indent from '@/components/indent'
import live from '@/components/live'
import my from '@/components/my'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:home
    },
    {
      path: '/home',
      name: 'home',
      component:home
    },
     {
      path: '/indent',
      name: 'indent',
      component: indent
    }, {
      path: '/my',
      name: 'my',
      component: my
    },
     {
      path: '/live',
      name: 'live',
      component: live
    },
  ]
})
