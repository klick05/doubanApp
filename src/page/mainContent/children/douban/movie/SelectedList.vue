<template>
  <div class="selectedList">
    <douban-container title="精选榜单">
      <swiper :options="swiperOption">
        <swiper-slide v-for="itme in listData">
          <img :src="itme" alt="">
        </swiper-slide>
      </swiper>
    </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getList} from '../../../../../api/axios.js'
export default {
  components: {
    doubanContainer,
    swiper,
    swiperSlide
  },
  data () {
    return {
      listData: null,
      swiperOption: {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeModeMomentum: false,
        freeMode: false,
        slidesOffsetBefore: 10
      }
    }
  },
  mounted () {
    getList().then(res => {
      this.listData = res.data.SelectList
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.selectedList {
  img {
    @include wh(px2rem(150),px2rem(150));
    border-radius:px2rem(5);
  }
}
</style>
