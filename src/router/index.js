import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 每次做路由切换的时候，都让新进入显示的页面 x轴和y轴初始位置是0 ，页面切换回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
