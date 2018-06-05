<template>
<ul class="list">
  <li
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
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
      touchStatus: false
    }
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
        // A 距离header的高度
        const startY = this.$refs['A'][0].offsetTop
        // 触摸位置距离顶部位置减去 header 部分的高度
        const touchY = event.touches[0].clientY - 79
        // 字母下标
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          // 向上触发事件
          this.$emit('alphabetChange', this.letters[index])
        }
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
