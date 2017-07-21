<template>
  <div>
    <douban-container title="近期值得看的日剧">
      <a href="" slot="alink">更多></a>
      <swiper :options="swiperOption">
        <swiper-slide  @click.native="$router.push('/stay')" v-for="item in Riju">
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
import {gettodayUp} from '../../../../../api/axios.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    doubanContainer,
    doubanContent,
    score,
    swiper,
    swiperSlide
  },
  data () {
    return {
      Riju: null,
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
    gettodayUp().then(res => {
      this.Riju = res.data.Riju
    })
  }
}
</script> 
</script>

<style lang="scss">
  
</style>
