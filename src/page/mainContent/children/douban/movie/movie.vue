<template>
  <div class="movie">
    <Hot-movie></Hot-movie>
    <div class="Advertisement">
      <span>广告</span>
    </div>
    <about-show></about-show>
    <selectd-list></selectd-list>
  </div>
</template>

<script>
import HotMovie from './hotMoive'
import aboutShow from './AboutShow'
import selectdList from './SelectedList'
export default {
  components: {
    HotMovie,
    aboutShow,
    selectdList
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.movie {
  .Advertisement {
    @include wh(100%, px2rem(120))
    @include bimg('../../../../../assets/imge/banner/banner.jpg');
    position:relative;
    margin-top:px2rem(10);
    span {
      display:block;
      @include wh(px2rem(40), px2rem(20))
      border:2px solid $bj;
      color:$bj;
      border-radius:px2rem(2);
      text-align:center;
      position:absolute;
      bottom:px2rem(10);
      right:px2rem(10);
    }
  }
}
</style>
