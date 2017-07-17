<template>
  <div class="broadcast">
    <doubanTop title="推荐广播"
                v-on:active="login"
               :imgleft="require('../../../../assets/imge/ic_status_search_user.png')" 
               :imgright="require('../../../../assets/imge/ic_chat_green.png')"
    ></doubanTop>
    
    <div class="broadcast_bj">
      <h2>发现有趣的人</h2>
      <p>关注他们,发现更大的世界</p>
    </div>
    
      <broadItem v-for="(item,index) in broadData"
                :name="item.name"
                :num="item.num"
                :imgData="item.imgData"
                :content="item.content"
                :portrait="item.portrait"
                :like="item.like"
                :msg="item.msg"
                :index="index"
                v-on:close="closeItem"></broadItem>
    <footer-refresh>
      <div slot="selected" class="change_selected">选好了去玩广播</div>
      <span slot="skip" class="change_skip">跳过</span>
    </footer-refresh>
  </div>
</template>

<script>
import doubanTop from '../../../../components/douban/douban_top'
import {getBroad} from '../../../../api/axios.js'
import broadItem from './broadcast_item'
import footerRefresh from '../../../../components/footerRefresh'
export default {
  components: {
    doubanTop,
    broadItem,
    footerRefresh
  },
  data () {
    return {
      broadData: null
    }
  },
  computed: {
    loginState () {
      return this.$store.state.login
    }
  },
  mounted () {
    getBroad().then(res => {
      this.broadData = res.data
    })
  },
  methods: {
    closeItem (msg) {
      this.broadData.splice(msg, 1)
    },
    login () {
      this.$store.state.login ? '' : this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
.broadcast {
  background: $bjgray;
  height:8000px;
  padding-top:px2rem(50);
  .broadcast_bj {
    height:px2rem(100);
    background:url('../../../../assets/imge/ic_status_anonymous_header.png') no-repeat;
    background-size:px2rem(80) px2rem(75);
    position:relative;
    background-position:px2rem(60);
    h2 {
      position:absolute;
      left:px2rem(160);
      top:px2rem(30);
      font-size:px2rem(16);
    }
    p {
       position:absolute;
      left:px2rem(160);
      top:px2rem(60);
      color: $gray;
    }
  }
}
.change_selected {
  right:px2rem(60);
}
</style>
