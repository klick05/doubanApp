<template>
 <div class="change">
            <span class="Refresh">换一批</span>
            <slot class="change_selected" name="selected"></slot>
            <slot name="skip"></slot>
 </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';
.change {
    @include wh(100%,px2rem(50));
    background:$bj;
    box-shadow:px2rem(0) px2rem(-1) px2rem(1) RGBA(0,0,0,0.2);
    position:fixed;
    bottom:px2rem(50);
    left:0;
    right:0;
    z-index:98;
    line-height:px2rem(50);
    .Refresh {
      color:$green;
      position:absolute;
      left:px2rem(40);
      &:before{
        display:block;
        content: '';
        @include bimg('../assets/imge/ic_reshare_flag.png');
        @include wh(px2rem(20),px2rem(20))
        position:absolute;
        left:px2rem(-20);
        top:px2rem(15);
      }
    }
    .change_selected {
      @include wh(px2rem(120), px2rem(25));
      text-align:center;
      background: #cccccc;
      line-height:px2rem(25);
      color:$bj;
      position:absolute;
      top:px2rem(12);
      border-radius:px2rem(3);
    }
    .change_skip {
      position:absolute;
      right:px2rem(20);
      color: $gray;
    }
  }
</style>
