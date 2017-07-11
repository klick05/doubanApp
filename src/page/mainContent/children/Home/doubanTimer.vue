<template>
  <module-one moduleTitle="豆瓣时间" green="yes" blackbj="yes" gray="true">
      <a style="color:#A6AAAF" class="More" href="javascript:;" slot="More">更多专栏></a>
      <swiper :options="swiperOption">
        <swiperSlide v-for="item in timeData">
          <time-item
            :title="item.title"
            :author="item.author"
            :imgSrc="item.imgSrc"
            :num="item.num"
            :introduce="item.introduce"
            :portrait="item.portrait"
            :key="item"
          ></time-item>
        </swiperSlide>
      </swiper>
    </module-one>
</template>

<script>
import moduleOne from '../../../../components/moduleOne/ModuleOne'
import timeItem from './TimerItem'
import {getdoubanTime} from '../../../../api/axios.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    moduleOne,
    timeItem,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        freeModeMomentum: false,
        slidesOffsetBefore: 20,
        freeMode: false,
        freeModeSticky: false,
        freeModeMomentumBounce: true
      },
      timeData: null
    }
  },
  mounted () {
    getdoubanTime().then(res => {
      this.timeData = res.data.doubanTime
    })
  }
}
</script>

<style lang="">
  
</style>

