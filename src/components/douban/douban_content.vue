<template>
  <div class="douban_content">
    <span class="time" v-if="time">{{time}}</span>
    <img :src="cover" alt="">
    <h4>{{name}}</h4>
    <slot></slot>
    <div v-if="ticket" class="ticket">{{ticket}}</div>
  </div>
</template>

<script>
import score from './score'
export default {
  components: {
    score
  },
  props: ['cover', 'name', 'time', 'ticket']
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
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  p {
    color: $gray;
    font-size: px2rem(12);
  }
  .ticket {
    border:1px solid #ff0066;
    @include wh(px2rem(50),px2rem(15))
    border-radius:px2rem(2);
    font-size:px2rem(10);
    color:#ff0066;
    text-align:center;
    margin-top:px2rem(5);
  }
}
</style>
