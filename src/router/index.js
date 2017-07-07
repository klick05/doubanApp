import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/mainContent/children/Home.vue'
import mainContent from '../page/mainContent/MainContent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent,
      children: [
        {
          path: 'Home',
          component: Home
        }
      ]
    }
  ]
})
