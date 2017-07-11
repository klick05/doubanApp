<template>
  <div class="movie">
    <movit-hot title="影院热映">
      <a href="" slot="alink">更多></a>
      <item></item>
    </movit-hot>
  </div>
</template>

<script>
import movitHot from '../../../../components/douban/douban_container'
import item from '../../../../components/douban/douban_content'
export default {
  components: {
    movitHot,
    item
  }
}
</script>

<style lang="scss">
@import '../../../../style/mixin.scss';
.movie {
}
</style>
