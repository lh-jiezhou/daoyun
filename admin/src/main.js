import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

// 从http.js中导入axios 数据请求接口
import http from './http'
import http_egg from './http_egg' 
// 并将其加入的Vue的实例(原型)属性当中,以后在任意页面可以this.http访问
Vue.prototype.$http = http
Vue.prototype.$http_egg = http_egg

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
