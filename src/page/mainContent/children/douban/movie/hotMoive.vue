<template>
  <div>
    <douban-container title="影院热映">
      <a href="" slot="alink">更多></a>
      <swiper :options="swiperOption">
        <swiper-slide  @click.native="$router.push('/stay')" v-for="item in HotMovieData">
          <douban-content :name="item.name" :cover="item.cover">
            <score :score="item.score"></score>
          </douban-content>
        </swiper-slide>
      </swiper>
    </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import doubanContent from '../../../../../components/douban/douban_content'
import score from '../../../../../components/douban/score'
import {getHotMovie} from '../../../../../api/axios.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hot-movie',
  components: {
    doubanContainer,
    doubanContent,
    score,
    swiper,
    swiperSlide
  },
  data () {
    return {
      HotMovieData: null,
      swiperOption: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        freeModeMomentum: false,
        freeMode: false,
        slidesOffsetBefore: 10
      }
    }
  },
  mounted () {
    getHotMovie().then(res => {
      this.HotMovieData = res.data.hotMovie
    })
  }
}
</script> 
</script>

<style lang="scss">
  
</style>
