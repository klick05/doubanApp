<template>
  <div class="doubanTimer">
        <div class="Timer_top">
          <img :src="imgSrc" alt="">
        </div>
        <section class="Timer_bottom">
          <div class="works_title">
            <h3>{{title}}</h3>
            <p>{{num}}</p>
          </div>
          <div class="works_msg">
            <div class="portrait">
              <img :src="portrait" alt="">
            </div>
            <div class="author_msg">
              <h3>{{author}}</h3>
              <p>{{introduce}}</p>
            </div>
          </div>
          <a href="">查看专栏</a>
        </section>
  </div>
</template>

<script>
export default {
  props: ['author', 'introduce', 'num', 'title', 'imgSrc', 'portrait']
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
  .doubanTimer {
  width:px2rem(300);
  background: $bj;
  border-radius: px2rem(5);
  .Timer_top {
    @include wh(100%, px2rem(80))
    background:red;
    border-radius:px2rem(5) px2rem(5) 0 0;
    img {
      width:100%;
      height:100%;
      border-radius:px2rem(5) px2rem(5) 0 0;
    }
  }
  .Timer_bottom {
    padding:px2rem(10);
    .works_title {
      margin-bottom:px2rem(10);
      h3 {
        font-weight:900;
      }
      p {
        color: $gray;
        font-size:px2rem(12);
      }
    }
    .works_msg {
      @include flex();
      .portrait {
        img {
            @include wh(px2rem(50),px2rem(50))
            border-radius: 50%;
        }
      }
      .author_msg{
        width:px2rem(220);
        padding-top:px2rem(5);
         h3 {
          font-size:px2rem(12);
          font-weight:500;
        }
        p {
          font-size:px2rem(12);
          color: $gray;
          @include Omitted(1);
        }
      }
    }
    a {
      display:block;
      @include wh(100%, px2rem(30))
      border: 1px solid $green;
      border-radius: px2rem(5);
      color: $green;
      text-align: center;
      line-height:px2rem(30);
      margin-top:px2rem(10);
    }
  }
}
</style>
