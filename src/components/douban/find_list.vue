<template>
<div class="Find_list">
        <div class="list_left">
          <h2>{{title}}</h2>
          <p>{{number}}收藏</p>
        </div>
        <div class="list_right">
          <img :src="imgSrc" alt="">
        </div>
 </div>
</template>

<script>
export default {
  name: 'Find_list',
  props: ['title', 'number', 'imgSrc']
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.Find_list {
  @include flex();
  padding-bottom:px2rem(10);
  border-bottom:1px solid #cccccc;
  margin-top: px2rem(10);
  .list_left {
    h2 {
      font-weight:900;
    }
    p {
      color: $gray;
      line-height:px2rem(30);
    }
  }
  .list_right {
    img {
      @include wh(px2rem(50), px2rem(50))
    }
  }
}
</style>
