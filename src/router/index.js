import Vue from 'vue'
import Router from 'vue-router'
import footerBar from '../page/footerBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footerBar',
      component: footerBar
    }
  ]
})
