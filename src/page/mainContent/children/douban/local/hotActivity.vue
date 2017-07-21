<template>
  <div>
    <douban-container title="热门活动">
      <a href="" slot="alink">更多></a>
      <swiper :options="swiperOption">
        <swiper-slide  @click.native="$router.push('/stay')" v-for="item in getLocal">
          <douban-content :name="item.name" :cover="item.cover" :ticket="item.ticket">
            <p>{{item.date}}</p>
          </douban-content>
        </swiper-slide>
      </swiper>
    </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import doubanContent from '../../../../../components/douban/douban_content'
import {getLocal} from '../../../../../api/axios.js'
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
      getLocal: null,
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
    getLocal().then(res => {
      this.getLocal = res.data.hotA
    })
  }
}
</script> 
</script>

<style lang="scss">
  
</style>
