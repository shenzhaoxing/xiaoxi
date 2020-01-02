import Vue from 'vue'
import VueRouter from 'vue-router'

import Xiao from '../views/Xiao'
import My from '../views/My'
import Kong from '../views/Kong'

Vue.use(VueRouter)

const routes = [
  {
    path:'/xiao',
    component:Xiao
  },
  {
    path:'/my',
    component:My
  },
  {
    path:'/kong',
    component:Kong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
