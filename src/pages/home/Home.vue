<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <div class="my-info">员工号:P003125736 | 员工姓名:张三 | 技术平台:测试</div>
  <home-panel></home-panel>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomePanel from './components/Panel'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomePanel
  }
}
</script>

<style lang="stylus" scoped>
  .my-info
    background-color:#CCC
</style>
