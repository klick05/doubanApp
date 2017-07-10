<template>
  <section class="moduleOne" :class="{blackbj:blackbj}">
    <div class="moduleOne_title">
      <h3 :class="{g_border:green, o_border:orange}">{{moduleTitle}}</h3>
      <slot name="More"></slot>
    </div>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'module_one',
    props: ['moduleTitle', 'green', 'blackbj', 'orange']
  }
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.moduleOne {
  margin-top:px2rem(10);
  padding:px2rem(10) 0;
  background:$bj;
  &.blackbj{
    background:#eeeeee;
  }
  .moduleOne_title {
    @include flex()
    padding-right:px2rem(15);
    h3 {
      padding-left:px2rem(15);
      margin-bottom:px2rem(10);
      &.o_border {
        border-left:8px solid #f95d11;
        color: #f95d11;
      }
      &.g_border {
        border-left:8px solid $green;
      }
    }
    a {
      color:$green;
    }
  }
}
</style>
