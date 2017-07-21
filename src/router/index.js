import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '../page/mainContent/MainContent.vue'
const douban = r => require.ensure([], () => r(require('../page/mainContent/children/douban/douban.vue')), 'group-foo')
const login = r => require.ensure([], () => r(require('../page/Login/login.vue')), 'login')
const Home = r => require.ensure([], () => r(require('../page/mainContent/children/Home/Home.vue')), 'home')
const Group = r => require.ensure([], () => r(require('../page/mainContent/children/group/group.vue')), 'Group')
const broadcast = r => require.ensure([], () => r(require('../page/mainContent/children/broadcast/broadcast.vue')), 'broadcast')
const main = r => require.ensure([], () => r(require('../page/mainContent/children/Mine/mine.vue')), 'broadcast')
const movie = r => require.ensure([], () => r(require('../page/mainContent/children/douban/movie/movie.vue')), 'movie')
const read = r => require.ensure([], () => r(require('../page/mainContent/children/douban/Read/Read.vue')), 'read')
const tv = r => require.ensure([], () => r(require('../page/mainContent/children/douban/Tv/TV.vue')), 'tv')
const local = r => require.ensure([], () => r(require('../page/mainContent/children/douban/local/local.vue')), 'local')
const music = r => require.ensure([], () => r(require('../page/mainContent/children/douban/music/music.vue')), 'music')
const search = r => require.ensure([], () => r(require('../page/search/hom-search.vue')), 'search')
const stay = r => require.ensure([], () => r(require('../page/stay/stay.vue')), 'stay')
const BMsearch = r => require.ensure([], () => r(require('../page/search/bookmovie-search.vue')), 'BookmovieSearch')
import start from '../page/stay/start.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent,
      redirect: '/start',
      children: [
        {
          path: 'Home',
          component: Home,
          meta: { keepAlive: true }
        },
        {
          path: 'douban',
          component: douban,
          meta: { keepAlive: true },
          children: [
            {
              path: 'movie',
              component: movie,
              meta: { keepAlive: true }
            },
            {
              path: 'read',
              component: read,
              meta: { keepAlive: true }
            },
            {
              path: 'tv',
              component: tv,
              meta: { keepAlive: true }
            },
            {
              path: 'local',
              component: local,
              meta: { keepAlive: true }
            },
            {
              path: 'music',
              component: music,
              meta: { keepAlive: true }
            }
          ]
        },
        {
          path: 'broadcast',
          component: broadcast,
          meta: { keepAlive: true }
        },
        {
          path: 'main',
          component: main,
          meta: { keepAlive: true }
        },
        {
          path: 'Group',
          component: Group,
          meta: { keepAlive: true }
        }
      ]
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/login',
      component: login,
      meta: { keepAlive: true }
    },
    {
      path: '/search',
      component: search,
      meta: { keepAlive: true }
    },
    {
      path: '/stay',
      component: stay,
      meta: { keepAlive: true }
    },
    {
      path: '/bksearch',
      component: BMsearch,
      meta: { keepAlive: true }
    }
  ]
})
