import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '../page/mainContent/MainContent.vue'
const douban = r => require.ensure([], () => r(require('../page/mainContent/children/douban/douban.vue')), 'group-foo')
const Home = r => require.ensure([], () => r(require('../page/mainContent/children/Home/Home.vue')), 'home')
const broadcast = r => require.ensure([], () => r(require('../page/mainContent/children/broadcast/broadcast.vue')), 'broadcast')
const main = r => require.ensure([], () => r(require('../page/mainContent/children/Mine/mine.vue')), 'broadcast')
const movie = r => require.ensure([], () => r(require('../page/mainContent/children/douban/movie/movie.vue')), 'movie')
const read = r => require.ensure([], () => r(require('../page/mainContent/children/douban/Read/Read.vue')), 'read')
const tv = r => require.ensure([], () => r(require('../page/mainContent/children/douban/Tv/TV.vue')), 'tv')
const local = r => require.ensure([], () => r(require('../page/mainContent/children/douban/local/local.vue')), 'local')
const music = r => require.ensure([], () => r(require('../page/mainContent/children/douban/music/music.vue')), 'music')
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
              component: movie,
              mata: { keepAlive: true }
            },
            {
              path: 'read',
              component: read,
              mata: { keepAlive: true }
            },
            {
              path: 'tv',
              component: tv,
              mata: { keepAlive: true }
            },
            {
              path: 'local',
              component: local,
              mata: { keepAlive: true }
            },
            {
              path: 'music',
              component: music,
              mata: { keepAlive: true }
            }
          ]
        },
        {
          path: 'broadcast',
          component: broadcast,
          mata: { keepAlive: true }
        },
        {
          path: 'main',
          component: main,
          mata: { keepAlive: true }
        }
      ]
    }
  ]
})
