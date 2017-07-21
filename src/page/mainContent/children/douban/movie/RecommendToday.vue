<template>
  <div>
    <douban-container title="今日推荐影人">
      <swiper :options="swiperOption">
        <swiper-slide  @click.native="$router.push('/stay')" v-for="item in filmData">
          <douban-content :name="item.name" :cover="item.cover">
            <p>{{item.remarks}}</p>
          </douban-content>
        </swiper-slide>
      </swiper>
    </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import doubanContent from '../../../../../components/douban/douban_content'
import {getFilm} from '../../../../../api/axios.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hot-movie',
  components: {
    doubanContainer,
    doubanContent,
    swiper,
    swiperSlide
  },
  data () {
    return {
      filmData: null,
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
    getFilm().then(res => {
      this.filmData = res.data.RecommendToday
    })
  }
}
</script> 
</script>

<style lang="scss">
  
</style>
