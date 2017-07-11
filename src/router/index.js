import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '../page/mainContent/MainContent.vue'
import movie from '../page/mainContent/children/douban/movie.vue'
const douban = r => require.ensure([], () => r(require('../page/mainContent/children/douban/douban.vue')), 'group-foo')
const Home = r => require.ensure([], () => r(require('../page/mainContent/children/Home/Home.vue')), 'home')
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
          component: Home,
          mata: { keepAlive: true }
        },
        {
          path: 'douban',
          component: douban,
          mata: { keepAlive: true },
          children: [
            {
              path: 'movie',
              component: movie
            }
          ]
        }
      ]
    }
  ]
})
