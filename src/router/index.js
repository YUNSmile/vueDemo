import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/containers/HelloWorld'
import Test from '@/containers/Test'
import OrderList from '@/containers/OrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
      path: '/basic/trade',
      name: 'trade',
      component:Test
    },{
      path: '/basic/orderList',
      name: 'orderList',
      component:OrderList
    },
  ]
})
