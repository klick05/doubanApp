<template>
  <div class="mainContent">
  <transition name="main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <transition name="main">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from '../footerBar/footerBar'
export default {
  components: {
    footerBar
  }
}
</script>

<style lang="scss" scoped>
.main-enter-active, .main-leave-active {
  transition: opacity .5s;
}
.main-enter, .main-leave-active {
  opacity: 0;
}
</style>

