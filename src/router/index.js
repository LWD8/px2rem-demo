import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const VuePullTo = () => import('@/components/vue-pull-to')
const betterScroll = () => import('@/components/better-scroll')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-pull-to',
      name: 'vue-pull-to',
      component: VuePullTo
    },
    {
      path: '/better-scroll',
      name: 'better-scroll',
      component: betterScroll
    }
  ]
})
