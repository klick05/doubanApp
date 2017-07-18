<template>
<div class="content_wrap">
        <div class="group_banner">
          <img :src="banner" alt="">
          <span>{{type}}</span>
        </div>
        <slot></slot>
 </div>
</template>

<script>
export default {
  props: ['type', 'banner']
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
  .content_wrap{
      background:$bj;
      padding:px2rem(10);
      margin-top: px2rem(10);
    }
    .group_banner {
      position:relative;
      img {
        @include wh(100%,px2rem(80));
      }
      span {
        position:absolute;
        left:px2rem(10);
        bottom:px2rem(15);
        color:$bj;
      }
    }
</style>
