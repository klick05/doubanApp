<template>
  <div class="douban_content">
    <img src="http://www.th7.cn/d/file/p/2016/06/17/0d7a90e6600b009c3e2cf9e23cc182f2.jpg" alt="">
    <h4>渗透奶爸</h4>
    <score score="7"></score>
  </div>
</template>

<script>
import score from './score'
export default {
  components: {
    score
  }
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
.douban_content {
  img {
    @include wh(px2rem(100),px2rem(130) )
  }
  h4 {
    font-weight:700;
    font-size: px2rem(14);
  }
  p {
    color: $gray;
    font-size: px2rem(12);
  }
}
</style>
