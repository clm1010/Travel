<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" name="" placeholder="输入城市名或拼音" />
  </div>
  <div
    class="search-content"
    ref="search"
    v-show="keyword"
  >
    <ul>
      <li
        class="search-item border-bottom"
        v-for="item of list"
        :key=item.id
        @click="handleCityClick(item.name)"
      >
        {{item.name}}
      </li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  // 监听
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 清空
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      // 调用dispatch触发Actions
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      // 页面跳转
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  // 生命周期DOM挂载之后执行
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem;
    padding: 0 .1rem;
    background-color: $bgColor;
    .search-input
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
  .search-content
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: #EEE;
    .search-item
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background-color: #FFF;
</style>
