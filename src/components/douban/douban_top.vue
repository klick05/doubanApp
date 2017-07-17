<template>
<div>
    <div class="public_top">
      <h2>{{title}}</h2>
      <img v-if="imgleft"class="img_left" :src="imgleft" alt="">
      <img v-if="imgright" @click="active" class="img_right":src="imgright" alt="">
    </div>
</div>
</template>

<script>
export default {
  props: ['title', 'imgleft', 'imgright'],
  name: 'public_top',
  methods: {
    active () {
      this.$emit('active')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.public_top {
  @include wh(100%, px2rem(50));
  border-bottom:1px solid #cccccc;
  line-height:px2rem(50);
  text-align:center;
  position:fixed;
  background: #ffffff;
  top:0;
  left:0;
  right:0;
  z-index:100;
  h2 {
    font-weight:700;
  }
  img {
    position:absolute;
    width:px2rem(25);
    height:px2rem(25);
    top:px2rem(13);
  }
  .img_left {
    right:px2rem(100);
  }
  .img_right {
    right:px2rem(30);
  }
}
</style>

