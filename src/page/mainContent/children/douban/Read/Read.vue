<template>
  <div class="Read">
      <new-book></new-book>
      <div class="read_banner">
        <img src="../../../../../assets/imge/banner/6a1961adfd7e02d.jpg" alt="">
        <h2>
          回到原典————细节里的中国美术史
        </h2>
      </div>
      <imaginary></imaginary>
      <non-empty></non-empty>
      <div class="information">
        <module-one moduleTitle="图书资讯">
          <a href="javascript:;" slot="More">更多></a>
          <module-item
            title="中平卓马|为了摄影杀死自己，甚至是两次"
            content="你在烧声明？ “照片”。为什么要少照片？？ 因为我是摄影师。原本一片黑暗的豆子海岸"
            imgSrc="https://img3.doubanio.com/view/ark_article_cover/retina/public/35565703.jpg?v=1498617908.0"
            author="理想国设计馆"
          >
          </module-item>
        </module-one>
      </div>
  </div>
</template>

<script>
import newBook from './newBook'
import imaginary from './imaginary'
import nonEmpty from './NonEmpty'
import moduleOne from '../../../../../components/moduleOne/ModuleOne'
import moduleItem from '../../../../../components/moduleOne/moduleItem'
export default {
  components: {
    newBook,
    imaginary,
    nonEmpty,
    moduleOne,
    moduleItem
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.Read {
  .read_banner {
    padding-top:px2rem(20);
    img {
      @include wh(100%, px2rem(80))
    }
    h2 {
      height:px2rem(50);
      background: $bj;
      font-weight:900;
      line-height:px2rem(50);
      text-indent:px2rem(20);
    }
  }
}
</style>
