import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/views/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{

        path: '/first',
        name: 'First',
        meta: {
          title: '系统首页'
        },
        component: () => import('../components/views/First.vue')
      }]
    },
    {
      path: '/404',
      component: () => import('../components/views/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
