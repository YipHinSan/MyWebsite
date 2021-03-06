import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path:'/python',
    name:'Python',
    component: () => import('../views/Python.vue')
  },
  {
    path:'/htmlcss',
    name:'Htmlcss',
    component: () => import('../views/Htmlcss.vue')
  },
  {
    path:'/javascript',
    name:'Js',
    component: () => import('../views/Js.vue')
  },
  {
    path:'/generation',
    name:'Generation',
    component: () => import('../views/Generation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
