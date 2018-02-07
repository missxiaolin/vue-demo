import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: 'index' */'@/view/Index')
    }
  ]
})
