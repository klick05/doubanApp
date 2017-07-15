<template>
  <div class="local">
    <div class="s_city">
      <div class="s_left">
        当前城市：<span>北京</span>
      </div>
      <div class="s_right">
        <span>类型 时间 地点 </span> 
      </div>
    </div>
    <hot-activity></hot-activity>
    <doubanContainer title="编辑推荐">
        
    </doubanContainer>
  </div>
</template>

<script>
import hotActivity from './hotActivity'
import doubanContainer from '../../../../../components/douban/douban_container'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    hotActivity,
    doubanContainer,
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.s_city {
  @include wh(100%, px2rem(50));
  margin-top:px2rem(20);
  line-height:px2rem(50);
  @include flex();
  div {
    @include wh(49.8%,100%);
    background: $bj;
    text-indent:px2rem(20);
    font-size:px2rem(14);
    position:relative;
    color: $gray;
     span {
      color:$green;
      &:after{
        content:'';
        display:block;
        @include bimg('../../../../../assets/imge/ic_seti_arrow_right_gray.png');
        @include wh(px2rem(15), px2rem(20));
        position:absolute;
        top:px2rem(15);
        right:px2rem(5);
      }
    }
  }
  .s_right{
    span{
      color: $gray;
    }
  }
}
</style>
