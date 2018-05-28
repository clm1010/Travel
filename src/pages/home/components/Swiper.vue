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
        loop: true,
        autoplay: 3000
      },
      swiperList: [{
        id: '01',
        imgUrl: require('@/assets/img/banner-01.jpg')
      }, {
        id: '02',
        imgUrl: require('@/assets/img/banner-02.jpg')
      }, {
        id: '03',
        imgUrl: require('@/assets/img/banner-03.jpg')
      }, {
        id: '04',
        imgUrl: require('@/assets/img/banner-04.jpg')
      }, {
        id: '05',
        imgUrl: require('@/assets/img/banner-05.jpg')
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #FFFFFF;
.wrapper
  overflow:hidden;
  width:100%;
  height:0;
  padding-bottom: 26.7%;
  background-color: #EEEEEE;
  .swiper-img
    display: block;
    width: 100%;
    height: 100%;
</style>
