<template>
  <div class="mine">
    <douban-top v-on:active="outLogin" :imgright="require('../../../../assets/imge/out.png')"
                title="我的">
    </douban-top>
    <div class="mine_login">
      <img v-if="!login" border="0" class="mine_portrait" src="../../../../assets/imge/ic_user_male.png" alt="">
      <img v-if="login" border="0" class="mine_portrait" :src="use.img" alt="">
      <router-link to="/login">
        <div v-if="!login"  class="long_register">
          登入/注册
        </div>
      </router-link>
      <section v-if="login" class="login_after">
        <h2>{{use.name}}</h2>
        <div class="user_msg">
          <span>ID:{{use.id}}</span>
          <router-link to="/ge">个人主页</router-link>
        </div>
        <div class="follow">
          <span>关注0 </span>
          <span>被关注0</span>
        </div>
      </section>
    </div>

    <div class="remind">
      <div class="remind_top">
        <span class="remind_nz">提醒</span>
        <span class="remind_jt"></span>
      </div>
      <hr/>
      <div class="remind_content">
        <p>暂无新提醒</p>
      </div>
    </div>

    <div class="mine_menu">
      <table>
        <tr>
            <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_photo_liked.png" alt="">
              <p>喜欢</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_note.png" alt="">
              <p>日记</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_album.png" alt="">
              <p>相册</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_status.png" alt="">
              <p>我的广播</p>
            </router-link>
        </tr>
        <tr>
            <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_movies_tvs.png" alt="">
              <p>电影·电视</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_books.png" alt="">
              <p>读书</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_music.png" alt="">
              <p>音乐</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_events.png" alt="">
              <p>同城活动</p>
            </router-link>
        </tr>
        <tr>
            <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/dbtime.png" alt="">
              <p>豆瓣时间</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_doulist.png" alt="">
              <p>豆列</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_orders.png" alt="">
              <p>订单</p>
            </router-link>
             <router-link tag="td" :to="login? '/stay': '/login'">
              <img src="../../../../assets/imge/ic_my_wallet.png" alt="">
              <p>钱包</p>
            </router-link>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import doubanTop from '../../../../components/douban/douban_top'
import {mapState} from 'vuex'
export default {
  components: {
    doubanTop
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'login',
      'use'
    ])
  },
  methods: {
    outLogin () {
      this.$store.commit('USE_OUT')
    }
  }
}
</script>

<style lang="scss">
@import '../../../../style/mixin.scss';
.mine {
  padding:px2rem(50) 0;
  background:$bjgray;
  // 登入部分
  .mine_login {
    @include bimg('../../../../assets/login.jpg');
    @include wh(100%, px2rem(100));
    position:relative;
    overflow:hidden;
    .mine_portrait {
      @include wh(px2rem(60),px2rem(60));
      border:px2rem(2) solid $bj;
      border-radius:50%;
      @include cz;
      left:px2rem(30);
    }
    .long_register {
      @include wh(px2rem(180), px2rem(35));
      border:2px solid $bj;
      border-radius:px2rem(3);
      line-height:px2rem(35);
      text-align:center;
      color:$bj;
      font-size:px2rem(16);
      @include cz;
      letter-spacing:px2rem(2);
      right:px2rem(40);
    }
    // 登入后的用户信息展示
    .login_after {
      @include cz;
      left:px2rem(110);
      width:100%;
      h2 {
        color:$bj;
        font-weight:700;
        letter-spacing:px2rem(1);
      }
      .user_msg {
        border-bottom:px2rem(1) solid #ffffff;
        padding:0 0 px2rem(10) 0;
        margin:px2rem(5) 0;
        span {
          color:$bj;
        }
        a {
          position:absolute;
          left:px2rem(200);
          color:$bj;
          &:after {
            content:'/stay';
            display:inline-block;
            @include wh(px2rem(12),px2rem(15));
            @include bimg('../../../../assets/imge/whitejt.png');
            position:relative;
            top:px2rem(4);
            left:px2rem(2);
          }
        }
      }
      .follow {
        span {
          color:$bj;
          letter-spacing:px2rem(2);
        span:nth-of-type(2) {
          position:relative;
        }
        }
      }
    }
  }
  // 提醒
  .remind {
    background:$bj;
    margin-top:px2rem(20);
    .remind_top {
      height:px2rem(50);
      line-height:px2rem(50);
      padding:0 px2rem(20);
      .remind_nz {
        font-size:px2rem(16);
        color:black;
        position:relative;
        left:px2rem(25);
        &:before {
          content: "";
          display:inline-block;
          @include bimg('../../../../assets/imge/naoz.png');
          @include wh(px2rem(25), px2rem(25));
          @include cz;
          right:px2rem(40);
        }
      }
      .remind_jt {
        float:right;
        @include bimg('../../../../assets/imge/jt_left.png');
        display:block;
        @include wh(px2rem(20), px2rem(20));
        margin-top:px2rem(15)
      }
    }
    .remind_content {
      height:px2rem(50);
      text-align:center;
      line-height:px2rem(50);
      p {
        color: $gray;
      }
    }
  }
  // 菜单栏
  .mine_menu {
    margin-top:px2rem(10);
    background: $bj;
    table {
      width:100%;
      text-align:center;
      border-collapse:collapse;
      tr {
        height:px2rem(100);
        img {
          @include wh(px2rem(35),px2rem(35))
        }
      }
      tr:nth-of-type(2) {
        border-top:1px solid #ececec;
        border-bottom:1px solid #ececec;
      }
    }
  }
}

</style>
