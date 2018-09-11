import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: 'index' */'@/view//Index/Index')
    },
    {
      path: '/map',
      name: 'mao',
      component: () => import(/* webpackChunkName: 'index' */'@/view//Map/Map')
    },
    {
      path: '/wx',
      name: 'wx',
      component: () => import(/* webpackChunkName: 'index' */'@/view//Wx/wx')
    },
    {
      path: '/bd',
      name: 'bd',
      component: () => import(/* webpackChunkName: 'index' */'@/view//Bd/bd')
    },
    {
      path: '/bd/index',
      name: 'bdIndex',
      component: () => import(/* webpackChunkName: 'index' */'@/view//Bd/index')
    }
  ]
})
