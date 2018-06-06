<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
  <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
  <!-- 点击跳转到city -->
  <router-link to="/city">
    <div class="header-right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
  // 子组件通过props接受父组件传过来的值
  // props: {
  //   city: String
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex;
    line-height:$headerHeight;
    background-color: $bgColor;
    color:#FFFFFF;
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
      background-color: #FFFFFF;
      border-radius:.1rem;
      color: #CCCCCC;
    .header-right
      width: 1.24rem;
      float: right;
      text-align: center;
      color:#FFF;
      .arrow-icon
        font-size: .18rem;
</style>
