<template>
<div>
  <!-- 父组件给子组件传值通过属性方式 -->
  <!-- <home-header :city="city"></home-header> -->
  <!-- 使用vuex不需要ajax获取了 -->
  <home-header></home-header>
  <home-swiper :swiperList="swiperList"></home-swiper>
  <home-icons :iconList="iconList"></home-icons>
  <home-recommend :recommendList="recommendList"></home-recommend>
  <home-weekend :weekendList="weekendList"></home-weekend>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      // city: '城市',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .my-info
    background-color:#CCC
</style>
