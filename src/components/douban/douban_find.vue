<template>
   <div class="douban_find">
       <div class="FM_title">
        <div class="t_left">
          <h3>{{title}}</h3>
          <p>{{describe}}</p>
        </div>
        <a href="javascript:;">更多></a>
       </div>
       <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'douban_find',
  props: ['title', 'describe']
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.douban_find {
  margin-top:px2rem(15);
  background:$bj;
  padding:px2rem(20) px2rem(20) 0;
  .FM_title {
    @include flex();
    a {
      color: $green;
      font-size:px2rem(14);
    }
    .t_left {
      h3 {
        font-size:px2rem(16);
        font-weight:500;
      }
      p {
        color: $gray;
      }
    }
  }
}
</style>
