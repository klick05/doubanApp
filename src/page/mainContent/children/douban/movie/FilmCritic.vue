<template>
  <div class="FilmCritic">
      <douban-container title="最受欢迎影评">
        <a href="" slot="alink">更多></a>
        <film-item  @click.native="$router.push('/stay')" v-for="item in filmItem" 
                   :imgSrc="item.imgSrc"
                   :content="item.content"
                   >
          <p>{{item.use}} 评论 {{item.film}}</p>
        </film-item>
      </douban-container>
  </div>
</template>

<script>
import doubanContainer from '../../../../../components/douban/douban_container'
import filmItem from '../../../../../components/moduleOne/moduleItem'
import {getfilmItem} from '../../../../../api/axios.js'
export default {
  components: {
    doubanContainer,
    filmItem
  },
  data () {
    return {
      filmItem: null
    }
  },
  mounted () {
    getfilmItem().then(res => {
      this.filmItem = res.data.filmItem
    })
  }
}
</script>

<style lang="scss">

</style>

