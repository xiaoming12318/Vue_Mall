import { createRouter, createWebHistory } from 'vue-router'
//createRouter：创建router实例对象
//createWebHistory：创建gistory模式的路由
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path:'category/:id',
          component: Category 
        },
        {
          path:'category/sub/:id',
          component: SubCategory 
        }
      ]
    },
    
    
    
    
    // {
    //   path:'/login',
    //   component:Login
    // }
  ]
})

export default router
