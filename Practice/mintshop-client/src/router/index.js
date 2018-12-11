import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件
import Msite from '@/pages/Msite/Msite.vue';
import Search from '@/pages/Search/Search.vue';
import Order from '@/pages/Order/Order.vue';
import Profile from '@/pages/Profile/Profile.vue';

Vue.use(Router)

export default new Router({
  // history模式：去掉地址中的哈希
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
