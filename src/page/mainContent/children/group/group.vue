<template>
  <div class="Group">
    <douban-top
      title="小组"
      :imgleft="require('../../../../assets/imge/ic_group_search.png')"
      :imgright="require('../../../../assets/imge/ic_chat_green.png')"
    ></douban-top>
    <section class="group_title">
      <div class="titile_content">
        <h2>420646个有趣的小组</h2>
        <p>立即选择加入吧</p>
      </div>
      <span class="title_footer">根据兴趣推荐</span>
    </section>

    <div class="gropu_content">
      <content-wrap type="书影音" 
                    :banner="require('../../../../assets/imge/ic_rec_group_banner_1.png')"
      >
        <content-title title="影视">
          <group-item v-for="(item, index) in gMovie" 
                      :name="item.name" 
                      :cover="item.cover" 
                      :num="item.num" 
                      :describe="item.describe"
                      :data="item"
                      v-on:add="addGroup"
                      v-on:reduce="reTotal">
          </group-item>
        </content-title>
      </content-wrap>

       <content-wrap type="精选推荐" 
                    :banner="require('../../../../assets/imge/ic_rec_group_banner_2.png')"
      >
        <content-title title="读书">
           <group-item v-for="(item, index) in gRead" 
                      :name="item.name" 
                      :cover="item.cover" 
                      :num="item.num" 
                      :describe="item.describe"
                      :data="item"
                      v-on:add="addGroup"
                      v-on:reduce="reTotal">
                     
          </group-item>
        </content-title>

        <content-title title="音乐">
           <group-item v-for="(item, index) in gMuisc" 
                      :name="item.name" 
                      :cover="item.cover" 
                      :num="item.num" 
                      :describe="item.describe"
                      :data="item"
                      v-on:add="addGroup"
                      v-on:reduce="reTotal">
          </group-item>
        </content-title>

        <content-title title="同城">
           <group-item v-for="(item, index) in gCity" 
                      :name="item.name" 
                      :cover="item.cover" 
                      :num="item.num" 
                      :describe="item.describe"
                      :data="item"
                      v-on:add="addGroup"
                      v-on:reduce="reTotal">
          </group-item>
        </content-title>
      </content-wrap>
    </div>

    <footer-refresh>
            <div slot="selected" :class="{selectedOK : selectOK}" class="change_selected">选好了，进入小组</div>
    </footer-refresh>
  </div>
</template>

<script>
import doubanTop from '../../../../components/douban/douban_top'
import contentWrap from './content_wrap'
import contentTitle from './content_title'
import groupItem from './group_item'
import {getGroup} from '../../../../api/axios.js'
import footerRefresh from '../../../../components/footerRefresh'
export default {
  components: {
    doubanTop,
    contentWrap,
    contentTitle,
    groupItem,
    footerRefresh
  },
  data () {
    return {
      gRead: null,
      gMuisc: null,
      gCity: null,
      gMovie: null,
      Total: []
    }
  },
  mounted () {
    getGroup().then(res => {
      this.gRead = res.data.readbook
      this.gMuisc = res.data.muisc
      this.gCity = res.data.city
      this.gMovie = res.data.movie
    })
  },
  methods: {
    addGroup (item) {
      this.Total.push(item)
    },
    reTotal (msg) {
      for (let i = 0; i < this.Total.length; i++) {
        if (this.Total[i].name === msg) {
          this.Total.splice(i, 1)
        }
      }
    }
  },
  computed: {
    selectOK () {
      if (this.Total.length > 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/mixin.scss';
.change_selected {
  right:px2rem(10);
}
.Group {
  padding:px2rem(50) 0 px2rem(100) 0;
  .group_title {
    @include bimg('../../../../assets/imge/ic_group_banner - 副本.png');
    height:px2rem(180);
    position:relative;
    .titile_content {
      @include ct;
      text-align:center;
      h2 {
        font-weight:700;
        line-height:px2rem(35);
      }
      p {
        color: $gray;
        font-size:px2rem(14);
      }
    }
    .title_footer {
      position:absolute;
      bottom:px2rem(10);
      left: px2rem(10);
      color: $gray;
    }
  }
  .gropu_content {
    background:$bjgray;
  }
}
</style>
