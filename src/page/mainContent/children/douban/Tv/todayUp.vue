<template>
  <douban-container title="今日更新" more="">
    <a slot="alink" href="javascript">更多></a>
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="todayUp_item">
          <div class="item_left">
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2468698085.jpg" alt="">
          </div>
          <div class="item_right">
            <h3>大军师司马懿只军事联盟</h3>
            <score score=7.2></score>
            <p>更新至39集/每天更新/优酷视频</p>
            <p>10147人想看</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
      
  </douban-container>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import score from '../../../../../components/douban/score'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import {getImaginary} from '../../../../../api/axios.js'
export default {
  components: {
    doubanContainer,
    score,
    swiper,
    swiperSlide
  },
  data () {
    return {
      todayTv: null,
      swiperOption: {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.todayUp_item {
  border:1px solid #cccccc;
  padding:px2rem(10);
  @include flex();
  @include wh(px2rem(320),px2rem(150))
  .item_left {
    img {
      @include wh(px2rem(100),px2rem(130))
    }
  }
  .item_right {
    width:px2rem(190);
    h3 {
      font-size:px2rem(16);
      margin-bottom:px2rem(10);
    }
    p {
      line-height:px2rem(20);
      color:$gray;
    }
  }
}
</style>
