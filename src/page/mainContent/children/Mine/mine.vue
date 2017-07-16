<template>
  <div class="mine">
    <douban-top :imgright="require('../../../../assets/imge/ic_settings.png')"
                title="我的">
    </douban-top>
    <div class="mine_login">
      <img class="mine_portrait" src="../../../../assets/imge/ic_user_male.png" alt="">
      <div class="long_register">
        登入/注册
      </div>
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
  </div>
</template>

<script>
import doubanTop from '../../../../components/douban/douban_top'
export default {
  components: {
    doubanTop
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
    .mine_portrait {
      @include wh(px2rem(60),px2rem(60));
      border:2px solid $bj;
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
}

</style>
