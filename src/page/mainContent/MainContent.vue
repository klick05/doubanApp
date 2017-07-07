<template>
  <div class="mainContent">
    <router-view></router-view>
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

