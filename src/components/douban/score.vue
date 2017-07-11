<template>
    <div class="score">
      <div v-if="score" class="xing">
        <span :class="[{fullx:fone},{halfx:hone},{' ':one}]"></span>
        <span :class="[{fullx:ftwo},{halfx:htwo},{' ':two}]"></span>
        <span :class="[{fullx:fthree},{halfx:hthree},{' ':three}]"></span>
        <span :class="[{fullx:ffour},{halfx:hfour},{' ':four}]"></span>
        <span :class="[{fullx:ffive},{halfx:hfive},{' ':five}]"></span>
        <span class="xing_text">{{score}}</span>
      </div>
      <p v-else>暂无评价</p>
    </div>
</template>

<script>
export default {
  props: ['score'],
  data () {
    return {
      num: Number(this.score),
      fone: false, // 判断第一颗星是满星
      hone: false, // 判断第一个颗星是否是半星，余下以此类推
      ftwo: false,
      htwo: false,
      fthree: false,
      hthree: false,
      ffour: false,
      hfour: false,
      ffive: false,
      hfive: false
    }
  },
  computed: {
    one () {
      if (this.num >= 2) {
        this.fone = true
      } else if (this.num > 0 && this.num < 2) {
        this.hone = true
      } else {
        return true
      }
    },
    two () {
      if (this.num >= 4) {
        this.ftwo = true
      } else if (this.num > 2 && this.num < 4) {
        this.htwo = true
      } else {
        return true
      }
    },
    three () {
      if (this.num >= 6) {
        this.fthree = true
      } else if (this.num > 4 && this.num < 6) {
        this.hthree = true
      } else {
        return true
      }
    },
    four () {
      if (this.num >= 8) {
        this.ffour = true
      } else if (this.num > 6 && this.num < 8) {
        this.hfour = true
      } else {
        return true
      }
    },
    five () {
      if (this.num >= 10) {
        this.ffive = true
      } else if (this.num > 8 && this.num < 10) {
        this.hfive = true
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
.score {
  .xing {
     height:px2rem(20);
    font-size: px2rem(12);
    line-height:px2rem(20);
    position:relative;
    .xing_text {
      position:absolute;
      background:none;
      left:px2rem(70);
      top:px2rem(-2);
      color:$gray;
    }
  }
  p {
    color: $gray;
    font-size: px2rem(12);
  }
}

span {
  display:inline-block;
  @include wh(px2rem(15), 100%);
  @include bimg('../../assets/imge/rating_star_xsmall_gray.png')
  margin:0 px2rem(-3);
}
.fullx {
  @include bimg('../../assets/imge/rating_star_xsmall_on.png')
}
.halfx{
  @include bimg('../../assets/imge/rating_star_xsmall_half.png')
}
</style>
