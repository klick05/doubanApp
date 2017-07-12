<template>
  <div class="container">
      <div class="content">
        <div class="c_left">
          <h3 class="title">{{title}}</h3>
          <p>
            {{content}}
          </p>
        </div>
        <div v-if="imgSrc" class="c_right">
          <img :src="imgSrc" alt="">
        </div>
      </div>
      <hr/>
      <div class="source">
        <p v-if="author">作者:{{author}}</p>
        <p v-if="source">来自：{{source}}</p>
        <slot name=""FilmCritic></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'module_item',
  props: ['title', 'content', 'imgSrc', 'author', 'source']
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.container {
  margin-top: px2rem(10);
  padding:0 px2rem(15) px2rem(20);
  border-bottom:1px solid #cccccc;
  .content {
    @include flex();
    .c_left{
      width:100%;
      .title {
        font-weight:900;
        @include Omitted(3);
        padding:0;
      }
      p {
          line-height:px2rem(15);
         @include Omitted(2);
         margin:px2rem(10) 0;
         color: $gray;
      }
    }
    .c_right {
      @include wh(px2rem(200), px2rem(100))
      text-align:right;
      img {
        width:px2rem(100);
        max-height:px2rem(120);
      }
    }
  }
  hr {
    width: px2rem(10);
    margin:px2rem(5) 0;
  }
  .source {
    @include flex();
    p {
      color: #cccccc;
    }
  }
}
</style>
