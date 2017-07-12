<template>
  <div class="douban_container">
    <div class="douban_container_title">
      <h2>{{title}}</h2>
      <slot name="alink"></slot>
    </div>
    <slot></slot>
    <a v-if="more" class="ViewMore" href="">查看更多></a>
  </div>
</template>

<script>
export default {
  name: 'douban_container',
  props: ['title', 'more']
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.douban_container {
  margin-top:px2rem(10);
  background: $bj;
  padding:px2rem(20) px2rem(15);
  .douban_container_title {
    @include flex()
    h2 {
      font-weight:700;
      font-size: px2rem(16);
      margin-bottom:px2rem(20);
    }
    a {
      color: $green;
    }
  }
  .ViewMore {
    display:block;
    @include wh(100%,px2rem(50))
    line-height:px2rem(60);
    text-align:center;
    color: $green;
    font-size:px2rem(14);
  }
}
</style>
