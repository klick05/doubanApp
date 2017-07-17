<template>
  <div id="app">
   <transition name="appRoute" out-in>
    <router-view></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/comment.scss';
.appRoute-enter-active, .appRoute-leave-active {
  transition: opacity .3s;
}
.appRoute-enter, .appRoute-leave-to {
  opacity: 0;
}
</style>
