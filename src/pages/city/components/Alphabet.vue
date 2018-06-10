<template>
<ul class="list">
  <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick"
  >
    {{item}}
  </li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 生命周期当页面数据被更新的时候，同时页面完成自己渲染后
  updated () {
    // A 距离header的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (event) {
      // 向上触发事件
      this.$emit('alphabetChange', event.target.innerText)
    },
    // 处理触摸时事件
    handleTouchStart () {
      this.touchStatus = true
    },
    // 处理触摸移动事件
    handleTouchMove (event) {
      if (this.touchStatus) {
        // 节流优化，减缓触摸字母的频率
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 触摸位置距离顶部位置减去 header 部分的高度
          const touchY = event.touches[0].clientY - 79
          // 字母下标
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            // 向上触发事件
            this.$emit('alphabetChange', this.letters[index])
          }
        }, 16)
      }
    },
    // 处理结束滑动事件
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item
      line-height: 0.37rem;
      text-align: center;
      color: $bgColor;
</style>
