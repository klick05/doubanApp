<template>
  <div class="Home">
    <div class="search_top">
      <div class="searchBar">
        <p>影视 图书 唱片 小组等</p>
      </div>
    </div>

    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in imgData">
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 热点 -->
    <Module-one moduleTitle="热点" orange="yes">
      <module-item v-for="(item, index) in hotData" 
               :title="item.title"
               :content="item.content"
               :imgSrc="item.imgSrc"
               :author="item.author"
               :source="item.source"
               :key="index"
               >
      </module-item>
    </Module-one>
    <!-- 豆瓣时间 -->
    <douban-time></douban-time>
    <!--一刻-->
    <module-one moduleTitle="一刻" green="yes">
      <module-item 
        :title="yikeData.title"
        :content="yikeData.content"
        :imgSrc="yikeData.imgSrc"
        :author="yikeData.author"
        :source="yikeData.source"
        :key="yikeData.author"
      >
      </module-item>
    </module-one>
    <!--发现-->
    <find></find>
    <!--为你推荐-->
    <Module-one moduleTitle="为你推荐" green="yes">
      <module-item v-for="(item, index) in recommendData" 
               :title="item.title"
               :content="item.content"
               :imgSrc="item.imgSrc"
               :author="item.author"
               :source="item.source"
               :key="index"
               >
      </module-item>
    </Module-one>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getImg, getHot, getYike, gethomRecommend} from '../../../../api/axios.js'
import moduleOne from '../../../../components/moduleOne/ModuleOne'
import moduleItem from '../../../../components/moduleOne/moduleItem'
import doubanTime from './doubanTimer'
import find from './Find'
export default {
  components: {
    swiper,
    swiperSlide,
    moduleOne,
    moduleItem,
    doubanTime,
    find
  },
  data () {
    return {
      imgData: null,
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto'
      },
      hotData: null,
      yikeData: {},
      recommendData: null
    }
  },
  mounted () {
    getImg().then(res => {
      this.imgData = res.data.imgData
    }, erro => console.log(erro))
    getHot().then(res => {
      this.hotData = res.data.Hotspot
    })
    getYike().then(res => {
      this.yikeData = res.data.yike
    })
    gethomRecommend().then(res => {
      this.recommendData = res.data.homRecommend
    })
  },
  methods: {
    show () {
      console.log(this.yikeData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
.Home {
  padding:px2rem(50) 0 px2rem(50);
  background:$bjgray;
  .search_top {
    @include wh(100%,px2rem(50))
    background: $green;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:100;
    .searchBar {
      @include wh(px2rem(320),px2rem(30));
      background: $bj;
      border-radius:px2rem(5);
      position: absolute;
      bottom:px2rem(6);
      left:px2rem(6);
      &:before {
          content: '';
          display:inline-block;
          position:absolute;
          right:px2rem(-35);
          top:px2rem(4);
          @include wh(px2rem(25),px2rem(25));
          @include bimg('../../../../assets/imge/login.png');
        }
      p {
        position:fixed;
        text-indent: px2rem(30);
        line-height:px2rem(30);
        color:$gray;
        &:before {
          content: '';
          display:inline-block;
          position:absolute;
          left:px2rem(5);
          top:px2rem(5);
          @include wh(px2rem(20),px2rem(20));
          @include bimg('../../../../assets/imge/ic_search_gray.png');
        }
      }
    }
  }

  .banner {
    img {
      @include wh(100%,px2rem(120))
    }
  }
}
</style>
