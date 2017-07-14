<template>
  <div class="TV">
    <today-up></today-up>
    <domestic></domestic>
    <riju></riju>
    <zongyi></zongyi>
  </div>
</template>

<script>
import todayUp from './todayUp'
import domestic from './domestic'
import riju from './Riju'
import zongyi from './Zongyi'
export default {
  components: {
    todayUp,
    domestic,
    riju,
    zongyi
  }
}
</script>

<style lang="scss" scoped>
  
</style> 
