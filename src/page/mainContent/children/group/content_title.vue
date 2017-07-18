<template>
<div>
  <div class="group_content_title">
    <span></span>
      <h3>{{title}}</h3>
    <span></span>
    </div>
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
.group_content_title {
      @include flex;
      margin-top:px2rem(20);
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
</style>
