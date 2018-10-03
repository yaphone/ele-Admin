import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ControlPanel from '@/components/ControlPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/control',
      name: 'ControlPanel',
      component: ControlPanel
    }
  ]
})
