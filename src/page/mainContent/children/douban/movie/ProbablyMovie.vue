<template>
  <div class="probablymovie">
    <douban-container title="你可能感兴趣的" more="yes">
      <div class="probably_item">
        <douban-content v-for="item in probablyData" 
                        :cover="item.cover"
                        :name="item.name"
        >
          <score :score="item.score"></score>
        </douban-content>
      </div>
    </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import doubanContent from '../../../../../components/douban/douban_content'
import score from '../../../../../components/douban/score'
import {getprobably} from '../../../../../api/axios.js'
export default {
  components: {
    doubanContainer,
    doubanContent,
    score
  },
  data () {
    return {
      probablyData: null
    }
  },
  mounted () {
    getprobably().then(res => {
      this.probablyData = res.data.probably
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../../style/mixin.scss';
.probably_item {
  @include flex();
  flex-wrap:wrap;
}
</style>
