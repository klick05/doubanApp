<template>
  <div class="find">
    <module-one moduleTitle="发现" green="yes" gray="true">
      <a style="color:#A6AAAF" class="More" href="javascript:;" slot="More">更多专栏></a>
      <swiper :options="swiperOption">
        <swiperSlide v-for="item in findData">
          <a class="find_item" href="javascript:;">
            <img :src="item" alt="">
          </a>
        </swiperSlide>
      </swiper>
    </module-one>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {getFind} from '../../../api/axios.js'
  import ModuleOne from '../../../components/moduleOne/ModuleOne'
  export default {
    name: 'Find',
    components: {
      swiper,
      swiperSlide,
      ModuleOne
    },
    data () {
      return {
        findData: null,
        swiperOption: {
          slidesPerView: 3.5,
          freeMode: true,
          slidesOffsetBefore: 20,
          freeModeMomentum: false,
          spaceBetween: 10
        }
      }
    },
    mounted () {
      getFind().then(res => {
        this.findData = res.data.findData
      })
    }
  }
</script>

<style lang="scss" scoped>
 @import '../../../style/mixin.scss';
 .find {
  .find_item {
      display:block;
      @include wh(px2rem(100),px2rem(100));
      border-radius:px2rem(5);
      img {
        @include wh(100%,100%)
        border-radius:px2rem(5);
      }
   }
 }
</style>
