<template>
  <div class="footerBar">
      <router-link active-class="Home_active" to="/Home">
          <div class="home"></div>
          首页
      </router-link>
      <router-link active-class="subject_active" to="/douban">
          <div class="subject"></div>
          书影音
      </router-link>
      <router-link active-class="status_active" to="/status">
          <div class="status"></div>
          广播
      </router-link>
      <router-link active-class="group_active" to="/group">
          <div class="group"></div>
          小组
      </router-link>
      <router-link active-class="profil_active" to="/profil">
          <div class="profil"></div>
          我的
      </router-link>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
@import'../../style/mixin.scss';
@mixin bimg($url) {
  background:url($url);
  background-repeat:no-repeat;
  background-size:px2rem(30) px2rem(30);
  background-position:center;
}
a {
  @include sc(24px,$gray)
}
.footerBar{
  @include wh(100%,px2rem(50))
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  z-index:100;
  border-top:1px solid #cccccc;
  background: $bjgray;
  @include flex(space-around);
  a{
    color: $gray;
    text-align:center;
    display:block;
    @include wh(px2rem(50),100%)
    div {
      @include wh(100%,px2rem(30));
    }
  }
  a:nth-of-type(1) div{
     @include bimg('../../assets/imge/ic_tab_home_normal.png');
  }
  a:nth-of-type(2) div{
     @include bimg('../../assets/imge/ic_tab_subject_normal.png');
  }
  a:nth-of-type(3) div{
     @include bimg('../../assets/imge/ic_tab_status_normal.png');
  }
  a:nth-of-type(4) div{
     @include bimg('../../assets/imge/ic_tab_group_normal.png');
  }
  a:nth-of-type(5) div{
      @include bimg('../../assets/imge/ic_tab_profile_normal.png');
    }
  .Home_active {
    color:$green;
    .home {
      @include bimg('../../assets/imge/ic_tab_home_active.png');
    }
  }
  .subject_active {
    color:$green;
    .subject {
     @include bimg('../../assets/imge/ic_tab_subject_active.png');
    }
  }
  .status_active {
    color:$green;
    .status{
     @include bimg('../../assets/imge/ic_tab_status_active.png');
    }
  }
  .group_active {
    color:$green;
    .group {
      @include bimg('../../assets/imge/ic_tab_group_active.png')
    }
  }
  .profil_active {
    color:$green;
    .profil {
     @include bimg('../../assets/imge/ic_tab_profile_active.png');
    }
  }
}
</style>
