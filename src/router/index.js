import { createRouter, createWebHistory } from 'vue-router'
//createRouter：创建router实例对象
//createWebHistory：创建gistory模式的路由
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import nav from '@/views/Layout/components/LayoutNav.vue'
import Fixed from '@/views/Layout/components/LayoutFixed.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    
    {
      path:'/',
      name:'L',
      component:Layout,
      children:[
        {
          path:'/',
          component:Fixed
        },
        {
          path:'/',
          component:Home
        },
        {
          path:'category',
          component:Category
        },
        {
          path:'nav',
          component:nav
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
