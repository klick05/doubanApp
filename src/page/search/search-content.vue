<template>
<ul class="HomeSearch_content">
      <router-link tag="li" to="/stay">
      <span v-if="ranking > 3" class="ranking">{{ranking}}</span>
      <img v-if="ranking === 1" src="../../assets/imge/s_one.png" alt="">
      <img v-if="ranking === 2" src="../../assets/imge/s_two.png" alt="">
      <img v-if="ranking === 3"src="../../assets/imge/three.png" alt="">
      <span class="name">{{name}}</span>
      <span class="type">{{type}}</span>
      </router-link>
</ul>
</template>

<script>
export default {
  name: 'HomeSearch_content',
  props: ['name', 'ranking', 'type']
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.HomeSearch_content {
  li {
    padding-left:px2rem(20);
    height:px2rem(45);
    line-height:px2rem(45);
    border-bottom:1px solid #cccccc;
    img {
      @include wh(px2rem(20), px2rem(20));
      position:relative;
      top:px2rem(4);
    }
    span {
      display:inline-block;
      color: $gray;
    }
    .name {
      color:black;
      font-size:px2rem(16);
      margin: 0 px2rem(10);
    }
    .ranking {
      text-align:center;
      display:inline-block;
      width:px2rem(20);
    }
  }
}
</style>
