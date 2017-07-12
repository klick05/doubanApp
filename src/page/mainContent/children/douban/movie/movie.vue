<template>
  <div class="movie">
    <Hot-movie></Hot-movie>
    <div class="Advertisement">
      <span>广告</span>
    </div>
    <about-show></about-show>
    <selectd-list></selectd-list>
    <recommend-today></recommend-today>
    <probably-movie></probably-movie>
    <film-critic></film-critic>
    <douban-container title="选电影">
      <div class="selectMovie">
        <div>
          <a href="">经典</a>
          <a href="">豆瓣高分</a>
          <a href="">冷门佳片</a>
        </div>
        <div>
          <a href="">剧情</a>
          <a href="">爱情</a>
          <a href="">戏剧</a>
          <a href="">科幻</a>
          <a href="">动作</a>
          <a href="">悬疑</a>
          <a href="">治愈</a>
          <a href="">青春</a>
          <a href="">文艺</a>
          <a href="">文艺</a>
          <a href="">文艺</a>
        </div>
        <div>
          <a href="">日本</a>
          <a href="">韩国</a>
        </div>
    </div>
    </douban-container>
    <douban-find title="发现好电影" describe="豆瓣网友制作的电影榜单">
      <find-list v-for="item in FindData" :title="item.title" :number="item.number" :imgSrc="item.imgSrc"></find-list>
    </douban-find>
  </div>
</template>

<script>
import HotMovie from './hotMoive'
import aboutShow from './AboutShow'
import selectdList from './SelectedList'
import recommendToday from './RecommendToday'
import probablyMovie from './ProbablyMovie'
import filmCritic from './FilmCritic'
import doubanContainer from '../../../../../components/douban/douban_container'
import doubanFind from '../../../../../components/douban/douban_find'
import findList from '../../../../../components/douban/find_list'
import {getdoubanFind} from '../../../../../api/axios.js'
export default {
  components: {
    HotMovie,
    aboutShow,
    selectdList,
    recommendToday,
    probablyMovie,
    filmCritic,
    doubanContainer,
    doubanFind,
    findList
  },
  data () {
    return {
      FindData: null
    }
  },
  mounted () {
    getdoubanFind().then(res => {
      this.FindData = res.data.doubanFind
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.movie {
  .Advertisement {
    @include wh(100%, px2rem(120))
    @include bimg('../../../../../assets/imge/banner/banner.jpg');
    position:relative;
    margin-top:px2rem(10);
    span {
      display:block;
      @include wh(px2rem(40), px2rem(20))
      border:2px solid $bj;
      color:$bj;
      border-radius:px2rem(2);
      text-align:center;
      position:absolute;
      bottom:px2rem(10);
      right:px2rem(10);
    }
  }
  .selectMovie {
    div {
      padding:px2rem(10) 0;
      overflow:hidden;
    }
    div:nth-of-type(2) {
      padding-right:px2rem(20);
      border-top:1px solid #cccccc;
       border-bottom:1px solid #cccccc;
    }
    a {
      display:block;
      @include wh(px2rem(60), px2rem(30));
      border: 1px solid $green;
      border-radius:px2rem(10);
      line-height:px2rem(30);
      text-align:center;
      color: $green;
      float:left;
      margin:px2rem(10)
    }
  }
}
.FindMovie {
  margin-top:px2rem(15);
  background:$bj;
  padding:px2rem(20) px2rem(20) 0;
  .FM_title {
    @include flex();
    a {
      color: $green;
      font-size:px2rem(14);
    }
    .t_left {
      h3 {
        font-size:px2rem(14);
        font-weight:500;
      }
      p {
        color: $gray;
      }
    }
  }
}

</style>
