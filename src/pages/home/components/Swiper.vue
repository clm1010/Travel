<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '01',
        imgUrl: require('@/assets/img/1.jpg')
      }, {
        id: '02',
        imgUrl: require('@/assets/img/2.jpg')
      }, {
        id: '03',
        imgUrl: require('@/assets/img/1.jpg')
      }, {
        id: '04',
        imgUrl: require('@/assets/img/2.jpg')
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
/* .wrapper >>> .swiper-pagination-bullet-active
  background: red !important */
.wrapper
  overflow:hidden
  width:100%
  height:0
  padding-bottom:40%
  .swiper-img
    width: 100%
    min-height:150px;
</style>
