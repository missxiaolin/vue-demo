// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

// 移动端点击300毫秒延迟问题
fastClick.attach(document.body)

// 使用viewport 或者使用 lib-flexible
// import 'lib-flexible'

Vue.config.productionTip = false

// 过滤器
// eslint-disable-next-line
import * as filters from './filters' // global filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
