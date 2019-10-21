// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'babel-polyfill'

import thor from 'thor-x'
import 'thor-x/dist/index.css'
Vue.use(thor)

// 移动端点击300毫秒延迟问题
// fastClick.attach(document.body)
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastClick.attach(document.body)
  }, false)
}

// 使用viewport 或者使用 lib-flexible
// import 'lib-flexible'

Vue.config.productionTip = false

// 过滤器
// eslint-disable-next-line
import * as filters from './filters' // global filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$bus = new Vue(); // $on $emit
// 向上通知
Vue.prototype.$dispatch = function(eventName,value){
    let parent = this.$parent;
    while(parent){
        parent.$emit(eventName,value);
        parent = parent.$parent
    }
}
// 向下传递
Vue.prototype.$broadcast = function(eventName,value){
     // 获取当前组件下的所有的孩子
     const broadcast = (children) =>{
        children.forEach(child => {
            child.$emit(eventName,value);
            if(child.$children){
                broadcast(child.$children);
            }
         });
     }
     broadcast(this.$children);
   
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
