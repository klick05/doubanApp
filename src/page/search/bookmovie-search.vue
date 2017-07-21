<template>
  <div class="bksearch">
    <div class="searchBox">
      <img class="searchleft" src="../../assets/imge/ic_search_gray.png" alt="">
      <input placeholder="影视、图书、唱片、活动等" type="text">
      <img class="searchright" src="../../assets/imge/ic_scan_gray.png" alt="">
      <span @click="$router.go(-1)">取消</span>
    </div>
   <div class="HotSearch">
      热门搜索
    </div>
    <search-content v-for="item in bkSearch"
                    :name="item.name"
                    :ranking="item.ranking"
                    :type="item.type"></search-content>
  </div>
</template>

<script>
import searchContent from './search-content'
import {getSearch} from '../../api/axios.js'
export default {
  components: {
    searchContent
  },
  data () {
    return {
      bkSearch: null
    }
  },
  mounted () {
    getSearch().then(res => { this.bkSearch = res.data.whole })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.bksearch {
  .searchBox {
    position:fixed;
    box-sizing:border-box;
    background: $bj;
    top:0;
    left:0;
    right:0;
    z-index:99;
    height:px2rem(50);
    border-bottom:px2rem(1) solid #cccccc;
    padding:px2rem(10) px2rem(10) px2rem(10) px2rem(20);
    img {
      @include wh(px2rem(20),px2rem(20))
      position:relative;
      top:px2rem(5);
      text-indent:px2rem(20);
    }
    input {
      font-size:px2rem(14);
      width:px2rem(230);
    }
    .searchright {
      padding-right:px2rem(15);
      border-right:px2rem(1) solid #cccccc;
    }
    span {
      margin-left:px2rem(6);
      font-size:px2rem(14);
      color: $gray;
    }
  }
  .HotSearch {
        height:px2rem(45);
        color:$gray;
        background:$bjgray;
        line-height:px2rem(45);
        text-indent:px2rem(20);
   }
}
</style>
