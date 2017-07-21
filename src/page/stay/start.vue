<template>
  <div class="start">
    <img src="../../assets/imge/kpgg.jpg" alt="">
    <div class="time" @click="$router.push('home')">
      跳过 {{time}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: 3
    }
  },
  methods: {
    Time () {
      let v = setInterval(() => {
        this.time --
        if (this.time === 0) {
          this.$router.push('home')
          clearInterval(v)
        }
      }, 1000)
    }
  },
  mounted () {
    this.Time()
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.start {
  position:fixed;
  top:0;
  height:0;
  right:0;
  left:0;
  height:100%;
  width:100%;
  .time {
    @include wh(px2rem(80), px2rem(30));
    border:px2rem(1) solid #cccccc;
    position:absolute;
    bottom:px2rem(20);
    right:px2rem(20);
    border-radius:px2rem(15);
    text-align:center;
    line-height:px2rem(30);
    color: $gray;
  }
}
img {
  height:100%;
}
</style>
