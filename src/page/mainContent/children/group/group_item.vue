<template>  
<div class="content_item">
          <img :src="cover" alt="">
          <div class="group_msg">
            <h3>{{name}}</h3>
            <p>{{describe}}</p>
          </div>
          <div>
            <span class="group_num">{{num}}人</span>
            <span class="groupSelect " @click="show" :class="{checked:select}"></span>
          </div>
  </div>
</template>

<script>
export default {
  name: 'contetn_item',
  props: ['cover', 'name', 'describe', 'num', 'data'],
  data () {
    return {
      select: false
    }
  },
  methods: {
    show () {
      if (this.select) {
        this.select = false
        this.$emit('reduce', this.data.name)
      } else {
        this.select = true
        this.$emit('add', this.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
  .content_item {
    @include wh(100%, px2rem(50));
    margin-top:px2rem(20);
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
      h3 {
        font-weight:700;
      }
      p {
        color: $gray;
        @include Omitted(2);
      }
    }
    .group_num {
      color: $gray;
      line-height:px2rem(50);
    }
    .groupSelect {
      margin-top:px2rem(10);
      float:right;
      display:block;
      @include wh(px2rem(25),px2rem(25));
      line-height:px2rem(50);
      @include bimg('../../../../assets/imge/ic_group_check_anonymous.png');
      &.checked {
        @include bimg('../../../../assets/imge/ic_group_checked_anonymous.png');
      }
    }
  }
</style>

