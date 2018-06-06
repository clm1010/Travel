<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" name="" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content">
    <ul>
      <li v-for="item of list">
        {{item.name}}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
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
  // 监听
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
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
    background-color: green;
</style>
