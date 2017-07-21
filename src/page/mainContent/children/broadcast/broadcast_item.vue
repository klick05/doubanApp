<template>
<transition name="main">
  <div class="broadcast_item">
      <span @click="close" class="broadcast_close"></span>
      <div class="item_top">
         <img :src="portrait" alt="">
         <div class="usemsg">
          <h2>{{name}}</h2>
          <p>{{num}}关注</p>
         </div>
         <div class="attention">
          关注
         </div>
      </div>
      <div class="item_content"  @click="$router.push('/stay')">
        <p v-html="content">
        </p>
        <div v-if="imgData" class="item_content_img">
          <img v-for="item in imgData" :src="item" alt="">
        </div>
        <div class="item_like">
          <div class="item_like_left">
            <img src="../../../../assets/imge/ic_like_full.png" alt="">
            <span>{{like}}</span>
          </div>
          <div class="item_like_right">
            <img src="../../../../assets/imge/ic_comment_full.png" alt="">
            <span>{{msg}}</span>
          </div>
        </div>
      </div>
  </div>
</transition>
</template>

<script>
export default {
  props: ['name', 'num', 'imgData', 'like', 'msg', 'content', 'portrait', 'index'],
  methods: {
    close () {
      this.$emit('close', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
  .broadcast_item {
    background: $bj;
    width:95%;
    margin: auto;
    border-radius:px2rem(2);
    box-shadow:px2rem(1) px2rem(1) px2rem(2) #878686;
    padding:px2rem(30) px2rem(20) px2rem(20) px2rem(10);
    position:relative;
    margin-top:px2rem(20);
    .broadcast_close {
      display:block;
      @include wh(px2rem(25),px2rem(25))
      @include bimg('../../../../assets/imge/ic_close_status_recommend.png')
      position:absolute;
      right:px2rem(5);
      top:0;
      z-index:99;
    }
    .item_top {
      position:relative;
      .usemsg {
        position:absolute;
        left:px2rem(70);
        top:px2rem(5);
        h2 {
          font-weight:bold;
          font-family:"微软雅黑";
        }
        p {
          color: $gray;
        }
      }
      img {
        @include wh(px2rem(50), px2rem(50));
        border-radius:50%;
      }
      .attention {
        @include wh(px2rem(50),px2rem(25));
        background: $green;
        border-radius:px2rem(3);
        text-align:center;
        line-height:px2rem(25);
        color:#ffffff;
        letter-spacing:px2rem(3);
        position:absolute;
        right:0;
        top:px2rem(2);
      }
    }
  }
  .item_content {
    padding-left:px2rem(70);
    .item_content_img {
      margin-top: px2rem(10);
      img {
        @include wh(px2rem(80), px2rem(80))
        margin:0 px2rem(2);
      }
    }
  }
  .item_like {
    margin-top:px2rem(10);
    overflow:hidden;
    img {
      @include wh(px2rem(12),px2rem(12))
    }
    div {
      float:left;
     
      span{
        color: $gray;
      }
    }
    .item_like_right {
      margin-left:px2rem(10);
    }
  }
  .main-enter-active, .main-leave-active {
  transition: opacity .3s;
}
.main-enter, .main-leave-active {
  opacity: 0;
}
</style>
