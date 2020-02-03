import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/views/Board.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: Board
  },
  {
    path: '/form/:func',
    name: 'form',
    component: () => import('@/views/BoardForm.vue'),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      if (routeTo.params.func != 'sign-up' && routeTo.params.func != 'login') {
        next({ name: '404' })
      } else {
        next()
      }
    }
  },
  {
    // <-- Stop user from navigate unexisted page
    path: '/404',
    name: '404',
    component: () => import('@/components/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
