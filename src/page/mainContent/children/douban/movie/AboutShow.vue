<template>
  <div>
    <douban-container title="影院即将上映">
      <a href="" slot="alink">更多></a>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in aboutShowData">
          <douban-content :name="item.name" :cover="item.cover" :time="item.time">
            <p>{{item.wantsee}}人想看</p>
          </douban-content>
        </swiper-slide>
      </swiper>
    </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import doubanContent from '../../../../../components/douban/douban_content'
import {getAboutShow} from '../../../../../api/axios.js'
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
      aboutShowData: null,
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
    getAboutShow().then(res => {
      this.aboutShowData = res.data.abouShow
    })
  }
}
</script> 
</script>

<style lang="scss">
  
</style>
