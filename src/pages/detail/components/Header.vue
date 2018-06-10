<template>
<div>
  <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs"
  >
    <div class="iconfont header-abs-back">&#xe624;</div>
  </router-link>
  <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
  >
    <router-link to="/">
      <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
    景点详情
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 每次页面展示的时候执行
  activated () {
    // 解决隐藏的header不隐藏，重置一下
    if (!this.showAbs) {
      this.showAbs = true
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  // 每次页面隐藏（替换成新的页面）的时候执行
  // 解绑window scroll事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background-color: rgba(0, 0, 0, .8);
    .header-abs-back
      color: #FFF;
      font-size: .4rem;
  .header-fixed
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #FFF;
    background-color: $bgColor;
    font-size: .32rem;
    .header-fixed-back
      position: absolute;
      top: 0;
      left:0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #FFF;
</style>
