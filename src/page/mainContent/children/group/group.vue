<template>
  <div class="Group">
    <douban-top
      title="小组"
      :imgleft="require('../../../../assets/imge/ic_group_search.png')"
      :imgright="require('../../../../assets/imge/ic_chat_green.png')"
    ></douban-top>
    <section class="group_title">
      <div class="titile_content">
        <h2>420646个有趣的小组</h2>
        <p>立即选择加入吧！</p>
      </div>
      <span class="title_footer">根据兴趣推荐</span>
    </section>

    <div class="gropu_content">
      <div class="movie">
        <div class="group_banner">
          <img src="../../../../assets/imge/ic_rec_group_banner_1.png" alt="">
          <span>书影音</span>
        </div>
        <div class="group_content_title">
          <span></span>
          <h3>影视</h3>
          <span></span>
        </div>
        <div class="content_item">
          <img src="http://up.th38.net/uploads/allimg/160614/1155163T5-9.jpg" alt="">
          <div class="group_msg">
            <h3>啊就是领导就</h3>
            <p>asfasfsafsfsffds</p>
          </div>
          <div class="groupSelect">
            11401人
          </div>
        </div>
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

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
.Group {

  .content_item {
    @include wh(100%, px2rem(50));
    margin-top:px2rem(10);
    img {
      @include wh(px2rem(50),px2rem(50));
      border-radius:px2rem(2);
      float:left;
    }
    .group_msg {
      width:px2rem(200);
      float:left;
      height:100%;
      margin-left:px2rem(6);
    }
    .groupSelect {
      color: $gray;
      float:right;
      @include wh(px2rem(90),100%);
      line-height:px2rem(50);
      background:url('../../../../assets/imge/ic_group_check_anonymous.png') no-repeat;
      background-size:px2rem(25);
      background-position:px2rem(60) px2rem(12);
      &.checked {
         @include wh(px2rem(90),100%);
        line-height:px2rem(50);
        background:url('../../../../assets/imge/ic_group_checked_anonymous.png') no-repeat;
        background-size:px2rem(25);
        background-position:px2rem(60) px2rem(12);
      }
    }
  }
  padding:px2rem(50) 0 px2rem(100) 0;
  .group_title {
    @include bimg('../../../../assets/imge/ic_group_banner - 副本.png');
    height:px2rem(180);
    position:relative;
    .titile_content {
      @include ct;
      text-align:center;
      h2 {
        font-weight:700;
        line-height:px2rem(35);
      }
      p {
        color: $gray;
        font-size:px2rem(14);
      }
    }
    .title_footer {
      position:absolute;
      bottom:px2rem(10);
      left: px2rem(10);
      color: $gray;
    }
  }
  .gropu_content {
    background:$bjgray;
    .movie {
      background:$bj;
      padding:0 px2rem(10);
    }
    .group_banner {
      position:relative;
      img {
        @include wh(100%,px2rem(80));
      }
      span {
        position:absolute;
        left:px2rem(10);
        bottom:px2rem(15);
        color:$bj;
      }
    }
    .group_content_title {
      @include flex;
      align-items:center;
      h3 {
        width:px2rem(100);
        margin:auto;
        text-align:center;
      }
      span {
        display:inline-block;
        @include wh(px2rem(150),px2rem(0.5));
        background: $gray;
      }
    }
  }
}
</style>
