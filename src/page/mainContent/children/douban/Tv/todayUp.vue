<template>
  <douban-container title="今日更新" more="">
    <a slot="alink" href="javascript">更多></a>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in todayTv">
        <div class="todayUp_item">
          <div class="item_left">
            <img :src="item.cover" alt="">
          </div>
          <div class="item_right">
            <h3>{{item.name}}</h3>
            <score :score="item.score"></score>
            <p>{{item.status}}</p>
            <p>{{item.num}}人想看</p>
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
import {gettodayUp} from '../../../../../api/axios.js'
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
        slidesPerView: 1.1,
        spaceBetween: 40,
        freeModeMomentum: false,
        freeMode: false,
        slidesOffsetAfter: 20
      }
    }
  },
  mounted () {
    gettodayUp().then(res => {
      this.todayTv = res.data.todayUp
    })
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
