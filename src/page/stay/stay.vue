<template>
  <div>
    <div class="main">
      <img src="../../assets/imge/u=3285282227,3671402418&fm=26&gp=0.jpg" alt="">
      <h2>这个页面待开发请点击<a @click="$router.go(-1)" href="javascript:;">返回</a></h2>  
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.main {
  @include ct;
  text-align:center;
  h2 {
    font-weight:700;
  }
  a {
    color:$green;
    text-decoration:underline;
    font-weight:700;
  }
}
</style>
