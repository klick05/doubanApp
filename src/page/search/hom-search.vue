<template>
  <div class="HomeSearch">
    <div class="top">
      <div class="SearchBox">
        <span class="s_type">{{searchBar}}</span>
        <input type="text" placeholder="搜索" autofocus="autofocus">
      </div>
      <span class="cancel">取消</span>
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
  <transition name="searchBar">
    <div v-if="true" class="typeBar">
      <ul>
        <li @input="sb(value)">全部</li>
        <li @input="sb(valueL)">电影/电视</li>
        <li>图书</li>
        <li>唱片</li>
        <li>用户</li>
        <li>小组</li>
        <li>群聊</li>
        <li>游戏/应用</li>
        <li>同城</li>
        <li>舞台剧</li>
      </ul>
    </div>
    </transition>
  </div>
</template>

<script>
  import {getSearch} from '../../api/axios.js'
  import searchContent from './search-content.vue'
  export default {
    components: {
      searchContent
    },
    data () {
      return {
        whole: null,
        searchBar: '全部'
      }
    },
    mounted () {
      getSearch().then(res => {
        this.whole = res.data.whole
      })
    },
    methods: {
      sb (msg) {
        console.log(msg)
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
@keyframes searchBar 
{
  from {height:0;}
  to {height:px2rem(300);}
}
.typeBar {
  width:px2rem(80);
  position:fixed;
  top:px2rem(150);
  left:px2rem(12);
  z-index:99;
  background:$bj;
  text-indent:px2rem(10);
  border-radius:px2rem(3);
  box-shadow:px2rem(0) px2rem(1) px2rem(10) rgba(0,0,0,1);
  height:px2rem(300);
  li {
    height:px2rem(30);
    line-height:px2rem(30);
    box-shadow:0;
  }
}
.searchBar-enter-active {
  animation: searchBar .5s;
}
.searchBar-leave-active {
  animation: searchBar .5 sreverse;
}
</style>
