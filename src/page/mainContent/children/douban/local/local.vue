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
        <swiper :options="swiperOption">
          <swiperSlide v-for="item in bjtjData">
            <img :src="item" alt="">
          </swiperSlide>
        </swiper>
    </doubanContainer>
    <official></official>
  </div>
</template>

<script>
import hotActivity from './hotActivity'
import official from './official'
import doubanContainer from '../../../../../components/douban/douban_container'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getLocal} from '../../../../../api/axios.js'
export default {
  components: {
    hotActivity,
    doubanContainer,
    swiper,
    swiperSlide,
    official
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.1,
        spaceBetween: 0,
        freeModeMomentum: false,
        freeMode: false
      },
      bjtjData: null
    }
  },
  mounted () {
    getLocal().then(res => {
      this.bjtjData = res.data.bjtj
    })
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
        background:url('../../../../../assets/imge/ic_seti_arrow_right_gray.png') no-repeat;
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
.local {
  img {
    border-radius:px2rem(5);
    @include wh(px2rem(150),px2rem(150))
  }
}
</style>
