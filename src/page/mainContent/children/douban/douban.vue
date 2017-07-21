<template>
  <div class="douban">
    <douban-top title="书影音"
                v-on:active="login"
                v-on:serach="$router.push('/bksearch')"
                :imgleft="require('../../../../assets/imge/ic_group_search.png')"
                :imgright="require('../../../../assets/imge/ic_chat_green.png')">
    </douban-top>
    <nav class="douban_nav">
      <router-link active-class="active" to="/douban/movie">电影</router-link>
      <router-link  active-class="active" to="/douban/read">读书</router-link>
      <router-link active-class="active"  to="/douban/tv">电视</router-link>
      <router-link active-class="active" to="/douban/local">同城</router-link>
      <router-link active-class="active" to="/douban/music">音乐</router-link>
    </nav>
    <transition name="douban" out-in>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>

    <transition name="douban" out-in>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import doubanTop from '../../../../components/douban/douban_top'
export default {
  components: {
    doubanTop
  },
  computed: {
    loginState () {
      return this.$store.state.login
    }
  },
  methods: {
    login () {
      this.loginState ? this.$router.push('/stay') : this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
.douban {
  padding:px2rem(80) 0 px2rem(50) 0;
  background: $bjgray;

}
.douban_nav {
  position:fixed;
  top:px2rem(50);
  left:0;
  right:0;
  @include wh(100%, px2rem(30));
  background: $bj;
  border-bottom:1px solid #e1e0e0;
  line-height:px2rem(30);
  @include flex(space-between)
  z-index:100;
  a {
    display: block;
    width:px2rem(30);
    text-align:center;
    color:$gray;
    flex-grow:1;
    font-size:px2rem(14)
  }
  .active {
    display: block;
    width:px2rem(30);
    border-bottom:px2rem(2) solid $green;
    color:$green;
  }
}
.douban-enter-active, .douban-leave-active {
  transition: opacity .3s;
}
.douban-enter, .douban-leave-active {
  opacity: 0;
}
</style>

