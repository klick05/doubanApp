<template>
  <div class="douban_content">
    <span class="time" v-if="time">{{time}}</span>
    <img :src="cover" alt="">
    <h4>{{name}}</h4>
    <slot></slot>
  </div>
</template>

<script>
import score from './score'
export default {
  components: {
    score
  },
  props: ['cover', 'name', 'time']
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
.douban_content {
  .time {
    line-height:px2rem(20);
    background:none;
    color:$gray;
  }
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
