<template>
  <div class="Home">
    <div class="search_top">
      <div class="searchBar">
        <p>影视 图书 唱片 小组等</p>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
@import '../../../style/mixin.scss';
  .search_top {
    @include wh(100%,px2rem(50))
    background: $green;
    position:relative;
    .searchBar {
      @include wh(px2rem(320),px2rem(30));
      background: $bj;
      border-radius:px2rem(5);
      position: absolute;
      bottom:px2rem(6);
      left:px2rem(6);
      &:before {
          content: '';
          display:inline-block;
          position:absolute;
          right:px2rem(-35);
          top:px2rem(4);
          @include wh(px2rem(25),px2rem(25));
          @include bimg('../../../assets/imge/login.png');
        }
      p {
        position:fixed;
        text-indent: px2rem(30);
        line-height:px2rem(30);
        &:before {
          content: '';
          display:inline-block;
          position:absolute;
          left:px2rem(5);
          top:px2rem(5);
          @include wh(px2rem(20),px2rem(20));
          @include bimg('../../../assets/imge/ic_search_gray.png');
        }
      }
    }
  }
</style>
