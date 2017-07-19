<template>
<transition name="searchBar">
    <div v-if="Switch" @click="$emit('close')" class="shadow">
      <ul class="typeBar">
        <li @click="activetype('全部')" :class="{green: type === '全部'}">全部</li>
        <li @click="activetype('电影/电视')" :class="{green: type === '电影/电视'}">电影/电视</li>
        <li @click="activetype('图书')" :class="{green: type === '图书'}">图书</li>
        <li @click="activetype('唱片')" :class="{green: type === '唱片'}">唱片</li>
        <li @click="activetype('用户')" :class="{green: type === '用户'}">用户</li>
        <li @click="activetype('小组')" :class="{green: type === '小组'}">小组</li>
        <li @click="activetype('群聊')" :class="{green: type === '群聊'}">群聊</li>
        <li @click="activetype('游戏/应用')" :class="{green: type === '游戏/应用'}">游戏/应用</li>
        <li @click="activetype('同城')" :class="{green: type === '同城'}">同城</li>
        <li @click="activetype('舞台剧')" :class="{green: type === '舞台剧'}">舞台剧</li>
      </ul>
    </div>
</transition>
</template>

<script>
export default {
  props: ['type', 'Switch'],
  methods: {
    activetype (type) {
      this.$emit('activetype', type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.shadow {
  @include wh(100%,100%);
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:99;
}
@keyframes searchBar 
{
  from {height:0;}
  to {height:px2rem(300);}
}
.typeBar {
  width:px2rem(80);
  position:fixed;
  top:px2rem(10);
  left:px2rem(12);
  background:$bj;
  text-indent:px2rem(10);
  border-radius:px2rem(3);
  box-shadow:px2rem(0) px2rem(1) px2rem(10) rgba(0,0,0,1);
  height:px2rem(300);
  .green {
    color: $green;
  }
  li {
    height:px2rem(30);
    line-height:px2rem(30);
    box-shadow:0;
  }
}
.searchBar-enter-active {
  animation: searchBar .3s;
}
.searchBar-leave-active {
  animation: searchBar .3;
} 
</style>
