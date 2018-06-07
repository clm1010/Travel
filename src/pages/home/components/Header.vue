<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
  <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
  <!-- 点击跳转到city -->
  <router-link to="/city">
    <div class="header-right">{{this.doubleCity}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </router-link>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  // 子组件通过props接受父组件传过来的值
  // props: {
  //   city: String
  // }
  // mapState把vuex里面的数据映射到computed计算属性里
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex;
    line-height:$headerHeight;
    background-color: $bgColor;
    color:#CCC;
    .header-left
      width: .64rem;
      float: left;
      .back-icon
        text-align: center;
        font-size: .4rem;
    .header-input
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background-color: #FFF;
      border-radius:.1rem;
      color: #CCC;
    .header-right
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color:#FFF;
      .arrow-icon
        font-size: .18rem;
</style>
