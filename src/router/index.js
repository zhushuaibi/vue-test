import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Cart from '@/views/cart/Cart'
import Category from '@/views/category/Category'
import Profile from '@/views/profile/Profile'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
