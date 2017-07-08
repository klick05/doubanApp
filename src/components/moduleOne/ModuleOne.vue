<template>
  <section class="moduleOne">
    <h3 class="o_border" :class="{g_border:green}">{{moduleTitle}}</h3>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'module_one',
    props: ['moduleTitle', 'green']
  }
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.moduleOne {
  margin-top:px2rem(10);
  h3 {
    padding-left:px2rem(15);
    margin-bottom:px2rem(10);
    &.o_border {
      border-left:8px solid #f95d11;
      color: #f95d11;
    }
    &.g_border {
      border-left:8px solid $green;
      color: $green;
    }
  }
}
</style>
