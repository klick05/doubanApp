<template>
  <div class="HomeSearch">
    <div class="top">
      <div class="SearchBox">
        <span @click="openStype" class="s_type">{{searchBar}}</span>
        <input type="text" :placeholder="'搜索'+searchBar" autofocus="autofocus">
      </div>
      <span class="cancel" @click="$router.go(-1)">取消</span>
    </div>
    <div class="HotSearch">
      热门搜索
    </div>
    <search-content v-for="item in whole"
                    :name="item.name"
                    :ranking="item.ranking"
                    :type="item.type"
    ></search-content>
    <!--搜索菜单类型-->
    <search-bar v-on:close="Close" :Switch="Switch" :type="searchBar" v-on:activetype="seletcted"></search-bar>
  </div>
</template>

<script>
  import {getSearch} from '../../api/axios.js'
  import searchContent from './search-content.vue'
  import searchBar from './searchBar.vue'
  export default {
    components: {
      searchContent,
      searchBar
    },
    data () {
      return {
        whole: null,
        searchBar: '全部',
        bartype: null,
        Switch: false
      }
    },
    mounted () {
      getSearch().then(res => {
        this.whole = res.data.whole
      })
    },
    methods: {
      openStype () {
        this.Switch = true
      },
      seletcted (type) {
        this.searchBar = type
        switch (type) {
          case '电影/电视':
            getSearch().then(res => { this.whole = res.data.TV })
            break
          case '图书':
            getSearch().then(res => { this.whole = res.data.Book })
            break
          case '唱片':
            getSearch().then(res => { this.whole = res.data.Muisc })
            break
          default :
            getSearch().then(res => { this.whole = res.data.whole })
        }
      },
      Close () {
        this.Switch = false
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.HomeSearch {
  padding-top:px2rem(46);
}
.top {
  @include wh(100%,px2rem(50));
  background: $green;
  padding:px2rem(10);
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:99;
  .SearchBox {
    background:$bj;
    width:85%;
    height:px2rem(30);
    border-radius:px2rem(4);
    line-height:px2rem(30);
    
  }
  .s_type {
    display:inline-block;
    padding:0 px2rem(15);
    height:100%;
    font-size:px2rem(14);
    background:url('../../assets/imge/spinner_ab_default_frodo.9.png') no-repeat;
    background-position:100% 0%;
    background-size:px2rem(20);
    color:$green;
  }
  input::-webkit-input-placeholder {
        color:$gray;
  }
  input {
    outline:none;
    font-size:px2rem(14);
    color:black;
    padding-left:px2rem(10);
  }
  .cancel {
    position:absolute;
    right:px2rem(15);
    top:px2rem(15);
    color:$bj;
    font-size:px2rem(14);
    letter-spacing: px2rem(2);
  }
}

.HotSearch {
  height:px2rem(45);
  color:$gray;
  background:$bjgray;
  line-height:px2rem(45);
  text-indent:px2rem(20);
}
</style>
