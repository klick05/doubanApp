<template>
  <div class="mainContent">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
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

<style lang="">

</style>

