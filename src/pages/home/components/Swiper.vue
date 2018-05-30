<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src=item.imgUrl alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
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
