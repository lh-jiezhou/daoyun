import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//引用Main组件
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    // router-view 子路由连接children
    children: [
      // path定义的路由路径, component对应的vue文件(引用的组件)
      { path: '/categories/create', component: CategoryEdit},
      // props: true 表示把path中url的参数都注入到CategoryEdit页面里面(在里边注意先接收)
      { path: '/categories/edit/:id', component: CategoryEdit, props: true},
      { path: '/categories/list', component: CategoryList}
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
