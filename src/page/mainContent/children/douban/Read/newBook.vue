<template>
  <div>
    <douban-container title="新书速递">
      <a href="" slot="alink">更多></a>
      <swiper :options="swiperOption">
        <swiper-slide  @click.native="$router.push('/stay')" v-for="item in NewBook">
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
import {getNewBook} from '../../../../../api/axios.js'
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
      NewBook: null,
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
    getNewBook().then(res => {
      this.NewBook = res.data.NewBook
    })
  }
}
</script> 
</script>

<style lang="scss">
  
</style>
