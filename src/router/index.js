import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '概况', icon: 'example' },
      component: layout,
      children: [{
        path: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '简介' }
      }]
    },  
  ]
})

